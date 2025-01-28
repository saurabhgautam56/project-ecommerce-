# E-Commerce Website

A modern and fully functional e-commerce website built using **Vite**, **React**, and **TypeScript**. This project showcases a professional online shopping experience with essential features like a product catalog, shopping cart, user authentication, and a responsive design.

## 🌟 Features

### 🛒 Core Features
- Clean and modern design with a stunning **Hero Section**.
- **Product Catalog**:
  - Product cards displaying item details (image, price, description).
  - Categories and filters for easy browsing.
- **Shopping Cart**:
  - Add, remove, and update item quantities.
  - View cart summary with subtotal and total price.
  - Responsive empty cart state.
- **Checkout Flow**:
  - Shipping address input.
  - Payment integration with multiple options (UPI, Credit/Debit cards, and Cash on Delivery).

### 🔒 User Authentication
- **Sign-Up and Sign-In**:
  - Secure authentication with email and password.
  - Phone number login with OTP verification (+91 format).
- **Protected Routes**:
  - Authenticated user dashboard.
  - Navbar updates dynamically based on authentication state.

### 💸 Pricing & Discounts
- Product prices in **INR** with proper formatting (e.g., ₹1,499).
- Original MRP with **strike-through pricing** and discount percentage.
- Prices for sample products:
  - T-Shirt: ₹1,499
  - Jeans: ₹2,999
  - Leather Jacket: ₹7,999

### 🛍️ Wishlist and Favorites
- Add/remove items to/from the wishlist.
- Persistent wishlist functionality with a dedicated page.

### 📱 Responsiveness
- Fully optimized for all devices:
  - Desktop, tablet, and mobile views.
  - Seamless user experience on any screen size.

### 🔧 Tech Stack
- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Context API / Zustand
- **Routing**: React Router
- **Payment Integration**: Razorpay / Paytm APIs
- **Authentication**: Firebase Auth (email/password, OTP)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/saurabhgautam56/project-ecommerce-.git
cd ecommerce-website

### 2. Install Dependencies
Install the required packages using npm or yarn:
```bash
Copy
Edit
npm install
# or
yarn install

### 3. Start the Development Server
Run the development server:
```bash
Copy
Edit
npm run dev
# or
yarn dev
Access the app at http://localhost:5173.

🛠️ Project Structure
php
Copy
Edit
ecommerce-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components (Navbar, ProductCard, etc.)
│   ├── pages/              # Page components (Home, ProductDetail, Cart, etc.)
│   ├── context/            # Context API setup for state management
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions (formatting, API helpers)
│   ├── styles/             # Global styles and Tailwind configuration
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts


📦 Sample Data
Add your product data in src/data/products.ts:

typescript
Copy
Edit
export const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    image: "/images/tshirt.jpg",
    description: "Comfortable and stylish cotton T-shirt.",
    sizes: ["S", "M", "L", "XL"],
  },
  // Add more products here
];


🔧 Configuration
Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_RAZORPAY_KEY=your_razorpay_key


🛠️ Scripts
Command	Description
npm run dev	Run the development server
npm run build	Build the project for production
npm run lint	Run ESLint to lint your code
npm run test	Run tests (if implemented)

