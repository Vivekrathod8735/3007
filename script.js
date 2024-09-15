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
            // Get form values
            let name = document.querySelector('input[name="Name"]').value;
            let email = document.querySelector('input[name="Email Address"]').value;
            let mobile = document.querySelector('input[name="Mobile Number"]').value;
            let subject = document.querySelector('input[name="Email Subject"]').value;
            let message = document.querySelector('textarea[name="Your Message"]').value;

            // Validate if all fields are filled
            if (name && email && mobile && subject && message) {
                // Encode the message to make it URL-safe
                let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`;
                let encodedMessage = encodeURIComponent(whatsappMessage);

                // Define your WhatsApp number (include country code without "+" symbol)
                let whatsappNumber = "+918735890374"; // Replace with your actual WhatsApp number

                // Create the WhatsApp URL
                let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

                // Open the WhatsApp chat in a new tab
                window.open(whatsappUrl, '_blank');
            } else {
                alert("Please fill out all fields.");
            }
}
