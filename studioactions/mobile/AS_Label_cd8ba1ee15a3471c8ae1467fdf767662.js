function AS_Label_cd8ba1ee15a3471c8ae1467fdf767662(eventobject, x, y) {
    var controllerScope = this;
    controllerScope.view.flxLineSubHeader.animate(kony.ui.createAnimation({
        100: {
            left: "66.66%",
            "stepConfig": {}
        }
    }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.2
    }, {
        animationEnd: function() {}
    });
}