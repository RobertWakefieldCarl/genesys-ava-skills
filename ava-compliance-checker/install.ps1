#!/usr/bin/env pwsh
# Install ava-compliance-checker into one or more IDE base directories.
# Run from inside the extracted folder: .\install.ps1 [-All] [-DryRun]
param(
  [string[]]$Base,
  [switch]$All,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$SkillName = "ava-compliance-checker"
$Source = $PSScriptRoot
if (-not (Test-Path (Join-Path $Source "SKILL.md"))) {
  throw "SKILL.md not found next to this script - run install.ps1 from inside the extracted $SkillName folder."
}

$home_ = [Environment]::GetFolderPath("UserProfile")
$knownBases = [ordered]@{
  "Cursor"      = Join-Path $home_ ".cursor"
  "Kiro"        = Join-Path $home_ ".kiro"
  "Claude Code" = Join-Path $home_ ".claude"
  "Codex"       = Join-Path $home_ ".agents"
}

if ($Base) {
  $targets = @($Base)
}
elseif ($All) {
  $targets = @($knownBases.Values | Where-Object { Test-Path $_ })
  if ($targets.Count -eq 0) { throw "No IDE base directories found under $home_." }
}
else {
  $targets = @($knownBases["Cursor"])
}

$sourceFull = (Resolve-Path $Source).Path

foreach ($base in $targets) {
  if (-not (Test-Path $base)) {
    if ($DryRun) { Write-Host "would create $base" }
    else { New-Item -ItemType Directory -Force -Path $base | Out-Null }
  }

  $skillsDir = Join-Path $base "skills"
  $dest = Join-Path $skillsDir $SkillName

  if ((Test-Path $dest) -and ((Resolve-Path $dest).Path -eq $sourceFull)) {
    Write-Host "skip      $dest (this is the source)"
    continue
  }

  $verb = if (Test-Path $dest) { "update" } else { "install" }

  if ($DryRun) {
    Write-Host "would $verb  $dest"
    continue
  }

  New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
  if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
  Copy-Item -Recurse -Force $sourceFull $dest

  foreach ($cruft in @(".DS_Store", "Thumbs.db", "__MACOSX", "dist")) {
    Get-ChildItem -Path $dest -Recurse -Force -ErrorAction SilentlyContinue |
      Where-Object { $_.Name -eq $cruft -or $_.FullName -match '\\dist\\' } |
      ForEach-Object { Remove-Item -Recurse -Force $_.FullName -ErrorAction SilentlyContinue }
  }

  Write-Host "$verb`t  $dest"
}

Write-Host ""
Write-Host "Done. Fresh agent session, then reference $SkillName in the prompt or load its SKILL.md."
