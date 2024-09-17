var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.10375229874961178,
        "pitch": -0.3403180284605387,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16881428314765223,
          "pitch": 0.0115481008887528,
          "rotation": 0,
          "target": "1-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6873111191920636,
        "pitch": -0.025183591018050677,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.676463491382723,
          "pitch": 0.5745734532648008,
          "rotation": 0,
          "target": "2-entrance-hall"
        },
        {
          "yaw": 1.4596286098433744,
          "pitch": 0.23844096279727367,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6947736322453562,
        "pitch": 0.005858270175568947,
        "fov": 1.9110029161375903
      },
      "linkHotspots": [
        {
          "yaw": 2.238988916580518,
          "pitch": 0.41653779481423747,
          "rotation": 0.7853981633974483,
          "target": "3-living-area"
        },
        {
          "yaw": 0.8905738029366432,
          "pitch": 0.3223220583436195,
          "rotation": 12.566370614359176,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.46402673765650704,
          "pitch": 0.5162895240710696,
          "rotation": 12.566370614359176,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.1773482687109347,
        "pitch": 0.22454997546063815,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.693810607505185,
          "pitch": 0.34758261141560354,
          "rotation": 0,
          "target": "2-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.2111591025956034,
        "pitch": 0.3622655486479829,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5686563622535754,
          "pitch": 0.37447769866916936,
          "rotation": 6.283185307179586,
          "target": "2-entrance-hall"
        },
        {
          "yaw": 2.8243256494455418,
          "pitch": 0.3466542819910252,
          "rotation": 0,
          "target": "5-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6215404519509207,
        "pitch": -0.4862106277339304,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5783799815232271,
          "pitch": -0.1999770429931278,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.5752812790965445,
        "pitch": 0.3510944808649441,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6002475873580346,
          "pitch": 0.5113371148581258,
          "rotation": 0,
          "target": "9-bathroom-1"
        },
        {
          "yaw": 1.0074090927011934,
          "pitch": 1.0061758512899814,
          "rotation": 10.210176124166829,
          "target": "2-entrance-hall"
        },
        {
          "yaw": -2.9235865595117243,
          "pitch": 0.3317638068604136,
          "rotation": 0,
          "target": "11-bedroom-1"
        },
        {
          "yaw": -1.8413480096654773,
          "pitch": 0.7336471744192323,
          "rotation": 5.497787143782138,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6471019502797972,
        "pitch": 0.24528920752494088,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.197722148753904,
          "pitch": 0.2677052335710197,
          "rotation": 0,
          "target": "12-bedroom-2"
        },
        {
          "yaw": -1.6507448402425347,
          "pitch": 0.2942106066452794,
          "rotation": 0.7853981633974483,
          "target": "13-bedroom-3"
        },
        {
          "yaw": 0.8017706906073805,
          "pitch": 0.37354093258567644,
          "rotation": 0.7853981633974483,
          "target": "8-ii-floor"
        },
        {
          "yaw": 1.9562471251931184,
          "pitch": 0.8142375785471891,
          "rotation": 0,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.855329985524989,
        "pitch": 0.12088519772145467,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.825033058893295,
          "pitch": 0.3470703269550395,
          "rotation": 5.497787143782138,
          "target": "10-bathroom-2"
        },
        {
          "yaw": -2.4631798532167455,
          "pitch": 0.33873299846647953,
          "rotation": 0.7853981633974483,
          "target": "14-bedroom-4"
        },
        {
          "yaw": -0.7988263627827443,
          "pitch": 0.4433238439024425,
          "rotation": 0,
          "target": "15-bedroom-5"
        },
        {
          "yaw": 1.753803338803304,
          "pitch": 0.9008360314131263,
          "rotation": 4.71238898038469,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3072907797030382,
        "pitch": 0.49277441947731937,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8925078388785526,
          "pitch": 0.5473847948087833,
          "rotation": 0,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5318689437929631,
        "pitch": 0.58944302648346,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8441350057394885,
          "pitch": 0.4674036710174896,
          "rotation": 5.497787143782138,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.640689551190068,
        "pitch": 0.8006999100457541,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4305783348290717,
          "pitch": 0.26755051311867994,
          "rotation": 0,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.322139221730003,
        "pitch": 0.7949842039152717,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0184449080127784,
          "pitch": 0.3250976645178305,
          "rotation": 0,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.2952950041335054,
        "pitch": 0.7437104637928957,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8622521607083788,
          "pitch": 0.37522465973756525,
          "rotation": 0,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7871437726179842,
        "pitch": 0.7912855149103013,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.595771363167831,
          "pitch": 0.3884724011077392,
          "rotation": 0,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.723856143238903,
        "pitch": 0.44268266114450583,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9908315360113775,
          "pitch": 0.3665420701448401,
          "rotation": 0,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "39 Brudenell Mount",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
