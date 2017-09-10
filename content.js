var currentUrl = location.href;
if (currentUrl.match(/\/bj\/ershoufang\/\d+\.html/i)) {
    console.log("Matched:" + currentUrl);
    var nextUrl = currentUrl.replace(/m\.lianjia\.com\/bj\//i, "bj.lianjia.com/");
    console.log(nextUrl);
    window.location = nextUrl;
}


