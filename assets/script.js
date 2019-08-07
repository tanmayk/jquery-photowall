$(document).ready(function() {

  PhotoWall.init({
    el: '#photowall',  // Gallery element.
    zoom: true,  // Use zoom.
    zoomAction: 'mouseenter',  // Zoom on action.
    zoomTimeout: 500,  // Timeout before zoom.
    zoomImageBorder: 5,  // Zoomed image border size.
    zoomDuration: 100,  // Zoom duration time.
    showBox: true, // Enable fullscreen mode.
    showBoxSocial: false,  // Show social buttons.
    padding: 5,  // padding between images in gallery.
    lineMaxHeight: 150, // Max set height of pictures line
    lineMaxHeightDynamic: false,  // Dynamic lineMaxHeight.
    baseScreenHeight: 600  // Base screen size from wich calculating dynamic lineMaxHeight.
  });

  var imgs = [1, 2, 3, 4];
  var photos = {}
  $.each(imgs, function(i, value){
    var img_src = '/assets/images/' + value + '.jpg';
    photos[value] = {
      id: value,
      img: img_src,
      width: 100,
      height: 100,
      th: {
        src: img_src,
        width: 100,
        height: 100,
        zoom_src: '',
        zoom_factor: 1.5
      }
    };
  });
  PhotoWall.load(photos);
});
