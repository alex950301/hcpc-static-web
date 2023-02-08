const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const searchText = searchBar.value;
    alert("You searched for : " + searchText + " \n\n裝飾用的啦 （//･_･//) ");
  }
});