const $ = function (selectorName) {
  return document.querySelector(selectorName);
};

// ================ selector all ==================

//shu turdagi hammma elementni tanlab olish uchun funksiya
const $a = function (selectorName) {
  return document.querySelectorAll(selectorName);
};

const crElement = function (tagName, className, contentt) {
  const nwElwmwnt = document.createElement(tagName);
  // nwElwmwnt.setAttribute("class", className);
  if (className) {
    nwElwmwnt.setAttribute("class", className);
  }
  // nwElwmwnt.innerHTML=contentt;
  if (contentt) {
    nwElwmwnt.innerHTML = contentt;
  }
  return nwElwmwnt;
};
