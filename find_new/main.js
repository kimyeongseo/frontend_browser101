const pink = document.querySelector('.pink');
const but = document.querySelector('.but');

but.addEventListener('click', (event) => {
    /* let location = pink.offsetTop;
    window.scrollTo({top: location, behavior: "smooth" }); */
    pink.scrollIntoView({behavior:'smooth', block: 'center'});
});

pink.addEventListener('click', (event) => {
   console.log("Good!")
   alert("Good!!");
});