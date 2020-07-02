sc.Model.addObserver(sc.options, {
  modelChanged(model, message, _data) {
    if (!(model === sc.options && message === sc.OPTIONS_EVENT.OPTION_CHANGED))
      return;

    if (sc.options.get("voice-tracks")) {
      ig.merge(ig.BGM_TRACK_LIST, {
        fieldBattle: {
          path: "media/bgm/Time-To-Make-History-2.mp3",
          loopEnd: 151.579,
          volume: 0.5,
          introPath: "media/bgm/Time-To-Make-History-i.mp3",
          introEnd: 10.42,
        },
      });
    } else if (!sc.options.get("voice-tracks")) {
      ig.merge(ig.BGM_TRACK_LIST, {
        fieldBattle: {
          path: "media/bgm/battle2.mp3",
          loopEnd: 202.698,
          volume: 0.5,
          introPath: "media/bgm/battle2-i.mp3",
          introEnd: 5.349,
        },
      });
    }
  },
});
