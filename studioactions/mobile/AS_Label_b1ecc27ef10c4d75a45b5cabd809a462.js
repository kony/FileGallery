function AS_Label_b1ecc27ef10c4d75a45b5cabd809a462(eventobject, x, y) {
    if (this.view.rchTextDesc.isVisible == false) {
        this.view.rchTextDesc.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.rchTextDesc.setVisibility(false);
    }
}