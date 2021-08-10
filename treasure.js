"use strict";

//🍓 treasure instructions 🍓
const input = [
    "FBFFBFFRLL",
    "BFFFFBBRLR",
    "FFFBBBBRLR",
    "FBFFFBFLRL",
    "FFBFBFFRRL",
    "FFBBBBFRRR",
    "FBFFBFBLRR",
    "FFBBFBFRRL",
    "FFFFBBFRRL",
    "BFBBBBBLLL",
    "FFBFBFBLLL",
    "FFBFFFBLLL",
    "FBBBFBFRLL",
    "BBFFFBFRRR",
    "FFFBFBBLLR",
    "FBFBFBFRRR",
    "BBFFBFBRLL",
    "FBFBBBBLRL",
    "FBFFFFFLLL",
    "BFFFFFFRLL",
    "BFFFBFBLRL",
    "BFBBBFBRRL",
    "BFFFBFFRRL",
    "FBFFFFFRRR",
    "FFBBBBBLLR",
    "BFBBFFBLRL",
    "FBBFBBBRLR",
    "BFBFBFFRLL",
    "BFBFBFBRLL",
    "BFFBFBFLLL",
    "FFBBFFBLRL",
    "FBBFFBFLRR",
    "FBBBFBBRRR",
    "BFBFFBFRLR",
    "BFBBBFBLLL",
    "FFBFBBBLRR",
    "BFBFFBFLLL",
    "FBFBFBBLLL",
    "BFBBBFBLRL",
    "FBFBFBFLRL",
    "FFBFFBFRRL",
    "FBBFFBFLLL",
    "BFBBBBBLRL",
    "FBBBBBFRLR",
    "BFFFBBFRLL",
    "FBBBBFFLLR",
    "FBBBBBFRLL",
    "BFBBBFFRLR",
    "BFBBBFBRLL",
    "BFFFBFFLLL",
    "FFFBFBFLRL",
    "BFFBBFFLRL",
    "BBFFFBFRLL",
    "BFBBFFBRLR",
    "BFBFBFBRRL",
    "BBFFFBFRRL",
    "FBBFBBBLRR",
    "FFBFBBBLLL",
    "BFFFBFBRLR",
    "FFBBFBBLLL",
    "FBFBBFBLLL",
    "BFBBFBFLLR",
    "FFBFBBBRRL",
    "FFBFFFFLRL",
    "FFFBBFFLRR",
    "FBBBBBFRRR",
    "FFFFBBBRLL",
    "BFBFBBBRRR",
    "BBFFBFBRRL",
    "FBFBBFFRLR",
    "FBBFFBFRRR",
    "BBFFBFBRRR",
    "FBFBBFBLRR",
    "FBBFFBBLRR",
    "FBBBBFFRLL",
    "BFBFFFBRLR",
    "FBFBBFBRRL",
    "FFBFBBFRRR",
    "FBFBFFFRLL",
    "BFBBFFBLLR",
    "FBFFFFBRLR",
    "BFBBBFFRLL",
    "FFBBFFBRLR",
    "FFFBBFBRLL",
    "FBBBBBBLRR",
    "FBFFBBBLRR",
    "BFFFFBFLRL",
    "BBFFFFFLRR",
    "BFFBFFBLLR",
    "FFBBBFFRLL",
    "BFBFBFBRLR",
    "FBBFBFBLRR",
    "FBFBBBFRLR",
    "FBFFBBBRRR",
    "FBBFFBFRLL",
    "FBBBFFFRLR",
    "BFBBBBFLLR",
    "BFFFBFFLLR",
    "FFBFFFBRRR",
    "FBFFFBFLLR",
    "FFFFBBBLLR",
    "BFBFFFBRLL",
    "BFFBBFBLRL",
    "BFFBFBFLLR",
    "FFBFFBFRLR",
    "BFBFFFBRRL",
    "FFBBFBFLLL",
    "BFBBBBBRLR",
    "BFBFBFBLRR",
    "FBFFBFBLLR",
    "FBFBFBBRRL",
    "BFBFBBBLLL",
    "FFBBFBBLRL",
    "FBFFFBFRRL",
    "BFBBFFFLRR",
    "BFBFBBFRRR",
    "FBFFFFBLRL",
    "BBFFBBFRRR",
    "FFBFFBBRLR",
    "FBBFBFBLRL",
    "BFBFFFBRRR",
    "FFFBBBFLRL",
    "BFFBFFBRLL",
    "FBFBFFBLRR",
    "FFBFBBFLLL",
    "FFBBBFFLRL",
    "FFBBFFFRLR",
    "BBFFBFBLRL",
    "FFFFBBFRLR",
    "FFFBFFBLRR",
    "BFFBBBFLLR",
    "BFFFBBBRRL",
    "FBBFBFBRLL",
    "BFFBFFFRRR",
    "BBFFFFFLRL",
    "BBFFFBBRLL",
    "BFFFBBBRRR",
    "BFFFBBBLRL",
    "BBFFBFFRRR",
    "BFFBFFBLRL",
    "FBBBBFBRLR",
    "FFFBFBFRRL",
    "BFFBBBBRRL",
    "FBBBBBFLRR",
    "FBFBBBBLLR",
    "FBBBBFBLRR",
    "FFFBFFBRLL",
    "FFBBBBFLLR",
    "FFBBBBBRRL",
    "FBBFFFFLLL",
    "FBFFBBBRLL",
    "FBFBFFBLLR",
    "FBBBBBFRRL",
    "BFFFBFBLLL",
    "FFFBFFFLRL",
    "FFFFBBFRLL",
    "BFBBFFFRLR",
    "BFFFBBBRLR",
    "FFBBBFBLLR",
    "BFFFBFBRRR",
    "BFFBFBBLRL",
    "FFBFBFBLRR",
    "FBBBBFBRRR",
    "FFBFBFFLLR",
    "BBFFFFFLLR",
    "FBBBFBFRRR",
    "BBFFFFBRRL",
    "FBFBFBBLRL",
    "BFBBBFFLLR",
    "BBFFBBFLRL",
    "BFBFFBBRLR",
    "FBFBBBFRRL",
    "FBBBFFBRLL",
    "BBFFFFBLLR",
    "FFBBFBBLRR",
    "FBBBBBBRLR",
    "FFFFBBBRRL",
    "FBFBBBBRLR",
    "BBFFBFFRRL",
    "FBBBFFBLRL",
    "FFBBBFBLRR",
    "BFBFBBBRLL",
    "FBFFFBBLRL",
    "FBFBBBBRLL",
    "BBFFFBBLLL",
    "BFBBFFBLLL",
    "BFFBBBBRRR",
    "FBFBFFBLLL",
    "FBFBFBFRRL",
    "FBBFFFBLLL",
    "BBFFFBFRLR",
    "FBBBBFFLRR",
    "FBFFFBBRLL",
    "FFBBFBFRRR",
    "FBFFFFFLRR",
    "BFBFFBBLRR",
    "FFBFBFFRRR",
    "BFBFFBBRLL",
    "FBBFFFFRRL",
    "BFFBBFBRLL",
    "BFFFFFBLLR",
    "FBFBBFBLLR",
    "BFFBBFBRLR",
    "BFFBFBFRRR",
    "FFBFBBFRLL",
    "FFFBBBBLRR",
    "BFFFBFBLLR",
    "FBBBBFBLRL",
    "FBFBBFFLRL",
    "FFFBFFFRLL",
    "BFFFFBBRRL",
    "FBBFFFBRRR",
    "FBBFBFFLLR",
    "BFBBBBBRRR",
    "BFFBFBFRLL",
    "FFBFBBFRRL",
    "BFBFBFBLLR",
    "FFBFBBFLLR",
    "FFBFFFFLRR",
    "FBBBFBBRRL",
    "BFFBFBFRLR",
    "BFFBFFBRRL",
    "BFBBBFBRLR",
    "BBFFFFBLRL",
    "FBBBFFBRRL",
    "FBFFFBBRRL",
    "FBBBBBBLLL",
    "FFFBFFBLLL",
    "BFBBFBFRLL",
    "FBFBFFBRLR",
    "FFFFBBBRRR",
    "BBFFFBBRLR",
    "BFBBBBFRLR",
    "FBFFBBFLRR",
    "BFFFBFFRLR",
    "FFFBBBBLLR",
    "FBFFFFBLRR",
    "FBFBFBBRLL",
    "FBFFBBBRLR",
    "BFFFFFFLRR",
    "FBFFFFFRLL",
    "FFBFBFFRLL",
    "FFFBBFFRLR",
    "FBBFBFFRRL",
    "FBBBBBBRRR",
    "BFBFBBBLRL",
    "BBFFFFBRRR",
    "FFBFFBBLRL",
    "FBBBBBBLLR",
    "FFBBFFFLRL",
    "FBBBFBBLRR",
    "FFBBBBBRLR",
    "BFBFFFFLLR",
    "BFFBBBBRLL",
    "BFBFBFFLRL",
    "FBBFFFBLRL",
    "BFBFBBBRRL",
    "BFBFBFBLRL",
    "BFBBFBFLRR",
    "BFFFFBFRLR",
    "BFFFBFBRLL",
    "FBFBFBFLLL",
    "FBFFBFFLRL",
    "BFFFFFFRRL",
    "FBBFBFFRLR",
    "FFBBBFFLLR",
    "FBBBBFFLRL",
    "FBBBFBBRLR",
    "BFBBBFFLRL",
    "FBFFBBBLRL",
    "BFFFFBFRRL",
    "BFFFBFFLRR",
    "FFBFBBFLRL",
    "BFBFFFBLRL",
    "BFFFFFBLLL",
    "FBFFBFBLLL",
    "FBFBBBBRRL",
    "FBBFFBBRLR",
    "BFFFBBFRRL",
    "BFBBFBBRLR",
    "FFFBFBBLRR",
    "FFFBFBFRLR",
    "FBFBFBFRLR",
    "BFBFBBBRLR",
    "BFFFFBBLLL",
    "BFFBBFBRRR",
    "BFFBBBFLLL",
    "FFBBBFFRRL",
    "BFBBBFBLLR",
    "FBBFFBBLLR",
    "FBBFBBFLRL",
    "BFFFFFBRRR",
    "FBBBFBBRLL",
    "FBFBFFBRRR",
    "BFFBBBFRRR",
    "FBBBBBBLRL",
    "FFBBBFFLRR",
    "BFFBBBFRLL",
    "BBFFBBFRLL",
    "FBBFBBFRLR",
    "BFBFBFFRRR",
    "BFBFBBFLRL",
    "BFFFFBFRLL",
    "FFBBFBFLLR",
    "BFFBFBBLRR",
    "FBFFBBBRRL",
    "FBBFBBFRLL",
    "FBFFFBBLLR",
    "FFFBBBBRRR",
    "FFFFBBBLRL",
    "FFBBFFFRRL",
    "BFFBBFFRRL",
    "BFFFBBFLRL",
    "BFFFFBBLRR",
    "BBFFBBBLRR",
    "BFBFFFFLRR",
    "FBFBBBBLLL",
    "BBFFFBBLRR",
    "FFFBFBFLRR",
    "FBBFFFFLRL",
    "FFBBBBFRLL",
    "FBFFBFBLRL",
    "BFBBFBBLLL",
    "FBBFBBFLLL",
    "FFBFFBBRLL",
    "BFBFFFFRLR",
    "FBFFBBFRRR",
    "FFFBBFFRRR",
    "FFFBFFBRLR",
    "FBBBBBFLLL",
    "FBBBFFFLRL",
    "FFBBFFFLRR",
    "FFFBBBBRRL",
    "BFBFBBFRLL",
    "BFBFFBBRRL",
    "FBBFBBFRRL",
    "BFBFBBFLLR",
    "BBFFBBBRRR",
    "BFFFBBFRLR",
    "FFFBBBFRLR",
    "BFFBFFFRLL",
    "BFBFFFFRRL",
    "FFBBFFFLLL",
    "FBFBBBBLRR",
    "FBFBFFFLRR",
    "BBFFBFFLRR",
    "FBBBFBBLRL",
    "BFBFBFBLLL",
    "FBFBFFFLLR",
    "BFFBBFBLRR",
    "FBBFFFBRRL",
    "BFFBBFFRRR",
    "FBBFBBBRRL",
    "BFFFFBBLLR",
    "FFBBBBFLLL",
    "BFFBFFBRRR",
    "BFFFFBFRRR",
    "FFFBBBFRRR",
    "FBFBFFFRLR",
    "FBBBFBFLLR",
    "FFBBFFBRLL",
    "FBFBFFFLLL",
    "BFFBFBFRRL",
    "BFBFFBFRRL",
    "BFBBBBFLLL",
    "FBBBFBFRRL",
    "FFBFBFFLLL",
    "BFBBFFFRRL",
    "FFBBFFBLLR",
    "BFFBBBBRLR",
    "FFBBBBBLRR",
    "BFFBFFFRRL",
    "BFFBFBBRLL",
    "FBBBFBFRLR",
    "FBBFFFFLRR",
    "BFFFBBFLLR",
    "FFFBBFBRRL",
    "FFBBFFBLRR",
    "FBBFFFBRLR",
    "BFBBBBBRLL",
    "BBFFFFFRRL",
    "FFBFFBBRRL",
    "BFBFFBFLLR",
    "FBFBBBFLLL",
    "FBFFFFFRRL",
    "BFFFBFBLRR",
    "FBFFFFBLLR",
    "FBBFBFBRRR",
    "FBBBFFFLLR",
    "BBFFBFBLRR",
    "BBFFFBFLLL",
    "FBFFFBFRLR",
    "BFFFBFFLRL",
    "BBFFBFFLRL",
    "BFFFFFFLLR",
    "BBFFBBBLLL",
    "FFBFBBBLLR",
    "FBBFBBBLRL",
    "BFBBFBBLRR",
    "FFBFBFBLLR",
    "FFBFBFBRRL",
    "BFBBFBBRRL",
    "BFFBFFFLLR",
    "FFBBFFBRRL",
    "BBFFBBBRRL",
    "FFFBBFBRLR",
    "BFBBFBFRRR",
    "BFFFFFFRRR",
    "FBBBFFBLLL",
    "BFBFFFFLLL",
    "BBFFBFBLLR",
    "BFBFBBFRLR",
    "FFBFBBBRRR",
    "BFFFBBFLLL",
    "FBFFBBFRLL",
    "FFBBFBFRLL",
    "BFBFBBBLLR",
    "FBBFBFBLLL",
    "BBFFFFBRLL",
    "BBFFBFBLLL",
    "BFFBFFBLRR",
    "BFFBBFBLLL",
    "FFBFFFBLRR",
    "FBBFFBFRRL",
    "FBBBBFBLLL",
    "FFBFFBBLLR",
    "BFFBBBFLRR",
    "FBFBFFBRLL",
    "FFBFFFBRLL",
    "FFBFFBFLLL",
    "FBFBBFBLRL",
    "FBBFBFFRRR",
    "BFBFBFFLLR",
    "FBBFFFBLLR",
    "BFBBBBFRRR",
    "FBBFBBFRRR",
    "BBFFBFFRLR",
    "FBFBBBFRLL",
    "FBBFBBBLLR",
    "BFFFFFFLRL",
    "BFBFFBBRRR",
    "BFFFBFFRLL",
    "BFBBFBFLRL",
    "FFBFFFFRRR",
    "BFFBBFFRLR",
    "FBBBBBFLLR",
    "FBFBFFBLRL",
    "FFFBBFBLLR",
    "FBBFBFBLLR",
    "FFFBFFBRRR",
    "FBFFFFFRLR",
    "FBFBBFBRLR",
    "FBBBFBFLRR",
    "FBFBBBFLRL",
    "BFFBFFFLRL",
    "FFBBBFFRRR",
    "FFBBBBBLLL",
    "FBFFBBFLLR",
    "FFBFBFFLRR",
    "FFFBBBFLRR",
    "BFBFBBFLLL",
    "BBFFBFFLLR",
    "FFBBFBBRLL",
    "FBBFFBBLLL",
    "FBFFBFBRLL",
    "BFBFBFFLRR",
    "FBBBFFBRLR",
    "FFBFFBFRLL",
    "FFFFBBBLLL",
    "FFBFFBBRRR",
    "FBBBBFBRLL",
    "BFFFFBBRRR",
    "FFBBFFFRLL",
    "FFBFBFBRLL",
    "BBFFFFBLLL",
    "FFBBBFBRRL",
    "BFFFFBBLRL",
    "FBBBFBBLLR",
    "FBBBFBBLLL",
    "FFBFBFBLRL",
    "FBBBBFFRRR",
    "FBBFFFFRLR",
    "FFBFFFBRLR",
    "BFBFBFBRRR",
    "FFFBFBBRLL",
    "FBBBFFBRRR",
    "FBBFBFFRLL",
    "BFFBFBFLRR",
    "BFBBBFFRRL",
    "BFFBBFBLLR",
    "FFBBBFBRLL",
    "FBFBFBBLRR",
    "BFBBFFFLRL",
    "BFBFBBFLRR",
    "BFBBBFFRRR",
    "FBBBFFFRRL",
    "FBFBFBFLLR",
    "FBBFFFFLLR",
    "FFBFBBFRLR",
    "FFFBFBBLRL",
    "BBFFFBBLLR",
    "BFFBBBFRLR",
    "FFFFBBBRLR",
    "BBFFBBFRLR",
    "FBFFFFBRLL",
    "FBFBFFFRRR",
    "FBFFFBBLLL",
    "BFBBBBFRLL",
    "FBFBFFBRRL",
    "FFFBFFFRLR",
    "BFBBFBFRRL",
    "FBFFBFFLRR",
    "FBFFFBBLRR",
    "FFBFBBBRLR",
    "FBBFBFFLRR",
    "FBFFFBBRRR",
    "FFBFBBBRLL",
    "FFBBBBBRRR",
    "BFFBBFFLLL",
    "BFBBBBBRRL",
    "BBFFBBBRLL",
    "FBFFFFFLRL",
    "BFFBBFFLRR",
    "FBFFBBFLRL",
    "BFBFFBFRRR",
    "FBFBBFBRLL",
    "BFFFBFBRRL",
    "FBBFFBFLLR",
    "BFFFFFFLLL",
    "FBFBFBFRLL",
    "FBBBBFFRRL",
    "BFBFFBBLLR",
    "FBBFBFBRRL",
    "FFFBFFFLLR",
    "FFBBBBBLRL",
    "FFBFFBBLRR",
    "FFFBFBFRRR",
    "BFBBFBBRLL",
    "BFBBBFBLRR",
    "FFBBBBFLRR",
    "FBBBFFBLLR",
    "BBFFBBBLLR",
    "FBFBBFFRRL",
    "FBBBBBFLRL",
    "FFFBBFFRRL",
    "BFFBBBBLRR",
    "FFFFBBBLRR",
    "FFFFBBFLRR",
    "FBFFFBFLLL",
    "FBFBFBBLLR",
    "BFFBBBBLLL",
    "FFBFFFFRLR",
    "BFBBFFBLRR",
    "FFBBFBFLRL",
    "BFBFBFFLLL",
    "BFFBFBBLLR",
    "BFBBFBBLRL",
    "FFBBBBFLRL",
    "FBBBFFFLLL",
    "FFFBFFBRRL",
    "BFFFFBBRLL",
    "BFFFBBBRLL",
    "BFFBFFFLRR",
    "FFBFBFBRRR",
    "BBFFBBFLLR",
    "FFBBFBBLLR",
    "FFBFFBFRRR",
    "FFBBBFFRLR",
    "BFFBBBBLLR",
    "FFFBFFFLRR",
    "FBFFFFFLLR",
    "FBFFBBBLLL",
    "BBFFBBFLLL",
    "FFBBFBFLRR",
    "BFFBFBFLRL",
    "FBFBBBFRRR",
    "BFBBFBBLLR",
    "FBFFFFBRRL",
    "FFFBBFBLRR",
    "BBFFFFBLRR",
    "BFBBBBFRRL",
    "FFBBBFBLLL",
    "BFBBFBFRLR",
    "BFBBFFBRRL",
    "BFBFBFFRRL",
    "FBBFFBBLRL",
    "FFFBFFBLRL",
    "BFFBBFFRLL",
    "FBBBFFFRLL",
    "FBBFBBFLLR",
    "FFBFFFFLLR",
    "FBBBFBFLRL",
    "BFFFBBBLLR",
    "FBFBBBBRRR",
    "FBBFBFBRLR",
    "FFFBFBFLLR",
    "FFFFBBFRRR",
    "FFFBBFFLRL",
    "BFBFFBFRLL",
    "FFFBFFBLLR",
    "FBBFFFBRLL",
    "FFBBBFBRRR",
    "FFBBFBBRLR",
    "BBFFFFFRRR",
    "FFBFFFFRLL",
    "FBBFFBBRRL",
    "BBFFFBFLRR",
    "FBBFFFFRRR",
    "FFBFFFBRRL",
    "BFBBFBFLLL",
    "BFFFFBFLRR",
    "BBFFFFFLLL",
    "FFBBFBBRRL",
    "FFBFBFFLRL",
    "FBFFBBFRRL",
    "BBFFBFBRLR",
    "BBFFBBFLRR",
    "FBFFBFBRRR",
    "FBBFBBFLRR",
    "FBFFFBFRLL",
    "BFBFFFFLRL",
    "FFFBBFBRRR",
    "BFBBBBBLLR",
    "FBBFFBBRRR",
    "FFBBBFFLLL",
    "FBBBBFBLLR",
    "BBFFFFFRLL",
    "FFBBBBFRLR",
    "FBFBFBBRRR",
    "FBFFBFFLLL",
    "FBFFBBBLLR",
    "FBBBBFBRRL",
    "BFBFBFFRLR",
    "FBBFBBBRLL",
    "BFBBFFFRLL",
    "FBBBFBFLLL",
    "FFBFFFFRRL",
    "FBFBBFFRRR",
    "FBFFFFBLLL",
    "FBBBBBBRLL",
    "BFFBFBBRRR",
    "BBFFBBFRRL",
    "FBBFBFFLRL",
    "FBFFFFBRRR",
    "FBBFFFFRLL",
    "FFFBFFFRRR",
    "FBFFBBFLLL",
    "BFFFFBFLLL",
    "BFFFFBFLLR",
    "FFBFFBFLLR",
    "FFBFFBFLRR",
    "BFFBBBBLRL",
    "FFBBFFBLLL",
    "FBBFBBBLLL",
    "FBFBBBFLLR",
    "BFFBBBFLRL",
    "BFBBFFBRLL",
    "FBFFBFFRRR",
    "FFBFFFBLRL",
    "FFFBBBFRRL",
    "FFBFBBFLRR",
    "FFFBBBBLRL",
    "FFFBBFFLLL",
    "FFFBFBBRRR",
    "FBBFBFFLLL",
    "BFFFBBBLLL",
    "BFFBFFFRLR",
    "FFFBBBBLLL",
    "BFFFFFBRRL",
    "FFBBFFFLLR",
    "BFBBFFFRRR",
    "BFBFFBFLRR",
    "FFFBBBFLLR",
    "FBFBBBFLRR",
    "BBFFBBBRLR",
    "FBFBBFFLRR",
    "FFBBBFBLRL",
    "FFFBBBFRLL",
    "BFFBFFBRLR",
    "BBFFFBBRRR",
    "BFBBBBFLRL",
    "BFBBBFBRRR",
    "FBBBBFFLLL",
    "FFFBFBBLLL",
    "BBFFFFFRLR",
    "BBFFBFFLLL",
    "FFBFBBBLRL",
    "FFBBFBFRLR",
    "BFBBBBBLRR",
    "FFBFFFBLLR",
    "FFBFFBFLRL",
    "BFFBFBBRLR",
    "FBFBFFFRRL",
    "FBBBFFFLRR",
    "FFFBBFFLLR",
    "FBBBBFFRLR",
    "FFBBFBBRRR",
    "BFBBFBBRRR",
    "BFBFBBFRRL",
    "BFFBBBFRRL",
    "FFFBFFFLLL",
    "FBBFFBFLRL",
    "FFFBFBBRLR",
    "BFBBFFFLLR",
    "BFBBFFBRRR",
    "FBFFBFBRRL",
    "FFBBBBBRLL",
    "BFFBFFBLLL",
    "BFFFBBFRRR",
    "FBFFFBFRRR",
    "FFBFBFBRLR",
    "FBFBBFFLLR",
    "FBBFBBBRRR",
    "BFBFFFFRRR",
    "FFBFFFFLLL",
    "FBFBBFFRLL",
    "BFBFFBFLRL",
    "BFBBFFFLLL",
    "FBFBBFBRRR",
    "BFBFFFBLLR",
    "BFBFFFBLLL",
    "BBFFFBFLLR",
    "BBFFBFFRLL",
    "FFBBBBFRRL",
    "BBFFFBFLRL",
    "BBFFBBBLRL",
    "BFBFFFBLRR",
    "FFFBFBFRLL",
    "BFBFFBBLLL",
    "BBFFFBBRRL",
    "BFBBBFFLLL",
    "BFFBBFFLLR",
    "FFBFFBBLLL",
    "BFFBBFBRRL",
    "BFFFFFBLRL",
    "BBFFFFBRLR",
    "FBFBBFFLLL",
    "FFBBBFBRLR",
    "FFFBBFBLLL",
    "FBFFFBBRLR",
    "FFBFBFFRLR",
    "BFFFFFBLRR",
    "FFFBBBBRLL",
    "FFBBFFFRRR",
    "BFFFFFBRLR",
    "FBBBFFBLRR",
    "FBFBFBBRLR",
    "FBBFFFBLRR",
    "BFBFFBBLRL",
    "FBFFBFBRLR",
    "FBFBFFFLRL",
    "BFFFFFBRLL",
    "BFBBBBFLRR",
    "BFFBFFFLLL",
    "FBFFBFFRRL",
    "FFFBBFFRLL",
    "BFFFBFFRRR",
    "FBFFBFFLLR",
    "FFFBBBFLLL",
    "FBFFFBFLRR",
    "BFFBFBBLLL",
    "BFFFBBBLRR",
    "FBBBBBBRRL",
    "FBFFBFFRLR",
    "FBBFFBBRLL",
    "FBBBFFFRRR",
    "BFFBFBBRRL",
    "FFBBFFBRRR",
    "BFBBBFFLRR",
    "FFFBFBBRRL",
    "BFBFBBBLRR",
    "FFFBBFBLRL",
    "FBFFBBFRLR",
    "BFFFBBFLRR",
    "BBFFFBBLRL",
    "FBBFFBFRLR",
    "FFFBFBFLLL",
    "FFFBFFFRRL",
    "BBFBFFFLLL",
    "FBFBFBFLRR",
    "BFBFFFFRLL",
  ];



//🍓 the yard 🍓
let yardMinLength = 1027;
let yardMaxLength = 0;


//🍓 answer 🍓
let missing = []
let three = []
let keys = []
let colsNrows = []
let key = '';

let sum = 0;


//🍓 this seperates the letters and makes them do their job 🍓
input.forEach((line) => {
    // line = line.split("")
    // line.forEach()
    //🍃 answer numbers 🍃
    //the front of the yard
    let answerF = 0
    //the back of the yard
    let answerB = 127
    //the right end of the yard
    let answerR = 7
    //the left end of the yard
    let answerL = 0

    for(let letter of line){
        //🍃 if the letter is F answerB is made smaller 🍃
        if(letter === "F"){
            //💧 this minimizes the BACK of the yard since you're moving FORWARD 💧
            answerB = Math.floor((answerB + answerF)/2);
        }
        //🍃 if the letter is B answerF is made smaller 🍃
        else if( letter === "B"){
            //💧 this minimizes the FRONT of the yard since you're moving BACK 💧
            answerF = Math.ceil((answerB + answerF)/2);

            /*the BIGGER number here is the BACK back of the yard 
            let maxBack = yardMaxLength;
            this gives the number
            answerB = (minBack-maxBack)/2;*/
        }
        //🍃 if the letter is L answerR is made smaller 🍃
        else if( letter === "L"){
            //💧 this minimizes the RIGHT side of the yard since you're moving LEFT 💧
            answerR = Math.floor((answerR + answerL)/2);
        }
        //🍃 if the letter is R answerL is made smaller 🍃
        else if( letter === "R"){
            //💧 this minimizes the LEFT side of the yard since you're moving RIGHT 💧
            answerL = Math.ceil((answerR + answerL)/2);
        }
    }
    //🍃 multiplies the row answered by the amount of columns there is in total. then it adds by the column answered 🍃
    key = answerF * 8 + answerL;
    missing.push(key);
    three.push(key);
    keys.push(key);
    colsNrows.push(key);


    //🍓 QUESTION ONE 🍓
    //🍃 if the key is smaller than the back of the yard length(1207), then that's the back of the yard 🍃
    if(key < yardMinLength){
        yardMinLength = key;
    }
    //🍃 if the key is bigger than the front of the yard length(0), then that's the front of the yard 🍃
    if(key > yardMaxLength){
        yardMaxLength = key;
    }
    //console.log(key)
})


//🍓 QUESTION TWO 🍓
//🍃 this makes a new array 🍃
//make an array that goes to the max and compare this array to the OG

/*let num = [];
for(let i = 51; i < yardMaxLength; i++){
    num += [i]
}
console.log(num)

input.filter((inNumbers) => {
    for(let )
    for(let items of answer){
        if(items[i] === ){}
    }
})*/

//teacher's vers.
    //let dugHoles = answerF * 8 + answerL;
let missingSquare = 0;
for(let i = yardMinLength; i <= yardMaxLength; i++){
    if(keys.some(hole => hole == i)){
        continue
    }else{
        missingSquare = i;
        break
    }
    /*let check = dugHoles.some((hole) => {
        return hole == i
    })
    if(check){
        continue;
    }else{
        missingSquare = i;
        break
    }*/
}



//🍓 QUESTION THREE 🍓
//🍃  🍃
/*let answers = []
for(let letts of three){
    if(letts <= 3){
        answers += 'L'
    }else if(letts >= 4){
        answers += 'r'
    }
}
console.log(answers)*/
//col = miss hole % 4
//row = (miss hole - 2) / 4
//compare row and column to max length and max height of yard to the missing hole
    
let col = missingSquare % 8;
let row = (missingSquare - col) / 8 // 

//the front of the yard
let rowMin = 0
//the back of the yard
let rowMax = 127
//the right end of the yard
let colMax = 7
//the left end of the yard
let colMin = 0
let encoded = '';

while(rowMax != rowMin){
    let middle = (rowMax + rowMin) / 2;
    if(row > middle) {
        encoded += "B"
        rowMin = Math.ceil(middle)
    } else { //row < middle
        encoded += "F"
        rowMax = Math.floor(middle)
    }
}

while(colMax != colMin){
    let middle = (colMax + colMin) / 2;
    if(col > middle) {
        encoded += "R"
        colMin = Math.ceil(middle)
    } else { // ol < middle
        encoded += "L"
        colMax = Math.floor(middle)
    }
}



//🍓 QUESTION THREE 🍓
//🍃  🍃
let colu = [];
let rows = [];
/*
//this goes through each number in the array and pushes out the row and columns
for(let i of colsNrows){
    //missingSquare % 8
    //(missingSquare - colu) / 8
    colu += Math.ceil(i % 8);
    rows += Math.ceil((i - colu) / 8);
}
console.log(colu);
console.log(rows)

let combo = [colu, rows];*/


//teacher vers.
let rowsTotal = rows.reduce((total, row) => {
    return total + row
}, 0)
let colsTotal = colu.reduce((total, coll) => total + coll, 0);



//🍓 ANSWER ONE 🍓
console.log('the smallest square Jenkins went digging in is', yardMinLength);
console.log('the biggest square Jenkins went digging in is', yardMaxLength)

//🍓 ANSWER TWO 🍓
console.log(missingSquare) //517

//🍓 ANSWER THREE 🍓
console.log(encoded) //BFFFFFFRLR

//🍓 ANSWER FOUR 🍓
console.log(rowsTotal * colsTotal) //116964000


const content = document.getElementById('content'); 
for(let i = 0; i <= 1027; i++){
    let dug = keys.some((hole) => hole == i)
    content.innerHTML += `<div class='hole ${dug ? 'dug' : 'undug'}'>
        row: ${(i - (i % 8)) / 8} - col: ${i % 8}
    </div>`;
}