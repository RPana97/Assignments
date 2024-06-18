let photoSlideShow = {

    photoList : [`photo 1.jpg`, `photo 2.jpg`, `photo 3.jpg`],
    currentPhotoIndex : 0,

    nextPhoto : function () {
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
            console.log (this.photoList[this.currentPhotoIndex]);
        } else {
            console.log (`End of slideshow`);
        }
    },

    prevPhoto : function () {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log (this.photoList[this.currentPhotoIndex]);
            } else {
                console.log (`End of slideshow`);
            };
    },
    getCurrentPhoto : function() {
        return (this.photoList[this.currentPhotoIndex]);
    }
}

console.log (photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
console.log (photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
console.log (photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
console.log (photoSlideShow.getCurrentPhoto());
