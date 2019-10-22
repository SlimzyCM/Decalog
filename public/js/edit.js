$(document).ready(function(){
    
    var pId = sessionStorage.getItem('pId')


    $.ajax({
        url: `http://localhost:3000/posts/${pId}`,
        method: `get`,
        
    }).done((response) =>{
    

        document.querySelector('#editpostTitle').value = response.postTitle; 
        document.querySelector('#editpostBody').value = response.postBody; 
        
    });

    $('#editButton').click(function(){
        event.preventDefault()

        let postTitle = $('#editpostTitle').val();
        let postBody = $('#editpostBody').val();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        var ln = localStorage.getItem('ln');
        var newln = ln.charAt(0).toUpperCase()+ln.slice(1);
        var fn = localStorage.getItem('fn');
        var newfn = fn.charAt(0).toUpperCase()+fn.slice(1);
        var name = newfn + " " + newln;

        $.ajax({
            url : `http://localhost:3000/posts/${pId}`,
            method: 'patch',
                data: {
                    postTitle,
                    postBody,
                    dateTime,
                    name

                }
            
        }).done((response) =>{
            console.log(response)
            //
            alert('Post has been Updated');
            window.location = "http://localhost:3000/post.html"; 

            
            
            
        })

    });






});
