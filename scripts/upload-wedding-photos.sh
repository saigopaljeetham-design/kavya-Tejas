#!/usr/bin/env bash
set -euo pipefail
REPO="sandy537/Project-2"
BRANCH="agent/add-kavya-tejas-photos"
DIR="${1:-.}"
declare -A FILES=(
  ["DSC01669.jpg"]="DSC01669.JPG"
  ["DSC01686.jpg"]="DSC01686.JPG"
  ["DSC01291.jpg"]="DSC01291.JPG"
  ["DSC01273-1.jpg"]="DSC01273 (1).JPG"
  ["DSC01235.jpg"]="DSC01235.JPG"
  ["DSC01359.jpg"]="DSC01359 copy.jpg"
  ["DSC02002.jpg"]="DSC02002 copy.jpg"
  ["DSC02017.jpg"]="DSC02017 copy1.jpg"
  ["DSC01967.jpg"]="DSC01967 copy.jpg"
  ["DSC01957.jpg"]="DSC01957 copy.jpg"
)
command -v gh >/dev/null || { echo "GitHub CLI (gh) is required."; exit 1; }
gh auth status >/dev/null || { echo "Run: gh auth login"; exit 1; }
for target in "${!FILES[@]}"; do
  file="$DIR/${FILES[$target]}"
  [ -f "$file" ] || { echo "Missing: $file"; exit 1; }
  content="$(base64 -w 0 "$file")"
  gh api -X PUT "/repos/$REPO/contents/public/images/wedding/$target" -f message="Add wedding photo $target" -f branch="$BRANCH" -f content="$content"
done
echo "All 10 wedding photos uploaded to $BRANCH."
