# Photowall

A light-weight js plugin to display beauriful photo gallery.

Copy https://github.com/creotiv/jquery-photowall updated to make it compatible with JQuery 3.

## How To Use
Include the JQuery & Photowall library in HEAD section.
```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="lib/jquery-photowall.js"></script>
<link rel="stylesheet" type="text/css" href="lib/jquery-photowall.css">
```

Add HTML as below.
```
<div id="photowall">
    <div class="body"></div>
</div>
```

Write a jquery script to load images & format them as photowall.
```
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
    lineMaxHeight: 150, // Max set height of pictures line.
    lineMaxHeightDynamic: false,  // Dynamic lineMaxHeight.
    baseScreenHeight: 600  // Base screen size from wich calculating dynamic lineMaxHeight.
});

var imgs = [1, 2, 3, 4];
var photos = {}
$.each(imgs, function(i, value) {
    var img_src = 'assets/images/' + value + '.jpg';
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
```
And you are done!

Do you like it?

<a href="https://www.buymeacoffee.com/tanmayk" target="_blank" style="margin-top: 18px; display: block; !important;"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="max-width: 210px !important;" ></a>
