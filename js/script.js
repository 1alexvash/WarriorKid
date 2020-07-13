const $ = (elem) => document.querySelector(elem);

const pageWidth = $("#page-width");

pageWidth.addEventListener("change", (e) => {
  const width = e.target.value;

  $(".Book").classList.remove("width-narrow");
  $(".Book").classList.remove("width-normal");
  $(".Book").classList.remove("width-wide");

  $(".Book").classList += ` width-${width}`;
});

const pageTheme = $("#page-theme");

pageTheme.addEventListener("change", (e) => {
  const theme = e.target.value;

  $("body").classList.remove("theme-light");
  $("body").classList.remove("theme-dark");
  $("body").classList.remove("theme-sepia");

  $("body").classList += ` theme-${theme}`;
});

const pageTextSize = $("#page-text-size");

pageTextSize.addEventListener("change", (e) => {
  const textSize = e.target.value;

  $("body").classList.remove("text-size-small");
  $("body").classList.remove("text-size-normal");
  $("body").classList.remove("text-size-big");

  $("body").classList += ` text-size-${textSize}`;
});
