"use strict";

// ALLLLL
async function Allcountry() {
  const response = await fetch("https://restcountries.com/v2/all");
  const result = await response.json();
  renderData(result);
}
Allcountry();

// Render function

function renderData(data = []) {
  if (data.length === 0) {
    $(".all").innerHTML = `
    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="red" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="white" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                to="-360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="blue" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
    </svg>

<style>
*{
    margin:0px;
    padding:0px;
}
#loading-page {
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#loading-page svg {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
}

body {
  overflow: hidden;
}
</style>
        `;
  } else {
    $(".all").innerHTML = "";
    data.forEach((item) => {
      const card = crElement(
        "div",
        "col-lg-4 col-md-6 col-sm-12 ",
        `<div class="card shadow mt-3">
                                        <img src="${item.flags.png}" alt="img"
                                            class="card-img img-fluid p-4 bg-secondarys">
                                        <div class="card-body">
                                            <h5 class="card-title">${item.name}</h5>
                                            <p class="card-Lest-Name">David M. Beazley</p>
                                            <p class="card-years">${item.nativeName}</p>
                                            <div class="d-flex justify-content-between">
                                                <button class="btn bookmark-btn w-100 mx-2">Bookmark</button>
                                                <a href="#" class="btn bookmark-info w-100 mx-2 text-primary">More
                                                    Info</a>
                                            </div>
                                            <div class="bookmark-btn-center text-center"><button
                                                    class="btn text-center w-100 bookmark-redmore">Read</button></div>
                                        </div>
                                    </div>
          `
      );
      $(".all").appendChild(card);
      card.addEventListener("click", (e) => {
        console.log(e.target);
        renderModal(e.target.getAttribute("data-info").toLowerCase());
      });
    });
  }
}

// renderData();

//search

async function searchCountry(query) {
  $(".all").innerHTML = `
    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="red" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="white" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                to="-360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="blue" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
    </svg>

<style>
*{
    margin:0px;
    padding:0px;
}
#loading-page {
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#loading-page svg {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
}

body {
  overflow: hidden;
}
</style>
        `;

  const data = await fetch(`https://restcountries.com/v2/name/${query}`);
  const res = await data.json();
  $(".all").innerHTML = "";
  if (res.message) {
    $(
      ".all"
    ).innerHTML = ` <img src="./images/1.jpg" class="img-fluid" alt="img">`;
  } else {
    // console.log(res);
    renderData(res);
    // console.log(res);
  }
}

// =============== SERACH
$("#serach-country").addEventListener("keyup", (e) => {
  if (e.target.value.length === 0) {
    Allcountry();
  } else {
    searchCountry(e.target.value.trim().toLowerCase());
  }
});

// PAGINATION
async function getUser() {
  const users = await fetch("https://restcountries.com/v2/all");
  const result = await users.json();
  return result;
}
async function dataRender(num) {
  $(".all").innerHTML = "";
  $(".pagination3").innerHTML = "";
  const data = await getUser();

  const currentPage = num || 1;
  const totalPage = 20;

  const end = currentPage * totalPage;

  const start = end - totalPage;

  const lastData = data.slice(start, end);

  paginate(data, lastData, totalPage, currentPage);
}
function paginate(all, data, current, num) {
  let dot = [];

  for (let i = 1; i <= Math.ceil(all.length / current); i++) {
    dot.push(i);
  }
  dot.forEach((i) => {
    const li = crElement(
      "li",
      `${i == num ? "page-item  shadow  act" : "page-item  shadow m-2 "}`,
      i
    );
    $(".pagination3").appendChild(li);
  });
  data.forEach((item) => {
    const carrd = crElement(
      "div",
      "col-lg-4 col-md-6 col-sm-12",
      `     <div class="card shadow mt-3">
      <img src="${item.flags.png}" alt="img"
          class="card-img img-fluid p-4 bg-secondarys">
      <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-Lest-Name" data-name="${item.nativeName}">${item.nativeName}</p>
          
          <div class="d-flex justify-content-between">
              <button class="btn bookmark-btn w-100 mx-2" data-bok="${item.name}">Bookmark</button>
              <a href="https://www.nationsonline.org/oneworld/countries_of_the_world.htm" class="btn bookmark-info w-100 mx-2 text-primary">More
                  Info</a>
          </div>
          <div class="bookmark-btn-center text-center"><button
                  class="btn text-center w-100 bookmark-redmore" data-red="${item.name}">Read</button></div>
      </div>
  </div>
      
`
    );
    $(".all").appendChild(carrd);
    carrd.addEventListener("click", (e) => {
      renderModal(e.target.getAttribute("data-bok"));
    });
  });

  $a(".bookmark-redmore").forEach((ei, i) => {
    ei.addEventListener("click", (e) => {
      renderModal2(e.target.getAttribute("data-red"));
      $(".red-more-wrap").classList.add("b");
    });
  });
}
$(".pagination3").addEventListener("click", (e) => {
  console.log(e.target.textContent);

  if (e.target.textContent) {
    dataRender(e.target.textContent);
  }
});
dataRender();

// Bookmark

async function renderModal(data) {
  const result = await fetch(`https://restcountries.com/v2/all`);
  const res = await result.json();

  res.forEach((item) => {
    if (item.name == data) {
      console.log(data);

      localStorage.setItem("data", data);
      localStorage.setItem("name", item.nativeName);
    
      const modal = crElement(
        "div",
        "card-bookmark d-flex align-items-center mt-4",
        `                       
  <div class="card-bookmark-text">
                                        <h5 class="fs-5">${dataName}[</h5>
                                        <p class="bokmark-info mb-0">${item.nativeName}</p>
                                    </div>
                                    <div class="card-bookmark-imgs mx-3 d-flex justify-content-end">
                                        <img src="./images/book.png" class="mx-2" alt="img">
                                        <img src="./images/book-delet.png" class="mx-2" alt="img">
                                    </div>
   `
      );
      $(".sidebar-bookmarks-wrapper").appendChild(modal);
    }
  });
}
let dataName = localStorage.getItem("data");
let dataName2 = localStorage.getItem("name");

$(".sidebar-bookmarks-wrapper").innerHTML = `
<div class="card-bookmark d-flex align-items-center mt-4">
  <div class="card-bookmark-text">
                                        <h5 class="fs-5">${dataName}</h5>
                                        <p class="bokmark-info mb-0">${dataName2}</p>
                                    </div>
                                    <div class="card-bookmark-imgs mx-3 d-flex justify-content-end">
                                        <img src="./images/book.png" class="mx-2" alt="img">
                                        <img src="./images/book-delet.png" class="mx-2" alt="img">
                                    </div>
                                    </div>`;
async function renderModal2(data) {
  const result = await fetch(`https://restcountries.com/v2/all`);
  const res = await result.json();

  res.forEach((item) => {
    if (item.name == data) {
        $(".Mybook").innerHTML = "";
      const modal2 = crElement(
        "div",
        "card-redmore",
        `                       
<img src="${item.flags.png}" class="img-fluid mt-5 mb-5 mx-auto d-block" alt="imh">
                 <div class="card-body">
                     <div class="card-description w-75 mx-auto">
                        <p> Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit
                commodo
                        cillum eiusmod reprehenderit labore irure. Cillum et incididunt et nostrud exercitation quis
                         aliquip ullamco officia non aliqua. Sint deserunt aliquip
                            sse proident duis Lorem.</p>
                   <div class="card-red-more-author mt-4">
                      <p><strong>Author : </strong><span class="mx-3">Abduhamid</span></p>
                  </div>
                   <div class="card-red-more-author mt-4">
                      <p><strong>Published :
                          </strong><span class="mx-3">${item.name}</span></p>
                  </div>
                   <div class="card-red-more-author mt-4">
                       <p><strong>Categories:
                          </strong><span class="mx-3">${item.nativeName}</span></p>
                   </div>
              </div>

         </div> `
      );
      $(".Mybook").appendChild(modal2);
    }
  });
}

$(".back-to-index i").addEventListener("click", () => {
  $(".red-more-wrap").classList.remove("b");
});
async function Allcountry() {
  const response = await fetch("https://restcountries.com/v2/all");
  const result = await response.json();
  $(".h5-lenght").innerHTML = `Showing ${result.length} Result(s)`;
}
$(" .bi-moon-stars-fill").addEventListener("click", () => {
  $("body").classList.toggle("bg");
  $(".sdfx").classList.toggle("text-light");
  $(".sadfsgb").classList.toggle("text-light");
  $(".h5-lenght").classList.toggle("text-light");
});
