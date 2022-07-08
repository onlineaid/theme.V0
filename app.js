const Body = function () {

  // Outsite body clike to minimize toogle body =======================================
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger_btn = document.querySelector(".hamburger_btn");
    const left_swipe = document.querySelector(".left_swipe");

    // Global open/close functions
    const open = () => {
      hamburger_btn.classList.add("open_swipe_btn");
      left_swipe.classList.add("open_swipe");
    };

    const close = () => {
      hamburger_btn.classList.remove("open_swipe_btn");
      left_swipe.classList.remove("open_swipe");
    };

    // Check click on button
    hamburger_btn.addEventListener("mousedown", () => {
      if (!hamburger_btn.classList.contains("open_swipe_btn")) {
        open();
      } else {
        close();
      }
    });

    // Close when user click outside
    document.body.addEventListener("mousedown", (e) => {
      let isClickInsideButton = hamburger_btn.contains(e.target);
      let isClickInsideBanner = left_swipe.contains(e.target);

      if (!isClickInsideButton && !isClickInsideBanner) {
        close();
      }
    });
  });

  // Search select control area ===========================
  // resize on initial load
  document.querySelectorAll("select").forEach(resizeSelect);
  document.body.addEventListener("change", (e) => {
    if (e.target.matches("select")) {
      resizeSelect(e.target);
    }
  });

  function resizeSelect(sel) {
    let tempOption = document.createElement("option");
    tempOption.textContent = sel.selectedOptions[0].textContent;

    let tempSelect = document.createElement("select");
    tempSelect.style.visibility = "hidden";
    tempSelect.style.position = "fixed";
    tempSelect.appendChild(tempOption);

    sel.after(tempSelect);
    sel.style.width = `${+tempSelect.clientWidth + 5}px`;
    tempSelect.remove();
  }

  // Bubbly button love btn click
  let animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  let bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }

  // Another way changeThemeToDark
  // Get the theme toggle input
  const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);

  function switchTheme(e) {
    const like = new Audio("./public/sounds/bubble.wav");
    like.play();

    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");

      // Set the user's theme preference to dark
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");

      // Set the user's theme preference to light
      localStorage.setItem("theme", "light");
    }
  }

  // Get the current theme from local storage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);
    // If the current theme is dark, check the theme toggle
    if (currentTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  advanceDropdown();
  advanceDropdown2();
  advanceDropdown3();
  advanceDropdown4();
  advanceDropdown5();

  function advanceDropdown() {
    // Advance drop down menu  =============>

    const drop_btn = document.querySelector(".dropdown_parent_one span");
    const menu_wrapper = document.querySelector(".wrapper");
    const menu_bar = document.querySelector(".menu_bar_one");

    // dropdown 1st segment
    const item_btn_one = document.querySelector(".item_btn_one");
    const drop_btn_one = document.querySelector(".drop_btn_one");
    const back_btn_one = document.querySelector(".back_btn_one");

    // dropdown 2nd segment
    const item_btn_two = document.querySelector(".item_btn_two");
    const drop_btn_two = document.querySelector(".drop_btn_two");
    const back_btn_two = document.querySelector(".back_btn_two");

    // dropdown 3rd segment
    const item_btn_three = document.querySelector(".item_btn_three");
    const drop_btn_three = document.querySelector(".drop_btn_three");
    const back_btn_three = document.querySelector(".back_btn_three");

    // dropdown 4th segment

    const item_btn_four = document.querySelector(".item_btn_four");
    const drop_btn_four = document.querySelector(".drop_btn_four");
    const back_btn_four = document.querySelector(".back_btn_four");

    drop_btn.addEventListener("click", () => {
      menu_wrapper.classList.toggle("show");
    });

    item_btn_one.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_one.style.display = "block";
      }, 100);
    });

    back_btn_one.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_one.style.display = "none";
    });

    item_btn_two.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_two.style.display = "block";
        drop_btn_two.style.height = "auto";
      }, 100);
    });

    back_btn_two.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_two.style.display = "none";
    });

    item_btn_three.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_three.style.display = "block";
      }, 100);
    });

    back_btn_three.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_three.style.display = "none";
    });

    item_btn_four.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_four.style.display = "block";
      }, 100);
    });

    back_btn_four.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_four.style.display = "none";
    });
  }
  function advanceDropdown2() {
    // Advance drop down menu  =============>
    const drop_btn = document.querySelector(".dropdown_parent_two span");
    const menu_wrapper = document.querySelector(".wrapper_two");
    const menu_bar = document.querySelector(".menu_bar_two");

    // dropdown 1st segment
    const item_btn_one = document.querySelector(".item_btn_one_b1");
    const drop_btn_one = document.querySelector(".drop_btn_one_b1");
    const back_btn_one = document.querySelector(".back_btn_one_b1");

    // dropdown 2nd segment
    const item_btn_two = document.querySelector(".item_btn_two_b2");
    const drop_btn_two = document.querySelector(".drop_btn_two_b2");
    const back_btn_two = document.querySelector(".back_btn_two_b2");

    // dropdown 3rd segment
    const item_btn_three = document.querySelector(".item_btn_three_b3");
    const drop_btn_three = document.querySelector(".drop_btn_three_b3");
    const back_btn_three = document.querySelector(".back_btn_three_b3");

    // dropdown 4th segment

    const item_btn_four = document.querySelector(".item_btn_four_b4");
    const drop_btn_four = document.querySelector(".drop_btn_four_b4");
    const back_btn_four = document.querySelector(".back_btn_four_b4");

    drop_btn.addEventListener("click", () => {
      menu_wrapper.classList.toggle("show");
    });

    item_btn_one.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_one.style.display = "block";
      }, 100);
    });

    back_btn_one.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_one.style.display = "none";
    });

    item_btn_two.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_two.style.display = "block";
      }, 100);
    });

    back_btn_two.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_two.style.display = "none";
    });

    item_btn_three.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_three.style.display = "block";
      }, 100);
    });

    back_btn_three.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_three.style.display = "none";
    });

    item_btn_four.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_four.style.display = "block";
      }, 100);
    });

    back_btn_four.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_four.style.display = "none";
    });
  }
  function advanceDropdown3() {
    // Advance drop down menu  =============>
    const drop_btn = document.querySelector(".dropdown_parent_three span");
    const menu_wrapper = document.querySelector(".wrapper_three");
    const menu_bar = document.querySelector(".menu_bar_three");

    // dropdown 1st segment
    const item_btn_one = document.querySelector(".item_btn_one_c1");
    const drop_btn_one = document.querySelector(".drop_btn_one_c1");
    const back_btn_one = document.querySelector(".back_btn_one_c1");

    // dropdown 2nd segment
    const item_btn_two = document.querySelector(".item_btn_two_c2");
    const drop_btn_two = document.querySelector(".drop_btn_two_c2");
    const back_btn_two = document.querySelector(".back_btn_two_c2");

    // dropdown 3rd segment
    const item_btn_three = document.querySelector(".item_btn_three_c3");
    const drop_btn_three = document.querySelector(".drop_btn_three_c3");
    const back_btn_three = document.querySelector(".back_btn_three_c3");

    // dropdown 4th segment

    const item_btn_four = document.querySelector(".item_btn_four_c4");
    const drop_btn_four = document.querySelector(".drop_btn_four_c4");
    const back_btn_four = document.querySelector(".back_btn_four_c4");

    drop_btn.addEventListener("click", () => {
      menu_wrapper.classList.toggle("show");
    });

    item_btn_one.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_one.style.display = "block";
      }, 100);
    });

    back_btn_one.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_one.style.display = "none";
    });

    item_btn_two.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_two.style.display = "block";
      }, 100);
    });

    back_btn_two.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_two.style.display = "none";
    });

    item_btn_three.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_three.style.display = "block";
      }, 100);
    });

    back_btn_three.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_three.style.display = "none";
    });

    item_btn_four.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_four.style.display = "block";
      }, 100);
    });

    back_btn_four.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_four.style.display = "none";
    });
  }
  function advanceDropdown4() {
    // Advance drop down menu  =============>
    const drop_btn = document.querySelector(".dropdown_parent_four span");
    const menu_wrapper = document.querySelector(".wrapper_four");
    const menu_bar = document.querySelector(".menu_bar_four");

    // dropdown 1st segment
    const item_btn_one = document.querySelector(".item_btn_one_d1");
    const drop_btn_one = document.querySelector(".drop_btn_one_d1");
    const back_btn_one = document.querySelector(".back_btn_one_d1");

    // dropdown 2nd segment
    const item_btn_two = document.querySelector(".item_btn_two_d2");
    const drop_btn_two = document.querySelector(".drop_btn_two_d2");
    const back_btn_two = document.querySelector(".back_btn_two_d2");

    // dropdown 3rd segment
    const item_btn_three = document.querySelector(".item_btn_three_d3");
    const drop_btn_three = document.querySelector(".drop_btn_three_d3");
    const back_btn_three = document.querySelector(".back_btn_three_d3");

    // dropdown 4th segment

    const item_btn_four = document.querySelector(".item_btn_four_d4");
    const drop_btn_four = document.querySelector(".drop_btn_four_d4");
    const back_btn_four = document.querySelector(".back_btn_four_d4");

    drop_btn.addEventListener("click", () => {
      menu_wrapper.classList.toggle("show");
    });

    item_btn_one.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_one.style.display = "block";
      }, 100);
    });

    back_btn_one.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_one.style.display = "none";
    });

    item_btn_two.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_two.style.display = "block";
      }, 100);
    });

    back_btn_two.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_two.style.display = "none";
    });

    item_btn_three.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_three.style.display = "block";
      }, 100);
    });

    back_btn_three.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_three.style.display = "none";
    });

    item_btn_four.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_four.style.display = "block";
      }, 100);
    });

    back_btn_four.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_four.style.display = "none";
    });
  }
  function advanceDropdown5() {
    // Advance drop down menu  =============>
    const drop_btn = document.querySelector(".dropdown_parent_five span");
    const menu_wrapper = document.querySelector(".wrapper_five");
    const menu_bar = document.querySelector(".menu_bar_five");

    // dropdown 1st segment
    const item_btn_one = document.querySelector(".item_btn_one_e1");
    const drop_btn_one = document.querySelector(".drop_btn_one_e1");
    const back_btn_one = document.querySelector(".back_btn_one_e1");

    // dropdown 2nd segment
    const item_btn_two = document.querySelector(".item_btn_two_e2");
    const drop_btn_two = document.querySelector(".drop_btn_two_e2");
    const back_btn_two = document.querySelector(".back_btn_two_e2");

    // dropdown 3rd segment
    const item_btn_three = document.querySelector(".item_btn_three_e3");
    const drop_btn_three = document.querySelector(".drop_btn_three_e3");
    const back_btn_three = document.querySelector(".back_btn_three_e3");

    // dropdown 4th segment

    const item_btn_four = document.querySelector(".item_btn_four_e4");
    const drop_btn_four = document.querySelector(".drop_btn_four_e4");
    const back_btn_four = document.querySelector(".back_btn_four_e4");

    drop_btn.addEventListener("click", () => {
      menu_wrapper.classList.toggle("show");
    });

    item_btn_one.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_one.style.display = "block";
      }, 100);
    });

    back_btn_one.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_one.style.display = "none";
    });

    item_btn_two.addEventListener("click", () => {
      // mobile responsive
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_two.style.display = "block";
      }, 100);
    });

    back_btn_two.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_two.style.display = "none";
    });

    item_btn_three.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_three.style.display = "block";
      }, 100);
    });

    back_btn_three.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_three.style.display = "none";
    });

    item_btn_four.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 578px)").matches) {
        menu_bar.style.marginLeft = "-300px";
      } else {
        menu_bar.style.marginLeft = "-400px";
      }
      setTimeout(() => {
        drop_btn_four.style.display = "block";
      }, 100);
    });

    back_btn_four.addEventListener("click", () => {
      menu_bar.style.marginLeft = "0px";
      drop_btn_four.style.display = "none";
    });
  }

  // Footer responsive ==================
  let footerTitle = document.querySelector(".footer-title");
  let footerTitle2 = document.querySelector(".footer-title-2");
  let footerTitle3 = document.querySelector(".footer-title-3");
  let footerTitle4 = document.querySelector(".footer-title-4");
  let footerContent = document.querySelector(".footer-content");
  let footerContent2 = document.querySelector(".footer-content-2");
  let footerContent3 = document.querySelector(".footer-content-3");
  let footerContent4 = document.querySelector(".footer-content-4");

  footerTitle.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 578px)").matches) {
      footerContent.classList.toggle("footer-content");
    }
  });

  footerTitle2.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 578px)").matches) {
      footerContent2.classList.toggle("footer-content-2");
    }
  });

  footerTitle3.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 578px)").matches) {
      footerContent3.classList.toggle("footer-content-3");
    }
  });

  footerTitle4.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 578px)").matches) {
      footerContent4.classList.toggle("footer-content-4");
    }
  });
};

Body();

