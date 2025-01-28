# E-Commerce Website

This project is a modern e-commerce website built using **Vite**, **React**, and **TypeScript**. It includes essential e-commerce functionalities like browsing products, adding items to the cart, managing payments, and user authentication.

## Features

### Core Features
- Clean and professional design.
- Responsive layout for all devices.
- Navigation bar with cart functionality.
- Product grid layout with detailed product pages.
- Shopping cart state management.
- Checkout flow with shipping and payment options.

### Authentication
- Sign-up and sign-in functionality.
- Phone number login with OTP verification (Indian format: +91).
- Protected routes for user account pages.

### Pricing
- Indian market pricing with proper formatting (e.g., ₹1,499).
- Comparison pricing: MRP display, discounts, and strikethrough prices.

### Payment Options
- Supports UPI, credit/debit cards, and cash on delivery.
- Secure payment integration with trust badges.

### Additional Features
- Wishlist functionality.
- Product categories and filtering.
- Enhanced product attributes (material, care instructions, fit details).

## Tech Stack
- **Frontend**: Vite, React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Authentication**: Firebase Authentication
- **Payment Gateway**: Razorpay (or similar)
- **Backend**: Mock server or APIs (if applicable)

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or above) and **npm** installed on your system.
- **Git** for version control.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/saurabhgautam56/project-ecommerce-.git
   cd ecommerce-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   This will start the Vite development server. Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**:
   To create an optimized production build:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

### Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```env
VITE_FIREBASE_API_KEY=<your_firebase_api_key>
VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
VITE_RAZORPAY_KEY=<your_razorpay_key>
```

## Project Structure
```
├── public            # Static assets
├── src
│   ├── components    # Reusable components
│   ├── pages         # Application pages
│   ├── contexts      # Context API state management
│   ├── hooks         # Custom React hooks
│   ├── utils         # Utility functions
│   ├── styles        # Tailwind CSS configurations
│   └── App.tsx       # Main app component
├── .env              # Environment variables
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Dependencies
- **React** (v18+)
- **TypeScript**
- **Tailwind CSS**
- **Firebase** (for authentication)
- **Razorpay SDK** (for payments)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy building and customizing your e-commerce website! 🚀

