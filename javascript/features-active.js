window.addEventListener("load", () => {
  const feature = document.getElementById("fff");
  const arrowDown = document.getElementById("ff-down");
  const arrowUp = document.getElementById("ff-up");
  const menu = document.getElementById("features-dk-display");

  const showFeaturesMenu = () => {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    menu.style.display = "block";
  };

  const hideFeaturesMenu = () => {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    menu.style.display = "none";
  };

  feature.addEventListener("click", showFeaturesMenu);
  arrowDown.addEventListener("click", showFeaturesMenu);
  arrowUp.addEventListener("click", hideFeaturesMenu);

  const company = document.getElementById("ccc");
  const ccdown = document.getElementById("cc-down");
  const ccup = document.getElementById("cc-up");
  const compMenu = document.getElementById("comp-display");

  const showCompanyMenu = () => {
    ccdown.style.display = "none";
    compMenu.style.display = "block";
    ccup.style.display = "block";
  };

  const hideCompanyMenu = () => {
    ccdown.style.display = "block";
    compMenu.style.display = "none";
    ccup.style.display = "none";
  };

  company.addEventListener("click", showCompanyMenu);
  ccdown.addEventListener("click", showCompanyMenu);
  ccup.addEventListener("click", hideCompanyMenu);
});
