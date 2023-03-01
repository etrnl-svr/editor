document.ontouchmove = function (event) {
  console.log("On touch move");
  var isTouchMoveAllowed = true,
    target = event.target;

  while (target !== null) {
    if (target.classList && target.classList.contains("disable-scrolling")) {
      isTouchMoveAllowed = false;
      break;
    }
    target = target.parentNode;
  }

  if (!isTouchMoveAllowed) {
    event.preventDefault();
  }
};

function removeIOSRubberEffect(element) {
  console.log("On remove touch move", element);
  element.addEventListener("touchstart", function () {
    var top = element.scrollTop,
      totalScroll = element.scrollHeight,
      currentScroll = top + element.offsetHeight;

    if (top === 0) {
      element.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      element.scrollTop = top - 1;
    }
  });
}

removeIOSRubberEffect(document.querySelector(".scrollable"));
