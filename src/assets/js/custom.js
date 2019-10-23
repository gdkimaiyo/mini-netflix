function openNav() {
  document.getElementById("mysidebar").style.visibility = "visible";
  document.getElementById("mysidebar").style.width = "165px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mysidebar").style.width = "0";
  document.getElementById("mysidebar").style.visibility = "hidden";
}

// // filterItems function
// var filterItem = document.getElementById('filter');
// console.log(filterItem);
// filterItem.addEventListener('keyup', filterItems);
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get Movie titles
//   var movies = document.getElementsByClassName('columns');
//   //convert to array
//   Array.from(imovies).forEach(function(movie) {
//     var movieName = item.firstChild.textContent;
//     if (movieName.toLowerCase().indexOf(text) != -1) {
//       movie.style.display = 'block';
//     } else {
//       movie.style.display = 'none';
//     }
//   });
// }
