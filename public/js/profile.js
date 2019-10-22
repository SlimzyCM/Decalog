function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
    document.getElementById('main').style.width= "1000px";

    }

    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "10px";
    document.getElementById('main').style.width= "90%";

    }

$(document).ready(function(){

  var ln = localStorage.getItem('ln');
  var fn = localStorage.getItem('fn');
  var bio = localStorage.getItem('bio');
  var photoLink = localStorage.getItem('photoLink');
  console.log("*" + photoLink + "*");



    if (ln !== "undefined"){
        ln = ln.toUpperCase();
        fn = fn.toUpperCase();
        document.getElementById("member").innerHTML = ln + ' ' + fn;
    }

    if ((photoLink !== "") && (photoLink !== "undefined")){
         document.getElementById("myImg").src = photoLink; 
    }
    if (bio !== "undefined"){
        document.getElementById("bio").innerHTML = bio;
        return;
    }
 
});    