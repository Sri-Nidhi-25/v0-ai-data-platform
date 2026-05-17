# Strucxio - Quick Start Guide

## 🚀 Get Started in 30 Seconds

### 1. Open Project
```bash
cd /vercel/share/v0-project
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Run Development Server
```bash
pnpm dev
```

### 4. Open Browser
Navigate to `http://localhost:3000`

**That's it!** The app is now running with all features enabled.

---

## 📌 What You'll See

### Homepage Sections (Top to Bottom)
1. **Hero** - Premium headline with CTA buttons
2. **Showcase** - Before/after data transformation demo
3. **Pipeline** - 5-stage processing visualization
4. **Analytics** - Dashboard with charts and metrics
5. **Dashboard** - Searchable job records with filters
6. **Footer** - Links and copyright

---

## 🎯 Interactive Features

### Try These:
- **Click "View Demo"** → Smoothly scrolls to dashboard
- **Type in Search** → Filters 8 job records instantly
- **Click "Filters"** → Open 6 filter categories
- **Click a Job Card** → Opens detail modal with 4 tabs
- **Toggle Grid/Table** → Switch between card and table views
- **Click "Upload Files"** → Opens upload interface
- **Click "View JSON"** → Shows pretty-printed JSON

---

## 📁 Key Files

```
app/page.tsx              # Main page (all sections)
components/sections/
├── hero.tsx             # Hero section
├── showcase.tsx         # Transformation demo
├── pipeline.tsx         # Pipeline visualization
├── analytics.tsx        # Analytics charts
├── dashboard.tsx        # Searchable dashboard
├── detail-modal.tsx     # Detail modal with tabs
└── upload.tsx          # Upload interface

lib/data.ts              # Search & filter logic
data/mock-jobs.json      # Sample job data
```

---

## 🔍 Search & Filters Work On

### Search Fields
- Job title
- Location (city, state, country)
- Skills
- Employment type
- Source file
- And more...

### Filter Categories
1. **Skills** - 18 unique skills
2. **Cities** - 7 cities in India
3. **Experience Level** - Junior, Mid-level, Senior
4. **Employment Type** - Full-time, Contract
5. **Role Category** - General, Specialized
6. **Source Type** - Text, PDF, Image

---

## 📊 Sample Data

Pre-loaded with 8 job records:
1. Software Engineer (Chennai, Junior)
2. Data Scientist (Bangalore, Mid-level)
3. Frontend Developer (Delhi, Junior)
4. DevOps Engineer (Hyderabad, Senior)
5. Product Manager (Mumbai, Mid-level)
6. QA Engineer (Pune, Junior)
7. Backend Developer (Bangalore, Mid-level)
8. ML Engineer (Gurgaon, Senior)

---

## 🎨 Design Features

✓ Modern, minimalistic aesthetic
✓ Dark mode support (system preference)
✓ Fully responsive (mobile, tablet, desktop)
✓ Smooth animations and transitions
✓ Glassmorphism effects
✓ Professional color scheme
✓ Accessible (keyboard navigation, ARIA labels)

---

## 🔧 Customization

### Change Theme Colors
Edit: `app/globals.css` - CSS variables section

### Add More Job Records
Edit: `data/mock-jobs.json` - Add new record to array

### Modify Component Styles
Edit: `components/sections/*.tsx` - Update className props

### Adjust Search Logic
Edit: `lib/data.ts` - `searchJobs()` function

---

## 📦 Build for Production

```bash
# Build optimized version
pnpm build

# Test production build locally
pnpm start

# Deploy to Vercel
vercel deploy --prod
```

---

## 🚀 Deploy Options

### Vercel (Recommended)
```bash
vercel deploy --prod
```

### Docker
```bash
docker build -t strucxio .
docker run -p 3000:3000 strucxio
```

### Other Providers
Works with any Node.js hosting (AWS, GCP, Heroku, etc.)

---

## ❓ FAQ

**Q: Can I add my own data?**
A: Yes! Edit `data/mock-jobs.json` or connect to an API.

**Q: Does it require a database?**
A: No! Currently uses JSON. Ready to integrate with any database.

**Q: Can I modify the design?**
A: Yes! Edit `components/` and `app/globals.css`.

**Q: How do I add authentication?**
A: Install `next-auth` and follow integration guide.

**Q: Is it mobile-friendly?**
A: Yes! Fully responsive on all devices.

---

## 📚 Full Documentation

- **STRUCXIO_README.md** - Complete project documentation
- **IMPLEMENTATION_SUMMARY.md** - What was built, features, statistics
- **JSON_DATA_GUIDE.md** - Data structure, search algorithm, extending
- **QUICK_START.md** - This file

---

## 💡 Pro Tips

1. **Use "View Demo" button** to test smooth scrolling
2. **Type "python"** in search to test filtering
3. **Click filters** to see multi-select in action
4. **Click a job card** to see the detail modal
5. **Toggle Grid/Table** to switch views
6. **Check the charts** section for analytics

---

## 🎯 Next Steps

1. ✅ Start dev server (`pnpm dev`)
2. ✅ Explore the app in browser
3. ✅ Test search and filters
4. ✅ Read STRUCXIO_README.md for full details
5. ✅ Customize colors and data as needed
6. ✅ Deploy to Vercel for live version

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
pnpm dev -p 3001
```

**Search not working?**
Check `lib/data.ts` - ensure search_tokens are lowercase

**Filters not showing results?**
Verify `experience_level`, `employment_type` match exactly

**Layout looks off?**
Clear browser cache and reload

---

**Built with Next.js 16, Tailwind CSS 4, shadcn/ui, and Recharts**

---

Now, run `pnpm dev` and enjoy! 🎉
