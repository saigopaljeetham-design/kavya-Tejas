"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { weddingConfig } from "@/config/wedding";
import { content, type Language } from "@/config/content";

interface InvitationState {
  /** False until the guest opens the envelope; the page is locked until then. */
  opened: boolean;
  open: () => void;
  language: Language;
  setLanguage: (next: Language) => void;
  t: (typeof content)[Language];
  musicOn: boolean;
  toggleMusic: () => void;
  musicAvailable: boolean;
}

const InvitationContext = createContext<InvitationState | null>(null);

const LANG_KEY = "wedding:lang";
const MUTE_KEY = "wedding:muted";

const languageStore = {
  listeners: new Set<() => void>(),
  cached: null as Language | null,

  read(): Language {
    if (this.cached) return this.cached;
    let value: Language = "en";
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "kn" || saved === "te") value = saved;
    } catch {
      /* private mode - keep the default */
    }
    this.cached = value;
    return value;
  },

  write(next: Language) {
    this.cached = next;
    try {
      window.localStorage.setItem(LANG_KEY, next);
    } catch {
      /* ignore */
    }
    this.listeners.forEach((listener) => listener());
  },

  subscribe(listener: () => void) {
    languageStore.listeners.add(listener);
    return () => languageStore.listeners.delete(listener);
  },
};

const getLanguageSnapshot = () => languageStore.read();
const getServerLanguageSnapshot = (): Language => "en";

function isMuted(): boolean {
  try {
    return window.sessionStorage.getItem(MUTE_KEY) === "true";
  } catch {
    return false;
  }
}

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const language = useSyncExternalStore(
    languageStore.subscribe,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.dataset.sealed = opened ? "false" : "true";
  }, [opened]);

  const setLanguage = useCallback((next: Language) => {
    languageStore.write(next);
  }, []);

  /* Create the invitation music player before the envelope is opened. */
  useEffect(() => {
    if (!weddingConfig.music.enabled) return;

    const audio = new Audio(weddingConfig.music.source);
    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = "auto";

    const onReady = () => setMusicAvailable(true);
    const onPlay = () => {
      setMusicOn(true);
      setMusicAvailable(true);
    };
    const onPause = () => setMusicOn(false);
    const onEnded = () => {
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    };

    audio.addEventListener("canplaythrough", onReady);
    audio.addEventListener("loadeddata", onReady);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener("canplaythrough", onReady);
      audio.removeEventListener("loadeddata", onReady);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playIfWanted = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.preload = "auto";
    void audio.play().then(() => {
      setMusicOn(true);
      setMusicAvailable(true);
    }).catch(() => {
      setMusicOn(false);
    });
  }, []);

  /* The seal/envelope click is a real user gesture, so start the music here. */
  const open = useCallback(() => {
    setOpened(true);

    // Opening the invitation always starts the wedding music.
    // A later press of the music control can mute it normally.
    try {
      window.sessionStorage.setItem(MUTE_KEY, "false");
    } catch {
      /* ignore */
    }
    playIfWanted();
  }, [playIfWanted]);

  useEffect(() => {
    if (!weddingConfig.music.enabled || !opened) return;

    const resume = () => {
      const audio = audioRef.current;
      if (!audio || !audio.paused || document.hidden || isMuted()) return;
      void audio.play().catch(() => {});
    };

    document.addEventListener("visibilitychange", resume);
    window.addEventListener("focus", resume);
    window.addEventListener("pageshow", resume);
    window.addEventListener("pointerdown", resume);

    return () => {
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("focus", resume);
      window.removeEventListener("pageshow", resume);
      window.removeEventListener("pointerdown", resume);
    };
  }, [opened]);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      try {
        window.sessionStorage.setItem(MUTE_KEY, "true");
      } catch {
        /* ignore */
      }
    } else {
      try {
        window.sessionStorage.setItem(MUTE_KEY, "false");
      } catch {
        /* ignore */
      }
      playIfWanted();
    }
  }, [musicOn, playIfWanted]);

  const value = useMemo<InvitationState>(
    () => ({
      opened,
      open,
      language,
      setLanguage,
      t: content[language],
      musicOn,
      toggleMusic,
      musicAvailable: musicAvailable || musicOn,
    }),
    [opened, open, language, setLanguage, musicOn, toggleMusic, musicAvailable],
  );

  return <InvitationContext.Provider value={value}>{children}</InvitationContext.Provider>;
}

export function useInvitation(): InvitationState {
  const ctx = useContext(InvitationContext);
  if (!ctx) throw new Error("useInvitation must be used inside InvitationProvider");
  return ctx;
}
