/* 
window.addEventListener("mousemove", (event) => {


    console.log(`pageX, pageY: ${event.pageX}, ${event.pageY}`);
    console.log(`clientX, clientY: ${event.clientX}, ${event.clientY}`);
  });

  */

  const vertical = document.querySelector('.vertical'),
  horizontal = document.querySelector('.horizontal'),
  taget = document.querySelector('.target'),
  tag = document.querySelector('.tag');
  
  document.addEventListener('mousemove', event => {
      const x = event.clientX;
      const y = event.clientY;

      vertical.style.left = `${x}px`
      horizontal.style.top = `${y}px`
      taget.style.left = `${x}px`
      taget.style.top = `${y}px`
      tag.style.left = `${x}px`
      tag.style.top = `${y}px`

      tag.innerHTML = `X: ${x}px Y: ${y}px`
  });