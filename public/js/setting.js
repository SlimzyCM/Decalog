$(document).ready(function(){


    $('#updateForm').submit((event)=>{
      event.preventDefault()
      let userName = $('#userName').val();
      let firstName = $('#firstName').val();
      let lastName = $('#lastName').val();
      let bio = $('#bioPost').val();
      let photoLink = $('#photoLink').val();
      
      var userid = localStorage.getItem('userid');
  
         $.ajax({
          url: 'http://localhost:3000/users/'+ userid,
          method: 'patch',
          data: {
              userName,
              firstName,
              lastName,
              bio,
              photoLink,
              userid
          }
  
      }).done((response) =>{
          console.log(response); 
          
          var userid = localStorage.getItem('userid');
      $.ajax({
          url: 'http://localhost:3000/users/'+ userid,
          method: 'get',
      })
          .done((res) =>{
          
          localStorage.setItem('ln', res.lastName);
          localStorage.setItem('fn', res.firstName);
          localStorage.setItem('bio', res.bio);
          localStorage.setItem('photoLink', res.photoLink);
                  
          })
  
          alert('Update Successful.');
          document.location.reload();   
          
      })
   })

   $('#logOut').click(function(){

    localStorage.clear();
    window.location ="login.html";


});


});