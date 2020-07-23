AOS.init(); // initializing animate on scroll

$(".blocks").css("visibility", "hidden");
$(window).ready(function () {
  $(".blocks").css("visibility", "visible");
  
  let windowWidth = $(window).width();
  let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });

  if (windowWidth >= 1000) {
      tl.add({
        targets: ".blocks div",
        width: "100%",
        backgroundColor: "rgb(54, 255, 211)",
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
      })
        .add({
          targets: ".blocks div",
          width: "90%",
          backgroundColor: "rgb(235, 235, 235)",
        })
        .add(
          {
            targets: "body",
            top: "20%",
            opacity: 1,
          },
          "-=1600"
        )
        .add({
          targets: ".blocks",
          scale: "2",
          // scaleX: '2',
          translateX: "40%",
          rotate: "45deg",
          duration: 2000,
        });
  } else if (windowWidth >= 700 && windowWidth < 1000) {
    tl.add({
      targets: ".blocks div",
      width: "100%",
      backgroundColor: "rgb(54, 255, 211)",
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    })
      .add({
        targets: ".blocks div",
        width: "90%",
        backgroundColor: "rgb(235, 235, 235)",
      })
      .add(
        {
          targets: "body",
          top: "20%",
          opacity: 1,
        },
        "-=1600"
      )
      .add({
        targets: ".blocks",
        scale: "2",
        // scaleX: '2',
        translateX: "50%",
        translateY: "-10%",
        rotate: "45deg",
        duration: 2000,
      });
  } else {
    tl.add({
      targets: ".blocks div",
      width: "100%",
      backgroundColor: "rgb(54, 255, 211)",
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    })
      .add({
        targets: ".blocks div",
        width: "90%",
        backgroundColor: "rgb(235, 235, 235)",
      })
      .add(
        {
          targets: "body",
          top: "20%",
          opacity: 1,
        },
        "-=1600"
      )
      .add({
        targets: ".blocks",
        scale: "2",
        // scaleX: '2',
        translateX: "45%",
        translateY: "20%",
        rotate: "20deg",
        duration: 2000,
      }); 
  }

  $(".main-page").css("animation-play-state", "running");
});

// let grids = document.querySelectorAll('.blocks div');
// let block = document.querySelector('.blocks');
// num = 0;
// const delay = time => new Promise(resolve => setTimeout(resolve, time));
// grids.forEach(grid => {
//     delay(0).then(() => {
//         setTimeout(() => {
//             grid.style.backgroundColor = 'rgb(119, 119, 119)'
//         }, num += 100);
//     });
//     delay(300).then(() => {
//         setTimeout(() => {
//             grid.style.backgroundColor = 'rgb(233, 233, 233)',
//             grid.style.width = '90%',
//             grid.style.opacity = '0.5'
//         }, num += 100);
//     });
//     delay(600).then(() => {
//         setTimeout(() => {
//             grid.style.backgroundColor = 'rgb(233, 233, 233)',
//             grid.style.opacity = '0.0'
//             // grid.style.psition = 'absolute',
//             // grid.style.transform = 'scale(0) translateY(100px)'
//         }, num += 100);
//     });
// });
