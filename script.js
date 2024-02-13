// function toggleSidebar() {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';

//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show');
// }
// function toggleSidebar() {
//     var sidebar = document.getElementById("nav");
//     if (sidebar.style.display === "block") {
//       sidebar.style.display = "none";
//     } else {
//       sidebar.style.display = "block";
//     }
//   }
  
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}


// document.addEventListener("DOMContentLoaded", function() {
//     var gallery = document.querySelector('.interview');
//     var galleryTop = gallery.getBoundingClientRect().top;
  
//     function checkGallery() {
//       if (galleryTop - window.innerHeight < 0) {
//         gallery.classList.add('show');
//         var imageContainers = document.querySelectorAll('.interview-img');
//         imageContainers.forEach(function(container, index) {
//           setTimeout(function() {
//             container.classList.add('slide-in');
//           }, index * 5); // Menambahkan jeda antara setiap animasi untuk efek slide-in yang bertahap
//         });
//         window.removeEventListener('scroll', checkGallery);
//       }
//     }
  
//     window.addEventListener('scroll', checkGallery);
//   });
  