# img-dynamic
looks for img-dynamic images and sets them to the appropriate image src depending on screen width. Intended for use within bootstrap
hides the image if no appropriate image found
fires on resize as well as on load of the script

## usage:
```
<img src="http://example.net/xs.jpg" class="img-dynamic"
    data-xs-src="http://example.net/xs.jpg"
    data-sm-src="http://example.net/sm.jpg"
    data-md-src="http://example.net/md.jpg"
    data-lg-src="http://example.net/lg.jpg"/>
```
