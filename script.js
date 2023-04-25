const buttons = document.querySelectorAll(".Hire_Me");

buttons.forEach(button => {
  button.addEventListener("mousemove", e => {
    const rect = e.target.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    const distanceX = e.clientX - center.x;
    const distanceY = e.clientY - center.y;
    const strength = 0.4; // adjust this value to control the movement strength
    const transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
    button.style.transform = transform;

});

button.addEventListener("mouseleave", e => {
  button.style.transform = "translate(0, 0)";

  });
});



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function animateHeading(headingElement) {
  let iteration = 0;
  clearInterval(headingElement.interval);
  
  headingElement.interval = setInterval(() => {
    headingElement.innerText = headingElement.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return headingElement.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= headingElement.dataset.value.length){ 
      clearInterval(headingElement.interval);
    }
    
    iteration += 1 / 4;
  }, 30);
}
const elements =  document.getElementById("Animate");

setTimeout(()=>{
  animateHeading(elements);
},900)

setInterval(()=>{
  animateHeading(elements)
},3000)



window.addEventListener("scroll", function() {

  const scrollPosition = window.scrollY;



  const section1Height = document.getElementById("Top_Section_Wrapper").offsetHeight;
  const section2Height = document.getElementById("Project_Section").offsetHeight;
  const section3Height = document.getElementById("About_Me_Section").offsetHeight;
  const section4Height = document.getElementById("Contact_Section").offsetHeight;
  const BrandIcons = document.querySelectorAll(".cl-change-brands");
  // const PsudoElementParent = document.getElementById("Links");
  // const PsudoElement = PsudoElementParent.querySelector("::after");

  BrandIcons.forEach(Icon =>{

    if (scrollPosition < section1Height) {

      Icon.classList.add("change_color_2");
      // PsudoElement.style.backgroundColor = "gray"

        } else if (scrollPosition < section1Height + section2Height + section3Height) {

          Icon.classList.remove("change_color_2");
          Icon.classList.add("change_color");
          // PsudoElement.style.backgroundColor = "black"
        } else {
          Icon.classList.remove("change_color");
          Icon.classList.add("change_color_2");
          // PsudoElement.style.backgroundColor = "gray"
        }
  })
});


const Main = document.getElementsByTagName("main");

const observer = new IntersectionObserver(entireis  =>{
  console.log(entireis)
})

observer.observe(Main[0]);









const Toggle = document.getElementById("Toggle");
const MobileNav = document.getElementById("Ul_List_1");
Toggle.addEventListener("click", ()=>{
  MobileNav.classList.toggle("add")
  Toggle.classList.toggle("change-cl")
})