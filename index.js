
// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 5}px`;
//     }
// }
// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

// function moveDodgerRight() {  
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left < 400){
//         dodger.style.left = `${left + 5}px`;
//     }
// }

// document.addEventListener("keydown", function (element) {
//     if (element.key === "ArrowRight") {
//       moveDodgerRight();
//     }
//   });


const dodger = document.querySelector('#dodger')

document.addEventListener('keydown', (e) => {
  if(e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
})


function moveDodgerLeft() {
  
      const leftNumbers = dodger.style.left.replace('px', '')
      const left = parseInt(leftNumbers, 10)
      if (left > 0) {

      dodger.style.left = `${left - 1}px`;
      }
    }


    function moveDodgerRight() {
      const lefttNumbers = dodger.style.left.replace('px', '')
      const left = parseInt(lefttNumbers, 10)
      if (left < 400){
      dodger.style.left = `${left + 1}px`
      }
    }

    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowRight"){
        moveDodgerRight()
      }
    })