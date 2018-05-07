'use strict';
var murmures = murmures || {};
//debugger;

murmures.skills = {
    "move": {
        "range": 1,
        "activation": 500,
        "asset": "_b1_95_walking-boot",
        "targetaudience": 0,
        "typeeffect": "move",
        "modifier": 0
    },
    "sword": {
        "range": 1,
        "activation": 3000,
        "asset": "_b1_95_broadsword",
        "targetaudience": 2,
        "typeeffect": "hpmodifier",
        "modifier": -4
    },
    "bow": {
        "range": 3,
        "activation": 1000,
        "asset": "_b1_95_crossbow",
        "targetaudience": 2,
        "typeeffect": "hpmodifier",
        "modifier": -1
    },
    "heal": {
        "range": 3,
        "activation": 4000,
        "asset": "_b1_95_health-normal",
        "targetaudience": 1,
        "typeeffect": "hpmodifier",
        "modifier": 2
    },
    "healplus": {
        "range": 3,
        "activation": 7000,
        "asset": "_b1_95_health-increase",
        "targetaudience": 1,
        "typeeffect": "hpmodifier",
        "modifier": 4
    },
    "fire_bolt": {
        "range": 3,
        "activation": 6000,
        "asset": "_b1_95_burning-blobs",
        "targetaudience": 2,
        "typeeffect": "hpmodifier",
        "modifier": -6
    },
    "ice_spear": {
        "range": 3,
        "activation": 4000,
        "asset": "_b1_95_ice-spear",
        "targetaudience": 2,
        "typeeffect": "hpmodifier",
        "modifier": -3
    }
};
