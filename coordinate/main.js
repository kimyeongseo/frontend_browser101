/* 
window.addEventListener("mousemove", (event) => {


    console.log(`pageX, pageY: ${event.pageX}, ${event.pageY}`);
    console.log(`clientX, clientY: ${event.clientX}, ${event.clientY}`);
  });

  */

  const vertical = document.querySelector('.vertical'),
  horizontal = document.querySelector('.horizontal'),
  target = document.querySelector('.target'),
  tag = document.querySelector('.tag');
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalHeight = targetRect.height / 2;
  
  document.addEventListener('mousemove', event => {
      const x = event.clientX;
      const y = event.clientY;

      vertical.style.transform = `translateX(${x}px)`;
      horizontal.style.transform = `translateY(${y}px)`;
      target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalHeight}px)`;
      tag.style.transform = `translate(${x}px, ${y}px)`;

     // vertical.style.left = `${x}px`
     //horizontal.style.top = `${y}px`
     // target.style.left = `${x}px`
     // target.style.top = `${y}px`
     // tag.style.left = `${x}px`
     // tag.style.top = `${y}px`

      tag.innerHTML = `X: ${x}px Y: ${y}px`
  });