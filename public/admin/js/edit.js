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
        var d=new Date()
        var monthname= new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
        var newDate = d.getDate() + " " + monthname[d.getMonth()] + "," + " " + d.getFullYear();
        var time = new Date();
        var newTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        var dateTime = newDate + " " + newTime;
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
            window.location = "http://localhost:3000/admin/post.html"; 

            
            
            
        })

    });






});
