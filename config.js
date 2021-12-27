"use strict";

/*
This style requires a vector tile server to run, and is designed to work with the MapTiler service

Visit MapTiler Cloud and create an account/log in:
https://cloud.maptiler.com/maps/

Go to Account->Keys and create a key to paste here:
*/
const MAPTILER_KEY = "53iZvB2drcamS0Ge0xiD";

const OPENMAPTILES_URL = `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`;

export default {
  MAPTILER_KEY,
  OPENMAPTILES_URL,
};
