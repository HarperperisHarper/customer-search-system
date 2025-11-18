# Product & Customer Analytics Dashboard

A React TypeScript application for analyzing product performance and customer relationships.

## Prerequisites

You need to have Node.js installed on your system. If you don't have it:

1. Download Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Install the LTS (Long Term Support) version
3. Restart your terminal/command prompt after installation

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Open that URL in your web browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
├── src/
│   ├── App.tsx                    # Main app component
│   ├── ProductCustomerDashboard.tsx  # Dashboard component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind CSS imports
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.ts                # Vite configuration
├── tsconfig.json                  # TypeScript configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

## Features

- **Company View**: Search and filter companies by products
- **Product View**: Analyze product performance metrics
- **Customer Details**: View detailed purchase history for each company
- **HubSpot Integration**: Direct links to HubSpot contacts

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

