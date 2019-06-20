document.querySelectorAll("details > summary").forEach(itm => {
  itm.addEventListener("click", function(event) {
    let current = itm.parentElement.open;
    itm.parentElement.parentElement.parentElement.childNodes.forEach(item => {
      item.childNodes.forEach(i => {
        i.open = false;
      });
    });
    itm.parentElement.open = current;
    current ||
      setTimeout(
        i =>
          itm.parentElement.scrollIntoView({
            block: "start",
            behavior: "smooth"
          }),
        100
      );
  });
});
