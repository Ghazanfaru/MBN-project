// Get the current URL path
var path = window.location.pathname;

// Extract the page name from the path
var page = path.split("/").pop();

// Get all the links in the navbar
var links = document.querySelectorAll(".header-navbr .list-wrap .list-button");

// Loop through the links
for (var i = 0; i < links.length; i++) {
  var link = links[i];

  // Get the href attribute of the link
  var href = link.getAttribute("href");

  // If the href attribute matches the current page, add the active class to the link's parent li element
  if (href === page) {
    console.log(link);
    link.classList.add("active-nav");
  }
}

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let lastScroll = 0;

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll) {
    // Scroll down
    header.classList.remove("scrolled");
  } else {
    // Scroll up
    header.classList.add("scrolled");
  }

  lastScroll = currentScroll;
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.pageYOffset > 100) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// const inputString = prompt("Enter a string to hash:");
// sha256(inputString)
//   .then((hash) => console.log(`SHA256 hash of "${inputString}" is: ${hash}`))
//   .catch((error) => console.error(error));

// async function sha256(inputString) {
//   const encodedString = new TextEncoder().encode(inputString);
//   const buffer = await crypto.subtle.digest("SHA-256", encodedString);
//   return hex(buffer);
// }

// function hex(buffer) {
//   const hexCodes = [];
//   const view = new DataView(buffer);
//   for (let i = 0; i < view.byteLength; i += 4) {
//     const value = view.getUint32(i);
//     const stringValue = value.toString(16);
//     const padding = "00000000";
//     const paddedValue = (padding + stringValue).slice(-padding.length);
//     hexCodes.push(paddedValue);
//   }
//   return hexCodes.join("");
// }
