# Shooting Range

## How to Run

1. Download [P5.js](https://p5js.org/download/) if you don't have it already
    - You may choose to download either the complete library or only the `p5.js` file
1. Clone this repository
    - `git clone https://github.com/mdgriest/shooting-range-0.git`
1. Either:
    - Add the `p5.js` file to a directory called *libraries* at the same level as the root directory of the project you just cloned (so they are peers) **or**
    - Add `p5.js` to the directory you just cloned and remove `../libraries.` from the `src` part of line 7 in `index.html` so it just says `p5.js`.
        - `<script src="../libraries/p5.js" type="text/javascript"></script>`
1. Open `index.html` in your browser of choice (I prefer Chrome)
1. When you finish a level (that is, once you've hit all targets on the screen), press `SPACE` to move on to the next (slightly more difficult) level