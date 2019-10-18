$(document).ready(function(){   
    $('#loginError').hide();             
    
    $('#myLoginForm').submit((event)=>{
        event.preventDefault()
        let loginEmail = $('#inputEmail').val();
        let loginPassword = $('#inputPassword').val();
        console.log(loginEmail, loginPassword)
    
        $.ajax({
            url: 'http://localhost:3000/users',
            method: 'get',
    
        }).done((response) =>{
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                if(response[i].email === loginEmail && response[i].password === loginPassword){
                    localStorage.setItem('userid', response[i].id);
                    localStorage.setItem('ln', response[i].lastName);
                    localStorage.setItem('fn', response[i].firstName);
                    localStorage.setItem('bio', response[i].bio);
                    localStorage.setItem('photoLink', response[i].photoLink);
                    window.location = "http://localhost:3000/profile.html"; 
                    return;
                }     
                
            }
        
            $('#loginError').fadeIn();
            $('#loginError').fadeOut(4000);
            return;
        })
    })
    
});    