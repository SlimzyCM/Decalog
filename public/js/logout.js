$(document).ready(function(){


    $('#logOut').click(function(){

        localStorage.clear();
        window.location ="login.html";


    });


    $('#logOutE').click(function(){

        localStorage.clear();
        window.location ="explore.html";


    });
    $('#logOutE2').click(function(){

        localStorage.clear();
        window.location ="explore2.html";


    });
});
