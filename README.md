# Fast React Pizza Ordering App

A full-featured pizza ordering web application built with **React**, **React Router 6.22**, and **Redux Toolkit**, including cart management, menu browsing, priority checkout, and automatic address detection using the browser’s geolocation API.

Users can browse the menu, add pizzas to their cart, autofill their address, place an order, and track the delivery status.

Link to website: https://fast-react-pizza-by-nour.netlify.app/

---

## Features

### Cart & Menu
- Fetches the menu from an API
- Add / remove pizzas
- Increase / decrease quantity
- Displays cart overview in the footer
- Automatic total price calculation

### Order System
- Full order form using React Router actions
- Server-side validation (ex: phone number)
- Priority orders (+20% price)
- Stores orders via API
- Redirects to order status page after creation
- Clears cart on order submission

### Geolocation + Reverse Address Lookup
- Get user's current position
- Autofill address using BigDataCloud reverse geocoding API
- Loading + error handling states

### Order Tracking
- View order details
- Countdown to delivery
- Show ingredients using `fetcher()`

### State Management
- Redux Toolkit slices:
  - `cartSlice`
  - `userSlice`
- Async operations with `createAsyncThunk`

### Modern Routing
- `createBrowserRouter` setup
- Loaders, actions, fetchers
- Global error boundaries

---

## Tech Stack
- **React**
- **React Router** for routing, loaders, actions and fetchers
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **fetch() API** for menu + order fetching
- **BigDataCloud API** for reverse geocoding
- **Vite** for dev environment

---
