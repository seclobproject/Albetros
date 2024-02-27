/* ====================================
Template Name: GenAI
Description: AI Content Writing & Copywriting HTML5 Landing Page Template
Template URI: https://themeforest.net/item/genai-ai-based-copywriting-and-content-writing-landing-page-template/45150495
Author: Marvel Theme
Author URI: https://themeforest.net/user/marvel_theme
Version: 1.1
Published: 1 May 2023
Last Update: 9 May 2023
==================================== */

/* Table of contents
====================================
1. AOS initialization
2. Typing text animation
3. Video popup
4. Pricing switch
5. Review carousel
6. Review rolling carousel
7. Review rolling carousel reversed
8. Contact form
9. Sticky navbar

====================================
*/

(function () {
  // 1. AOS initialization
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 50,
    duration: 600,
    easing: "cubic-bezier(0.77, 0, 0.175, 1)",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  // 2. Typing text animation
  const typedElements = document.querySelectorAll(".typed-animation");
  if (typedElements.length > 0) {
    typedElements.forEach((typedElement) => {
      const typedAnimation = new Typed(typedElement, {
        strings: JSON.parse(typedElement.dataset.strings),
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 1000,
        fadeOut: true,
        loop: true,
      });
    });
  }

  // 3. Video popup
  new VenoBox({
    selector: ".video-play-btn",
  });

  // 4. Pricing switch
  // const tableWrapper = document.querySelector(".pricing-table");
  // if (tableWrapper) {
  //   const switchInputs = document.querySelectorAll(".switch-wrapper input");
  //   const prices = tableWrapper.querySelectorAll(".price");
  //   const toggleClass = "d-none";

  //   switchInputs.forEach((switchInput) => {
  //     switchInput.addEventListener("input", function () {
  //       prices.forEach((price) => {
  //         price.classList.add(toggleClass);
  //       });

  //       const activePrices = tableWrapper.querySelectorAll(
  //         `.price.${switchInput.id}`
  //       );
  //       activePrices.forEach((activePrice) => {
  //         activePrice.classList.remove(toggleClass);
  //       });
  //     });
  //   });
  // }
  // document.getElementById("playButton").addEventListener("click", function () {
  //   var video = document.getElementById("myVideo");
  //   if (video.paused) {
  //     video.play();
  //     this.textContent = "Pause Video";
  //   } else {
  //     video.pause();
  //     this.textContent = "Play Video";
  //   }
  // });

  // 5. Review carousel
  const reviewCarousel = new Swiper(".review-carousel", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".review-carousel-container .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // 6. Review rolling carousel
  const reviewRollingCarousel = new Swiper(".review-rolling-carousel", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    allowTouchMove: true,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  });

  // 7. Review rolling carousel reversed
  const reviewRollingCarouselReversed = new Swiper(
    ".review-rolling-carousel-reversed",
    {
      loop: true,
      freemode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 8000,
      autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        1: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4.5,
        },
      },
    }
  );

  // 8. Contact form
  const form = document.querySelector("#contact-form");

  if (form) {
    const formStatus = form.querySelector(".status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();
      xhr.open("POST", form.action);
      xhr.onload = function () {
        if (xhr.status === 200) {
          formStatus.classList.remove("d-none");
          formStatus.classList.remove("alert-danger");
          formStatus.classList.add("alert-success");
          formStatus.textContent = xhr.responseText;
          form.reset();
          setTimeout(() => {
            formStatus.classList.add("d-none");
          }, 6000);
        } else {
          formStatus.classList.remove("d-none");
          formStatus.classList.remove("alert-success");
          formStatus.classList.add("alert-danger");
          if (xhr.responseText !== "") {
            formStatus.textContent = xhr.responseText;
          } else {
            formStatus.textContent =
              "Oops! An error occurred and your message could not be sent.";
          }
          setTimeout(() => {
            formStatus.classList.add("d-none");
          }, 6000);
        }
      };
      xhr.send(formData);
    });
  }

  // 9. Sticky navbar
  const header = document.querySelector(".navbar");
  const htmlBody = document.querySelector("html");

  const headroomOptions = {
    // vertical offset in px before element is first unpinned
    offset: {
      up: 100,
      down: 50,
    },
    // scroll tolerance in px before state changes
    tolerance: {
      up: 5,
      down: 0,
    },
    // css classes to apply
    classes: {
      // when element is initialised
      initial: "headroom",
      // when scrolling up
      pinned: "headroom--pinned",
      // when scrolling down
      unpinned: "headroom--unpinned",
      // when above offset
      top: "headroom--top",
      // when below offset
      notTop: "headroom--not-top",
      // when at bottom of scroll area
      bottom: "headroom--bottom",
      // when not at bottom of scroll area
      notBottom: "headroom--not-bottom",
      // when frozen method has been called
      frozen: "headroom--frozen",
    },
  };

  if (header) {
    // Initialize headroom
    const headroom = new Headroom(header, headroomOptions);
    headroom.init();

    // body padding top of fixed header
    const onSectionTop = header.classList.contains("on-over");
    if (!onSectionTop) {
      const headerHeight = header.offsetHeight;
      htmlBody.style.paddingTop = headerHeight + "px";
      htmlBody.style.scrollPaddingTop = headerHeight + "px";
    }

    // Collapse navbar menu on scoll down
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navbarCollapse = header.querySelector(".navbar-collapse");
      const navbarToggler = header.querySelector(".navbar-toggler");

      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const isExpanded =
          navbarToggler.getAttribute("aria-expanded") === "true";

        if (isExpanded && scrollPosition > 0) {
          navbarCollapse.classList.remove("show");
          navbarToggler.setAttribute("aria-expanded", "false");
        }
      });
    }
  }
})();

// ---------------------custom----------------

document.addEventListener("DOMContentLoaded", function () {
  fetchDataAndPopulateTable();

  // Call the function to load blogs
  loadBlogs();
  // Simulate a delay (you can replace this with actual loading logic)
  setTimeout(function () {
    hidePreloader();
  }, 4500); // Adjust the delay time as needed

  // Fetch and populate single blog
  loadSingleBlog();
  fetchDataFromApi();
});

function hidePreloader() {
  document.getElementById("preloader-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// ---------------------------------------------

// script.js
// document
//   .getElementById("downloadButton")
//   .addEventListener("click", function () {
//     // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
//     var pdfPath = "assets/images/pdf/abc.pdf";

//     // Create a link element
//     var link = document.createElement("a");

//     // Set the href attribute to the PDF file path
//     link.href = pdfPath;

//     // Set the download attribute with a desired filename
//     link.download = "downloaded-file.pdf";

//     // Append the link to the document
//     document.body.appendChild(link);

//     // Trigger a click event on the link to start the download
//     link.click();

//     // Remove the link from the document
//     document.body.removeChild(link);
//   });
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Find the nested <a> element and trigger its click event
    var link = this.querySelector("a");
    if (link) {
      link.click();
    }
  });

// -----------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   fetchData();
// });

// async function fetchData() {
//   try {
//     const response = await fetch(
//       new Request("https://api.livecoinwatch.com/coins/list"),
//       {
//         method: "POST",
//         headers: new Headers({
//           "content-type": "application/json",
//           "x-api-key": "<YOUR_API_KEY>",
//         }),
//         body: JSON.stringify({
//           currency: "USD",
//           sort: "rank",
//           order: "ascending",
//           offset: 5,
//           limit: 2,
//           meta: false,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     displayData(data);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// }

// function displayData(data) {
//   const apiDataElement = document.getElementById("api-data");

//   // Clear previous content
//   apiDataElement.innerHTML = "";

//   // Create and append HTML elements to display fetched data
//   data.forEach((coin) => {
//     const coinElement = document.createElement("div");
//     coinElement.classList.add("coin");
//     coinElement.innerHTML = `
//           <div class="coin-name">${coin.name}</div>
//           <div class="coin-symbol">${coin.symbol}</div>
//           <div class="coin-rank">${coin.rank}</div>
//       `;
//     apiDataElement.appendChild(coinElement);
//   });
// }

// -----------------------------

// document.getElementById("play-button").addEventListener("click", function () {
//   var video = document.getElementById("video");
//   video.play();
// });

// function playVideo(event) {
//   event.preventDefault(); // Prevent default behavior of the anchor tag
//   const video = document.getElementById("video");
//   video.play();
// }

document
  .getElementById("playButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var video = document.getElementById("myVideo");
    if (video.paused) {
      video.play();
      this.textContent = "Pause Video";
    } else {
      video.pause();
      this.textContent = "Play Video";
    }
  });

// coin chart api call

async function fetchDataAndPopulateTable() {
  const apiKey = config.apiKey;
  const apiUrl = config.apiUrl;
  // let tbody = document.getElementById("#data-output");

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": apiKey,
      }),
      body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 15,
        meta: false,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status code: ${response.status}`
      );
    }
    const data = await response.json();
    // console.log("Data received:", data);
    // Get a reference to the tbody element
    const tbody = document.querySelector("#data-table tbody");

    // Clear existing rows (optional, depending on your needs)
    tbody.innerHTML = "";

    // Iterate through the data and create table rows
    data.forEach((item, index) => {
      const row = document.createElement("tr");

      const capFormatted = formatNumber(item.cap);
      const rateFormatted = formatNumber(item.rate);
      const volumeFormatted = formatNumber(item.volume);

      // Calculate percentage change for day and hour
      const percentageChangeDay = ((item.delta.day - 1) * 100).toFixed(2);
      const percentageChangeHour = ((item.delta.hour - 1) * 100).toFixed(2);

      // Determine color based on percentage change
      const colorDay = percentageChangeDay < 0 ? "red" : "green";
      const colorHour = percentageChangeHour < 0 ? "red" : "green";

      // Add data to the row
      row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.code}</td>
    <td>$${rateFormatted}</td>
    <td>$${capFormatted}</td>
    <td>$${volumeFormatted}</td>
    <td style="color: ${colorDay}">${percentageChangeHour}%</td>
    <td style="color: ${colorHour}">${percentageChangeDay}%</td>
  `;

      // Append the row to the tbody
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function formatNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + " B";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + " M";
  } else {
    return number.toFixed(2);
  }
}

// Function to fetch and populate blogs
async function loadBlogs() {
  const blogContainer = document.getElementById("blogmain");
  const swiperWrapper = blogContainer.querySelector(".swiper-wrapper");

  const blogApiEndpoint = "https://app.albetros.com/api/admin/view-blogs";
  try {
    const response = await fetch(blogApiEndpoint);
    const blogs = await response.json();
    console.log(blogs);
    blogs?.blogData.forEach((blog) => {
      console.log(`https://app.albetros.com/uploads/${blog.blogImage}`);
      const blogCard = document.createElement("div");
      blogCard.classList.add("swiper-slide", "h-auto", "text-center");
      blogCard.innerHTML = `
                    <div class="review-card rounded p-6 border bg-dark-blue-3 border-white border-opacity-10 text-center" style="height: 540px; overflow: hidden;text-overflow: ellipsis;">
                        <div class="d-flex items-center gap-4 mb-6 text-center">
                            <div class="card-header border-0 bg-transparent ratio ratio-6x4 rounded overflow-hidden">
                                <a href="article.html?id=${blog._id}" class="d-block">
                                    <img src="https://app.albetros.com/uploads/${blog.blogImage}" alt="${blog.title}" class="img-fluid post-thumbnail w-full h-full object-cover" />
                                </a>
                            </div>
                        </div>
                        <div class="">
                            <div class="stars d-flex items-center gap-1 mb-3">
                                <p>${blog.title}</p>
                            </div>
                            <p class="review-text mb-0" style="overflow: hidden;height: 125px; text-overflow: ellipsis;">
                                ${blog.description}<br>
                            </p>
                                <a href="article.html?id=${blog._id}">Read more</a>

                        </div>
                    </div>
                `;

      swiperWrapper.appendChild(blogCard);
    });

    // Initialize the Swiper instance
    new Swiper(".swiper-container", {
      // Add your Swiper configuration here
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

//get single blog

// Function to fetch and populate single blog
async function loadSingleBlog() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  try {
    const response = await fetch(
      `https://app.albetros.com/api/admin/view-single-blog/${blogId}`
    );
    const data = await response.json();
    console.log(data);

    // Update title and description
    document.getElementById("article_title").innerText = data.blogData.title;
    document.getElementById("article_description").innerText =
      data.blogData.description;

    // Update image
    const articleImage = document.getElementById("artice_img");
    articleImage.src = `https://app.albetros.com/uploads/${data.blogData.blogImage}`;
    articleImage.alt = data.title;
    // Update sections
    const sectionsContainer = document.getElementById("sections-container");
    sectionsContainer.innerHTML = ""; // Clear existing content

    data?.blogData?.sections.forEach((section, index) => {
      const sectionTitleId = `section${index + 1}_title`;
      const sectionDescriptionId = `section${index + 1}_description`;

      // Create and append elements dynamically
      const sectionTitle = document.createElement("h4");
      sectionTitle.id = sectionTitleId;
      sectionTitle.innerText = section.subtitle;

      const sectionDescription = document.createElement("p");
      sectionDescription.id = sectionDescriptionId;
      sectionDescription.innerText = section.subdescription;

      // Append elements to sectionsContainer
      sectionsContainer.appendChild(sectionTitle);
      sectionsContainer.appendChild(sectionDescription);
    });

    // Update more elements as needed
  } catch (error) {
    console.error("Error fetching single blog data:", error);
  }
}
// -- get seo keyword ----
function changeKeyword(newKeywords) {
  document.getElementById("metaKeywords").setAttribute("content", newKeywords);
}

function fetchSeoKeywordApi() {
  fetch("https://app.albetros.com/api/admin/view-keywords")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const newKeywords = data?.seoData?.[0]?.keyWords;
      changeKeyword(newKeywords);
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
}

//------- get seo title and descriptions------

function changeMetaTags(
  newTitle,
  newDescription,
  aboutTitle,
  aboutDescription,
  blogTitle,
  blogDescription,
  articleTitle,
  articleDescription,
  serviceTitle,
  serviceDescription,
  signupTitle,
  signupDescription
) {
  // document.title = newTitle;
  document.getElementById("pageTitle").innerText = newTitle;
  document
    .getElementById("metaDescription")
    .setAttribute("content", newDescription);

  document.getElementById("aboutTitle").innerText = aboutTitle;
  document
    .getElementById("aboutDescription")
    .setAttribute("content", aboutDescription);
  document.getElementById("blogTitle").innerText = blogTitle;
  document
    .getElementById("blogDescription")
    .setAttribute("content", blogDescription);
  document.getElementById("articleTitle").innerText = articleTitle;
  document
    .getElementById("articleDescription")
    .setAttribute("content", articleDescription);
  document.getElementById("serviceTitle").innerText = serviceTitle;
  document
    .getElementById("serviceDescription")
    .setAttribute("content", serviceDescription);
  document.getElementById("signupTitle").innerText = signupTitle;
  document
    .getElementById("signupDescription")
    .setAttribute("content", signupDescription);
}

function fetchDataFromApi() {
  fetch("https://app.albetros.com/api/admin/view-seo")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const newTitle = data?.seoData?.[0]?.title;
      const newDescription = data?.seoData?.[0]?.description;
      const aboutTitle = data?.seoData?.[1]?.title;
      const aboutDescription = data?.seoData?.[1]?.description;
      const blogTitle = data?.seoData?.[2]?.title;
      const blogDescription = data?.seoData?.[2]?.description;
      const articleTitle = data?.seoData?.[3]?.title;
      const articleDescription = data?.seoData?.[3]?.description;
      const serviceTitle = data?.seoData?.[4]?.title;
      const serviceDescription = data?.seoData?.[4]?.description;
      const signupTitle = data?.seoData?.[5]?.title;
      const signupDescription = data?.seoData?.[5]?.description;
      changeMetaTags(
        newTitle,
        newDescription,
        aboutTitle,
        aboutDescription,
        blogTitle,
        blogDescription,
        articleTitle,
        articleDescription,
        serviceTitle,
        serviceDescription,
        signupTitle,
        signupDescription
      );
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
}
// ----------
