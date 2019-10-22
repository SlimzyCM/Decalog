//$(document).ready(function(){


    $(document).ready(function(){


        let userid = localStorage.getItem('userid');

       console.log(userid);
    
            $.ajax({
                
                url:`http://localhost:3000/posts`,
                method: 'get',
        
        
            }).done(function(response){
        
                for(let item of response){
                console.log(item);
                    
                    $('#allPostFullDiv').append(`
                
                
                <div class="Allpost"><br>
                <a href="#" id="${item.id}" onClick="viewPost(this.id)"><h4>${item.postTitle}</h4></a>
                <p>${item.postBody.slice(0,195)}...</p>
                <span class="timeDate">${item.name}</span>,
                <span class="timeDate">${item.dateTime}</span> 
                
                
              </div>
                
                `); 
                }
        
                 
        
        
            });
        
        
    
       
    });

    const viewPost = clicked => {
       
        console.log(clicked);
        sessionStorage.setItem('pId', clicked);
        window.location = "http://localhost:3000/viewpost.html"; 

    }