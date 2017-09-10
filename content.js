console.log("Jump to desktop page");
console.log(location.href);

var currentUrl = location.href;
var pstr = "m.lianjia.com/bj/";
var i = currentUrl.indexOf(pstr);
if (i != -1) {
    var nextUrl = "https://bj.lianjia.com/" + currentUrl.substr(i + pstr.length);
    console.log(nextUrl);
    window.location = nextUrl;
}

