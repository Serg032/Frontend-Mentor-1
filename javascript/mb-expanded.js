window.addEventListener("load", () => {
  const features = document.getElementById("fe");
  const down = document.getElementById("down");
  const up = document.getElementById("up");
  const featuresDisplay = document.getElementById("featu-dis");

  const showFeatures = () => {
    down.style.display = "none";
    up.style.display = "block";
    featuresDisplay.style.display = "block";
    console.log("db");
  };

  const hideFeatures = () => {
    down.style.display = "block";
    up.style.display = "none";
    featuresDisplay.style.display = "none";
    console.log("db");
  };

  features.addEventListener("click", showFeatures);
  down.addEventListener("click", showFeatures);
  up.addEventListener("click", hideFeatures);

  const companyP = document.getElementById("para-comp");
  const compaDown = document.getElementById("down-comp");
  const compaUp = document.getElementById("up-comp");
  const compaDisplay = document.getElementById("comp-dis");

  const showCompDisplay = () => {
    compaDisplay.style.display = "block";
    compaDown.style.display = "none";
    compaUp.style.display = "block";
  };

  const hideCompDisplay = () => {
    compaDisplay.style.display = "none";
    compaDown.style.display = "block";
    compaUp.style.display = "none";
  };

  companyP.addEventListener("click", showCompDisplay);
  compaDown.addEventListener("click", showCompDisplay);
  compaUp.addEventListener("click", hideCompDisplay);
});
