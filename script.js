
const collapsibles = 
document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    if(item.classList.contains("collapsible--expanded")){
        collapsibles.forEach((item) => {
            item.classList.remove("collapsible--expanded")
        });
        item.classList.toggle("collapsible--expanded")
    }
  })
);
