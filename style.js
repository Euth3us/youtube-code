/*This script was developed by Codegena.com
ALL RIGHTS RESERVED
*/
var i, c, y, v, s, n;
var im = new Array();
v = document.getElementsByClassName("youtube_codegena");

for (n = 0; n < v.length; n++) {
  im[n] = v[n].hasAttribute("src") ? v[n].getAttribute("src") : "http://i.ytimg.com/vi/" + v[n].id + "/hqdefault.jpg";
}

if (v.length > 0) {
  s = document.createElement("style");
  s.type = "text/css";
  s.innerHTML = '.youtube_codegena {background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube_codegena .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube_codegena .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("https://blogger.googleusercontent.com/img/a/AVvXsEgAA1bPSWDiwVKrXA8OyC3fXlthrrLbrB8BjfbGyAPkBwXY60FRwPrvFj-PI47M_Di0-I6De3bTwNQUi0aSK_rucKl7z8Ngn-OmiP5MWnv-kDm23XWZb1H6UkrWPp-cas3mlpsHCaYnliMssQw3IBXCmaQnJT_acX9DHf0lv6gMhF_PnXcPy5VhkaOE=s240") no-repeat}';
  document.body.appendChild(s);
}

for (n = 0; n < v.length; n++) {
  y = v[n];
  i = document.createElement("img");
  i.setAttribute("src", im[n]);
  i.setAttribute("class", "thumb");
  c = document.createElement("div");
  c.setAttribute("class", "play");
  y.appendChild(i);
  y.appendChild(c);
  y.onclick = function() {
    var t = document.createElement("iframe");
    t.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.id + param(this));
    t.style.width = this.style.width;
    t.style.height = this.style.height;
    this.parentNode.replaceChild(t, this);
  }
};
function param(x){
  if (x.getAttribute("data-params") !== null) {
      return x.getAttribute("data-params");
    } else {
      return "?autoplay=1";
     
    }
}
