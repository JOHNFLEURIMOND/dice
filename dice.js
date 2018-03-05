function getRolls(zebra, party) {
  console.log(zebra, party)
  for (var count = 0; count < zebra; count++) {
    var num = Math.ceil(Math.random() * party);
    $("ol").append("<li>" + num + "</li>");

  }
}




$("form").on("submit", function(e) {
  e.preventDefault();
  $("li").remove();
  var numOfDice = $(".numOfDice").val();
  var numOfSides = $(".numOfSides").val();

  getRolls(numOfDice, numOfSides);


});