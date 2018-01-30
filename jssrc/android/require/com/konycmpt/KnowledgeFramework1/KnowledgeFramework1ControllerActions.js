define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ButtonRoundFloatWithShadow **/
    AS_Button_g3ef0b69037b49fea0b05328a98c5383: function AS_Button_g3ef0b69037b49fea0b05328a98c5383(eventobject) {
        var self = this;
        this.onClickFloatingButton();
    },
    /** onTouchEnd defined for btnClose **/
    AS_Button_abe4f10e0f104eda85096deca9556e0b: function AS_Button_abe4f10e0f104eda85096deca9556e0b(eventobject, x, y) {
        var self = this;
        this.closeWhenDone();
    },
    /** onClick defined for flxbtnClose **/
    AS_FlexContainer_h314be8536c14244aed44bb5da39740c: function AS_FlexContainer_h314be8536c14244aed44bb5da39740c(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    /** onTouchStart defined for flxHeading **/
    AS_FlexContainer_d53e76a2dd634dad933d5de3606bd715: function AS_FlexContainer_d53e76a2dd634dad933d5de3606bd715(eventobject, x, y) {
        var self = this;
        this.touchS(eventobject, x, y);
    },
    /** onTouchEnd defined for flxHeading **/
    AS_FlexContainer_edd606b3f1ca4d11a8eee363db772f5f: function AS_FlexContainer_edd606b3f1ca4d11a8eee363db772f5f(eventobject, x, y) {
        var self = this;
        this.touchE();
    },
    /** onClick defined for btnArrows **/
    AS_Button_fa60c1d3fb1f4fddbf1be6b2f184f2f3: function AS_Button_fa60c1d3fb1f4fddbf1be6b2f184f2f3(eventobject) {
        var self = this;
        if (this.view.LongArrowLeft.isVisible === true) this.onClickBack();
        else this.onClickDrag();
    },
    /** onRowClick defined for sgmtAPI **/
    AS_Segment_a69848b46ac74c27b36d6d7b27ba82d5: function AS_Segment_a69848b46ac74c27b36d6d7b27ba82d5(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    /** onClick defined for flxrchTextDesc **/
    AS_FlexContainer_a2f32bdea9d24e478fc0d187580337fd: function AS_FlexContainer_a2f32bdea9d24e478fc0d187580337fd(eventobject) {
        var self = this;
        if (this.view.rchTextDesc.isVisible === true) this.onClickDisappear(eventobject);
        else this.onClickDisplay(eventobject);
    },
    /** onClick defined for btnEmailTo **/
    AS_Button_h22a76bb9fad4bd798f156cb67b2d280: function AS_Button_h22a76bb9fad4bd798f156cb67b2d280(eventobject) {
        var self = this;
        this.openEmail();
    },
    /** onClick defined for flxlblCodeSnippet **/
    AS_FlexContainer_a12c7232c1184f62bd42cf40ec8b807c: function AS_FlexContainer_a12c7232c1184f62bd42cf40ec8b807c(eventobject) {
        var self = this;
        if (this.view.lblCodeSnippet.isVisible === true) this.onClickDisappear(eventobject);
        else this.onClickDisplay(eventobject);
    },
    /** onClick defined for flxrchtextDoc **/
    AS_FlexContainer_g56f1e816e494b6ea6756d5d9675455a: function AS_FlexContainer_g56f1e816e494b6ea6756d5d9675455a(eventobject) {
        var self = this;
        if (this.view.rchtextDoc.isVisible === true) this.onClickDisappear(eventobject);
        else this.onClickDisplay(eventobject);
    }
});