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