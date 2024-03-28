//OnReady function - runs when pages complete loading
$w.onReady(function () {
  $w("#txtHeading").onClick((event) => {
    $w("#txtHeading").text = "Hi there";
  }); // txtHeading OnClick function Ends
}); //Onready Closed
