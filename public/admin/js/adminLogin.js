$(document).ready(function(){   
    //$('#loginError').hide();             
    
    $('#adminLoginForm').submit((event)=>{
        event.preventDefault()
        let loginUsername = $('#inputUsername').val();
        let loginPassword = $('#inputPassword').val();
        console.log(loginUsername, loginPassword)
    
        $.ajax({
            url: 'http://localhost:3000/users?type=admin',
            method: 'get',
    
        }).done((response) =>{
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                if(response[i].userName === loginUsername && response[i].password === loginPassword){
                    localStorage.setItem('userid', response[i].id);
                    localStorage.setItem('ln', response[i].lastName);
                    localStorage.setItem('fn', response[i].firstName);
                    localStorage.setItem('bio', response[i].bio);
                    localStorage.setItem('photoLink', response[i].photoLink);
                    localStorage.setItem('un', response[i].userName);
                    localStorage.setItem('type', response[i].type);
                    window.location = "http://localhost:3000/admin/profile.html"; 
                    return;
                }     
                
            }
        
            //document.getElementById('loginError').style.display = "block";
            $('#loginError').fadeIn();
            $('#loginError').fadeOut(4000);
            return;
        })
    })
    
});    