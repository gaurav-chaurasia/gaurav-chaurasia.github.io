// let tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 750
// });

// tl.add({
//     targets: '.blocks div',
//     width: '100%',
//     backgroundColor: 'rgb(197, 197, 255)',
//     delay: anime.stagger(100) // increase delay by 100ms for each elements.
// })
//     .add({
//         targets: '.blocks div',
//         width: '90%',
//         backgroundColor: 'rgb(235, 235, 255)'
//     })
//     .add({
//         targets: 'h1',
//         top: '20%',
//         opacity: 1,
//         duration: 4000,
//     }, '-=1600')

// var squash = anime({
//     targets: '.blocks',
//     scaleY: '2',
//     scaleX: '2',
//     translateX: '40%',
//     rotate: '45deg',
//     duration: 5000,

//     autoplay: false,
// })

// document.querySelector('h1').addEventListener('mouseover', () => {
//     squash.play();
// })

let grids = document.querySelectorAll('.blocks div');
let block = document.querySelector('.blocks');
num = 0;
const delay = time => new Promise(resolve => setTimeout(resolve, time));
grids.forEach(grid => {
    delay(0).then(() => {
        setTimeout(() => {
            grid.style.backgroundColor = 'rgb(119, 119, 119)'
        }, num += 100);
    }); 
    delay(300).then(() => {
        setTimeout(() => {
            grid.style.backgroundColor = 'rgb(233, 233, 233)', 
            grid.style.width = '90%',
            grid.style.opacity = '0.5'
        }, num += 100);
    });
    delay(600).then(() => {
        setTimeout(() => {
            grid.style.backgroundColor = 'rgb(233, 233, 233)',
            grid.style.opacity = '0.0'
            // grid.style.psition = 'absolute',
            // grid.style.transform = 'scale(0) translateY(100px)' 
        }, num += 100);
    });
});