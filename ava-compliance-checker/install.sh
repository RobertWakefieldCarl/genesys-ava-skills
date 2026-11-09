#!/usr/bin/env bash
# Install ava-compliance-checker into one or more IDE base directories.
# Run from inside the extracted folder: ./install.sh [--all] [--dry-run]
set -euo pipefail

SKILL_NAME="ava-compliance-checker"
SOURCE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "$SOURCE/SKILL.md" ]; then
  echo "error: SKILL.md not found - run install.sh from inside the extracted $SKILL_NAME folder." >&2
  exit 1
fi

ALL=0
DRY_RUN=0
BASES=()

while [ $# -gt 0 ]; do
  case "$1" in
    --all) ALL=1 ;;
    --dry-run) DRY_RUN=1 ;;
    --base) shift; BASES+=("$1") ;;
    -h|--help)
      echo "usage: ./install.sh [--all] [--dry-run] [--base <dir> ...]"
      exit 0
      ;;
    *) echo "error: unknown option $1" >&2; exit 1 ;;
  esac
  shift
done

if [ ${#BASES[@]} -eq 0 ]; then
  if [ "$ALL" -eq 1 ]; then
    for candidate in "$HOME/.cursor" "$HOME/.kiro" "$HOME/.claude" "$HOME/.agents"; do
      [ -d "$candidate" ] && BASES+=("$candidate")
    done
    if [ ${#BASES[@]} -eq 0 ]; then
      echo "error: no IDE base directories found under $HOME." >&2
      exit 1
    fi
  else
    BASES=("$HOME/.cursor")
  fi
fi

for base in "${BASES[@]}"; do
  dest="$base/skills/$SKILL_NAME"

  if [ -d "$dest" ] && [ "$(cd "$dest" && pwd)" = "$SOURCE" ]; then
    echo "skip      $dest (this is the source)"
    continue
  fi

  if [ -d "$dest" ]; then verb="update"; else verb="install"; fi

  if [ "$DRY_RUN" -eq 1 ]; then
    echo "would $verb  $dest"
    continue
  fi

  mkdir -p "$base/skills"
  rm -rf "$dest"
  cp -R "$SOURCE" "$dest"
  rm -rf "$dest/dist" 2>/dev/null || true
  find "$dest" \( -name '.DS_Store' -o -name 'Thumbs.db' -o -name '__MACOSX' \) -exec rm -rf {} + 2>/dev/null || true

  echo "$verb   $dest"
done

echo
echo "Done. Fresh agent session, then reference $SKILL_NAME in the prompt or load its SKILL.md."
