//actions.js file 
function AS_Button_af8da0b778ca4960812288614ed7254e(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_Button_b794d07604ce4b4aab4f7ffea3938b75(eventobject) {
    var self = this;
    this.onClickDrag();
}

function AS_Button_bb615beba2b843da9b467caa7ec2f942(eventobject) {
    var self = this;
    if (this.index < this.screenData.length) {
        if (this.index == 1) this.view.flxInterstitial.setVisibility(false);
        alert(this.screenData.length);
        this.index++;
        this.setPointer(this.screenData[this.index]);
    }
}

function AS_Button_ce64dde7b9774d25a2620edcf557bed9(eventobject) {
    var self = this;
    this.onClickPrev();
}

function AS_Button_d8ab244c8d8c4d1dbdac55a7c7ceb65b(eventobject) {
    var self = this;
    this.openUptoHalf();
}

function AS_Button_da4449073c8344e79a36bdded3b42ae9(eventobject) {
    var self = this;
    this.onClickDrag();
}

function AS_Button_ddc13db0b5b14cfbb6fb5111af080600(eventobject) {
    var self = this;
    this.onClickNext();
}

function AS_Button_dedddd8e7eb8422c81b5250a7bd1136b(eventobject) {
    var self = this;
    this.openUptoHalf();
}

function AS_Button_fa60c1d3fb1f4fddbf1be6b2f184f2f3(eventobject) {
    var self = this;
    if (this.view.LongArrowLeft.isVisible === true) this.onClickBack();
    else this.onClickDrag();
}

function AS_Button_fbb7db85fb10484681ab7ab9ff6f8b1a(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_Button_g3ef0b69037b49fea0b05328a98c5383(eventobject) {
    var self = this;
    this.onClickFloatingButton();
}

function AS_Button_gf7b5906cd7b4969b87f4c81564efed9(eventobject) {
    var self = this;
    this.openEmail();
}

function AS_Button_h22a76bb9fad4bd798f156cb67b2d280(eventobject) {
    var self = this;
    this.openEmail();
}

function AS_Button_h501c3c220d2429ca5861c61fdbeecac(eventobject) {
    var self = this;
    this.openUptoHalf();
}

function AS_Button_h86f864a409844d5b79c54f5449e094d(eventobject) {
    var self = this;
}

function AS_FlexContainer_a08d731aaabe4d79aac87a953e2b8aad(eventobject, x, y) {
    var self = this;
}

function AS_FlexContainer_a12c7232c1184f62bd42cf40ec8b807c(eventobject) {
    var self = this;
    if (this.view.lblCodeSnippet.isVisible === true) this.onClickDisappear(eventobject);
    else this.onClickDisplay(eventobject);
}

function AS_FlexContainer_a1ed5d9b5c044af4a3fd1bddda25c39b(eventobject, x, y) {
    var self = this;
    this.onTouchMove(eventobject, x, y);
}

function AS_FlexContainer_a25b72e794ce42e485a5e65c38987c1c(eventobject, x, y) {
    var self = this;
    this.touchE();
}

function AS_FlexContainer_a2f32bdea9d24e478fc0d187580337fd(eventobject) {
    var self = this;
    if (this.view.rchTextDesc.isVisible === true) this.onClickDisappear(eventobject);
    else this.onClickDisplay(eventobject);
}

function AS_FlexContainer_a3420ba3c74c4613a1df14e738179744(eventobject, x, y) {
    var self = this;
}

function AS_FlexContainer_a50997ee7f55408aa79c99fa2eb188e9(eventobject, x, y) {
    var self = this;
    this.onTouchMove(eventobject, x, y);
}

function AS_FlexContainer_a9ea6652567141fd98b701763e3117cc(eventobject, x, y) {
    var self = this;
    this.touchE();
}

function AS_FlexContainer_aee0aae819d442f5a157b3bd7d7a66c6(eventobject) {
    var self = this;
    this.onClickDrag();
}

function AS_FlexContainer_b4e763c5b4874771b531dbce2c741a94(eventobject) {
    var self = this;
    // if(this.view.rchTextDesc.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_b99b1e4a1f3346d595de39e65013f621(eventobject) {
    var self = this;
    this.onLinkClick();
}

function AS_FlexContainer_ba19f2624d7144f1bd97d53218d5fbf4(eventobject, x, y) {
    var self = this;
}

function AS_FlexContainer_ba662a7edd9b4fb7ac8281eb6b8f758f(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_FlexContainer_be68ffac6fda4d4897e2279a13691756(eventobject) {
    var self = this;
    // if(this.view.lblCodeSnippet.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_be9f4165bb8542e1bdb45324370a23b3(eventobject) {
    var self = this;
    this.onClickBack();
}

function AS_FlexContainer_c132cce8f10e4953bcb50743356340ac(eventobject) {
    var self = this;
    // if(this.view.rchtextDoc.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_c22c85ea457543309d8ecd34b4f4e24d(eventobject) {
    var self = this;
    this.onLinkClick();
}

function AS_FlexContainer_c6c0379656664cb2a0dafd9fc1e53de4(eventobject, x, y) {
    var self = this;
    this.onTouchMove(eventobject, x, y);
}

function AS_FlexContainer_cbe32e647012499991f8509724729eef(eventobject) {
    var self = this;
    return self.openUptoHalf.call(this);
}

function AS_FlexContainer_ccab986fa3564ee8b81a22e835da7e30(eventobject, x, y) {
    var self = this;
    this.touchS(eventobject, x, y);
}

function AS_FlexContainer_cd6849a3547745ecb4ef774c869ef7a0(eventobject, x, y) {
    var self = this;
    this.slideMenu();
}

function AS_FlexContainer_d05b531c45404d7fa4ac2600b0862042(eventobject, x, y) {
    var self = this;
    this.onTouchMove(eventobject, x, y);
}

function AS_FlexContainer_d3b020c298744eb3b55a902a414ad796(eventobject) {
    var self = this;
    this.onClickDrag();
}

function AS_FlexContainer_d53e76a2dd634dad933d5de3606bd715(eventobject, x, y) {
    var self = this;
    this.touchS(eventobject, x, y);
}

function AS_FlexContainer_dd6a11e92f4d43ff8a75d5004b47d5db(eventobject) {
    var self = this;
    // if(this.view.rchtextDoc.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_dd70f9189f964521ab0b732ffa4a6998(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_FlexContainer_dfcb712ae0f0458eafc07679a002ca35(eventobject) {
    var self = this;
    this.onClickNext();
}

function AS_FlexContainer_e1669730b322410baf85128f8a821666(eventobject) {
    var self = this;
    alert("HIIIIIII");
}

function AS_FlexContainer_e24337ed5e6f49ee997192bfc21efa62(eventobject, x, y) {
    var self = this;
    this.onTouchMove(eventobject, x, y);
}

function AS_FlexContainer_eb6cae106dcf466695c488c29de077b4(eventobject, x, y) {
    var self = this;
    this.touchS();
}

function AS_FlexContainer_edd606b3f1ca4d11a8eee363db772f5f(eventobject, x, y) {
    var self = this;
    this.touchE();
}

function AS_FlexContainer_f639a6334dfa4fa9b4cfb810ee88ec3f(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_FlexContainer_ff0ec81ee7af44ada639a1adf607d793(eventobject) {
    var self = this;
    // if(this.view.rchTextDesc.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_g56f1e816e494b6ea6756d5d9675455a(eventobject) {
    var self = this;
    if (this.view.rchtextDoc.isVisible === true) this.onClickDisappear(eventobject);
    else this.onClickDisplay(eventobject);
}

function AS_FlexContainer_gb3bc412de0a4c2b83ba2a73dce525de(eventobject, x, y) {
    var self = this;
    this.touchS();
}

function AS_FlexContainer_h314be8536c14244aed44bb5da39740c(eventobject) {
    var self = this;
    this.closeWhenDone();
}

function AS_FlexContainer_i09a17c1f2574aa592a1331f17838ce8(eventobject) {
    var self = this;
    // if(this.view.lblCodeSnippet.isVisible === true)
    //   this.onClickDisappear(eventobject);
    // else
    //   this.onClickDisplay(eventobject);
    this.showAccord(eventobject.id);
}

function AS_FlexContainer_ib63995b130445c48e3b43d5c5d11cd4(eventobject) {
    var self = this;
    this.onClickPrev();
}

function AS_FlexContainer_j05301b9f2654e6fbbf1d3ea39390838(eventobject) {
    var self = this;

    function MOVE_ACTION____idc23375669a491c8b4fdbf176912265_Callback() {}
    self.view.flxToolbar.animate(kony.ui.createAnimation({
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

function AS_FlexContainer_j3751b01ae8c4468b03ef167c510daf2(eventobject) {
    var self = this;
    this.slideSubMenu();
}

function AS_FlexContainer_j9636170bdc043e594a0882b6ebd9139(eventobject) {
    var self = this;
    this.onClickBack();
}

function AS_Image_a32f3e4fe6334b9eb98a36d0783f1737(eventobject, x, y) {
    var self = this;
    this.openEmail();
}

function AS_Image_a73cb86faab348c1affaef628a9e0c2b(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_Image_c06f5621e6f94c888f848276aebe634c(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_Image_h6465d9468b54684b677079de0401911(eventobject, x, y) {
    var self = this;
}

function AS_Image_j8002bce6dda42d393ce6c62ac461f74(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_Label_a22a7b82cdb241c290e2e57081047a40(eventobject, x, y) {
    var self = this;
    this.onClickBack();
}

function AS_Label_b50e24207671442f9bda82cf0df4d2ff(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_Label_b8afa0b3a93d4ac3b6208cf93f3990ed(eventobject, x, y) {
    var self = this;
    if (this.view.rchTextDesc.isVisible == false) {
        this.view.rchTextDesc.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.rchTextDesc.setVisibility(false);
    }
}

function AS_Label_c3dd0719204149f180909c4205c9c244(eventobject, x, y) {
    var self = this;
}

function AS_Label_ca561815865a4d08bc4b54f86a881a83(eventobject, x, y) {
    var self = this;
}

function AS_Label_d01fad79d91a43bc974e3935559fc658(eventobject, x, y) {
    var self = this;
    if (this.view.lblCodeSnippet.isVisible == false) {
        this.view.lblCodeSnippet.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.lblCodeSnippet.setVisibility(false);
    }
}

function AS_Label_efcff953eb864aceaa4063fdbd22ea2c(eventobject, x, y) {
    var self = this;
    if (this.view.rchtextDoc.isVisible == false) {
        this.view.rchtextDoc.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.rchtextDoc.setVisibility(false);
    }
}

function AS_Label_fe54215d2167473483f1ed9c51e3ee54(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_Label_if86f7d629124e2b9f5284ff1d75f5ce(eventobject, x, y) {
    var self = this;
    this.onClickDrag();
}

function AS_NativeContainer_a5f4b7f951d5433182fffe67b91bb439(eventobject) {
    var self = this;
    this.fetchAndDisplayPDFiOS();
}

function AS_Segment_a69848b46ac74c27b36d6d7b27ba82d5(eventobject, sectionNumber, rowNumber) {
    var self = this;
    this.onRowClick();
}

function AS_Segment_ba8cafc4d85d4197bfa91cfc630b49cd(eventobject, sectionNumber, rowNumber) {
    var self = this;
    this.onRowClick();
}

function AS_Segment_edc0b6644b9240d1a4ee20e653e57e24(eventobject, sectionNumber, rowNumber) {
    var self = this;
    this.onRowClick();
}

function AS_Segment_i42ac9f0209e413cbc4ff8a8f37cd1f8(eventobject, sectionNumber, rowNumber) {
    var self = this;
    this.onRowClick();
}

function AS_Segment_i66174abcdf144cfbd6f6d3d078ae931(eventobject, sectionNumber, rowNumber) {
    var self = this;
    this.onRowClick();
}

function AS_Video_e64e162abe0349d6897d75fb6306c230(eventobject) {
    var self = this;
    this.onPreparedCallBack();
}

function AS_Video_f39ea21f76934082b1306f66a2d27f8d(eventobject) {
    var self = this;
    this.view.videoDemo.play();
}