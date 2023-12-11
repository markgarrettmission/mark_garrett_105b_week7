"use strict";

onload = function getSize()
{
    let w = this.document.documentElement.clientWidth;
    let h = this.document.documentElement.clientHeight;
    this.document.getElementById('wh').innerHTML = "<h1>" +  "width: " + w + "px" + "<br>" + "height: " + h + "px" + "</h1>"
    window.addEventListener('resize', getSize);
}
