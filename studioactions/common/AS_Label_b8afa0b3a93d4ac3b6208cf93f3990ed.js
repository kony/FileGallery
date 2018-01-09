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