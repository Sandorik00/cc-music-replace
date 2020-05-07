ig.module("game.feature.bgm.replace-music")
  .requires("game.feature.bgm.playlist")
  .defines(function () {
    const tracks = {
      tutorial: {
        path: "media/bgm/cargohold.mp3",
        loopEnd: 87.578,
        volume: 0.5,
      },
      intro: {
        path: "media/bgm/awakened.mp3",
        loopEnd: 206.888,
        volume: 0.5,
        introPath: "media/bgm/awakened-i.mp3",
        introEnd: 8.36,
      },
      "tutorial-battle": {
        path: "media/bgm/battle1.mp3",
        loopEnd: 86.711,
        volume: 0.5,
        introPath: "media/bgm/battle1-i.mp3",
        introEnd: 71.227,
      },
      challenge: {
        path: "media/bgm/challenge1.mp3",
        loopEnd: 75.413,
        volume: 0.7,
        introPath: "media/bgm/challenge1-i.mp3",
        introEnd: 2.9,
      },
      title: {
        path: "media/bgm/title.mp3",
        loopEnd: 98.183,
        volume: 0.5,
        introPath: "media/bgm/title-i.mp3",
        introEnd: 78.373,
      },
      "cargoship-exterior": {
        path: "media/bgm/solarship.mp3",
        loopEnd: 75.441,
        volume: 0.5,
      },
      lolfanfare: {
        path: "media/bgm/lolefanfare.mp3",
        loopEnd: 5.98,
        volume: 0.5,
      },
      "ability-got": {
        path: "media/bgm/item.mp3",
        loopEnd: 3.398,
        volume: 0.5,
      },
      exposition: {
        path: "media/bgm/crossworlds.mp3",
        loopEnd: 91.652,
        volume: 0.5,
      },
      designer: {
        path: "media/bgm/designer.mp3",
        loopEnd: 71.933,
        volume: 0.5,
        introPath: "media/bgm/designer-i.mp3",
        introEnd: 14.959,
      },
      challenge2: {
        path: "media/bgm/challenge2.mp3",
        loopEnd: 90.357,
        volume: 0.5,
        introPath: "media/bgm/challenge2-i.mp3",
        introEnd: 8.739,
      },
      bossbattle1: {
        path: "media/bgm/boss.mp3",
        loopEnd: 169.398,
        volume: 0.5,
        introPath: "media/bgm/boss-i.mp3",
        introEnd: 22.632,
      },
      escape: {
        path: "media/bgm/escape.mp3",
        loopEnd: 33.958,
        volume: 0.5,
      },
      crosscounter: {
        path: "media/bgm/counter.mp3",
        loopEnd: 75.928,
        volume: 0.5,
        introPath: "media/bgm/counter-i.mp3",
        introEnd: 2.658,
      },
      oldHideout1: {
        path: "media/bgm/mysterious.mp3",
        loopEnd: 100.376,
        volume: 0.5,
      },
      oldHideoutBattle: {
        path: "media/bgm/fiercebattle.mp3",
        loopEnd: 73.281,
        volume: 0.5,
        introPath: "media/bgm/fiercebattle-i.mp3",
        introEnd: 25.273,
      },
      autumnsRise: {
        path: "media/bgm/autumnsrise.mp3",
        loopEnd: 227.356,
        volume: 0.5,
        introPath: "media/bgm/autumnsrise-i.mp3",
        introEnd: 17.42
      },
      fieldBattle: {
        path: "media/bgm/battle2.mp3",
        loopEnd: 202.698,
        volume: 0.5,
        introPath: "media/bgm/battle2-i.mp3",
        introEnd: 5.349
      },
      rhombusDungeon: {
        path: "media/bgm/rhombusdungeon.mp3",
        loopEnd: 128.008,
        volume: 0.5,
        introPath: "media/bgm/rhombusdungeon-i.mp3",
        introEnd: 21.448
      },
      rookieHarbor: {
        path: "media/bgm/harbor.mp3",
        loopEnd: 87.081,
        volume: 0.5,
      },
      firstScholars: {
        path: "media/bgm/scholars.mp3",
        loopEnd: 145.696,
        volume: 0.5,
      },
      bergenTrail: {
        path: "media/bgm/bergentrail.mp3",
        loopEnd: 62.627,
        volume: 0.5,
        introPath: "media/bgm/bergentrail-i.mp3",
        introEnd: 79.472,
      },
      rhombusSquare: {
        path: "media/bgm/bridge.mp3",
        loopEnd: 108.576,
        volume: 0.5,
      },
      apolloTheme: {
        path: "media/bgm/apollo.mp3",
        loopEnd: 76.825,
        volume: 0.5,
        introPath: "media/bgm/apollo-i.mp3",
        introEnd: 6.82,
      },
      coldDungeon: {
        path: "media/bgm/mine.mp3",
        loopEnd: 80.011,
        volume: 0.5,
      },
      bergenVillage: {
        path: "media/bgm/bergen.mp3",
        loopEnd: 86.008,
        volume: 0.5,
        introPath: "media/bgm/bergen-i.mp3",
        introEnd: 26.159
      },
      heatArea: {
        path: "media/bgm/valley.mp3",
        loopEnd: 111.571,
        volume: 0.5,
        introPath: "media/bgm/valley-i.mp3",
        introEnd: 22.539
      },
      heatVillage: {
        path: "media/bgm/bakiikum.mp3",
        loopEnd: 78.241,
        volume: 0.5,
        introPath: "media/bgm/bakiikum-i.mp3",
        introEnd: 2.487
      },
      heatDungeon: {
        path: "media/bgm/temple.mp3",
        loopEnd: 237.958,
        volume: 0.5,
      },
      shockDungeon: {
        path: "media/bgm/thunder.mp3",
        loopEnd: 92.014,
        volume: 0.5,
      },
      waveDungeon: {
        path: "media/bgm/lake.mp3",
        loopEnd: 229.365,
        volume: 1.2,
      },
      treeDungeon: {
        path: "media/bgm/grandtree.mp3",
        loopEnd: 132.647,
        volume: 2.5,
        introPath: "media/bgm/grandtree-i.mp3",
        introEnd: 2.251
      },
      jungle: { path: "media/bgm/garden.mp3", loopEnd: 108.113, volume: 0.7, introPath: "media/bgm/garden-i.mp3", introEnd: 17.348 },
      emilie: {
        path: "media/bgm/emilie.mp3",
        loopEnd: 138.14,
        volume: 0.5,
        introPath: "media/bgm/emilie-i.mp3",
        introEnd: 4.045,
      },
      basinKeep: {
        path: "media/bgm/basin.mp3",
        loopEnd: 234.68,
        volume: 0.5,
      },
      casual: { path: "media/bgm/travel.mp3", loopEnd: 122.589, volume: 0.5 },
      briefing: {
        path: "media/bgm/briefing.mp3",
        loopEnd: 176.014,
        volume: 0.5,
      },
      ponder: {
        path: "media/bgm/improvising.mp3",
        loopEnd: 100.381,
        volume: 0.5,
        introPath: "media/bgm/improvising-i.mp3",
        introEnd: 17.596
      },
      lea: { path: "media/bgm/lea.mp3", loopEnd: 109.931, volume: 0.5 },
      "dreamsequence-intro": {
        path: "media/bgm/dream1.mp3",
        loopEnd: 106.511,
        volume: 0.5,
        introPath: "media/bgm/dream1-i.mp3",
        introEnd: 132.319
      },
      dreamsequence: {
        path: "media/bgm/dream2.mp3",
        loopEnd: 144.214,
        volume: 0.5
      },
      sorrow: {
        path: "media/bgm/shock.mp3",
        loopEnd: 85.328,
        volume: 0.5,
      },
      raidTheme: {
        path: "media/bgm/raid.mp3",
        loopEnd: 145.848,
        volume: 0.7,
        introPath: "media/bgm/raid-i.mp3",
        introEnd: 14.765,
      },
      forestField: {
        path: "media/bgm/ridge.mp3",
        loopEnd: 225.449,
        volume: 0.5,
      },
      designerBoss1: {
        path: "media/bgm/expirience.mp3",
        loopEnd: 207.952,
        volume: 0.5,
        introPath: "media/bgm/expirience-i.mp3",
        introEnd: 12.253,
      },
      waiting: {
        path: "media/bgm/imprisoned.mp3",
        loopEnd: 160.006,
        volume: 0.5,
      },
      aridField: {
        path: "media/bgm/vermillion.mp3",
        loopEnd: 307.039,
        volume: 0.5,
      },
      aridBattle: {
        path: "media/bgm/battle3.mp3",
        loopEnd: 106.664,
        volume: 0.5,
        introPath: "media/bgm/battle3-i.mp3",
        introEnd: 10.676,
      },
      shizukaConfrontation: {
        path: "media/bgm/confrontation.mp3",
        loopEnd: 141.696,
        volume: 0.5,
      },
      evoDungeon1: {
        path: "media/bgm/separeted.mp3",
        loopEnd: 256.04,
        volume: 0.5,
      },
      evoDungeon2: {
        path: "media/bgm/hackyourway.mp3",
        loopEnd: 241.392,
        volume: 0.5,
        introPath: "media/bgm/hackyourway-i.mp3",
        introEnd: 11.044,
      },
      evoEscape: {
        path: "media/bgm/escapeagain.mp3",
        loopEnd: 192.078,
        volume: 0.5,
      },
      sergeyExposition: {
        path: "media/bgm/pastevents.mp3",
        loopEnd: 175.232,
        volume: 0.5,
        introPath: "media/bgm/pastevents-i.mp3",
        introEnd: 18.838
      },
      schneiderTour: {
        path: "media/bgm/improvising.mp3",
        loopEnd: 100.381,
        volume: 0.5,
        introPath: "media/bgm/improvising-i.mp3",
        introEnd: 17.596
      },
      infiltration: {
        path: "media/bgm/infiltration.mp3",
        loopEnd: 240.899,
        volume: 0.5,
        introPath: "media/bgm/infiltration-i.mp3",
        introEnd: 80.291
      },
      sadness: {
        path: "media/bgm/sadness.mp3",
        loopEnd: 98.542,
        volume: 0.5,
      },
      oldHideout2: {
        path: "media/bgm/hideout.mp3",
        loopEnd: 192.003,
        volume: 0.5,
      },
      trueIntentions: {
        path: "media/bgm/intention.mp3",
        loopEnd: 67.931,
        volume: 0.5,
        introPath: "media/bgm/intention-i.mp3",
        introEnd: 68.577,
      },
      rhombusSquare2: {
        path: "media/bgm/rhombussquare.mp3",
        loopEnd: 166.769,
        volume: 0.5,
        introPath: "media/bgm/rhombussquare-i.mp3",
        introEnd: 4.075,
      },
      autumnsFall: {
        path: "media/bgm/autumnsfall.mp3",
        loopEnd: 180.919,
        volume: 0.5,
        introPath: "media/bgm/autumnsfall-i.mp3",
        introEnd: 6.952
      },
      snailBattle1: {
        path: "media/bgm/growth.mp3",
        loopEnd: 145.964,
        volume: 0.5,
        introPath: "media/bgm/growth-i.mp3",
        introEnd: 22.534,
      },
      snailBattle2: {
        path: "media/bgm/conclusion.mp3",
        loopEnd: 224.7,
        volume: 0.5,
      },
      lastDungeon: {
        path: "media/bgm/vermilliondungeon.mp3",
        loopEnd: 118.174,
        volume: 0.5,
        introPath: "media/bgm/vermilliondungeon-i.mp3",
        introEnd: 7.348
      },
      shizuka: {
        path: "media/bgm/shizuka.mp3",
        loopEnd: 253.506,
        volume: 0.5,
        introPath: "media/bgm/shizuka-i.mp3",
        introEnd: 14.185,
      },
      finalBoss: {
        path: "media/bgm/ultimateexpirience.mp3",
        loopEnd: 308.261,
        volume: 0.5,
        introPath: "media/bgm/ultimateexpirience-i.mp3",
        introEnd: 307.528,
      },
      credits: {
        introPath: "media/bgm/ending.mp3",
        introEnd: 250.226,
        path: "media/bgm/lea.mp3",
        loopEnd: 109.931,
        volume: 0.5,
      },
      arena: {
        path: "media/bgm/battlearena.mp3",
        loopEnd: 145.494,
        volume: 0.5,
      },
      "s-rank": {
        introPath: "media/bgm/srank-i.mp3",
        introEnd: 10.882,
        path: "media/bgm/srank.mp3",
        loopEnd: 163.196,
        volume: 0.5,
      },
      bossRush: {
        introPath: "media/bgm/bossrush-i.mp3",
        introEnd: 6.007,
        path: "media/bgm/bossrush.mp3",
        loopEnd: 117.065,
        volume: 0.5,
      },
      glitchArea: {
        introPath: "media/bgm/glitch-i.mp3",
        introEnd: 20.691,
        path: "media/bgm/glitch.mp3",
        loopEnd: 104.347,
        volume: 0.5,
      },
      bluehedgeheg: {
        path: "media/bgm/bluehedgeheg.mp3",
        loopEnd: 116.039,
        volume: 0.5
      },
      sephisloth: {
        path: "media/bgm/sephisloth.mp3",
        loopEnd: 273.598,
        volume: 0.5,
        introPath: "media/bgm/sephisloth-i.mp3",
        introEnd: 73.397
      },
      stealth: {
        path: "media/bgm/stealth!.mp3",
        loopEnd: 94.476,
        volume: 0.5
      },
      jungleFish: {
        path: "media/bgm/AnglerFish.mp3", loopEnd: 75.098, volume: 0.5, introPath: "media/bgm/AnglerFish-i.mp3", introEnd: 10.106
      },
      panzaMK2: {
        path: "media/bgm/PandzaMkII.mp3", loopEnd: 158.077, volume: 0.5, introPath: "media/bgm/PandzaMkII-i.mp3", introEnd: 18.402
      },
      pengDakara: {
        path: "media/bgm/pengdakara.mp3", loopEnd: 120.518, volume: 0.5, introPath: "media/bgm/pengdakara-i.mp3", introEnd: 1.296
      },
      sandShark: {
        path: "media/bgm/SandShark.mp3", loopEnd: 118.918, volume: 0.5, introPath: "media/bgm/SandShark-i.mp3", introEnd: 5.34
      },
      USE_THIS: {
        path: "media/bgm/USE_THIS.mp3", loopEnd: 101.054, volume: 0.5
      }
    };


    for (var i in tracks) {
      ig.BGM_TRACK_LIST[i] = tracks[i];
    }

    ig.Bgm.preloadStartTrack("title");

  });
