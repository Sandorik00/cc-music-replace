ig.module('game.feature.loadable-replace')
  .requires("impact.base.loader", "impact.feature.bgm.bgm", "game.feature.bgm.playlist")
  .defines(function () {

    ig.Bgm.inject({

      onLevelLoadStart(a) {
        this.clearResumeOnChange();
        if (a.attributes && a.attributes.bgm) {
          this.mapDefaultTrackSet && this.mapDefaultTrackSet.clearCached();
          console.log(a);
          this.mapDefaultTrackSet = this.loadTrackSet(a.attributes.bgm);
          if (a.name === "autumn/path-1-3") {
            a.entities[284].settings.event[19] = {
              "bgm": "bluehedgeheg",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "jungle/caves/infested-cave-02") {
            a.entities[173].settings.event[29] = {
              "bgm": "sephisloth",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "arid/tower-1") {
            a.entities[242].settings.event[31] = {
              "bgm": "stealth",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "jungle/grove/lost-shrine-04") {
            a.entities[190].settings.event[21] = {
              "bgm": "jungleFish",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "forest/caves/cave-013-pandza-02") {
            a.entities[101].settings.event[41] = {
              "bgm": "panzaMK2",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "bergen-trail/cave/cave-6-3") {
            a.entities[10].settings.event[10] = {
              "bgm": "pengDakara",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "heat/caves/cliffs-temple-03") {
            a.entities[8].settings.event[40] = {
              "bgm": "sandShark",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "heat/special/glitch-boss") {
            a.entities[2].settings.event[14] = {
              "bgm": "USE_THIS",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name === "jungle/caves/smuggle-route-2") {
            a.entities[3].settings.npcStates[1].event.quest[3][0][0] = {
              "bgm": "stealth",
              "mode": "MEDIUM_OUT",
              "type": "PUSH_BGM",
              "volume": 1
            }
          }
          this.setDefault(this.mapDefaultTrackSet, null, true);
        }
      }

    })

  })