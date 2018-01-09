define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_da3aa9f62eae4117a10debaf5dd59733: function AS_Button_da3aa9f62eae4117a10debaf5dd59733(eventobject) {
        var self = this;
        stopAudio();
        var navigat = new kony.mvc.Navigation("frmLandingPage");
        navigat.navigate();
    },
    AS_Slider_d55aedbb37394051824313267aa0fe1a: function AS_Slider_d55aedbb37394051824313267aa0fe1a(eventobject, selectedvalue) {
        var self = this;
        var endPos = this.view.sliderAudio.selectedValue;
        onSlide(endPos);
    },
    AS_Slider_d3a444c9b4584e2c9c8e5ef913823e92: function AS_Slider_d3a444c9b4584e2c9c8e5ef913823e92(eventobject, x, y) {
        var self = this;
        var endPos = this.view.sliderAudio.selectedValue;
        onSlide(endPos);
    },
    AS_Button_dee6f1958d3740a8ae045dd07305f95a: function AS_Button_dee6f1958d3740a8ae045dd07305f95a(eventobject) {
        var self = this;
        this.onClickFloatingButton();
    },
    AS_Button_bd02fa831310450c8e0d45b6205186aa: function AS_Button_bd02fa831310450c8e0d45b6205186aa(eventobject) {
        var self = this;
        this.view.btnPlay.setVisibility(false);
        this.view.Pause.setVisibility(true);
        this.playAudio();
    },
    AS_Label_c4ebf2181d634b7ebeffc8aff412230d: function AS_Label_c4ebf2181d634b7ebeffc8aff412230d(eventobject, x, y) {
        var self = this;
        this.view.btnPlay.setVisibility(true);
        this.view.Pause.setVisibility(false);
        pauseAudio();
    },
    AS_Button_f2a979ee5ba44309b159ac6a620456d6: function AS_Button_f2a979ee5ba44309b159ac6a620456d6(eventobject) {
        var self = this;
        stopAudio();
        onMediaComplete();
    },
    AS_Button_f7c3194f989041d4b539620c65ba79cd: function AS_Button_f7c3194f989041d4b539620c65ba79cd(eventobject, x, y) {
        var self = this;
        seekBackward(Number(this.view.sliderAudio.selectedValue));
    },
    AS_Button_h91a83473de24284944d39ffbdc0c3fa: function AS_Button_h91a83473de24284944d39ffbdc0c3fa(eventobject, x, y) {
        var self = this;
        seekForward(Number(this.view.sliderAudio.selectedValue));
    }
});