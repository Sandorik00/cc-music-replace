ccmod.resources.jsonPatches.add("data/maps/autumn/path-1-3.json", (data) => {
  data.entities[284].settings.event[19] = {
    bgm: "bluehedgeheg",
    volume: 1,
    mode: "IMMEDIATELY",
    type: "PUSH_BGM",
  };
});

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/caves/infested-cave-02.json",
  (data) => {
    data.entities[173].settings.event[29] = {
      bgm: "sephisloth",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add("data/maps/arid/tower-1.json", (data) => {
  data.entities[242].settings.event[31] = {
    bgm: "stealth",
    volume: 1,
    mode: "IMMEDIATELY",
    type: "PUSH_BGM",
  };
});

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/grove/lost-shrine-04.json",
  (data) => {
    data.entities[190].settings.event[21] = {
      bgm: "jungleFish",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/forest/caves/cave-013-pandza-02.json",
  (data) => {
    data.entities[101].settings.event[41] = {
      bgm: "panzaMK2",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/bergen-trail/cave/cave-6-3.json",
  (data) => {
    data.entities[10].settings.event[10] = {
      bgm: "pengDakara",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/heat/caves/cliffs-temple-03.json",
  (data) => {
    data.entities[8].settings.event[40] = {
      bgm: "sandShark",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/heat/special/glitch-boss.json",
  (data) => {
    data.entities[2].settings.event[14] = {
      bgm: "USE_THIS",
      volume: 1,
      mode: "IMMEDIATELY",
      type: "PUSH_BGM",
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/caves/smuggle-route-2.json",
  (data) => {
    data.entities[3].settings.npcStates[1].event.quest[3][0][0] = {
      bgm: "stealth",
      mode: "MEDIUM_OUT",
      type: "PUSH_BGM",
      volume: 1,
    };
  }
);

ccmod.resources.jsonPatches.add(
  "data/enemies/jungle/special/guard.json",
  (data) => {
    data.actions.Detect.splice(2, 0, {
      volume: 1,
      global: false,
      loop: false,
      type: "PLAY_SOUND",
      sound: "media/sound/alertsoundmgs.ogg",
    });
    data.actions.Detect.splice(8, 0, {
      time: -1,
      type: "WAIT",
    });
  }
);
