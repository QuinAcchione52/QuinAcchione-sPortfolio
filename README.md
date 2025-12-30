# QuinAcchione-sPortfolio

Quinten Acchione's Professional Portfolio Website

## About

This is a personal portfolio website showcasing my projects, skills, and professional experience.

## Features

- Responsive design
- Smooth scrolling navigation
- Dynamic content loading
- Modern UI with animations
- Mobile-friendly layout

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel for deployment

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/QuinAcchione52/QuinAcchione-sPortfolio.git
cd QuinAcchione-sPortfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository: `QuinAcchione52/QuinAcchione-sPortfolio`
5. Configure project settings (Vercel will auto-detect the static site)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts to complete deployment

## Git Commands Used

```bash
# Initialize repository (already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository (already configured)
git remote add origin https://github.com/QuinAcchione52/QuinAcchione-sPortfolio.git

# Push to main branch
git push -u origin main
```

## Project Structure

```
QuinAcchione-sPortfolio/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Customization

To customize the portfolio for your needs:

1. Edit `index.html` to update your personal information
2. Modify `script.js` to change projects and skills data
3. Adjust `styles.css` to match your preferred color scheme and styling

## License

© 2024 Quinten Acchione. All rights reserved.
