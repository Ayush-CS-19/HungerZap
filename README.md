# 🍽️ HungerZap – Zaps Your Hunger Instantly!

HungerZap is a modern food delivery application that connects food lovers with the best restaurants in town. Our mission is to make every meal a delightful experience, offering **convenience, quality, and joy** with every order. 🚀

---

## 📂 Project Structure

```
HungerZap/
├── node_modules/         # Node.js dependencies
├── src/                 # Source code
│   ├── components/      # Reusable React components (e.g., Cart.js, Restaurant.js)
│   ├── utils/           # Utility functions and helpers
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── index.html       # Main HTML file
│   ├── index.js         # JavaScript entry point
│   └── index.css        # Global CSS styles
├── package.json         # Project configuration and dependencies
└── README.md            # This file
```

---

## ⚡ Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Ayush-CS-19/HungerZap
cd hungerzap
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Start the development server:
```sh
npm start
```

### 4️⃣ Build the project:
```sh
npm run build
```
## Configuration

Create a `config.js` file in the `src/utils` directory and use your own API URLs. Here is an example configuration:

```javascript
// src/utils/config.js
export const IMG_URL = "YOUR_IMAGE_API_URL";
export const MENU_API = "YOUR_MENU_API_URL";
export const FOOD_API = "YOUR_FOOD_API_URL";
```
----
## 🌟 Key Features  

🔎 **Search Restaurants** – Quickly find your favorite restaurants with an intuitive search.  
🍽️ **Restaurant Listings** – Explore detailed information, menus, and ratings.  
🛒 **Smart Cart Management** – Easily add, remove, or update items in your cart.  
📱 **Responsive Design** – Optimized for seamless experience on mobile and desktop.  
🌐 **Offline Support** – Stay informed with an alert when the network is unavailable.  
⚡ **Lightning-Fast Performance** – Enjoy smooth and efficient browsing.  
🎨 **Modern UI/UX** – Clean and visually appealing design for effortless navigation.  

## 🚀 Technologies Used

- ⚛️ **React** – Frontend framework for building UI components.
- 🛠️ **Redux Toolkit** – State management for efficient data flow.
- 🎨 **Tailwind CSS** – Modern styling with utility-first CSS.
- 🏃 **Framer Motion** – Smooth animations for UI interactions.
- 🔗 **React Router DOM** – Seamless navigation between pages.

---

## 🏗️ Components

- **📝 Header** – Contains the logo, navigation links, and cart.
- **🏠 Body** – Displays the search bar and restaurant cards.
- **🛒 Cart** – Shows the added items with clear cart options.
- **📌 Card** – Displays individual restaurant details.
- **ℹ️ About** – Provides information about HungerZap.
- **📞 Contact** – Contact form and details.
- **⚠️ Error** – Displays error messages.
- **✨ Shimmer** – Loading animation for content placeholders.
- **🔗 Footer** – Contains references, links, and copyrights.

---

## 🤝 Contributing

We welcome contributions! Feel free to **fork** the repository, make improvements, and submit a **pull request**. 🚀

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and enhance it! 🎉

---

**HungerZap** – Bringing delicious meals to your doorstep, fast and fresh! 🍕🍔🍜
