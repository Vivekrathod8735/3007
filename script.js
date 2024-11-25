let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['B.com Student ','Web developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function sendToWhatsApp() {
            // Collect form data
            const name = document.querySelector('input[name="Name"]').value;
            const email = document.querySelector('input[name="Email Address"]').value;
            const mobile = document.querySelector('input[name="Mobile Number"]').value;
            const subject = document.querySelector('input[name="Subject"]').value;
            const message = document.querySelector('textarea[name="Your Message"]').value;

            // Format the WhatsApp message
            const whatsappMessage = `Hello,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMobile: ${encodeURIComponent(mobile)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;

            // WhatsApp URL (replace <PHONE_NUMBER> with your WhatsApp number)
            const whatsappURL = `https://wa.me/+918735890374?text=${whatsappMessage}`;

            // Open WhatsApp URL
            window.open(whatsappURL, '_blank');
}
