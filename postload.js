ig.module('game.feature.bgm.replace-music')
  .requires("game.feature.bgm.playlist")
  .defines(function () {
  	//ig.merge(ig.BGM_TRACK_LIST, { metalGear: { path: "media/bgm/metalGear1.mp3", loopEnd: 113.777, volume: 0.5 } });
    ig.BGM_TRACK_LIST.basinKeep = { path: "media/bgm/CelesteBasin3.mp3", loopEnd: 155, volume: 1 };
    ig.BGM_TRACK_LIST.emilie = { path: "media/bgm/ValseSonic4.mp3", loopEnd: 69, volume: 0.8 };
    ig.BGM_TRACK_LIST.bergenVillage = { path: "media/bgm/ValseSonic4.mp3", loopEnd: 69, volume: 0.8 };
    ig.BGM_TRACK_LIST.metalGear = { path: "media/bgm/metalGear1.mp3", loopEnd: 113.777, volume: 0.5 };
    ig.BGM_DEFAULT_TRACKS.metalGear = {
			field: {
				track: "metalGear",
				volume: 1
			}, battle: { track: "tutorial-battle", volume: 1 }, rankBattle: { track: "fieldBattle", volume: 1 }, sRankBattle: { track: "s-rank", volume: 1 }
		};
    /*
     rookieHarbor: {
			field: {
				track: "rookieHarbor",
				volume: 1
			}, battle: { track: "tutorial-battle", volume: 1 }, rankBattle: { track: "fieldBattle", volume: 1 }, sRankBattle: { track: "s-rank", volume: 1 }
		}
		*/
    //infiltration: { path: "media/bgm/muInfiltration.mp3", loopEnd: 113.777, volume: 0.5 }

    // basinKeep: { path: "media/bgm/muBasinkeep.mp3", loopEnd: 102.893, volume: 0.5 }
    //  emilie: { path: "media/bgm/muValse.mp3", loopEnd: 62.905, volume: 0.5, introPath: "media/bgm/muValse-i.mp3", introEnd: 2.167 }  
});