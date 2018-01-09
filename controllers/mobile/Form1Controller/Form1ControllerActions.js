define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e6a1cafbd24f4d75b1ec645919028d86: function AS_FlexContainer_e6a1cafbd24f4d75b1ec645919028d86(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    AS_FlexContainer_c9388069e3254cbe9b91a6b0910c9d8c: function AS_FlexContainer_c9388069e3254cbe9b91a6b0910c9d8c(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    AS_Button_e3563177c78f48e6bb8bc15834ccac84: function AS_Button_e3563177c78f48e6bb8bc15834ccac84(eventobject, x, y) {
        var self = this;
        //this.slideMenu();
        this.listMenuClick();
    },
    AS_Label_d284b840e123496aaf44d786da3e9dd8: function AS_Label_d284b840e123496aaf44d786da3e9dd8(eventobject, x, y) {
        var self = this;
        var controllerScope = this;
        controllerScope.view.flxLineSubHeader.animate(
        kony.ui.createAnimation({
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
    },
    AS_Label_d2b9a6bf49724b62a3cda73e06f72ca4: function AS_Label_d2b9a6bf49724b62a3cda73e06f72ca4(eventobject, x, y) {
        var self = this;
        var controllerScope = this;
        controllerScope.view.flxLineSubHeader.animate(
        kony.ui.createAnimation({
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
    },
    AS_Label_cd8ba1ee15a3471c8ae1467fdf767662: function AS_Label_cd8ba1ee15a3471c8ae1467fdf767662(eventobject, x, y) {
        var self = this;
        var controllerScope = this;
        controllerScope.view.flxLineSubHeader.animate(
        kony.ui.createAnimation({
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
    },
    AS_FlexContainer_d565099221b8479c81d0cfcdbb8f8bd2: function AS_FlexContainer_d565099221b8479c81d0cfcdbb8f8bd2(eventobject, x, y) {
        var self = this;
        this.view.KnowledgeFramework1.onTouchMoves(eventobject, x, y);
    },
    AS_FlexContainer_d080d832c4f44e3d896032d5b0717cd5: function AS_FlexContainer_d080d832c4f44e3d896032d5b0717cd5(eventobject) {
        var self = this;
        this.onClickList();
    },
    AS_FlexContainer_b6d7e33b80f3492b817722681d253c4d: function AS_FlexContainer_b6d7e33b80f3492b817722681d253c4d(eventobject) {
        var self = this;
        this.onClickGrid();
    }
});