function AS_Label_b2711396dde9416ca9b6584a248aef1e(eventobject, x, y) {
    if (this.view.rchtextDoc.isVisible == false) {
        this.view.rchtextDoc.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.rchtextDoc.setVisibility(false);
    }
}