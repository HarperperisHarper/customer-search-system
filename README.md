# Product & Customer Analytics Dashboard

A modern, interactive React dashboard for analyzing product performance and customer relationships. Built with TypeScript, Tailwind CSS, and Vite.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38bdf8)

## 🌐 Live Demo

**👉 [View Live Application](https://harperperisharper.github.io/customer-search-system/)**

## ✨ Features

### 🏢 Company View
- **Product Search**: Search and filter companies by products they use
- **Status Filtering**: Filter by customers or leads
- **Smart Matching**: Companies ranked by product match count
- **Quick Access**: Click any company to view detailed information

### 📦 Product View
- **Product Analytics**: Revenue, quantity sold, and customer metrics
- **Top Sellers**: Visual indicators for best-performing products
- **Customer Insights**: See which customers and leads use each product
- **Sortable Metrics**: Sort by revenue, quantity, or customer count

### 👤 Customer Details
- **Comprehensive Profiles**: View complete company information
- **Purchase History**: Detailed transaction history with expandable view
- **HubSpot Integration**: Direct links to HubSpot contact records
- **Visual Statistics**: Total purchases, last purchase date, and product count

### 🎨 User Experience
- **Modern UI**: Beautiful gradient designs and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Interactive Elements**: Hover effects, transitions, and intuitive navigation
- **Real-time Filtering**: Instant results as you search and filter

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.0.2
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarperperisHarper/customer-search-system.git
   cd customer-search-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🚀 Usage

### Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
```bash
# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
customer-search-system/
├── src/
│   ├── App.tsx                    # Main app component
│   ├── ProductCustomerDashboard.tsx  # Dashboard component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles & Tailwind imports
├── public/                        # Static assets
├── dist/                          # Production build (generated)
├── index.html                     # HTML template
├── package.json                   # Dependencies & scripts
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── README.md                      # This file
```

## 🎯 Key Features Explained

### Product Search & Filtering
The dashboard allows you to search for companies by selecting products. Companies are automatically ranked by:
1. Number of matching products
2. Number of matching orders
3. Most recent purchase date

### Analytics Dashboard
- **Revenue Tracking**: Total revenue per product
- **Quantity Metrics**: Units sold tracking
- **Customer Segmentation**: Distinguish between customers and leads
- **Average Order Value**: Calculate and display AOV per product

### Data Visualization
- Color-coded status badges (Customer vs Lead)
- Gradient cards for key metrics
- Interactive tables with hover effects
- Responsive grid layouts

## 🔧 Configuration

### Customizing the Base Path
If deploying to a different subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-subdirectory/',  // Change this
})
```

### Adding New Products
Edit the `allProducts` array in `ProductCustomerDashboard.tsx`:

```typescript
const allProducts = ['Product A', 'Product B', 'Product C', ...];
```

## 📊 Sample Data

The application includes sample data for demonstration:
- 7 companies (mix of customers and leads)
- 5 products (Product A through E)
- Purchase history with dates, quantities, and amounts

Replace the sample data in `ProductCustomerDashboard.tsx` with your actual data source.

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. **Automatic Deployment**
   ```bash
   npm run deploy
   ```

2. **Manual Setup**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Save settings

3. **Access Your Site**
   - URL: `https://yourusername.github.io/customer-search-system/`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harper Zhao**

- GitHub: [@HarperperisHarper](https://github.com/HarperperisHarper)
- Email: hzhao@ingredientsonline.com

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide React](https://lucide.dev/) - Icon library

## 📈 Future Enhancements

- [ ] Real-time data integration with API
- [ ] Export functionality (CSV, PDF)
- [ ] Advanced filtering options
- [ ] Data visualization charts
- [ ] User authentication
- [ ] Multi-language support
- [ ] Dark mode toggle

---

⭐ If you find this project helpful, please give it a star!
