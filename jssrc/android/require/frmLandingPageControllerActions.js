define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOK **/
    AS_Button_bf9af04f711a4bc98e621d5de25d4199: function AS_Button_bf9af04f711a4bc98e621d5de25d4199(eventobject) {
        var self = this;
        this.onInterstitialButtonClick();
    },
    /** onRowClick defined for sgmtItemList **/
    AS_Segment_i304c7543be342c68aa96cdd41747507: function AS_Segment_i304c7543be342c68aa96cdd41747507(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.setSelectionCallback(eventobject, sectionNumber, rowNumber);
    },
    /** onClick defined for ButtonRoundFloat **/
    AS_Button_ha2d8e2faffe4b8dadd49949b4f10c1a: function AS_Button_ha2d8e2faffe4b8dadd49949b4f10c1a(eventobject) {
        var self = this;
        this.onClickFloatingButton();
    },
    /** onClick defined for flxListView **/
    AS_FlexContainer_bed72d204e34434d920148bb807abf53: function AS_FlexContainer_bed72d204e34434d920148bb807abf53(eventobject) {
        var self = this;
        this.onClickList();
    },
    /** onClick defined for flxGridView **/
    AS_FlexContainer_fd746b5d77434f6588e9f44b664a45d0: function AS_FlexContainer_fd746b5d77434f6588e9f44b664a45d0(eventobject) {
        var self = this;
        this.onClickGrid();
    },
    /** onClick defined for flxCover **/
    AS_FlexContainer_h584f29943e64d0faa8cea2453f03f42: function AS_FlexContainer_h584f29943e64d0faa8cea2453f03f42(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onClick defined for flxShadow **/
    AS_FlexContainer_cb84f0ece0cc4bf7ae97cbc05b1a9948: function AS_FlexContainer_cb84f0ece0cc4bf7ae97cbc05b1a9948(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onClickFooterShare defined for hamburger **/
    AS_UWI_a8a0bbd8f32c4b28a5a6ecb4ca8fe16b: function AS_UWI_a8a0bbd8f32c4b28a5a6ecb4ca8fe16b(eventobject) {
        var self = this;
        kony.phone.openEmail([""], [""], [""], 'Functional Preview for File Gallery', "Hi<br>Please preview the File Gallery app in Kony Visualizer Functional Preview using the following link:<br>https://www.kony.com/marketplace/app_preview?apptolaunch=61VZT<br>or<br>Use the cloud code <b>61VZT</b> in the Kony Visualizer Functional Preview Cloud tab.<br><br><b><u>Note:</b></u> If you don’t have Kony Visualizer Functional Preview installed on your mobile, this link will take you to the download page in App Store/Play Store.", true);
        this.hideHam();
    },
    /** onClickFooterHelp defined for hamburger **/
    AS_UWI_a9dca9dcfa8949358f98e57d307106db: function AS_UWI_a9dca9dcfa8949358f98e57d307106db(eventobject) {
        var self = this;
        this.onClickHelp();
    },
    /** onTouchEnd defined for headerButtonLeft **/
    AS_Button_f8e01adafad446799e1a22e1b07ef5d4: function AS_Button_f8e01adafad446799e1a22e1b07ef5d4(eventobject, x, y) {
        var self = this;
        this.listMenuClick();
    }
});