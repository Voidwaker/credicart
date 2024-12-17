# 📦 CrediCart - E-commerce React Application

Welcome to **CrediCart**, a responsive and functional e-commerce store built with React. The application features dynamic product rendering, cart functionality, checkout processes, and a contact form.

---

## 🚀 **Project Overview**

CrediCart is a React-based application that fetches product data from an external API, allowing users to:  
- Browse and search for products.  
- View individual product details, including reviews and discounts.  
- Add products to the cart, adjust quantities, and view the total cost.  
- Complete a checkout process with confirmation.  
- Submit inquiries through a contact form with validation.

---

## 🛠️ **Technologies Used**

- **React**: Component-based architecture.  
- **React Router**: Client-side routing for seamless navigation.  
- **CSS**: Custom styles for responsive design.  
- **JavaScript**: Core logic and interactivity.  
- **Fetch API**: Data retrieval from external API.  
- **Netlify**: Deployment platform for the live application.

---

## 📂 **Folder Structure**

```
/src  
│── components/  
│   │── layout.jsx  
│   │── carousel.jsx  
│   │── searchBar.jsx  
│── pages/  
│   │── productPage.jsx  
│   │── cartPage.jsx  
│   │── contactPage.jsx  
│   │── checkoutSuccessPage.jsx  
│── App.js  
│── index.js  
│── styles.css  
```

---

## 🌐 **Live Demo**

[Live Demo on Netlify](https://credicart.netlify.app)

---

## 🧐 **How to Run the Project Locally**

To run this project locally, follow these steps:

1. **Clone the repository**:  
```bash
git clone https://github.com/Voidwaker/credicart.git
cd credicart  
```

2. **Install dependencies**:  
```bash
npm install  
```

3. **Start the development server**:  
```bash
npm start  
```

4. **Open the app**:  
Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💼 **Features**

### Homepage  
- Displays a list of products fetched from an API.  
- Includes a lookahead search bar for filtering products.  

### Product Page  
- Displays details such as title, image, description, and reviews.  
- Users can add items to the cart and receive confirmation.

### Cart Page  
- Shows all items added to the cart with quantities and total price.  
- Allows users to complete a checkout process.

### Checkout Success Page  
- Displays a confirmation message and clears the cart after checkout.

### Contact Page  
- Includes a form with validation for:  
  - Full name (minimum 3 characters)  
  - Subject (minimum 3 characters)  
  - Email (valid email format)  
  - Message body (minimum 3 characters)  

---

## 🛋️ **Future Improvements**

- Improve accessibility and user experience.  
- Add user authentication for personalized carts. 

---

## 🙌 **Acknowledgments**

- [Noroff API](https://v2.api.noroff.dev/online-shop)  
- React documentation for guidance.

---
