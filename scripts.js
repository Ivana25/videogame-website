$("#click-button").click(function(){
    const insertGame = $("#games").val()
$.ajax({
    url: `https://api-endpoint.igdb.com/${insertGame}/`,
    success: function(data){
        console.log(response.data)
        $("#").html(data.game)
        const pic = data.-.-
        $("#pic").attr("src", pic)
       
    },
    error: function(request, error)
    {
       alert("please name a videogame")
    }
});
})