    console.log("✅ home.js is running");
    
    const menus = {
      hot: [
        { name: "Americano", desc: "Espresso and hot water", img: "images/americano.png" },
        { name: "Latte", desc: "Espresso & steamed milk, foam", img: "images/latte.png" },
        { name: "Hot Chocolate", desc: "Rich cocoa with steamed milk", img: "images/hotchocolate.png" },
        { name: "Hot Brewed Coffee", desc: "Freshly brewed drip coffee", img: "images/americano.png" }
      ],
      cold: [
        { name: "Iced Americano", desc: "Espresso with cold water & ice", img: "https://i.imgur.com/mG4f0xI.png" },
        { name: "Iced Latte", desc: "Cold milk over espresso & ice", img: "https://i.imgur.com/qEt7bzP.png" },
        { name: "Cold Brew", desc: "Slow-brewed cold coffee", img: "https://i.imgur.com/TG6uxrY.png" }
      ],
      refresh: [
        { name: "Mango Fizz", desc: "Mango with soda & mint", img: "https://i.imgur.com/MFRa2TD.png" },
        { name: "Berry Blast", desc: "Mixed berries & lemon", img: "https://i.imgur.com/dXKM47m.png" },
        { name: "Lemonade", desc: "Classic chilled lemonade", img: "https://i.imgur.com/IqLS1Fe.png" }
      ]
    };

    function showMenu(type) {
      const container = document.getElementById("menu");
      container.innerHTML = "";

      // Update button styles
      const buttons = document.querySelectorAll(".buttons button");
      buttons.forEach(btn => btn.classList.remove("active"));

      const activeButtonMap = {
        hot: "HOT DRINKS",
        cold: "COLD DRINKS",
        refresh: "REFRESHERS"
      };

      buttons.forEach(btn => {
        if (btn.textContent.trim() === activeButtonMap[type]) {
          btn.classList.add("active");
        }
      });

      // Load items
      menus[type].forEach(item => {
        container.innerHTML += `
          <div class="menu-item">
            <img src="${item.img}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
          </div>`;
      });
    }

    // Load default
    window.onload = () => showMenu('hot');