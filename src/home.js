//     <!-- slider section start -->
//     <div class="home" id="home">
//       <div class="swiper home-slider">
//         <div class="swiper-wrapper wrapper">
//           <div class="swiper-slide slide slide1">
//             <div class="content">

//               <h4>Welcome to</h4>
//               <h3 style="color:rgb(94, 80, 63)">La Pause Café</h3>
//               <h1>From the first sip to the last, our expertly brewed coffee <br>
//                 promises an unforgettable journey through rich, nuanced flavors</h1>
//              <button class="order-btn">Order Now</button>
//             </div>
//           </div>

//           <div class="swiper-slide slide slide2">
//             <div class="content">
//               <h3>Discover a Cozy Oasis of Culinary Delights</h3>
//               <button class="order-btn">Order Now</button>
//             </div>
//           </div>

//           <div class="swiper-slide slide slide3">
//             <div class="content">
//               <h3>Indulge in Exceptional Flavors at</h3>
//               <h4>La Pause Café</h4>
//               <button class="order-btn">Order Now</button>
//             </div>
//           </div>
//         </div>

//         <div class="swiper-pagination"></div>
//       </div>
//     </div>
//     <!-- slider section end -->



export default function createHomeSlider() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    homeDiv.id = 'home';

    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper', 'home-slider');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper', 'wrapper');
    swiperContainer.appendChild(swiperWrapper);
    homeDiv.appendChild(swiperContainer);

    
    const slidesData = [
        {
            title: 'Welcome to',
            subtitle: 'La Pause Café',
            description: 'From the first sip to the last, our expertly brewed coffee promises an unforgettable journey through rich, nuanced flavors',
        },
        {
            title: 'Discover a Cozy Oasis of Culinary Delights',
        },
        {
            title: 'Indulge in Exceptional Flavors at',
            subtitle: 'La Pause Café',
        },
    ];

    slidesData.forEach((slideData, index) => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide', 'slide', `slide${index + 1}`);

        const slideContent = document.createElement('div');
        slideContent.classList.add('content');

        const titleElement = document.createElement('h4');
        titleElement.textContent = slideData.title;

        slideContent.appendChild(titleElement);

        if (slideData.subtitle) {
            const subtitleElement = document.createElement('h3');
            subtitleElement.textContent = slideData.subtitle;
            slideContent.appendChild(subtitleElement);
        }

        if (slideData.description) {
            const descriptionElement = document.createElement('h1');
            descriptionElement.innerHTML = slideData.description;
            slideContent.appendChild(descriptionElement);
        }

        const orderBtn = document.createElement('button');
        orderBtn.classList.add('order-btn');
        orderBtn.textContent = 'Order Now';
        slideContent.appendChild(orderBtn);

        swiperSlide.appendChild(slideContent);
        swiperWrapper.appendChild(swiperSlide);
    });
    
    return homeDiv;
}
