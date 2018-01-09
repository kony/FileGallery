function AS_FlexContainer_j05301b9f2654e6fbbf1d3ea39390838(eventobject) {
    var self = this;

    function MOVE_ACTION____idc23375669a491c8b4fdbf176912265_Callback() {}
    self.view.flxToolbar.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": MOVE_ACTION____idc23375669a491c8b4fdbf176912265_Callback
    });
}