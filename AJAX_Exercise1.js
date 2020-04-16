// 1) button 1
('btn1').on ('click', function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/post', function(posts){
    posts.forEach( post =>{
        let postText= JSON.stringify(post);
        let p = $('<p></p>');
        p.tect(postText)
        $('btn1'). append(p)
     });


        console.log(posts);
    })

})



// 2) button 2
$('#btn2').on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/post/10', function(post){
    console.log(post);
    let p = $('<p></p>');
    p.text(post.body);
    $('btn2').append(p);
    console.log('got post with ID 10')
})

});

// 3) button 3 
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/post/12/comments', function(data){
	console.log(data);
});
