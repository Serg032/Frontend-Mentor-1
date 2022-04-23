window.addEventListener("load", () => {
  const menu = document.getElementById("collapse-mb");
  const bars = document.getElementById("bars");
  const cross = document.getElementById("cross");

  const featuresDisplay = document.getElementById("featu-dis");
  const compaDisplay = document.getElementById("comp-dis");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const compaDown = document.getElementById("down-comp");
  const compaUp = document.getElementById("up-comp");

  const showMenu = () => {
    menu.style.transform = "translate(0)";
  };

  const hideMenu = () => {
    menu.style.transform = "translate(-100%)";
    compaDisplay.style.display = "none";
    featuresDisplay.style.display = "none";
    up.style.display = "none";
    down.style.display = "block";
    compaDown.style.display = "block";
    compaUp.style.display = "none";
  };

  bars.addEventListener("click", showMenu);

  cross.addEventListener("click", hideMenu);
});
