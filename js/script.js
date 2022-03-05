const toggles = document.querySelectorAll(".screen__toggles-button");
const tabContents = document.querySelectorAll(".screen__tab");


for (var i = 0; i < toggles.length; i++) {

  toggles[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabButton = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabContents.length; j++) {
      let activeContent = tabContents[j].getAttribute("data-tab-content");

      if (activeTabButton === activeContent) {
        tabContents[j].classList.add("screen__tab--active");
        toggles[j].classList.add("screen__toggles-button--active");
      } else {
        tabContents[j].classList.remove("screen__tab--active");
        toggles[j].classList.remove("screen__toggles-button--active");
      }
    };
  });
}