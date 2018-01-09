function AS_Label_d284b840e123496aaf44d786da3e9dd8(eventobject, x, y) {
    var controllerScope = this;
    controllerScope.view.flxLineSubHeader.animate(kony.ui.createAnimation({
        100: {
            left: "0%",
            "stepConfig": {}
        }
    }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .2
    }, {
        animationEnd: function() {}
    });
}