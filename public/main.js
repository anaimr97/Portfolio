// ================ BUTTONS ================

// ====== TOP BUTTONS ======
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Btn-top").style.display = "block";
    } else {
        document.getElementById("Btn-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ====== SETTINGS BUTTONS ======
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) { 
        document.getElementById('Btn-settings').style.bottom = '80px'; 
        document.getElementById('Panel-settings').style.bottom = '145px';
    } else {
        document.getElementById('Btn-settings').style.bottom = '15px'; 
        document.getElementById('Panel-settings').style.bottom = '80px';
    }
});

$(document).mouseup(function (e) {
    var $panel = $("#Panel-settings"),
        $btn = $("#Btn-settings");

    if (!$panel.is(e.target) && $panel.has(e.target).length === 0) {

        if (!$btn.is(e.target) && $btn.has(e.target).length === 0) {

            if ($panel.is(':visible')) {
                $panel.slideToggle();
            }
        }
    }
});

$('#Btn-settings').on("click", function () {
    $('#Panel-settings').slideToggle();
});

const chk_theme = document.getElementById("chk-theme");
chk_theme.addEventListener('change', () => {

    var rootStyles = getComputedStyle(document.documentElement);
    const portfolio_1 = document.getElementById("portfolio-1");
    const portfolio_2 = document.getElementById("portfolio-2");

    var currentMainBackground = rootStyles.getPropertyValue('--main-background');

    if (currentMainBackground === '#252525') {
        // --- LIGHT THEME ---
        document.documentElement.style.setProperty('--main-background', '#fafafa');
        document.documentElement.style.setProperty('--main-background-portfolio', '#fafafaea');
        document.documentElement.style.setProperty('--second-background', '#ffffff');
        document.documentElement.style.setProperty('--title-color', '#1f1f1f');
        document.documentElement.style.setProperty('--subtitle-color', '#3f3f3f');
        document.documentElement.style.setProperty('--sombra', '#00000026');
        portfolio_1.src = "public/images/sebastiao-alves-LIGHT.jpg";
        portfolio_2.src = "public/images/under-construction-LIGHT.gif";
    } else {
        // --- DARK THEME ---
        document.documentElement.style.setProperty('--main-background', '#252525');
        document.documentElement.style.setProperty('--main-background-portfolio', '#252525ea');
        document.documentElement.style.setProperty('--second-background', '#313131');
        document.documentElement.style.setProperty('--title-color', '#ffffff');
        document.documentElement.style.setProperty('--subtitle-color', '#AAAAAA');
        document.documentElement.style.setProperty('--sombra', '#FFFFFF26');
        portfolio_1.src = "public/images/sebastiao-alves-DARK.jpg";
        portfolio_2.src = "public/images/under-construction-DARK.gif";
    }
   
})

// const chk_language = document.getElementById("chk-language");
// chk_language.addEventListener('change', () => {

//     var htmlElement = document.getElementsByTagName("html")[0];
//     var menu_link = document.getElementsByClassName("menu_link");
//     var into_text = document.getElementsByClassName("into_text");
//     var section_title = document.getElementsByClassName("section_title");
//     var about_p = document.getElementById("about_p");
//     const about_level = document.querySelectorAll('.about_level');
//     const level_4 = document.querySelectorAll('.level_4');
//     const level_3 = document.querySelectorAll('.level_3');
//     const level_1 = document.querySelectorAll('.level_1');
//     var education_text = document.getElementsByClassName("education_text");
//     var portfolio_text = document.getElementsByClassName("portfolio_text");
//     var contact_text = document.getElementsByClassName("contact_text");
    
//     if (htmlElement.lang === "en") {
//         // --- PORTUGUESE ---
//         htmlElement.lang = "pt";
//         //HEADER
//         menu_link[0].textContent = "Inicío";
//         menu_link[1].textContent = "Sobre";
//         menu_link[2].textContent = "Educação";
//         menu_link[3].textContent = "Portfólio";
//         menu_link[4].textContent = "Contacto";
//         //INTO
//         into_text[0].textContent = "Olá Mundo!";
//         into_text[1].textContent = "Sou a Ana Isabel,";
//         into_text[2].textContent = "Bem-vindo/a ao meu Portfólio! Aqui, terá a oportunidade de conhecer quem eu sou e explorar os fascinantess projetos que fiz até ao momento.";
//         into_text[3].textContent = "Contactar-me";
//         //ABOUT
//         section_title[0].textContent = "Sobre";
//         about_p.textContent = "Eu sou uma Desenvolvedora Full Stack com um enorme gosto por construir sites bonitos e fáceis de usar. Tenho um forte conhecimento em desenvolvimento front-end e back-end e estou animada para colocar as minhas habilidades em uso em um ambiente profissional. Eu aprendo rápido, tenho um enorme espírito de equipa e estou confiante de que posso ser um recurso valioso para qualquer equipa de desenvolvimento web.";
//         about_level.forEach(element => {
//             element.textContent = "Nível: "
//         });
//         level_4.forEach(element => {
//             element.textContent = "Muito bom"
//         });
//         level_3.forEach(element => {
//             element.textContent = "Bom"
//         });
//         level_1.forEach(element => {
//             element.textContent = "Iniciante"
//         });
//         //EDUCATION
//         section_title[1].textContent = "Educação";
//         education_text[0].textContent = "Curso Full Stack Web Developer";
//         education_text[1].textContent = "Um curso online realizado pela Codemaster, instituição de ensino reconhecida pelo Governo Português com o selo INCoDe.2030. O foco do curso foi o desenvolvimento de habilidades nas áreas de front-end e back-end. Durante o curso, várias tecnologias foram abordadas, nomeadamente:";
//         education_text[2].textContent = "Download Certificado";
//         //PORTFOLIO
//         section_title[2].textContent = "Portfólio";
//         portfolio_text[0].textContent = "Projeto Final Codemaster";
//         portfolio_text[1].textContent = "Tecnologias usadas:";
//         portfolio_text[2].textContent = "Ver mais";
//         portfolio_text[3].textContent = "Em Construção";
//         // portfolio_text[4].textContent = "Ver mais";
//         //CONTACT
//         section_title[3].textContent = "Contacte-me";
//         contact_text[0].textContent = "Nome";
//         contact_text[1].textContent = "Email";
//         contact_text[2].textContent = "Assunto";
//         contact_text[3].textContent = "Mensagem";
//         contact_text[4].textContent = "Enviar Mensagem";
//         contact_text[5].textContent = "Obrigada pela sua mensagem";
//         contact_text[6].textContent = "Em breve entrarei em contacto";
//     } else {
//         // --- ENGLISH ---
//         htmlElement.lang = "en";
//         //HEADER
//         menu_link[0].textContent = "Home";
//         menu_link[1].textContent = "About";
//         menu_link[2].textContent = "Education";
//         menu_link[3].textContent = "Portfolio";
//         menu_link[4].textContent = "Contact";
//         //INTO
//         into_text[0].textContent = "Hello World!";
//         into_text[1].textContent = "I'm Ana Isabel,";
//         into_text[2].textContent = "Welcome to my Portfolio! Here, you'll have the opportunity to get to know who I am and explore the fascinating projects I've done so far.";
//         into_text[3].textContent = "Contact Me";
//         //INTO
//         section_title[0].textContent = "About";
//         about_p.textContent = "I am a Full Stack Developer with a passion for building beautiful and user-friendly websites. I have a strong understanding of both front-end and back-end development, and I am excited to put my skills to use in a professional setting. I am a quick learner and a team player, and I am confident that I can be a valuable asset to any web development team.";
//         about_level.forEach(element => {
//             element.textContent = "Level: "
//         });
//         level_4.forEach(element => {
//             element.textContent = "Very good"
//         });
//         level_3.forEach(element => {
//             element.textContent = "Good"
//         });
//         level_1.forEach(element => {
//             element.textContent = "Beginner"
//         });
//         //EDUCATION
//         section_title[1].textContent = "Education";
//         education_text[0].textContent = "Full Stack Web Developer Course";
//         education_text[1].textContent = "An online course held by Codemaster, an educational institution recognized by the Portuguese Government with the INCoDe.2030 seal. The focus of the course was the developing skills in the front-end and back-end areas. During the course, several technologies were addressed, namely:";
//         education_text[2].textContent = "Download Certificate";
//         //PORTFOLIO
//         section_title[2].textContent = "Portfolio";
//         portfolio_text[0].textContent = "Codemaster Final Project";
//         portfolio_text[1].textContent = "Technologies used:";
//         portfolio_text[2].textContent = "See More";
//         portfolio_text[3].textContent = "Under construction";
//         // portfolio_text[4].textContent = "See More";
//         //CONTACT
//         section_title[3].textContent = "Contact Me";
//         contact_text[0].textContent = "Name";
//         contact_text[1].textContent = "Email";
//         contact_text[2].textContent = "Subject";
//         contact_text[3].textContent = "Message";
//         contact_text[4].textContent = "Send Message";
//         contact_text[5].textContent = "Thank you for your message";
//         contact_text[6].textContent = "I will contact you soon";
//     }
// })

// ================ HEADER ================
const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener('click', () =>{
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () =>{
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

function scrollHeader(){

    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }

    })
}

window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollHeader);

// ================ INTO SECTION ================
const options = {
    strings: ["Full Stack Web Developer."], 
    typeSpeed: 100, 
    backSpeed: 50, 
    backDelay: 2000, 
    loop: true 
};
  
const typed = new Typed('#typed-text', options);

// ================ CONTACT SECTION ================
function sendMail() {

    var name = document.getElementById("form_name").value;
    var email = document.getElementById("form_email").value;
    var subject = document.getElementById("form_subject").value;
    var message = document.getElementById("form_message").value;

    if (name === "" || email === "" || subject === "" || message === "") {

        var htmlElement = document.getElementsByTagName("html")[0];

        if (htmlElement.lang === "en"){
            document.getElementById("form-error").textContent = "Please fill in all fields.";
        }
        else{
            document.getElementById("form-error").textContent = "Por favor preencha todos os campos.";
        }
        
    } else {
        
        document.getElementById("form-error").textContent = ""; 

        var params = {
            form_name: document.getElementById("form_name").value,
            form_email: document.getElementById("form_email").value,
            form_subject: document.getElementById("form_subject").value,
            form_message: document.getElementById("form_message").value
        };
    
        emailjs.send("service_187pvva", "template_dny0apm", params).then(function(res) {
            document.querySelector(".contact_content").classList.add("hidden");
            document.querySelector(".contact_thanks").classList.remove("hidden");
        });
    }
    
};