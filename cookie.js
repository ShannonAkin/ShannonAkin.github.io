var visits;
var userName = "";
var quote = "";

function setCookie() {
    cname = document.getElementById("txtusername").value;
    cquote = document.getElementById("txtquote").value;
    visits += 1;
    var mystring = "UserName="+cname+",Quote="+cquote+",VisitCnt="+visits;
    document.cookie = mystring;
    alert("Thank You for registering!");
    window.location.href="index.html";
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(',');
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
    userName=getCookie("UserName");
    quote=getCookie("Quote");
    visits=getCookie("VisitCnt");
    
    if(userName != ""){
	alert(userName);
	document.getElementById("txtwelcome").style.display = "block";
	document.getElementById("txtusername").defaultValue = userName;
    	document.getElementById("txtquote").defaultValue = quote;
    } else {
	document.getElementById("txtwelcome").style.display = "none";
	document.getElementById("txtusername").defaultValue = "Please Register";
    	document.getElementById("txtquote").defaultValue = "";
    }
}