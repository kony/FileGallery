define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_de593f1371a9457f883161c1eb3d693e: function AS_Button_de593f1371a9457f883161c1eb3d693e(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    /** onClick defined for flexClickBack **/
    AS_FlexContainer_i96080a1566f4f449bdf3ea693dfa931: function AS_FlexContainer_i96080a1566f4f449bdf3ea693dfa931(eventobject) {
        var self = this;
        this.onClickBack();
    },
    /** onClick defined for flxMenu **/
    AS_FlexContainer_j71d844c8bb84c308c82721b223b6bac: function AS_FlexContainer_j71d844c8bb84c308c82721b223b6bac(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    /** onRowClick defined for sgmtAPI **/
    AS_Segment_edaf4a3245964f8db94f3881edf4a4eb: function AS_Segment_edaf4a3245964f8db94f3881edf4a4eb(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    /** onClick defined for flexAcc1 **/
    AS_FlexContainer_d6bb7072db8c407082ba833e2d22e3ca: function AS_FlexContainer_d6bb7072db8c407082ba833e2d22e3ca(eventobject) {
        var self = this;
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexAcc2 **/
    AS_FlexContainer_j0338e211ed4493fa3a980e2b70f080d: function AS_FlexContainer_j0338e211ed4493fa3a980e2b70f080d(eventobject) {
        var self = this;
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexAcc3 **/
    AS_FlexContainer_b1dd211e16384d63b804e5f2c73431cb: function AS_FlexContainer_b1dd211e16384d63b804e5f2c73431cb(eventobject) {
        var self = this;
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flxCover **/
    AS_FlexContainer_f5f63fc17f9649acb69bcf016afa2b8b: function AS_FlexContainer_f5f63fc17f9649acb69bcf016afa2b8b(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onClick defined for flxShadow **/
    AS_FlexContainer_a63a7f1e78f6463485cb92e166d06bcf: function AS_FlexContainer_a63a7f1e78f6463485cb92e166d06bcf(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onClickFooterShare defined for hamburger **/
    AS_UWI_e7fcfff28d6f407887807511be841195: function AS_UWI_e7fcfff28d6f407887807511be841195(eventobject) {
        var self = this;
        kony.phone.openEmail([""], [""], [""], 'Functional Preview for File Gallery', "Hi<br>Please preview the File Gallery app in Kony Visualizer Functional Preview using the following link:<br>https://www.kony.com/marketplace/app_preview?apptolaunch=61VZT<br>or<br>Use the cloud code <b>61VZT</b> in the Kony Visualizer Functional Preview Cloud tab.<br><br><b><u>Note:</b></u> If you don’t have Kony Visualizer Functional Preview installed on your mobile, this link will take you to the download page in App Store/Play Store.", true);
        this.hideHam();
    },
    /** onClickFooterHelp defined for hamburger **/
    AS_UWI_f64a2c9347504da59eb2574f9855c22b: function AS_UWI_f64a2c9347504da59eb2574f9855c22b(eventobject) {
        var self = this;
        this.onClickHelp();
    }
});