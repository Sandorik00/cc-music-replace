ig.module('game.feature.loadable-replace')
  .requires("impact.base.loader", "impact.feature.bgm.bgm")
  .defines(function () {
    ig.Bgm.inject({
      onLevelLoadStart: function(a) {
        this.clearResumeOnChange();
        if (a.attributes && a.attributes.bgm) {
          this.mapDefaultTrackSet && this.mapDefaultTrackSet.clearCached();
          console.log(a.attributes.bgm);
          this.mapDefaultTrackSet = this.loadTrackSet(a.attributes.bgm);
          if (a.attributes.bgm == "autumn") {
            this.mapDefaultTrackSet = this.loadTrackSet("bergenVillage");
          }
          this.setDefault(this.mapDefaultTrackSet, null, true);
        }
      }
    })
    
    /* ig.JsonLoadable.inject({
      init: function(a) {
        this.parent(a);
        console.log(a);
        if (typeof a == "object") this.onload(a);
      }
    }) */
  })