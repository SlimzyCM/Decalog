$(document).ready(function(){
    
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
