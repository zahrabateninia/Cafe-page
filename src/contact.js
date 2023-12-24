// <!-- contact section start -->
// <div class="contact" id="contact">
//  <div class="info">
//    <p class="location" >
//      <img src="images/locationIcon.svg" alt="location icon" class="icon">
//      Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France.
//    </p>
//    <p class="work-time" >
//      <img src="images/clockIcon.svg" alt="clock icon" class="icon">
//      Mon-Thurs:8am-8pm <br> Fri-Sun:8am-11pm
//    </p>
//    <p class="telephone" >
//      <img src="images/telephoneIcon.svg" alt="telephone icon" class="icon">
//      <a href="telephone" class="telephone">+33 1 23 45 67 89</a>
//    </p>
//  </div>
//  <div class="map">
//    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2624.9997818361926!2d2.292091562063815!3d48.85821455059916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEiffel%20Tower!5e0!3m2!1sen!2suk!4v1703275961736!5m2!1sen!2suk" 
//  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//  </div>
// </div>
// <!-- contact section end -->

export default function createContactSection() {
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact');
    contactSection.id = 'contact';
  
    const contactInfo = [
      {
        className: 'location',
        iconSrc: 'images/locationIcon.svg',
        iconAlt: 'location icon',
        textContent: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France.',
      },
      {
        className: 'work-time',
        iconSrc: 'images/clockIcon.svg',
        iconAlt: 'clock icon',
        textContent: 'Mon-Thurs: 8am-8pm <br> Fri-Sun: 8am-11pm',
      },
      {
        className: 'telephone',
        iconSrc: 'images/telephoneIcon.svg',
        iconAlt: 'telephone icon',
        href: 'telephone',
        textContent: '+33 1 23 45 67 89',
      },
    ];
  
    contactInfo.forEach((info) => {
      const para = document.createElement('p');
      para.classList.add(info.className);
  
      const icon = document.createElement('img');
      icon.src = info.iconSrc;
      icon.alt = info.iconAlt;
      icon.classList.add('icon');
      para.appendChild(icon);
  
      if (info.href) {
        const link = document.createElement('a');
        link.href = info.href;
        link.classList.add('telephone');
        link.textContent = info.textContent;
        para.appendChild(link);
      } else {
        para.innerHTML += info.textContent;
      }
  
      contactSection.appendChild(para);
    });

    // Creating the map div
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');

    // Creating the map iframe
    const mapIframe = document.createElement('iframe');
    mapIframe.src = 'https://www.google.com/maps/embed?pb= ...'; // Add your Google Maps embed URL
    mapIframe.width = '600';
    mapIframe.height = '450';
    mapIframe.style.border = '0';
    mapIframe.allowfullscreen = true;
    mapIframe.loading = 'lazy';
    mapIframe.referrerpolicy = 'no-referrer-when-downgrade';

    mapDiv.appendChild(mapIframe);
    contactSection.appendChild(mapDiv);
 
    return contactSection;
}
    
  
  
  

  