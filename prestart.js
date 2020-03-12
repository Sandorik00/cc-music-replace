ig.module('game.feature.custom-maps-bgm')
    .requires("impact.base.loader")
    .defines(function () {
        ig.JsonLoadable.inject({
            init: function (a) { this.parent(a); if (typeof a == "object") this.onload(a) }, loadInternal: function () { $.ajax({ dataType: "json", url: ig.getFilePath(this.getJsonPath()), context: this, success: this.onJsonLoaded.bind(this), error: this.onJsonError.bind(this) }) }, onJsonLoaded: function (a) {
                //console.log(a);
                a = ig.jsonTemplate.resolve(a); if (!a) {
                    throw Error("Json file of path '" + this.path + "' is null. Maybe the original JSON had a syntax error and was compressed incorrectly?")
                }
                ig.activateCollectors(this); this.onload(a); ig.removeCollectors(this); this.loadingFinished(true)
            }, onJsonError: function () { this.onerror && this.onerror(); this.loadingFinished(false) }
        });
    });
    