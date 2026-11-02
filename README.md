# 3D Pool Game

A 3D 8-ball pool game that runs in the browser, built with three.js.

Play it at **https://ashwin.top/pool-game/**

## Features

- 9 ft table with six pockets, numbered balls and a full cue
- Ball physics with sliding and rolling friction, cushion rebounds, follow, draw and side spin
- Full 8-ball rules: break, open table, solids or stripes, fouls with ball in hand, 8-ball to win
- Play the computer on Easy, Medium or Hard, or 2 players on one screen
- Aim guide (Full, Short or Off) and five cloth colours
- 45° camera, top view and low view
- Mouse, keyboard and touch controls

## Controls

| Action | Mouse / touch | Keyboard |
| --- | --- | --- |
| Aim | Drag on the table, or click a ball | Left / Right arrows (hold to sweep, Shift for fine) |
| Fine aim | Drag the Fine strip | Shift + Left / Right |
| Power and shoot | Pull the Power bar down and release, or use Shoot | Hold Space and release |
| Spin | Tap the cue ball face (double tap to reset) | W A S D, R to reset |
| Camera | Camera button, scroll or pinch to zoom | C, Up / Down to tilt |
| Ball in hand | Drag the white ball | |
| Menu | Menu button | Esc |
| Sound | Speaker button | M |

## Run locally

Requires Node.js 18 or later.

```bash
npm ci
npm run build
npm run preview
```

Then open http://localhost:4173/pool-game/

## Project structure

```
src/index.html          The game (markup, styles and game code)
src/favicon.svg         Site icon
scripts/build.mjs       Copies src/ to dist/ and vendors three.js
scripts/serve.mjs       Local preview server using the /pool-game/ base path
.github/workflows/      GitHub Pages build and deploy
```

All asset paths are relative, so the built site works under the `/pool-game/` base path. Textures and sounds are generated in code, so there are no image or audio files to load.

## Deployment

Every push to `main` builds the game and deploys `dist/` to GitHub Pages through GitHub Actions. The site is served on the custom domain set on the account's main GitHub Pages site, so no CNAME file is needed here.
