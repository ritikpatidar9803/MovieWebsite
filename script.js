const light= document.querySelector(".light");
const dark = document.querySelector(".dark");
var urls = ['./images/background1.png','./images/background2.png','./images/background3.png','./images/background4.png','./images/background5.png','./images/background6.png','./images/background7.png','./images/background8.png']



light.addEventListener('click', ()=>{
    dark.classList.add("active");
    light.classList.remove("active");
    document.documentElement.style.setProperty('--light-color', '#000000');
        document.documentElement.style.setProperty('--dark-color', '#FFFFFF');
});

dark.addEventListener('click', ()=>{
    light.classList.add("active");
    dark.classList.remove("active");
    document.documentElement.style.setProperty('--light-color', '#FFFFFF');
        document.documentElement.style.setProperty('--dark-color', '##000000');
});

const backgrounds = document.querySelectorAll('.bg');

backgrounds.forEach((background,i) => {
    console.log(i);
    background.addEventListener('click', () => {
        document.getElementById("hero").style.backgroundImage = `url(${urls[i]})`;
    })
})
