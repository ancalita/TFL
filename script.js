
$( "#search-bethnal-tube" ).on( "click", function() {
  // api request to be sent on button click


  $.getJSON( 'https://api.tfl.gov.uk/StopPoint/940GZZLUBLG/arrivals?direction=inbound', function (data){
  //leave this blank for now but inside this function we will write the code to manipulate the API requests
  var items = []
  var unsorted = []
  data.map(function(arrival){
    //console.log(arrival.destinationName)
    //console.log(arrival.timeToStation)
    unsorted.push({name: arrival.destinationName, number: arrival.timeToStation})
  })

  unsorted.sort(function(a,b){
    return a.number-b.number
  })
  
  /*data.map(function(arrival){
    console.log(arrival.destinationName)
    var duration = moment.duration(arrival.timeToStation, 'seconds')
    var minutes = duration.asMinutes();
    var minutesHumanized = moment.duration(minutes, "minutes").humanize()
    console.log(minutesHumanized);
    items.push("<li>"+ arrival.destinationName + ": " + minutesHumanized + "</li>")
  })*/

  for (i=0;i<unsorted.length; i++){
    var duration = moment.duration(unsorted[i].number, 'seconds')
    var minutes = duration.asMinutes();
    var minutesHumanized = moment.duration(minutes, 'minutes').humanize()
    items.push("<li>"+ unsorted[i].name + ": " + minutesHumanized + "</li>")
  }

  $( "<p/>", {
      //"class": "my-new-list",
      html: items.join("")
    }).appendTo( "main" )


  });









});
