$("#lookUp").click(function(){
    const gameInput = $("#game").val()
    $.ajax({
        url: `https://api-endpoint.igdb.com/games/?search=${gameInput}&fields=name,release_dates,summary,rating,screenshots&limit=5`,
        headers: {
            "user-key": "d2c7cfa12d4f83559bf5685dcba68ba6",
             Accept: "application/json",
        }
    })
        .then(response => {

        //  console.log(response);
        response.forEach(element => {
            //  console.log(response)
                // console.log(response)

   let title = $("<h3>" + element.name + "<h3>")
   $(document.body).append(title)
   title.addClass('gameTitle')

   let summary = $("<p>"+ element.summary + "<p>")
   $(document.body).append(summary)
   title.addClass('gameTitle')

   let rating = $("<p>" + element.rating + "<p>")
   $(document.body).append(rating)
   title.addClass('gameTitle')

   let pics = $("<p>" + element.screenshots + "<p>")
   $(document.body).append('screenshots')
   title.addClass('gameTitle')

  let release_dates = element.release_dates      
  release_dates.forEach(element => {
        console.log(element.human)

   let release_dates = $("<p>" + element.human + "<p>")
   $(document.body).append(release_dates)
   console.log(element.human)
   title.addClass('gameTitle')
              })
         })
       
              .catch(e => {
                alert("This is not a videogame. Please try again.", e);
              })
              
});
})