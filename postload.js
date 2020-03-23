ig.module('game.feature.bgm.replace-music')
  .requires("game.feature.bgm.playlist")
  .defines(function () {

    const tracks = {
      basinKeep: { path: "media/bgm/CelesteBasin7.mp3", loopEnd: 155.208, volume: 0.8 },
      emilie: { path: "media/bgm/ValseSonic4.mp3", loopEnd: 69, volume: 0.8 },
      bergenVillage: { path: "media/bgm/metalGear3.mp3", loopEnd: 94, volume: 0.8 },
      metalGear: { path: "media/bgm/metalGear1.mp3", loopEnd: 113.777, volume: 0.5 },
      rookieHarbor: { path: "media/bgm/ApolloRight.mp3", loopEnd: 76.825, volume: 0.8 },
      apolloTheme: { path: "media/bgm/ApolloRight.mp3", loopEnd: 76.825, volume: 1 }
    }
    //introPath: "media/bgm/muApollo-i.mp3", introEnd: 10.758

    for (var i in tracks) {
      console.log(tracks[i]);
      ig.BGM_TRACK_LIST[i] = tracks[i];
    }

    ig.BGM_DEFAULT_TRACKS.metalGear = {
      field: {
        track: "metalGear",
        volume: 1
      }, battle: { track: "tutorial-battle", volume: 1 }, rankBattle: { track: "fieldBattle", volume: 1 }, sRankBattle: { track: "s-rank", volume: 1 }
    };

    //infiltration: { path: "media/bgm/muInfiltration.mp3", loopEnd: 113.777, volume: 0.5 }
  });