// Show the popup immediately after script runs
setTimeout(() => {
  document.getElementById('notification-popup').classList.remove('hidden');
}, 1000); // Show popup after 1 second

// Close the popup when NO is clicked
document.getElementById('no-btn').addEventListener('click', () => {
  document.getElementById('notification-popup').classList.add('hidden');
});

// Handle YES click with an alert and hide the popup
document.getElementById('yes-btn').addEventListener('click', () => {
  document.getElementById('notification-popup').classList.add('hidden');
});




// NavBar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });
});

// Dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.relative.group');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.dropdown-menu');

        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Hide menu if clicked outside
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });
    });
});



// Get all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdownMobile-button');

// Add event listeners to each button
dropdownButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from propagating to the window click event
        // Close all dropdowns except the current one
        document.querySelectorAll('.dropdownMobile-content').forEach(dropdown => {
            if (dropdown !== this.nextElementSibling) {
                dropdown.classList.remove('show');
            }
        });
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show'); // Toggle visibility
    });
});

// Close all dropdowns if the user clicks outside of them
window.addEventListener('click', function() {
    document.querySelectorAll('.dropdownMobile-content').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
});






// Hero Section Image Slider
const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = slider.children;
let index = 0;
const totalSlides = slides.length;

function showSlide(i) {
    if (i >= totalSlides) index = 0; // Loop back to the first slide
    else if (i < 0) index = totalSlides - 1; // Loop to the last slide
    else index = i;

    slider.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Optional: Automatic slide transitions
setInterval(() => showSlide(index + 1), 5000); // Change slide every 5 seconds





// Scroll To Top Button
const scrollUp = document.getElementById('scroll-up');

const handleScroll = () => {
    const rect = scrollUp.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const threshold = 350; // adjust this value to your liking

    if (rect.top < viewportHeight - threshold) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}





















// Handmade Section
document.querySelectorAll('.handmadeSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `

      <div class="handmade flex flex-col justify-center items-center">

          <div class="mt-4  w-[80%] bg-slate-200 p-4">
              <p>Showing results related to</p>
              <h1 class="mt-4 text-4xl font-bold">Handmade Painting</h1>
          </div>

          <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
              <div class="text-sm hover:text-teal-500">
                  <a href="">
                      <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
                  </a>
              </div>
              <div class="text-sm hover:text-teal-500">
                  <a href="" >
                      <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
                  </a>
              </div>
              <div class="text-sm hover:text-teal-500">
                  <a href="">
                      <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
                  </a>
              </div>
              <div class="text-sm hover:text-teal-500">
                  <a href="">
                      <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
                  </a>
              </div>
              <div class="text-sm hover:text-teal-500">
                  <a href="">
                      <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
                  </a>
              </div>
              <div class="text-sm hover:text-teal-500">
                  <a href="">
                      <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
                  </a>
              </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">

              <div class="card cursor-pointer " data-product-id="threePiecesRedFlowers">
                  <img src="assets/handmade/img1.jpg" width="260px" alt="Three Pieces Red Flowers">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Three Pieces Red Flowers</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                  </div>
              </div>

              <div class="card cursor-pointer" data-product-id="beautifulPeacock">
                  <img src="assets/handmade/img2.jpg" width="260px" alt="Beautiful Peacock">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Beautiful Peacock</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                  </div>
              </div>

              <div class="card cursor-pointer" data-product-id="bloomingWorld">
                  <img src="assets/handmade/img3.jpg" width="260px" alt="Blooming World">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Blooming World</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                  </div>
              </div>



              <div class="card cursor-pointer" data-product-id="lotusInWater">
                  <img src="assets/handmade/img4.jpg" width="260px" alt="Lotus In Water">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Lotus In Water</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                  </div>
              </div>

              <div class="card cursor-pointer" data-product-id="whiteBlueFlower">
                  <img src="assets/handmade/img5.jpg" width="260px" alt="White Blue Flower">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">White Blue Flower</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                  </div>
              </div>

              <div class="card cursor-pointer" data-product-id="threePiecesWhiteFlowers">
                  <img src="assets/handmade/img6.jpg" width="260px" alt="Three Pieces White Flowers">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Three Pieces White Flowers</h3>
                  <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                  </div>
              </div>
          </div>

      </div>
        `;
    });
});






// Poster Section
document.querySelectorAll('.posterSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
    
    
          
  <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Poster</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                
  
                
                  <div class="card cursor-pointer" data-product-id="solitude">
                      <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                      <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                      <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                        <div class="price line-through text-gray-700"> ₹ 3500</div>
                      </div>
                    </div>



                  <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>


                  <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                  <div class="card cursor-pointer" data-product-id="musicForAll">
                  <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                  <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                  <div class="amount flex justify-center gap-2">
                  <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                  <div class="price line-through text-gray-700"> ₹ 4200</div>
                  </div>
                  </div> 
                  
                  <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                      <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                      <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                      <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                        <div class="price line-through text-gray-700"> ₹ 3000</div>
                      </div>
                    </div> 
                  
                  
                </div>
  </div>
  
  </div>
    
        `;
    });
});





// Event listener for For Bedroom section
document.querySelectorAll('.forBedroomSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
          
          <div class="handmade flex flex-col justify-center items-center">
              <div class="mt-4  w-[80%] bg-slate-200 p-4">
                  <p>Showing results related to</p>
                  <h1 class="mt-4 text-4xl font-bold">Bedroom section</h1>
              </div>

              <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
                      </a>
                  </div>
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
                      </a>
                  </div>
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
                      </a>
                  </div>
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
                      </a>
                  </div>
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
                      </a>
                  </div>
                  <div class="text-sm hover:text-teal-500">
                      <a href="">
                        <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
                      </a>
                  </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
                  <div class="card cursor-pointer" data-product-id="redForest">
                      <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                      <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                      <div class="amount flex justify-center gap-2">
                          <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                          <div class="price line-through text-gray-700"> ₹ 8200</div>
                      </div>
                  </div>

                  <div class="card cursor-pointer" data-product-id="blueForest">
                      <img src="assets/new arrivals/img2.jpg" width="260px" alt="Blue Forest">
                      <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Blue Forest</h3>
                      <div class="amount flex justify-center gap-2">
                          <div class="price text-lg text-teal-500"> ₹ 5200 </div>
                          <div class="price line-through text-gray-700"> ₹ 6200</div>
                      </div>
                  </div>

                  <div class="card cursor-pointer" data-product-id="curvePatterns">
                      <img src="assets/new arrivals/img3.jpg" width="260px" alt="Curve Patterns">
                      <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Curve Patterns</h3>
                      <div class="amount flex justify-center gap-2">
                          <div class="price text-lg text-teal-500"> ₹ 4000 </div>
                          <div class="price line-through text-gray-700"> ₹ 8000</div>
                      </div>
                  </div>

                      <div class="card cursor-pointer" data-product-id="oneCupChai">
                          <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                          <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                          <div class="amount flex justify-center gap-2">
                              <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                              <div class="price line-through text-gray-700"> ₹ 3200</div>
                          </div>
                      </div>

                      <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                          <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                          <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                          <div class="amount flex justify-center gap-2">
                              <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                              <div class="price line-through text-gray-700"> ₹ 3000</div>
                          </div>
                      </div> 

                      <div class="card cursor-pointer" data-product-id="musicForAll">
                          <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                          <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                          <div class="amount flex justify-center gap-2">
                              <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                              <div class="price line-through text-gray-700"> ₹ 4200</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  });
});






// Event listener for For Guestroom section
document.querySelectorAll('.forGuestroomSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Guestroom section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>

  
                <div class="card cursor-pointer" data-product-id="redForest">
                    <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                    <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                        <div class="price line-through text-gray-700"> ₹ 8200</div>
                    </div>
                </div> 

    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});





// Event listener for For Lobby section
document.getElementById('forLobbySection').addEventListener('click', function () {
    document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Lobby section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>

  
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div> 
    
                <div class="card cursor-pointer" data-product-id="redForest">
                    <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                    <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                        <div class="price line-through text-gray-700"> ₹ 8200</div>
                    </div>
                </div>  
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card">
                
                <img src="assets/framed/img6.jpg" width="260px" alt="">
                
                <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                
                <div class="amount flex justify-center gap-2">
                <div class="price text-lg text-teal-500"> ₹ 4000 </div>
                <div class="price line-through text-gray-700"> ₹ 6000</div>
                </div>
                </div>
                
                </div>
  </div>
  
  </div>



        `;
});






// Event listener for For Office section
document.querySelectorAll('.forOfficeSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Office section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
               <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>




                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>
                  
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                
      

                
                
                <div class="card cursor-pointer" data-product-id="redForest">
                    <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                    <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                        <div class="price line-through text-gray-700"> ₹ 8200</div>
                    </div>
                </div>  
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});




// Event listener for For Studio section
document.querySelectorAll('.forStudioSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Studio section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>



                  <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>
  

                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                
      
      
                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="redForest">
                    <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                    <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                        <div class="price line-through text-gray-700"> ₹ 8200</div>
                    </div>
                </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});




// Event listener for For Modern Artworks section
document.querySelectorAll('.modernArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Modern Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="redForest">
                    <img src="assets/new arrivals/img1.jpg" width="260px" alt="">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Red Forest</h3>
                    <div class="amount flex justify-center gap-2">
                        <div class="price text-lg text-teal-500"> ₹ 5600 </div>
                        <div class="price line-through text-gray-700"> ₹ 8200</div>
                    </div>
                </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});



// Event listener for For Abstract Artworks section
document.querySelectorAll('.abstractArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Abstract Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>


        `;
    });
});



// Event listener for For Contemporary Artworks section
document.querySelectorAll('.contemporaryArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Contemporary Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div>
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});



// Event listener for For POP Artworks section
document.querySelectorAll('.popArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">POP Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>
  
                <div class="card cursor-pointer" data-product-id="threePiecesRedFlowers">
                    <img src="assets/handmade/img1.jpg" width="260px" alt="Three Pieces Red Flowers">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Three Pieces Red Flowers</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
               <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});




// Event listener for For Krishna Artworks section
document.querySelectorAll('.krishnaArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Krishna Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="radhaKrishna">
                    <img src="assets/new arrivals/img4.jpg" width="260px" alt="Radha Krishna">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Radha Krishna</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 1800</div>
                    </div>
                  </div> 
  
                <div class="card cursor-pointer" data-product-id="beautifulPeacock">
                    <img src="assets/handmade/img2.jpg" width="260px" alt="Beautiful Peacock">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Beautiful Peacock</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="krishnaRasleelaArtwork">
                    <img src="assets/handmade/img7.jpg" width="260px" alt="Krishna Rasleela Artwork">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Krishna Rasleela Artwork</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 2000 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div> 
      

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
    });
});




// Event listener for For Nature Artworks section
document.querySelectorAll('.natureArtworksSection').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Nature Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="loveInSpace">
                    <img src="assets/framed/img1.jpg" width="260px" alt="Love In Space">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Love In Space</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 4400 </div>
                      <div class="price line-through text-gray-700"> ₹ 5000</div>
                    </div>
                  </div>
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      
                

                
                
                <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>  
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>


        `;
    });
});




// Event listener for For Educational Artworks section
document.getElementById('educationalArtworksSection').addEventListener('click', function () {
    document.getElementById('contentContainer').innerHTML = `
            
    
          <div class="handmade flex flex-col justify-center items-center">
  
  <div class="mt-4  w-[80%] bg-slate-200 p-4">
      <p>Showing results related to</p>
      <h1 class="mt-4 text-4xl font-bold">Educational Artworks section</h1>
  </div>
  
  <div class="flex mt-4 flex-wrap justify-center p-4 gap-10">
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-bed mt-11 fa-xl"></i> Art For Bedroom
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-solid fa-laptop mt-11 fa-xl"></i> Art For Office
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid fa-mountain-sun mt-11 fa-xl"></i> Landscape
          </a>
          </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
        <i class="fa-brands mt-11 fa-canadian-maple-leaf fa-xl"></i> Floral
        </a>
        </div>
      <div class="text-sm hover:text-teal-500">
        <a href="" >
          <i class="fa-solid mt-11 fa-paintbrush fa-xl"></i> Handmade
        </a>
      </div>
      <div class="text-sm hover:text-teal-500">
        <a href="">
          <i class="fa-solid mt-11 fa-hands-praying fa-xl"></i> Religious
        </a>
      </div>
  </div>
  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-4">
  
  
                <div class="card cursor-pointer" data-product-id="motivationalPosterSet">
                <img src="assets/trending/img3.jpg" width="260px" alt="Motivational Poster Set">
                <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Motivational Poster Set</h3>
                <div class="amount flex justify-center gap-2">
                  <div class="price text-lg text-teal-500"> ₹ 2000 </div>
                  <div class="price line-through text-gray-700"> ₹ 3000</div>
                </div>
              </div>
  
                <div class="card cursor-pointer" data-product-id="goodVibesOnly">
                    <img src="assets/framed/img2.jpg" width="260px" alt="Good Vibes Only">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Good Vibes Only</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 2200</div>
                    </div>
                  </div>
    
                <div class="card cursor-pointer" data-product-id="solitude">
                    <img src="assets/framed/img3.jpg" width="260px" alt="Solitude">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Solitude</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3500</div>
                    </div>
                  </div>
      
      
                

                
                
               <div class="card cursor-pointer" data-product-id="oneCupChai">
                    <img src="assets/framed/img4.jpg" width="260px" alt="One Cup Chai Please!">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">One Cup Chai Please!</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1900 </div>
                      <div class="price line-through text-gray-700"> ₹ 3200</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="colorfulTreeBranches">
                    <img src="assets/framed/img5.jpg" width="260px" alt="Colorful Tree Branches">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Colorful Tree Branches</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 1200 </div>
                      <div class="price line-through text-gray-700"> ₹ 3000</div>
                    </div>
                  </div>
                
                
                <div class="card cursor-pointer" data-product-id="musicForAll">
                    <img src="assets/framed/img6.jpg" width="260px" alt="Music For All">
                    <h3 class="text-lg font-serif text-center mt-4 text-gray-800">Music For All</h3>
                    <div class="amount flex justify-center gap-2">
                      <div class="price text-lg text-teal-500"> ₹ 3200 </div>
                      <div class="price line-through text-gray-700"> ₹ 4200</div>
                    </div>
                  </div>  
                
                </div>
  </div>
  
  </div>



        `;
});














// Cart Page
// Function to save the cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load the cart from localStorage
function loadCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Function to add a product to the cart
function addToCart(product) {
  const cart = loadCart();
  
  // Check if the product already exists in the cart
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
      // If it exists, update the quantity
      existingProduct.quantity += 1;
  } else {
      // If it doesn't exist, add it to the cart
      cart.push({
          ...product,
          quantity: 1
      });
  }

  saveCart(cart);
  alert(`${product.name} has been added to the cart.`);
}

// Function to update the total price in the cart
function updateTotalPrice(cart) {
  const totalPrice = cart.reduce((total, product) => {
      return total + (product.price * product.quantity);
  }, 0);

  document.getElementById('total-price').textContent = `Total: ₹${totalPrice}`;
}

// Function to render the cart items
function renderCartItems() {
  const cart = loadCart();
  const cartItemsContainer = document.getElementById('cart-items');

  cartItemsContainer.innerHTML = ''; // Clear existing items

  if (cart.length === 0) {
      document.getElementById('empty-cart-message').classList.remove('hidden');
  } else {
      document.getElementById('empty-cart-message').classList.add('hidden');

      cart.forEach(product => {
          const cartItem = `
              <div class="cart-item flex justify-between items-center border-b pb-4">
                  <img src="${product.image}" alt="${product.name}" width="100px" class="rounded">
                  <div class="text-lg font-serif">${product.name}</div>
                  <div class="text-teal-600 font-semibold">₹${product.price}</div>
                  <div class="flex items-center">
                      <button class="px-2 text-gray-500" onclick="decreaseQuantity('${product.id}')">-</button>
                      <div class="px-4">${product.quantity}</div>
                      <button class="px-2 text-teal-500" onclick="increaseQuantity('${product.id}')">+</button>
                  </div>
                  <button class="text-red-500" onclick="removeFromCart('${product.id}')">Remove</button>
              </div>
          `;
          cartItemsContainer.innerHTML += cartItem;
      });
  }

  // Update the total price
  updateTotalPrice(cart);
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  const cart = loadCart();
  const product = cart.find(item => item.id === productId);

  if (product) {
      product.quantity += 1;
      saveCart(cart);
      renderCartItems();
  }
}

// Function to decrease the quantity of a product in the cart
// Function to render the cart items
// Function to render the cart items
function renderCartItems() {
  const cart = loadCart();
  const cartItemsContainer = document.getElementById('cart-items');

  cartItemsContainer.innerHTML = ''; // Clear existing items

  if (cart.length === 0) {
      document.getElementById('empty-cart-message').classList.remove('hidden');
      document.getElementById('total-price').textContent = 'Total: ₹0';
  } else {
      document.getElementById('empty-cart-message').classList.add('hidden');

      cart.forEach(product => {
          const cartItem = `
              <div class="cart-item flex justify-between items-center border-b pb-4">
                  <img src="${product.image}" alt="${product.name}" width="100px" class="rounded">
                  <div class="text-lg font-serif">${product.name}</div>
                  <div class="text-teal-600 font-semibold">₹${product.price}</div>
                  <div class="flex items-center">
                      <button class="px-2 text-gray-500" onclick="decreaseQuantity('${product.id}')">-</button>
                      <div class="px-4">${product.quantity}</div>
                      <button class="px-2 text-teal-500" onclick="increaseQuantity('${product.id}')">+</button>
                  </div>
                  <button class="text-red-500" onclick="removeFromLocalStorage('${product.id}')">Remove</button>
              </div>
          `;
          cartItemsContainer.innerHTML += cartItem;
      });

      // Update the total price
      updateTotalPrice(cart);
  }
}

// Function to directly remove an item from localStorage by its ID
function removeFromLocalStorage(productId) {
  let cart = loadCart(); // Load the current cart
  cart = cart.filter(item => item.id !== productId); // Filter out the item with the given ID
  saveCart(cart); // Save the updated cart back to localStorage
  renderCartItems(); // Re-render the cart items to reflect the changes
}



// Function to attach event listeners to remove buttons
function attachRemoveButtonListeners() {
  document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', function() {
          const productId = this.getAttribute('data-id');
          removeFromCart(productId);
      });
  });
}

// Initial call to render cart items when the page loads
document.addEventListener('DOMContentLoaded', function() {
  renderCartItems();
});



function removeFromCart(productId) {
  let cart = loadCart();
  console.log('Cart before removal:', cart); // Debugging

  cart = cart.filter(item => item.id !== productId);
  console.log('Cart after removal:', cart); // Debugging

  saveCart(cart);
  renderCartItems();
}



// Attach event listener for the cart page
document.getElementById('cartPage').addEventListener('click', function () {
  document.getElementById('contentContainer').innerHTML = `
      <div class="container mx-auto pl-10 mb-32 pr-10 text-gray-700">
          <h1 class="text-3xl mb-6 mt-12 font-serif">Your Cart</h1>
          <div id="cart-items" class="space-y-6">
              <div id="empty-cart-message" class="text-center text-gray-600 hidden">
                  <p>Your cart is empty</p>
              </div>
          </div>
          <div id="total-section" class="mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-6 bg-white p-4 rounded-lg shadow-md">
              <h2 id="total-price" class="text-2xl font-semibold">Total: ₹0</h2>
              <button class="bg-teal-500 text-xl text-white px-6 py-2 rounded hover:bg-teal-600 mt-4 md:mt-0 transition-colors duration-300 ease-in-out">Checkout</button>
          </div>
      </div>
  `;

  // Render the cart items when the cart page is loaded
  renderCartItems();

});
// Function to add products to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay(); // Update cart display if needed
  alert(`${product.name} has been added to your cart.`);
}

// Function to bind "Add to Cart" buttons
function bindAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          const product = {
              id: this.closest('.card').getAttribute('data-product-id'),
              name: this.getAttribute('data-name'),
              price: parseInt(this.getAttribute('data-price')),
              image: this.getAttribute('data-image')
          };

          addToCart(product); // Call the addToCart function with the product data
      });
  });
}

// Make sure this is called when the product cards are loaded on the page
document.addEventListener('DOMContentLoaded', function () {
  bindAddToCartButtons();
});










document.addEventListener('DOMContentLoaded', function () {
  // Bind event listener to a static parent element
  document.getElementById('contentContainer').addEventListener('click', function (event) {
      // Check if the click target or its ancestor is a .card
      if (event.target.closest('.card')) {
          const card = event.target.closest('.card');
          const productId = card.getAttribute('data-product-id');
          console.log('Card clicked:', productId);

          // Fetch product data and show product details
          loadProducts().then(products => {
              const product = products.find(p => p.id === productId);
              if (product) {
                  showProductDetails(product);
              } else {
                  console.error('Product not found:', productId);
              }
          });
      }
  });

  // Additional setup for your static content, if necessary
});











// Load JSON data
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Products loaded:', data);
        return data;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

// Load cart from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart Loaded:', cart); // Debugging: See cart data
    return cart;
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart Saved:', cart); // Debugging: See saved cart data
}

// Show product details
function showProductDetails(product) {
  document.getElementById('contentContainer').innerHTML = `
      <div class="flex flex-wrap md:flex-row sm:flex-col justify-center gap-5 items-center mt-8">
          <div class="prodPageImg">
              <img src="${product.image}" width="375px">
          </div>
          <div class="flex flex-col ml-3 prodPageImg text-gray-700">
              <h1 class="mt-2 text-2xl font-serif">${product.name}</h1>
              <h1 class="text-sm mt-3">By Han</h1>
              <h1 class="text-teal-800 mt-4">In Stock</h1>
              <h1 class="text-sm">Cash on Delivery not eligible</h1>
              <div class="flex gap-2 mt-4">
                  <h1 class="text-teal-600 mt-1 text-3xl">₹${product.price}</h1>
                  <h1 class="text-gray-600 mt-3 text-xl line-through">₹${product.oldPrice}</h1>
              </div>
              <h1 class="bg-yellow-400 mt-2 h-6 w-16 pl-2 pt-1 font-semibold text-xs">20% OFF</h1>
              <div class="flex gap-4 mt-6">
                  <input id="productQuantity" class="bg-gray-200 h-8 pl-2 w-16 border-2 rounded-md border-gray-300" value="1" type="number">
                  <button id="addToCart" class="bg-teal-500 rounded w-28 text-white text-sm"
                  data-name="${product.name}"
                  data-price="${product.price}"
                  data-image="${product.image}">Add to cart</button>
                  <button class="bg-teal-500 rounded w-10 h-8 wishlist-btn"
                  data-product-id="${product.id}" 
                  data-name="${product.name}"
                  data-price="${product.price}"
                  data-image="${product.image}" >🤍</button>
              </div>
          </div>
      </div>
      <div class="ml-52 mt-20 mr-52 flex justify-center items-center">
      <div class="flex flex-col justify-center pb-5 text-gray-600 items-start pl-5  bg-slate-200">
          <h1 class="font-semibold text-2xl mt-2 mb-2">Specifications</h1>
          ${Object.entries(product.specifications).map(([key, value]) => `
              <div class="flex gap-8 mt-2">
                  <h1 class="font-semibold w-32">${key}</h1>
                  <h1 class="ml-1 w-60">${value}</h1>
              </div>
          `).join('')}
      </div>
      </div>
  `;

  // Add to Cart button click event
  document.getElementById('addToCart').addEventListener('click', function () {
      const quantity = parseInt(document.getElementById('productQuantity').value);

      if (isNaN(quantity) || quantity <= 0) {
          alert('Please enter a valid quantity.');
          return;
      }

      const productToAdd = {
          name: this.getAttribute('data-name'),
          price: parseFloat(this.getAttribute('data-price')),
          image: this.getAttribute('data-image'),
          quantity: quantity
      };

      const cart = loadCart();
      const existingItem = cart.find(item => item.name === productToAdd.name);

      if (existingItem) {
          existingItem.quantity += quantity;
      } else {
          cart.push(productToAdd);
      }

      saveCart(cart);
      alert(`${productToAdd.name} has been added to your cart!`);
  });






  

  




  // Wishlist Page

  document.querySelectorAll('.wishlistPage').forEach(function (element) {
    element.addEventListener('click', function () {
        console.log('Wishlist button clicked'); // Debugging

        // Set innerHTML for the content container to display the wishlist page
        document.getElementById('contentContainer').innerHTML = `
            <div class="p-8 text-2xl font-semibold">Your Wishlist</div>
            <div id="wishlist-container" class="wishlist-container p-8">
                <div class="font-semibold text-gray-700 text-center text-xl">
                    Oh no! It seems like your wishlist is empty!
                    <a href="index.html" class="text-teal-500">Add items from here!</a>
                </div>
            </div>
            <div class="p-8 text-xl font-semibold text-gray-700 mb-4">
                <h3>To access your wishlist from anywhere and any device make sure you 
                    <a href="#" class="replaceContentButton text-teal-500">
                        <i class="fa-solid fa-user"></i> Login!
                    </a>
                </h3>
            </div>
        `;

        // Call function to render wishlist items
        renderWishlistItems();
    });
});






  // Attach Wishlist button click event
  document.querySelectorAll('.wishlist-btn').forEach(function(button) {
      button.addEventListener('click', function (event) {
          // Prevent event bubbling
          event.stopPropagation();

          const wishlistItem = {
              id: this.getAttribute('data-product-id'),
              name: this.getAttribute('data-name'),
              price: this.getAttribute('data-price'),
              image: this.getAttribute('data-image')
          };

          // Add to wishlist without changing the page content
          addToWishlist(wishlistItem);
          alert(`${wishlistItem.name} has been added to your wishlist!`);
      });
  });
}

// Wishlist logic (you can customize as needed)
function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the product is already in the wishlist
  if (!wishlist.some(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
  } else {
      alert('Product is already in your wishlist.');
  }
}

// Load the wishlist from localStorage
function loadWishlist() {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
}

// Function to render the wishlist items
function renderWishlistItems() {
  const wishlist = loadWishlist();
  const wishlistContainer = document.getElementById('wishlist-container');

  wishlistContainer.innerHTML = ''; // Clear previous items

  if (wishlist.length === 0) {
      wishlistContainer.innerHTML = `
          <div class="font-semibold text-gray-700 text-center text-xl">
              Oh no! It seems like your wishlist is empty!
              <a href="index.html" class="text-teal-500">Add items from here!</a>
          </div>
      `;
  } else {
      wishlist.forEach(product => {
          const wishlistItem = `
              <div class="wishlist-item flex justify-between items-center border-b pb-4">
                  <img src="${product.image}" alt="${product.name}" width="100px" class="rounded">
                  <div class="text-lg font-serif">${product.name}</div>
                  <div class="text-teal-600 font-semibold">₹${product.price}</div>
                  <button class="text-red-500" onclick="removeFromWishlist('${product.id}')">Remove</button>
              </div>
          `;
          wishlistContainer.innerHTML += wishlistItem;
      });
  }
}

// Event listener for loading the wishlist page
document.querySelectorAll('.wishlistPage').forEach(function (element) {
  element.addEventListener('click', function () {
      console.log('Wishlist button clicked'); // Debugging

      // Set innerHTML for the content container to display the wishlist page
      document.getElementById('contentContainer').innerHTML = `
          <div class="p-8 text-2xl font-semibold">Your Wishlist</div>
          <div id="wishlist-container" class="wishlist-container p-8">
              <div class="font-semibold text-gray-700 text-center text-xl">
                  Oh no! It seems like your wishlist is empty!
                  <a href="index.html" class="text-teal-500">Add items from here!</a>
              </div>
          </div>
      `;

      // Call function to render wishlist items
      renderWishlistItems();
  });
});




// Function to remove a product from the wishlist
function removeFromWishlist(productId) {
  let wishlist = loadWishlist();

  // Filter out the product with the matching productId
  wishlist = wishlist.filter(product => product.id !== productId);

  // Save the updated wishlist back to localStorage
  saveWishlist(wishlist);

  // Re-render the wishlist items to reflect the removal
  renderWishlistItems();

  // Optional: Show confirmation or log for debugging
  console.log(`Product with ID ${productId} removed from wishlist.`);
}

// Save the wishlist to localStorage
function saveWishlist(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Render wishlist items (already defined, this will re-render the wishlist)
function renderWishlistItems() {
  const wishlist = loadWishlist();
  const wishlistContainer = document.getElementById('wishlist-container');

  wishlistContainer.innerHTML = ''; // Clear previous items

  if (wishlist.length === 0) {
      wishlistContainer.innerHTML = `
          <div class="font-semibold text-gray-700 text-center text-xl">
              Oh no! It seems like your wishlist is empty!
              <a href="index.html" class="text-teal-500">Add items from here!</a>
          </div>
      `;
  } else {
      wishlist.forEach(product => {
          const wishlistItem = `
              <div class="wishlist-item flex justify-between items-center border-b pb-4">
                  <img src="${product.image}" alt="${product.name}" width="100px" class="rounded">
                  <div class="text-lg font-serif">${product.name}</div>
                  <div class="text-teal-600 font-semibold">₹${product.price}</div>
                  <button class="text-red-500" onclick="removeFromWishlist('${product.id}')">Remove</button>
              </div>
          `;
          wishlistContainer.innerHTML += wishlistItem;
      });
  }
}




document.addEventListener('DOMContentLoaded', function () {
  // Function to bind event listeners to .replaceContentButton
  function bindReplaceContentButton() {
      document.querySelectorAll('.replaceContentButton').forEach(function (element) {
          element.addEventListener('click', function () {
              console.log('Replace content button clicked'); // Debugging
              document.getElementById('contentContainer').innerHTML = `
                  <h1 class="text-center text-3xl font-serif mt-8 mb-8">Hello Art Lover! <br> Register for newsletters here!</h1>
                  <div class="loginBox mt-16 mb-16 flex flex-wrap gap-20 justify-center">
                      <div class="loginSec border-2 border-slate-200 flex justify-center flex-col w-96 h-80 items-center">
                          <h1 class="loginHead text-3xl border-b-2 border-slate-200 font-serif w-[80%]">Login</h1>
                          <form class="flex flex-col mt-8 items-end">
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="email" placeholder="Email address" name="email" required />
                              <input class="border-2 pl-2 pt-1 pb-1 text-sm mt-3 w-80 text-justify" type="password" placeholder="Password" name="password" required />
                              <button class="font-semibold mt-6 h-8 w-20 bg-teal-500 hover:bg-teal-700 text-white">Login</button>
                          </form>
                          <a class="mr-48 hover:text-teal-500" href="#">Forgot Password</a>
                      </div>
                      <div class="loginSec border-2 pb-8 border-slate-200 flex justify-center flex-col items-center w-96">
                          <h1 class="loginHead text-3xl mt-8 border-b-2 border-slate-200 font-serif w-[80%]">Register</h1>
                          <form class="flex flex-col mt-8 items-center">
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="text" placeholder="Name" name="name" required />
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="email" placeholder="Email address" name="email" required />
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="number" placeholder="Phone Number" name="phone" required />
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="password" placeholder="Password" id="Password" name="password" required />
                              <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="password" placeholder="Confirm Password" id="confirmPassword" name="password" required />
                              <p class="mt-4 pl-8 pr-8">By clicking Register, you agree to our Terms & Conditions & Privacy Policy and confirm that you have read both policies.</p>
                              <button class="font-bold mt-4 h-10 w-32 bg-teal-500 hover:bg-teal-700 text-white ml-48">Register</button>
                          </form>
                      </div>
                  </div>
              `;
          });
      });
  }

  // Bind event listeners to .wishlistPage elements
  document.querySelectorAll('.wishlistPage').forEach(function (element) {
      element.addEventListener('click', function () {
          console.log('Wishlist button clicked'); // Debugging

          document.getElementById('contentContainer').innerHTML = `
              <div class="p-8 text-2xl font-semibold">Your Wishlist</div>
              <div id="wishlist-container" class="wishlist-container p-8">
                  <div class="font-semibold text-gray-700 text-center text-xl">
                      Oh no! It seems like your wishlist is empty!
                      <a href="index.html" class="text-teal-500">Add items from here!</a>
                  </div>
              </div>
              <div class="p-8 text-xl font-semibold text-gray-700 mb-4">
                  <h3>To access your wishlist from anywhere and any device make sure you 
                      <a href="#" class="replaceContentButton text-teal-500">
                          <i class="fa-solid fa-user"></i> Login!
                      </a>
                  </h3>
              </div>
          `;

          // Bind event listeners to the newly added .replaceContentButton elements
          bindReplaceContentButton();

          // Call function to render wishlist items
          renderWishlistItems();
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const wishlistButtons = document.querySelectorAll('.wishlistPage');
  console.log('Wishlist buttons found:', wishlistButtons); // Check if buttons are found

  wishlistButtons.forEach(function (element) {
      element.addEventListener('click', function () {
          console.log('Wishlist button clicked');
          // Your code here
      });
  });
});




// Function to remove a product from the cart
function removeFromCart(productId) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== productId); // Filter out the item with the given ID
  saveCart(cart); // Save the updated cart back to localStorage
  renderCartItems(); // Re-render the cart items to reflect the changes
}





// Attach event listeners to cards
async function attachEventListeners() {
  const products = await loadProducts();

  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function () {
          const productId = this.getAttribute('data-product-id');
          const product = products.find(p => p.id === productId);

          if (product) {
              showProductDetails(product);
          } else {
              console.error('Product not found:', productId);
          }
      });
  });
}

// Initialize
attachEventListeners();




document.addEventListener('DOMContentLoaded', function() {
  // Function to show the cart page
  document.getElementById('cartPage')?.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `
          <div class="container mx-auto pl-10 mb-32 pr-10 text-gray-700">
              <h1 class="text-3xl mb-6 mt-12 font-serif">Your Cart</h1>
              <div id="cart-items" class="space-y-6"></div>
              <div id="empty-cart-message" class="text-center text-gray-600 hidden">
                  <p>Your cart is empty</p>
              </div>
              <div id="total-section" class="mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-6 bg-white p-4 rounded-lg shadow-md">
                  <h2 id="total-price" class="text-2xl font-semibold">Total: ₹0</h2>
                  <button id="checkoutButton" class="bg-teal-500 text-xl text-white px-6 py-2 rounded hover:bg-teal-600 mt-4 md:mt-0 transition-colors duration-300 ease-in-out">Checkout</button>
              </div>
          </div>
      `;

      // Render the cart items when the cart page is loaded
      renderCartItems();
  });

  // Function to render cart items
  function renderCartItems() {
      const cart = loadCart();
      const cartItemsContainer = document.getElementById('cart-items');
      const totalPriceElement = document.getElementById('total-price');
      const emptyCartMessage = document.getElementById('empty-cart-message');

      cartItemsContainer.innerHTML = ''; // Clear previous items
      let total = 0;

      if (cart.length === 0) {
          emptyCartMessage.classList.remove('hidden');
          totalPriceElement.textContent = `Total: ₹0`;
          return;
      } else {
          emptyCartMessage.classList.add('hidden');
      }

      cart.forEach(item => {
          const itemTotalPrice = item.price * item.quantity;
          total += itemTotalPrice;

          const cartItemHTML = `
              <div class=" flex items-center justify-between bg-white p-4 rounded-lg shadow-md cartItem">
                  <div class="flex items-center">
                      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                      <div class="ml-4">
                          <h2 class="text-lg font-semibold">${item.name}</h2>
                          <p class="text-gray-500">Price: ₹${item.price}</p>
                          <p class="text-gray-500">Quantity: ${item.quantity}</p>
                      </div>
                  </div>
                  <p class="text-gray-600 text-2xl font-semibold">₹${itemTotalPrice}</p>
                  <button class="remove-item bg-red-500 text-white px-3 py-1 rounded" data-id="${item.id}">Remove</button>
              </div>
          `;
          cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
      });

      totalPriceElement.textContent = `Total: ₹${total}`;

      // Add event listeners for remove buttons
      document.querySelectorAll('.remove-item').forEach(button => {
          button.addEventListener('click', function() {
              const productId = this.getAttribute('data-id');
              removeFromCart(productId); // Function to remove the item
          });
      });
  }

// Function to remove a product from the cart
function removeFromCart(productId) {
    let cart = loadCart(); // Load the cart from localStorage

    // Filter out the item to remove
    cart = cart.filter(item => item.id !== productId);
    
    // Save the updated cart back to localStorage
    saveCart(cart);

    // Re-render the cart items on the page
    renderCartItems();
}

  // Load cart from localStorage
  function loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart;
  }

  // Save cart to localStorage
  function saveCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Show checkout page when the 'Checkout' button is clicked
  document.getElementById('contentContainer')?.addEventListener('click', function (event) {
      if (event.target && event.target.id === 'checkoutButton') {
          document.getElementById('contentContainer').innerHTML = `
              <div class="container mx-auto pl-10 mb-32 pr10 text-gray-700">
                  <h1 class="text-3xl mb-6 mt-12 font-serif">Checkout</h1>
                  <form id="shipping-form" class="space-y-4 space-x-4">
                      <div>
                          <label for="name" class="block text-lg ml-4 font-medium">Name:</label>
                          <input id="name" type="text" class="form-input mt-1 ml-4 block w-full h-8 pl-2" required>
                      </div>
                      <div>
                          <label for="address" class="block text-lg font-medium">Address:</label>
                          <input id="address" type="text" class="form-input mt-1 block w-full h-8 pl-2" required>
                      </div>
                      <div>
                          <label for="city" class="block text-lg font-medium">City:</label>
                          <input id="city" type="text" class="form-input mt-1 block w-full h-8 pl-2" required>
                      </div>
                      <div>
                          <label for="zip" class="block text-lg font-medium">Zip Code:</label>
                          <input id="zip" type="text" class="form-input mt-1 block w-full h-8 pl-2" required>
                      </div>
                      <div>
                          <label for="phone" class="block text-lg font-medium">Phone:</label>
                          <input id="phone" type="text" class="form-input mt-1 block w-full h-8 pl-2" required>
                      </div>
                      <button id="orderPlaced" class="bg-teal-500 text-white px-6 mt-2 py-2 rounded hover:bg-teal-600">Place Order</button>
                  </form>
              </div>
          `;
      }
  });
});







function renderCartItems() {
  const cart = loadCart(); // Load cart from localStorage
  const cartItemsContainer = document.getElementById('cart-items');
  const emptyCartMessage = document.getElementById('empty-cart-message');
  const totalPriceElement = document.getElementById('total-price');
  
  // Clear existing items
  cartItemsContainer.innerHTML = '';

  // If cart is empty, show empty cart message
  if (cart.length === 0) {
      emptyCartMessage.classList.remove('hidden');
      totalPriceElement.textContent = 'Total: ₹0';
      return;
  } else {
      emptyCartMessage.classList.add('hidden');
  }

  let totalPrice = 0;

  // Loop through cart items and display each one
  cart.forEach((item, index) => {
      totalPrice += item.price * item.quantity; // Calculate total price

      // Create HTML for each cart item
      const cartItemHTML = `
          <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md cartItem">
              <div class="flex items-center">
                  <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                  <div class="ml-4">
                      <h2 class="text-lg font-semibold">${item.name}</h2>
                      <p class="text-gray-500">Price: ₹${item.price}</p>
                      <p class="text-gray-500">Quantity: ${item.quantity}</p>
                  </div>
              </div>
              <button class="text-red-500 hover:text-red-700" onclick="removeFromCart(${index})">Remove</button>
          </div>
      `;
      
      // Append cart item to cartItemsContainer
      cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  // Update total price after rendering all items
  totalPriceElement.textContent = `Total: ₹${totalPrice}`;
}










// Function to add products to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay(); // Update cart display if needed
  alert(`${product.name} has been added to your cart.`);
}














document.querySelectorAll('.replaceContentButton').forEach(function (element) {
  element.addEventListener('click', function () {
      document.getElementById('contentContainer').innerHTML = `

	
	
	<h1 class="text-center text-3xl font-serif mt-8 mb-8">Hello Art Lover! <br> Register for newsletters here!</h1>
                <div class="loginBox mt-16 mb-16 flex flex-wrap gap-20 justify-center">
                    <div class="loginSec border-2 border-slate-200 flex justify-center flex-col w-96 h-80 items-center">
                        <h1 class="loginHead text-3xl border-b-2 border-slate-200 font-serif w-[80%]">Login</h1>
                        <form class="flex flex-col mt-8 items-end">
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="email" placeholder="Email address" name="email" required />
                            <input class="border-2 pl-2 pt-1 pb-1 text-sm mt-3 w-80 text-justify" type="password" placeholder="Password" name="password" required />
                            <button class="font-semibold mt-6 h-8 w-20 bg-teal-500 hover:bg-teal-700 text-white">Login</button>
                        </form>
                        <a class="mr-48 hover:text-teal-500" href="#">Forgot Password</a>
                    </div>
                    <div class="loginSec border-2 pb-8 border-slate-200 flex justify-center flex-col items-center w-96">
                        <h1 class="loginHead text-3xl mt-8 border-b-2 border-slate-200 font-serif w-[80%]">Register</h1>
                        <form class="flex flex-col mt-8 items-center">
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="text" placeholder="Name" name="name" required />
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="email" placeholder="Email address" name="email" required />
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="number" placeholder="Phone Number" name="phone" required />
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="password" placeholder="Password" id="Password" name="password" required />
                            <input class="border-2 text-sm pl-2 pt-1 pb-1 w-80 text-left mt-3" type="password" placeholder="Confirm Password" id="confirmPassword" name="password" required />
                            <p class="mt-4 pl-8 pr-8">By clicking Register, you agree to our Terms & Conditions & Privacy Policy and confirm that you have read both policies.</p>
                            <button class="font-bold mt-4 h-10 w-32 bg-teal-500 hover:bg-teal-700 text-white ml-48">Register</button>
                        </form>
                    </div>
                </div>                    


        `;
    });
});






document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('error');
    
    if (password !== confirmPassword) {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Passwords do not match!';
    } else {
        errorElement.style.display = 'none';
        this.submit();
    }
  });
});






// Attach event listener for the search page
document.getElementById('searchPage').addEventListener('click', function () {
  document.getElementById('contentContainer').innerHTML = `
      <div class="container searchSec mx-auto pl-10 pr-10 mb-32 text-gray-800">
          <h1 class="text-3xl w-96 mb-6 mt-6 font-serif">Search Products</h1>
          
          <!-- Search Input and Button -->
          <div class="flex searchBar items-center mb-6 space-x-4">
              <input id="search-input" type="text" placeholder="Search for products..." class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <button id="search-button" class="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300 ease-in-out">Search</button>
          </div>
          
          <!-- Search Results -->
          <div id="search-results" class="space-y-6">
              <!-- Search results will be dynamically inserted here -->
          </div>
      </div>
  `;

  // Load products and attach event to the search button
  loadProducts().then(products => {
      document.getElementById('search-button').addEventListener('click', function () {
          const searchTerm = document.getElementById('search-input').value.toLowerCase();
          const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
          displaySearchResults(filteredProducts);
      });
  });
});

// Function to display search results
function displaySearchResults(products) {
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = ''; // Clear previous results

  if (products.length === 0) {
      searchResultsContainer.innerHTML = `<p>No products found.</p>`;
  } else {
      products.forEach(product => {
          const productCard = `
              <div class="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 ">
                  <img src="${product.image}" alt="${product.name}" class="w-32 h-32 object-cover rounded-md">
                  <div class="flex flex-col justify-between">
                      <h2 class="text-2xl text-gray-800 font-semibold">${product.name}</h2>
                      <p class="text-gray-600 mb-1 text-xl">₹${product.price}</p>
                      <button class="bg-teal-500 w-44 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300 ease-in-out view-product-btn" data-product-id="${product.id}">View Product</button>
                  </div>
              </div>
          `;
          searchResultsContainer.innerHTML += productCard;
      });

      // Ensure the event listeners are added AFTER the results are rendered
      document.querySelectorAll('.view-product-btn').forEach(button => {
          button.addEventListener('click', function () {
              const productId = this.getAttribute('data-product-id');
              loadProductPage(productId); // Call function to load the product page
          });
      });
  }
}

// Function to load the product page
function loadProductPage(productId) {
  loadProducts().then(products => {
      const product = products.find(p => p.id === productId);
      if (product) {
          document.getElementById('contentContainer').innerHTML = `
              <div class="container mx-auto pl-32 pr-32 mt-4 mb-32 text-gray-800">
                  <div class="bg-white p-6 rounded-lg shadow-md">
                      <h1 class="text-3xl mb-4 font-serif">${product.name}</h1>
                      <div class="flex">
                          <img src="${product.image}" alt="${product.name}" class="w-48 h-48 object-cover rounded-md mr-8">
                          <div data-product-id="${product.id}>
                              <p class="text-2xl font-semibold text-teal-600 mb-4">₹${product.price}</p>
                              <p class="mb-4 text-xl">${product.name}</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      }
  });
}





// Function to show the checkout page
document.getElementById('checkoutPage').addEventListener('click', function () {
  document.getElementById('contentContainer').innerHTML = ''; // Clear other content
  document.getElementById('checkoutPageContent').classList.remove('hidden'); // Show checkout page
  renderCheckoutCartItems(); // Render cart items on the checkout page
});

// Function to render cart items on the checkout page
function renderCheckoutCartItems() {
  const cart = loadCart();
  const cartItemsContainer = document.getElementById('checkout-cart-items');
  const totalPriceElement = document.getElementById('checkout-total-price');

  cartItemsContainer.innerHTML = ''; // Clear previous items

  let total = 0;

  if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElement.textContent = `Total: ₹0`;
      return;
  }

  cart.forEach(item => {
      const itemTotalPrice = item.price * item.quantity;
      total += itemTotalPrice;

      const cartItemHTML = `
          <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md cartItem">
              <div class="flex items-center">
                  <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                  <div class="ml-4">
                      <h2 class="text-lg font-semibold">${item.name}</h2>
                      <p class="text-gray-500">Price: ₹${item.price}</p>
                      <p class="text-gray-500">Quantity: ${item.quantity}</p>
                  </div>
              </div>
              <p class="text-gray-600 text-2xl font-semibold">₹${itemTotalPrice}</p>
          </div>
      `;
      cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  totalPriceElement.textContent = `Total: ₹${total}`;
}

// Attach the event listener to the form
document.addEventListener('DOMContentLoaded', function () {
  const shippingForm = document.getElementById('shipping-form');

  if (shippingForm) {
      shippingForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent form submission from refreshing the page

          // Validate shipping details
          const name = document.getElementById('name').value.trim();
          const address = document.getElementById('address').value.trim();
          const city = document.getElementById('city').value.trim();
          const zip = document.getElementById('zip').value.trim();
          const phone = document.getElementById('phone').value.trim();

          if (!name || !address || !city || !zip || !phone) {
              alert('Please fill in all the fields.');
              return;
          }

          // Simulate payment success
          alert('Payment Successful! Thank you for your order.');

          // Clear the cart after successful checkout
          localStorage.removeItem('cart');
          renderCheckoutCartItems(); // Re-render the empty cart
      });
  }
});



document.getElementById('orderPlaced').addEventListener('click', function() {
  alert('Button clicked!');
});
