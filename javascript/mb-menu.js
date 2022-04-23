window.addEventListener("load", () => {
  const menu = document.getElementById("collapse-mb");
  const bars = document.getElementById("bars");
  const cross = document.getElementById("cross");

  const showMenu = () => {
    menu.style.transform = "translate(0)";
  };

  const hideMenu = () => {
    menu.style.transform = "translate(-100%)";
  };

  bars.addEventListener("click", showMenu);

  cross.addEventListener("click", hideMenu);
});
