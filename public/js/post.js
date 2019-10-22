$(document).ready(function(){


    
    $('#postForm').submit((event)=>{
        event.preventDefault()
        let postTitle = $('#postTitle').val();
        let postBody = $('#postBody').val();
        var userid = localStorage.getItem('userid');
        var ln = localStorage.getItem('ln');
        var newln = ln.charAt(0).toUpperCase()+ln.slice(1);
        var fn = localStorage.getItem('fn');
        var newfn = fn.charAt(0).toUpperCase()+fn.slice(1);
        var name = newfn + " " + newln;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        
           $.ajax({
            url: 'http://localhost:3000/posts',
            method: 'post',
            data: {
                postTitle,
                postBody,
                userid,
                dateTime,
                name
                
            }
    
        }).done((response) =>{
            console.log(response)
            //
            alert('Post has been Uploaded');
            document.location.reload();   
                return;
            
            
        })
        
       
     });







        let userid = localStorage.getItem('userid');

       console.log(userid);
    
            $.ajax({
                
                url:`http://localhost:3000/posts?userid=${userid}`,
                method: 'get',
        
        
            }).done(function(response){
        
                for(let item of response){
                    
                    $('#allPostDiv').append(`
                
                
                <div class="Allpost"><br>

                <a href="#" id="${item.id}" onClick="viewPost(this.id)" ><h3>${item.postTitle}</h3></a>
                <p>${item.postBody.slice(0,298)}...<br> <span><b>${item.dateTime}</b></span></p>
                <p><a href="#" id="${item.id}" onClick="editItem(this.id)" class= "btn btn-outline-primary col-md-2">edit</a>
                <a href="post.html" id="${item.id}" onClick="editDelete(this.id)" class= "btn btn-outline-danger col-md-2">delete</a></p>
      
              </div>
                
                `); 
                }
        
                 
        
        
            });
        
  

});

const editDelete = clicked => {
    $.ajax({
        url: `http://localhost:3000/posts/${clicked}`,
        method: `delete`,
        
    })
    }
    
    const editItem = clicked => {
       
            console.log(clicked);
            sessionStorage.setItem('pId', clicked);
            window.location = "http://localhost:3000/edit.html"; 

    }

    const viewPost = clicked => {
       
        console.log(clicked);
        sessionStorage.setItem('pId', clicked);
        window.location = "http://localhost:3000/viewpost.html"; 

    }