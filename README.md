# Frontend Assessment – Grupp

This is my submission for the frontend technical assessment, where I was tasked with converting a Figma design into a fully responsive React application.

## 🔗 Live Demo

[👉 View Deployed Site](https://grupp-theta.vercel.app/)

## 🛠️ Stack

- **Framework**: React
- **Styling**: TailwindCSS
- **Deployment**: Vercel

## ✨ Features

- Fully responsive layout
- Role management table with pagination
- Custom hooks for API data fetching

## 📝 Implementation Notes

- **UI Adjustments:** Some UI elements, such as the dashboard navbar, required adjustments because certain styles appeared to overlap or conflict in the Figma design. I made layout and spacing tweaks to ensure a clean and consistent appearance across devices.
- **Pagination:** The API endpoint returns 150 items, which is too many to display at once. I implemented a pagination component to improve usability and performance, allowing users to navigate through the data in manageable chunks.
- **Color Guessing:** For some interactive states (like hover effects), the Figma prototype showed color changes, but the resulting page or color values were not present in the main Figma board. I made educated guesses for these colors to maintain a visually appealing and consistent UI.
