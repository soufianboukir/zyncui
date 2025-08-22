# 🛒 E-commerce Backend API

This repository contains the **backend API** for an e-commerce platform.  
It is built with **Node.js, Express, and JWT authentication**, and provides endpoints for managing users, products, categories, carts, orders, payments, and reviews.

The project is structured for scalability and clean code separation, following MVC architecture.

---

## 🚀 Features

- User authentication (JWT)
- Product & category management
- Cart & wishlist functionality
- Orders & checkout
- Payments integration (Stripe/PayPal ready)
- Reviews & ratings system
- Admin dashboard endpoints
- API documentation with Swagger

---

## 📖 API Documentation

### Quick Reference

**Auth**

- `POST /auth/register` → Register a new user
- `POST /auth/login` → Login & get token
- `GET /auth/profile` → Get logged-in user profile

**Products**

- `GET /products` → List products
- `GET /products/:id` → Get product details
- `POST /products` → Create product (admin only)
- `PUT /products/:id` → Update product (admin only)
- `DELETE /products/:id` → Delete product (admin only)

**Cart**

- `GET /cart` → Get user cart
- `POST /cart` → Add item to cart
- `PUT /cart/:itemId` → Update item quantity
- `DELETE /cart/:itemId` → Remove item from cart

**Orders**

- `POST /orders` → Create new order
- `GET /orders` → List user’s orders
- `GET /orders/:id` → Get order details

➡️ Full list available in [docs/endpoints.md](./src/docs/endpoints.md)

---

## 🛠️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run server
npm run dev

```
