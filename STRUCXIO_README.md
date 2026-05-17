# Strucxio - Premium AI Data Transformation SaaS Frontend

A modern, minimalistic, enterprise-grade AI SaaS frontend for transforming messy unstructured data into clean, searchable datasets using AI.

## Overview

Strucxio is a fully responsive, production-ready frontend application built with Next.js, Tailwind CSS, and shadcn/ui components. The application showcases AI-powered data transformation capabilities from raw files to structured datasets, with an interactive dashboard for exploring and analyzing extracted job records.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 with custom theme
- **Components**: shadcn/ui
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Data**: JSON-based (client-side, no backend required)

## Project Structure

```
app/
├── layout.tsx           # Root layout with metadata and viewport config
├── page.tsx             # Main page integrating all sections
└── globals.css          # Global styles and design tokens

components/
└── sections/
    ├── hero.tsx             # Hero section with headline and CTAs
    ├── showcase.tsx         # Before/after transformation demo
    ├── pipeline.tsx         # Processing pipeline visualization
    ├── analytics.tsx        # Dashboard insights with charts
    ├── dashboard.tsx        # Searchable job records with filters
    ├── detail-modal.tsx     # Job detail modal with tabs
    └── upload.tsx           # Drag-and-drop file upload interface

data/
└── mock-jobs.json       # Sample job records dataset (8 jobs)

lib/
├── data.ts              # Data utilities and search functions
└── utils.ts             # Tailwind merge utilities
```

## Key Features

### 1. Hero Section
- Eye-catching headline and subheading
- Call-to-action buttons (View Demo, Upload Files)
- Smooth scroll navigation to dashboard
- Premium gradient background

### 2. Transformation Showcase
- Split-panel before/after display
- Shows messy raw input vs. structured output
- Interactive JSON preview toggle
- Transformation flow visualization (5 steps)

### 3. Processing Pipeline
- 5-stage pipeline visualization with numbered steps
- Animated progress indicators
- Feature cards highlighting capabilities:
  - Smart Extraction
  - Instant Normalization
  - Full-Text Search

### 4. Analytics Dashboard
- Key metrics cards (8 total records, 32 unique skills, 7 cities, 6 states, 1 country)
- Charts powered by Recharts:
  - Top Skills bar chart
  - Experience level pie chart
  - Source types and employment types breakdowns
- Responsive grid layout

### 5. Searchable Dashboard
- **Global Search**: Searches across all fields (title, location, skills, employment type, source file)
- **Multi-Select Filters**:
  - Skills (18 unique skills)
  - Cities (7 cities across India)
  - Experience Levels (Junior, Mid-level, Senior)
  - Employment Types (Full-time, Contract)
  - Role Categories (General, Specialized)
  - Source Types (Text, PDF, Image)
- **View Modes**: Grid (cards) and Table views
- **Results Display**: Shows 8 sample job records with interactive cards

### 6. Record Detail Modal
- 4 tabs: Overview, Raw Input, Structured JSON, Metadata
- Full job information display
- Copy-to-clipboard functionality for JSON and raw data
- Metadata breakdown showing transformation details
- Skills comparison (raw vs. normalized)

### 7. Upload Interface
- Drag-and-drop file upload area
- Supported formats: PDF, DOCX, CSV, XML, TXT, JPG, PNG
- File list with size display
- Upload progress indication
- Success/error status messages

### 8. Footer
- Navigation links (Product, Company, Legal)
- Copyright information

## Data Structure

Each job record contains:

```typescript
interface JobRecord {
  job_id: string
  slug: string
  display_title: string
  job_title: string
  location_raw: string
  city: string
  state: string
  country: string
  experience_years: number
  experience_level: string
  employment_type: string
  role_category: string
  source_type: string
  source_file: string
  skills_raw: string[]
  skills: string[]
  tags: string[]
  search_tokens: string[]
  method_used: string
  raw_input?: string
}
```

## Core Utilities

### Search Functions

Located in `lib/data.ts`:

- `getAllJobs()` - Get all job records
- `getJobById(id)` - Get single job by ID
- `searchJobs(filters)` - Advanced search with multiple filter options
- `getUniqueSkills()` - Extract unique skills
- `getUniqueCities()` - Extract unique cities
- `getAnalyticsData()` - Generate analytics metrics

### Search Features

- **Text Search**: Searches across all display fields, job titles, locations, source files
- **Efficient Filtering**: Uses pre-computed `search_tokens` for fast filtering
- **Multi-Filter Support**: Combine multiple filters for precise results
- **Case-Insensitive**: All searches are case-insensitive

## Design System

### Color Palette
- **Primary**: `--primary` (used for accents and CTAs)
- **Background**: `--background` (main page background)
- **Card**: `--card` (card backgrounds)
- **Foreground**: `--foreground` (text color)
- **Muted**: `--muted` (secondary colors and hover states)
- **Border**: `--border` (dividers and borders)

### Typography
- **Headline Font**: Geist (sans-serif)
- **Body Font**: Geist (sans-serif)
- **Mono Font**: Geist Mono

### Design Patterns
- Glassmorphism (subtle backdrop blur)
- Soft shadows and borders
- Smooth transitions and hover states
- Responsive spacing with Tailwind scale
- Mobile-first responsive design

## Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `sm` (640px), `md` (768px)
- **Desktop**: `lg` (1024px), `xl` (1280px), `2xl` (1536px)

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at `http://localhost:3000`

### Sample Data

Mock job data is pre-loaded from `data/mock-jobs.json` containing 8 sample job records with realistic data structure including:

- Software Engineer (Chennai, Junior, Python/REST APIs/SQL)
- Data Scientist (Bangalore, Mid-level, ML/TensorFlow)
- Frontend Developer (Delhi, Junior, React/JavaScript/CSS)
- DevOps Engineer (Hyderabad, Senior, Docker/Kubernetes/AWS)
- Product Manager (Mumbai, Mid-level, Strategy/Analytics)
- QA Engineer (Pune, Junior, Selenium/Java)
- Backend Developer (Bangalore, Mid-level, Node.js/MongoDB)
- ML Engineer (Gurgaon, Senior, Python/Deep Learning)

## Features to Extend

The architecture is designed for easy extension:

1. **API Integration**: Replace `lib/data.ts` with API calls
2. **Authentication**: Add next-auth or similar for user management
3. **Dark Mode**: Already supported by design tokens
4. **Database**: Migrate from JSON to real database (Supabase, PostgreSQL, etc.)
5. **Export**: Add CSV/Excel export functionality
6. **Advanced Analytics**: Expand charts and visualizations
7. **Real File Upload**: Implement actual file processing backend
8. **User Accounts**: Add profile, saved searches, preferences
9. **API**: Build backend API for third-party integration

## Performance Optimizations

- Client-side search for instant filtering
- Pre-computed search tokens for efficiency
- Optimized re-renders using React hooks
- Lazy-loaded chart libraries
- CSS-in-JS for minimal bundle size
- Responsive image handling

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel

```bash
# Login to Vercel
vercel login

# Deploy
vercel deploy
```

### Environment Variables

No environment variables required for the demo. When adding backend functionality, add to `.env.local`:

```
NEXT_PUBLIC_API_URL=...
DATABASE_URL=...
```

## License

MIT License - Feel free to use this for personal or commercial projects.

## Support

For issues, questions, or feature requests, please refer to the documentation or create an issue.

---

**Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui**

Premium AI SaaS Frontend - Ready for Enterprise Deployment
