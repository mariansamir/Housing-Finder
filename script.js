const properties = [
  {
    image: "images/property_1.jpg",
    location: "Assuit",
    price: "$2000"
  },
  {
    image: "images/property_2.jpg",
    location: "Cairo",
    price: "$2500"
  },
  {
    image: "images/property_3.jpg",
    location: "Qena",
    price: "$3000"
  },
  {
    image: "images/property_4.jpg",
    location: "Giza",
    price: "$3500"
  },
  {
    image: "images/property_5.jpg",
    location: "Aswan",
    price: "$2300"
  },
  {
    image: "images/property_6.jpg",
    location: "Luxor",
    price: "$1500"
  }
];

const container = document.querySelector(".properties");
const searchInput = document.getElementById("searchInput");

// function to display cards
function displayItems(items) {
  container.innerHTML = "";

  items.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="">
        <p>${item.location}</p>
        <strong>${item.price}</strong>
      </div>
    `;
  });
}

// show all at start
displayItems(properties);

// search filter
searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = properties.filter(item =>
    item.location.toLowerCase().includes(value)
  );

  displayItems(filtered);
});