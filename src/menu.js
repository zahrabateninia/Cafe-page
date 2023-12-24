// <!-- menu section start -->
// <section class="menu" id="menu">
//   <div class="main-menu">
//     <h1 class="heading">ESPRESSO</h1>
//   <div class="menu-container">
//     <div class="menu-item">
//       <h3>americano</h3>
//       <p class="price">3.00</p>
//     </div>
//     <div class="menu-item">
//       <h3>Cappuccino</h3>
//       <p class="price">3.00</p>
//     </div>
//     <div class="menu-item">
//       <h3>Latte</h3>
//       <p class="price">3.20</p>
//     </div>

//     <div class="menu-item">
//       <h3>Caramel latte</h3>
//       <p class="price">4.00</p>
//     </div>

//     <div class="menu-item">
//       <h3>vanilla latte</h3>
//       <p class="price">4.50</p>
//     </div>
//     <div class="menu-item">
//       <h3>Double Espresso</h3>
//       <p class="price">3.50</p>
//     </div>

//     <div class="menu-item">
//       <h3>Mint Chocolate</h3>
//       <p class="price">5.25</p>
//     </div>

//     <div class="menu-item">
//       <h3>Mocha</h3>
//       <p class="price">4.50</p>
//     </div>

//     <div class="menu-item">
//       <h3>White mocha</h3>
//       <p class="price">5.00</p>
//     </div>
//   </div>
    
// </section>
//   </div>
//  <!-- menu section end -->

export default function createMenuSection() {
const menuSection = document.createElement('section');
menuSection.classList.add('menu');
menuSection.id = 'menu';

const mainMenu = document.createElement('div');
mainMenu.classList.add('main-menu');

const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'ESPRESSO';

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const menuItems = [
    { name: 'americano', price: '3.00' },
    { name: 'Cappuccino', price: '3.00' },
    { name: 'Latte', price: '3.20' },
    { name: 'Caramel latte', price: '4.00' },
    { name: 'vanilla latte', price: '4.50' },
    { name: 'Double Espresso', price: '3.50' },
    { name: 'Mint Chocolate', price: '5.25' },
    { name: 'Mocha', price: '4.50' },
    { name: 'White mocha', price: '5.00' },
];

menuItems.forEach((menuItem) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = menuItem.name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.textContent = menuItem.price;

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    menuContainer.appendChild(itemDiv);
});

mainMenu.appendChild(heading);
mainMenu.appendChild(menuContainer);
menuSection.appendChild(mainMenu);

return menuSection;
}

