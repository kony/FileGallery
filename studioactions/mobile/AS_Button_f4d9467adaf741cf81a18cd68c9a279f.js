function AS_Button_f4d9467adaf741cf81a18cd68c9a279f(eventobject) {
    if (this.view.sgmtAPI.isVisible === true) {
        this.onClickDrag();
    } else {
        this.view.flxFullScreen.setVisibility(false);
        this.view.sgmtAPI.setVisibility(true);
    }
}