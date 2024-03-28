//OnReady function - runs when pages complete loading
$w.onReady(function () {
  $w("#txtHeading").onClick((event) => {
    $w("#txtHeading").text = "Hi there dude. Im from another branch";
    // $w("#text5").text = "look, I am also a different text from another branch";
  }); // txtHeading OnClick function Ends
}); //Onready Closed
