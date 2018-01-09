function AS_Label_d2b9a6bf49724b62a3cda73e06f72ca4(eventobject, x, y) {
    var controllerScope = this;
    controllerScope.view.flxLineSubHeader.animate(kony.ui.createAnimation({
        100: {
            left: "33.33%",
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