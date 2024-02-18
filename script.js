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
document.addEventListener('DOMContentLoaded', function() {
    jsPlumb.ready(function() {
      var instance = jsPlumb.getInstance({
        Endpoint: ["Dot", {radius: 2}],
        Connector:"StateMachine",
        HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2 },
        ConnectionOverlays: [
          ["Arrow", {
            location: 1,
            id: "arrow",
            length: 14,
            foldback: 0.8
          }],
          ["Label", { label: " ", id: "label", cssClass: "aLabel" }]
        ],
        Container: "flowchart"
      });
  
      instance.registerConnectionType("basic", { anchor:"Continuous", connector:"StateMachine" });
  
      var windows = jsPlumb.getSelector(".statemachine-demo .w");
  
      instance.draggable(windows);
  
      instance.bind("connection", function (info) {
        info.connection.getOverlay("label").setLabel(info.connection.id);
      });
  
      instance.connect({ source: "window1", target: "window2", type:"basic" });
      instance.connect({ source: "window1", target: "window3", type:"basic" });
      instance.connect({ source: "window2", target: "window4", type:"basic" });
      instance.connect({ source: "window3", target: "window4", type:"basic" });
    });
  });
  

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
  