// <!-- header section start -->
//     <header>
//         <a href="#" class="logo"><img src="./images/cafe-high-resolution-logo-transparent.png" class='cafe-logo' alt="logo"></a> 
//         <nav class="navbar">
//             <a href="#home" >Home</a>
//             <a href="#menu">Menu</a>
//             <a href="#contact">Contact</a>
//         </nav>
//     </header>
//     <!-- header section end -->

function createHeader(){
    const header = document.createElement('header');
    // Create the logo element
    const cafeLogo = document.createElement('a');
    cafeLogo.href = '#';
    cafeLogo.classList.add("logo");

    const logoImage = document.createElement('img');
    logoImage.src = "./images/cafe-high-resolution-logo-transparent.png";
    logoImage.classList = 'cafe-logo';
    logoImage.alt = 'logo';

    cafeLogo.appendChild(logoImage);

    // Create the navigation links
    const nav = document.createElement("nav");
    nav.classList.add('navbar');

    const homeLink = document.createElement('a');
    homeLink.href = "#home";
    homeLink.textContent = "Home";
    
    const menuLink = document.createElement('a');
    menuLink.href = "#menu";
    menuLink.textContent = "Menu";

    const contactLink = document.createElement('a');
    contactLink.href = "#contact";
    contactLink.textContent = "Contact";

    nav.append(homeLink, menuLink, contactLink);
    header.append(cafeLogo, nav);

}

