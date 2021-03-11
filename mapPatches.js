ccmod.resources.jsonPatches.add("data/maps/autumn/path-1-3.json", (data) => {
  let entity = data.entities.find(
    (ent) => ent.type === "EventTrigger" && ent.settings.name === "StartBoss"
  );
  let pushBgmEvent = entity.settings.event.find(
    (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge2"
  );
  pushBgmEvent.bgm = "bluehedgeheg";
});

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/caves/infested-cave-02.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "EventTrigger" && ent.settings.name === "startSloth"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge"
    );
    pushBgmEvent.bgm = "sephisloth";
  }
);

ccmod.resources.jsonPatches.add("data/maps/arid/tower-1.json", (data) => {
  let entity = data.entities.find(
    (ent) => ent.type === "EventTrigger" && ent.settings.name === "StealthStart"
  );
  let pushBgmEvent = entity.settings.event.find(
    (evt) => evt.type === "PLAY_BGM" && evt.bgm === "infiltration"
  );
  pushBgmEvent.bgm = "stealth";
});

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/grove/lost-shrine-04.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "EventTrigger" && ent.settings.name === "BossStart"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge"
    );
    pushBgmEvent.bgm = "jungleFish";
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/forest/caves/cave-013-pandza-02.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "EventTrigger" && ent.settings.name === "BossStart"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge"
    );
    pushBgmEvent.bgm = "panzaMK2";
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/bergen-trail/cave/cave-6-3.json",
  (data) => {
    let entity = data.entities.find(
      (ent) =>
        ent.type === "EventTrigger" && ent.settings.name === "startBattle"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge"
    );
    pushBgmEvent.bgm = "pengDakara";
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/heat/caves/cliffs-temple-03.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "EventTrigger" && ent.settings.name === "StartFight"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "challenge"
    );
    pushBgmEvent.bgm = "sandShark";
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/heat/special/glitch-boss.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "EventTrigger" && ent.settings.name === "bossStart"
    );
    let pushBgmEvent = entity.settings.event.find(
      (evt) => evt.type === "PLAY_BGM" && evt.bgm === "challenge2"
    );
    pushBgmEvent.bgm = "USE_THIS";
  }
);

ccmod.resources.jsonPatches.add(
  "data/maps/jungle/caves/smuggle-route-2.json",
  (data) => {
    let entity = data.entities.find(
      (ent) => ent.type === "NPC" && ent.settings.name === "mick"
    );
    let npcState = entity.settings.npcStates.find(
      (st) => st.condition === "quest.basin-mush-2.task.2"
    );
    let events = npcState.event.quest;

    let choiceEvent = events.find((evt) => evt.type === "SHOW_CHOICE");
    // TODO: Is it possible to find this branch without guessing?
    let yesChoiceEvents = choiceEvent[0];
    let pushBgmEvent = yesChoiceEvents.find(
      (evt) => evt.type === "PUSH_BGM" && evt.bgm === "infiltration"
    );
    pushBgmEvent.bgm = "stealth";
  }
);

ccmod.resources.jsonPatches.add(
  "data/enemies/jungle/special/guard.json",
  (data) => {
    let detectAction = data.actions.Detect;
    detectAction.splice(2, 0, {
      volume: 1,
      global: false,
      loop: false,
      type: "PLAY_SOUND",
      sound: "media/sound/alertsoundmgs.ogg",
    });
    detectAction.splice(8, 0, {
      time: -1,
      type: "WAIT",
    });
  }
);

ccmod.resources.jsonPatches.add(
  new RegExp(/extension\/post-game\/data\/maps\/final-dng\/g\/.+/),
  (data) => {
    data.attributes.bgm = "final-dungeon-f1";
  }
)
