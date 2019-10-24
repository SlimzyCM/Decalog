    $(document).ready(function(){

    
            $.ajax({
                
                url:`http://localhost:3000/posts`,
                method: 'get',
        
        
            }).done(function(response){
        
                for(let item of response){
                console.log(item);
                    
                    $('#allPostDiv').append(`
                
                
                <div class="Allpost"><br>
                <a href="#" id="${item.id}" onClick="viewPost(this.id)"><h4>${item.postTitle}</h4></a>
                <p>${item.postBody.slice(0,195)}...</p>
                <span class="timeDate">${item.name}</span>,
                <span class="timeDate">${item.dateTime}</span> 
                
                
              </div>
                
                `); 
                }
        
                 
        
        
            });
        
        
            var pId = sessionStorage.getItem('pId')


            $.ajax({
                url: `http://localhost:3000/posts/${pId}`,
                method: `get`,
                
                }).done((response) =>{
                    $('#viewpost').append(`
                    <div class="header"><h3>${response.postTitle}</h3></div>
                        <div class="timeDate" ><p>Published on <span >${response.dateTime} </span> </p></div>
                        <div class="content">${response.postBody}</div>
                    `);
                    
        
                })
            
            
}); 

    

    const viewPost = clicked => {
       
        console.log(clicked);
        sessionStorage.setItem('pId', clicked);
        if (localStorage.getItem('userid') == null){
            window.location = "http://localhost:3000/explore2.html"; 
            return;
            } 
            window.location = "http://localhost:3000/explore2logged.html"; 

    }