$(document).ready(function(){
    
    $('#commentButton').click(function(){
        event.preventDefault()
        document.getElementById('comment_error').innerHTML="";
        var d=new Date()

        var monthname= new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
        var newDate = d.getDate() + " " + monthname[d.getMonth()] + "," + " " + d.getFullYear();
        var time = new Date();
        var newTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        var dateTime = newDate + " " + newTime;
        let comment = $('#commentBox').val();
        if((comment !== "") && (comment.length > 1)){
            

            var userid  = 0;
            var postId = sessionStorage.getItem('pId');
            var commenter = "anonymous"

            if (localStorage.getItem('userid') !== null){
                userid = localStorage.getItem('userid');

                if(localStorage.getItem('fn') !== "undefined"){
                    commenter = localStorage.getItem('fn');
                }else{
                    commenter = '@' + localStorage.getItem('un'); 
                }
            } 
            console.log(userid);
            $.ajax({
                url:'http://localhost:3000/comments',
                method: 'post',
                data: {
                    comment,
                    dateTime,
                    commenter,
                    postId,
                    userid
                }
            }).done((res) =>{
                console.log(res);
                document.location.reload();  
                document.getElementById('commentPost').focus();


            })
            
            return;

        } else{
            document.getElementById('comment_error').innerHTML="Enter a valid Comment";
            return;
        }
        


    })

     var pId = sessionStorage.getItem('pId');
    

    $.ajax({
        url: `http://localhost:3000/comments?postId=${pId}`,
        method: `get`,
        
        }).done((response) =>{
            for(let item of response){
                $('#dropComment').append(`
                    <div class="">
                        <br><div id="commentPost">
                                <span class="nameEdit">${item.commenter}</span> <div class="spantext">- ${item.dateTime}</div>
                                <div class="textcomment">${item.comment}</div> 
                            </div>
                    </div>

                `);
            
            }
        })


});

    