function setCookie() {
    cname = document.getElementById("txtusername").value;
    cquote = document.getElementById("txtquote").value;
    cvisits += 1;
    document.cookie = "UserName="+cname+"; Quote="+cquote+"; VisitCnt="+cvisits+"; ";
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var userName=getCookie("UserName");
    var quote=getCookie("Quote");
    var visits=getCookie("VisitCnt");
    document.getElementById("txtusername").defaultValue = userName;
    document.getElementById("txtquote").defaultValue = quote;
}