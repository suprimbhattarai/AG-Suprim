# Suprim Clothing – Frontend Intern Project

## Overview

This project is a modern two-page clothing website built using React and Tailwind CSS. It demonstrates UI design, animations, API integration, and deployment readiness.

## Features

* Two-page responsive website
* Landing page with modern UI and animations
* Dynamic product page using API
* Scroll-trigger animations with Framer Motion
* Skeleton loading UI
* Clean and minimal design inspired by Figma

## Tech Stack

* React.js (Vite)
* Tailwind CSS (latest version)
* Framer Motion
* Fake Store API

## API Used

https://fakestoreapi.com/products

## Functionality

* Fetches products from API
* Filters only men's clothing
* Displays 4 products
* Shows title, image, and price
* Includes loading skeleton UI

## Folder Structure

src/
┣ assets/
┃ ┣ image1.png
┃ ┗ logo.png
┣ pages/
┃ ┣ Home.jsx
┃ ┗ Products.jsx
┣ App.jsx
┣ main.jsx
┗ index.css

## Setup Instructions

1. Clone repository
   git clone <your-repo-link>

2. Install dependencies
   npm install

3. Create .env file
   VITE_API_URL=https://fakestoreapi.com/products

4. Run project
   npm run dev

## Deployment

Deployed using Vercel

## Design Decisions

* Used bold typography (Bebas Neue) to match streetwear aesthetic
* Implemented abstract yellow shapes for modern look
* Focused on minimal UI with strong visual hierarchy

## Challenges

* Matching Figma layout precisely
* Handling API filtering and limiting data
* Creating smooth animations without affecting performance

## Future Improvements

* Add product details page
* Add cart functionality
* Improve accessibility
* Add dark mode

## Author

Suprim
