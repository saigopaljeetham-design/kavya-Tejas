# Premium Gallery — final installation

1. Replace:
   `src/components/invitation/CinematicGallery.tsx`
   with `CinematicGallery.tsx` from this package.

2. In:
   `src/config/wedding.ts`
   replace the existing `gallery: [...]` block with the contents of
   `gallery-config-snippet.txt`.

3. Confirm these five files exist in:
   `public/images/gallery/`
   - dsc01967-copy.webp
   - dsc01791-copy.webp
   - dsc01924-copy.webp
   - dsc01711-copy.webp
   - dsc01704-copy.webp

4. Run:
   `npm run build`

5. Deploy/redeploy on Vercel.

IMPORTANT HQ NOTE:
The current five uploaded WebP files are optimized/compressed copies. The
gallery framework will preserve their complete frames, but it cannot restore
detail already removed by compression. For true maximum photographic quality,
replace those five WebP files with the original full-resolution JPG/PNG files
while keeping the same filenames (or update the paths accordingly).
