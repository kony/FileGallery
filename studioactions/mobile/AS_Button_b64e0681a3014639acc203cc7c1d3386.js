function AS_Button_b64e0681a3014639acc203cc7c1d3386(eventobject) {
    var filter = kony.filter.createFilter();
    var img = kony.image.createImage("scenery.jpeg");
    var filterData = {
        "filterName": kony.filter.COLOR_INVERSION,
        "inputImage": img,
        "inputAngle": 0
    };
    filter.applyFilter(filterData);
    var imageObj = filter.getOutputImage();
    this.view.img.rawBytes = imageObj.getImageAsRawBytes();
}