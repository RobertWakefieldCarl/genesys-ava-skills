#!/usr/bin/env pwsh
# Build ava-compliance-checker-<version>.zip for redistribution.
# Run from repo root or anywhere: .\scripts\package.ps1 [-OutDir <path>]
param(
  [string]$OutDir = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$manifest = Get-Content (Join-Path $Root "MANIFEST.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$version = $manifest.version
$name = $manifest.name
$zipName = "$name-$version.zip"

if (-not $OutDir) {
  $OutDir = Join-Path $Root "dist"
}
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$zipPath = Join-Path $OutDir $zipName
if (Test-Path $zipPath) { Remove-Item -Force $zipPath }

$staging = Join-Path ([System.IO.Path]::GetTempPath()) ("$name-pack-" + [guid]::NewGuid().ToString("n"))
New-Item -ItemType Directory -Force -Path $staging | Out-Null
$destRoot = Join-Path $staging $name
New-Item -ItemType Directory -Force -Path $destRoot | Out-Null

foreach ($rel in $manifest.files) {
  $src = Join-Path $Root ($rel -replace '/', [IO.Path]::DirectorySeparatorChar)
  if (-not (Test-Path $src)) {
    throw "Missing file listed in MANIFEST.json: $rel"
  }
  $target = Join-Path $destRoot $rel
  $parent = Split-Path -Parent $target
  if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Force -Path $parent | Out-Null }
  Copy-Item -Force $src $target
}

Compress-Archive -Path $destRoot -DestinationPath $zipPath -Force
Remove-Item -Recurse -Force $staging

$hash = (Get-FileHash -Path $zipPath -Algorithm SHA256).Hash.ToLowerInvariant()
Write-Host "Created $zipPath"
Write-Host "SHA256 $hash"
Write-Host "Version $version"
