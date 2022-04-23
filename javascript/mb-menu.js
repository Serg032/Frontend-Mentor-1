window.addEventListener("load", () => {
  const menu = document.getElementById("collapse-mb");
  const bars = document.getElementById("bars");
  const cross = document.getElementById("cross");

  const showMenu = () => {
    menu.style.transform = "translateX(0)";
  };

  const hideMenu = () => {
    menu.style.transform = "translateX(200%)";
  };

  bars.addEventListener("click", showMenu);

  cross.addEventListener("click", hideMenu);
});
