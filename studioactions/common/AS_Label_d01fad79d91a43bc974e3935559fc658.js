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