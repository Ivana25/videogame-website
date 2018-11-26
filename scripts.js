$("#lookUp").click(function(){
    const gameInput = $("#game").val()
    $.ajax({
        url: `https://api-endpoint.igdb.com/games/?search=${gameInput}&fields=name,release_dates,summary&limit=5`,
        headers: {
            "user-key": "d2c7cfa12d4f83559bf5685dcba68ba6",
             Accept: "application/json",
        }
    })
        .then(response => {

        response.forEach(element => {

   let title = $("<h3>" + element.name + "<h3>")
   $(document.body).append(title)
   title.addClass('gameTitle')

   let summary = $("<p>"+ element.summary + "<p>")
   $(document.body).append(summary)
   summary.addClass('gameTitle')
   
//    let rating = $("<p>" + element.rating + "<p>")
//    $(document.body).append(rating)
//    rating.addClass('reviews')
   
//    let screenshots = $("<p>" + element.screenshots + "<p>")
//    $(document.body).append(screenshots)
//    screenshots.addClass('gameTitle')
   
   let release_dates = element.release_dates      
   release_dates.forEach(element => {

   let release_dates = $("<p>" + element.human + "<p>")
   $(document.body).append(release_dates)
   release_dates.addClass('dates')
              })
         })
       
              .catch(e => {
                alert("This is not a videogame. Please try again.", e);
              })
              
})
});