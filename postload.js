ig.module('game.feature.bgm.replace-music')
  .requires("game.feature.bgm.playlist")
  .defines(function () {

    const tracks = {
      basinKeep: { path: "media/bgm/CelesteBasin3.mp3", loopEnd: 155, volume: 1 },
      emilie: { path: "media/bgm/ValseSonic4.mp3", loopEnd: 69, volume: 0.8 },
      bergenVillage: { path: "media/bgm/ValseSonic4.mp3", loopEnd: 69, volume: 0.8 },
      metalGear: { path: "media/bgm/metalGear1.mp3", loopEnd: 113.777, volume: 0.5 }
    }

    for (var i in tracks) {
      console.log(tracks[i]);
      ig.BGM_TRACK_LIST[i] = tracks[i];
    }

    /* 
    ig.BGM_DEFAULT_TRACKS.metalGear = {
      field: {
        track: "metalGear",
        volume: 1
      }, battle: { track: "tutorial-battle", volume: 1 }, rankBattle: { track: "fieldBattle", volume: 1 }, sRankBattle: { track: "s-rank", volume: 1 }
    }; */

    //infiltration: { path: "media/bgm/muInfiltration.mp3", loopEnd: 113.777, volume: 0.5 }
  });