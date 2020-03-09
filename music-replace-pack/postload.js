ig.module('game.feature.bgm.replace-music')
  .requires("game.feature.bgm.playlist")
  .defines(function () {
    ig.BGM_TRACK_LIST.basinKeep = { path: "media/bgm/CelesteBasin1.mp3", loopEnd: 76, volume: 0.8 };
    ig.BGM_TRACK_LIST.emilie = { path: "media/bgm/ValseSonic1.mp3", loopEnd: 72, volume: 0.8 };
    // basinKeep: { path: "media/bgm/muBasinkeep.mp3", loopEnd: 102.893, volume: 0.5 }
    //  emilie: { path: "media/bgm/muValse.mp3", loopEnd: 62.905, volume: 0.5, introPath: "media/bgm/muValse-i.mp3", introEnd: 2.167 }
    
    
});