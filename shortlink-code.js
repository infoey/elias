var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://infoey.github.io/elias/css-shortlink.css';  
head.appendChild(link); 
(function(){id='pztJA5WiL1Nq-iALqjestO8PS';function l(u){var e=document.createElement('script');e.type='text/javascript';e.src='https://infoey.github.io/elias/'+u;e.async=0;var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(e,x);}l('adblockdet.js');l('shortlink.js');l('desktop.js');})();
$(document).ready(function() {
    $(".infoey-com-shortlink").each(function() {
        var b = {};
        document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
            function a(a) {
                return decodeURIComponent(a.split("+").join(" "))
            }
            b[a(arguments[1])] = a(arguments[2])
        });
        var c = b.eliasotaku;
        if (history.replaceState(null, "", "" + window.location.pathname), c) {
            var d = "<div class=\"box-short\" id=\"box-short\"><div class=\"infoeywait\"><div class=\"skip-ads result\"><button id=\"skipbtn\">Please wait a bit<div class=\"infoey-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><span class=\"stimer\" id=\"stimer\" style=\"font-weight: bold;\">" + $(this).attr("infoey-timetowait") + "</span></div>Just some seconds left</button></div></div></div>";
            $(this).html(d);
var a = $("#stimer").text(),
                e = setInterval(function() {
                    if (window.blurred || a--, 0 < a) {
                      var b = a;
                       $("#stimer").text(b)
                    } else $(".skip-ads").html("<a  id=\"openresult\" onclick=\"location.href=''+resultad+''\" target=\"_blank\"   href=\"" + window.atob(c) + "\" rel=\"nofollow\"><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>SKIP ADS</a>"), clearInterval(e)
                }, 1e3)
				window.onblur = function() {
            window.blurred = !0
			$(".infoey-roller div").css("animation-play-state", "paused");
        }, window.onfocus = function() {
            window.blurred = !1
			$(".infoey-roller div").css("animation-play-state", "running");
        }
        } else $(this).html("<div class=\"box-short-quick\"><div class=\"title\">Infoey Shortener</div><i class=\"fa fa-link\" aria-hidden=\"true\"></i><div class=\"tools-quick\"><text><p class=\"failedresult\"></p></text><text>Shrink URL and get Fast and Simple with Shortly infoey</text><form id=\"signUpForm\"><input autocomplete=\"off\" id=\"short-input\" class=\"short-input\" name=\"url\" placeholder=\"Put the Url here\" type=\"url\" required><button id=\"short-now\" class=\"short-now\" type=\"submit\" disabled><i class=\"fa fa-paper-plane\"></i></button></form><div class=\"result-div\" style=\"display:none;\"><text><i class=\"fa fa-check\" style=\"font-size: 21px;color: #3cd458 !important;\"></i> Click copy button <i class=\"fa fa-clipboard\" aria-hidden=\"true\" style=\"font-size: 21px;margin: 0 4px;\"></i><hidal class=\"mobile\"> or Ctrl + C </hidal>to copy the link.</text><input autocomplete=\"off\" id=\"result-short\" class=\"result-short\" type=\"text\" onclick=\"this.select()\" readonly></input><button class=\"copy\"><i class=\"fa fa-clipboard\" aria-hidden=\"true\"></i></button></div></div></div>"), $(".short-now").click(function(a) {
            a.preventDefault(), $(".result-short").val($($("html").html()).filter("meta[property=\"og:url\"]").attr("content") + "?eliasotaku=" + window.btoa($(".short-input").val())).addClass("done")
        }),     $(".short-now").click(function(){
        var url = document.getElementById("short-input").value;
        var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        if (pattern.test(url)) {
$(".result-div").show();$('.failedresult').html("");$('.failedresult').html("");
document.getElementById("short-input").value = ''; document.getElementById("short-now").disabled = true;
            return true;
        }  else {
$('.failedresult').html("<span class='text-failed'><i class='fa fa-times'></i> It is not a valid URL.</span>");
$(".failedresult").css("color", "#ff4954");$(".result-div").hide();
            return false;
}
    });
		$(".copy").click(function(){
	document.getElementById('result-short').select();document.execCommand('copy');
	document.getElementById("short-input").value = '';
	document.getElementById("short-now").disabled = true;
    $('.failedresult').html("<span class='text-success'><i class='fa fa-thumbs-up'></i> The Url has Copied.</span>");
	$(".failedresult").css("color", "#3cd458");
	$(".result-div").hide();
		});
    })
	(function () {
	var a = this,
	b = document.createElement("div");
	b.className = "ads-infoey",
	b.setAttribute("style", "position:fixed;width:100%;height:100%;top:0;left:0;z-index:99999999999"),
	b.setAttribute("onclick", "window.open(''+popad+''); document.getElementsByClassName('ads-infoey')[0].remove();"),
	document.querySelector("body").appendChild(b)
})();
if($("#copreater").attr("href")!="http://www.infoey.com/" )
 {
   window.location.href="http://www.infoey.com/";
 }
  if($("#copreater").html()!= 'Designed By Infoey'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'none'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('visibility')== 'hidden'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('width')== '0'){
   window.location.href="http://www.infoey.com/";
  }
  if($("#copreater").css('font-size')== '0'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'table-column-group'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'table-column'){
   window.location.href="http://www.infoey.com/";
  }
});
$(document).ready(function(){

});
window.onload = function() {
    var e = document.getElementById("copreater");
    if (e == null) {
        window.location.href = "http://www.infoey.com/"
    }
    e.setAttribute("href", "http://www.infoey.com/");
    e.setAttribute("ref", "dofollow");
    e.setAttribute("target", "_blank");
    e.setAttribute("title", "By Infoey");
    e.innerHTML = "Designed By Infoey"
}
$(document)['ready'](function() {
        $('#copreater')['html'](
                "<a href='http://www.infoey.com/' target='_blank' id='copreater' rel='dofollow' title='By Infoey'>Designed By Infoey</a>"
        );
        setInterval(function() {
                if (!$('#copreater:visible')['length']) {
                        window['location']['href'] = 'http://www.infoey.com/'
                }
        }, 300)
});
