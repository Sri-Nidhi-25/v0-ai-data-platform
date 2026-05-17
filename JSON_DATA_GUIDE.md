# JSON Data Structure & Integration Guide

## Overview

Strucxio uses a JSON-based data structure for storing and displaying job records. This guide explains the data format, how the search works, and how to extend or customize the data.

---

## JSON Data Structure

### Single Job Record Example

```json
{
  "job_id": "JOB_001",
  "slug": "software-engineer-chennai-job_001",
  "display_title": "Software Engineer • Chennai • Junior",
  "job_title": "Software Engineer",
  "location_raw": "Chennai",
  "city": "Chennai",
  "state": "Tamil Nadu",
  "country": "India",
  "experience_years": 2,
  "experience_level": "Junior",
  "employment_type": "Full-time",
  "role_category": "General",
  "source_type": "Text",
  "source_file": "JOB_001.txt",
  "skills_raw": ["Apis", "Python", "Sql"],
  "skills": ["Python", "REST APIs", "SQL"],
  "tags": ["Chennai", "General", "Junior", "Python", "REST APIs", "SQL"],
  "search_tokens": ["chennai", "full-time", "general", "junior", "python", "rest apis", "software engineer", "sql"],
  "method_used": "hybrid",
  "raw_input": "SOFWARE ENGINR - CHENAI\n\nWe are looking for a Software Enginr with experiance in Apis, Python, and SQL.\n\nLOCATION: Chenai, TN\nEXPERIENCE: 2 yrs\nEMPLOYMNT: Full‑time\n\nRESPONSIBILITES:\n- Develop web applications\n- Build REST apis\n- Database optimisation"
}
```

---

## Field Descriptions

### Identification Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `job_id` | string | Unique identifier for the record | `"JOB_001"` |
| `slug` | string | URL-friendly slug combining title and ID | `"software-engineer-chennai-job_001"` |
| `display_title` | string | User-facing title with location and level | `"Software Engineer • Chennai • Junior"` |

### Job Information

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `job_title` | string | Actual job title | `"Software Engineer"` |
| `experience_years` | number | Years of experience required | `2` |
| `experience_level` | string | Experience tier | `"Junior"` \| `"Mid-level"` \| `"Senior"` |
| `employment_type` | string | Type of employment | `"Full-time"` \| `"Contract"` |
| `role_category` | string | Category of role | `"General"` \| `"Specialized"` |

### Location Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `location_raw` | string | Raw location as extracted | `"Chenai"` (may have typos) |
| `city` | string | Normalized city name | `"Chennai"` |
| `state` | string | State/Province name | `"Tamil Nadu"` |
| `country` | string | Country name | `"India"` |

### Source Information

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `source_type` | string | File type of source | `"Text"` \| `"PDF"` \| `"Image"` \| `"DOCX"` |
| `source_file` | string | Original filename | `"JOB_001.txt"` |
| `method_used` | string | Processing method used | `"hybrid"` \| `"ocr"` \| `"extraction"` |

### Skills Data

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `skills_raw` | string[] | Raw, unprocessed skills as extracted | `["Apis", "Python", "Sql"]` |
| `skills` | string[] | Normalized, standardized skills | `["Python", "REST APIs", "SQL"]` |

### Search & Tags

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `tags` | string[] | All combined tags for UI display | `["Chennai", "General", "Junior", "Python", ...]` |
| `search_tokens` | string[] | Pre-computed lowercase tokens for fast search | `["chennai", "junior", "python", ...]` |

### Content

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `raw_input` | string | Original messy text before processing | Full unstructured text with typos |

---

## How Search Works

### 1. Text Search Algorithm

The search uses multiple strategies for efficiency:

```typescript
// 1. First, check pre-computed search_tokens (fastest)
const matchesTokens = job.search_tokens.some(token => 
  token.includes(query.toLowerCase())
)

// 2. If no token match, check main fields
const matchesFields = 
  job.display_title.toLowerCase().includes(query) ||
  job.job_title.toLowerCase().includes(query) ||
  job.city.toLowerCase().includes(query) ||
  job.state.toLowerCase().includes(query) ||
  job.country.toLowerCase().includes(query) ||
  job.source_file.toLowerCase().includes(query)
```

### 2. Filter Logic

Filters work independently and combine with AND logic:

```typescript
// Example: User searches for "Python" AND "Chennai" AND "Full-time"
const results = jobs
  .filter(job => 
    // Skills filter
    job.skills.includes("Python")
  )
  .filter(job => 
    // Cities filter
    job.city === "Chennai"
  )
  .filter(job => 
    // Employment type filter
    job.employment_type === "Full-time"
  )
```

### 3. Search Fields Indexed

The search function indexes these fields:

- `job.search_tokens` (pre-computed for speed)
- `job.display_title`
- `job.job_title`
- `job.city`
- `job.state`
- `job.country`
- `job.source_file`

---

## Adding New Job Records

### Step 1: Create the Record

```json
{
  "job_id": "JOB_009",
  "slug": "fullstack-developer-bangalore-job_009",
  "display_title": "Full Stack Developer • Bangalore • Mid-level",
  "job_title": "Full Stack Developer",
  "location_raw": "Bangalore",
  "city": "Bangalore",
  "state": "Karnataka",
  "country": "India",
  "experience_years": 4,
  "experience_level": "Mid-level",
  "employment_type": "Full-time",
  "role_category": "General",
  "source_type": "PDF",
  "source_file": "JOB_009.pdf",
  "skills_raw": ["react", "nodejs", "postgresql", "docker"],
  "skills": ["React", "Node.js", "PostgreSQL", "Docker"],
  "tags": ["Bangalore", "General", "Mid-level", "React", "Node.js", "PostgreSQL", "Docker"],
  "search_tokens": ["bangalore", "full-time", "general", "mid-level", "fullstack", "react", "nodejs", "postgresql", "docker"],
  "method_used": "extraction",
  "raw_input": "Full-Stack Developer opening in Bangalore...[original messy text]"
}
```

### Step 2: Add to JSON File

Append the record to `/data/mock-jobs.json`:

```bash
# Edit the file and add the new record to the array
```

### Step 3: Update Search Tokens

When adding records:
- Ensure `search_tokens` is lowercase and includes:
  - City name
  - Employment type
  - Experience level
  - Role category
  - Job title components
  - All normalized skills
- Precompute these for performance

---

## Extending with API Data

### How to Switch from JSON to API

#### Current Setup (JSON)
```typescript
// lib/data.ts
import jobs from '@/data/mock-jobs.json'

export const getAllJobs = (): JobRecord[] => {
  return jobs as JobRecord[]
}
```

#### API-Based Setup
```typescript
// lib/data.ts
export const getAllJobs = async (): JobRecord[] => {
  const response = await fetch('/api/jobs')
  return response.json()
}

// app/page.tsx - Use in useEffect
useEffect(() => {
  getAllJobs().then(setJobs)
}, [])
```

#### Backend Endpoint Example
```typescript
// app/api/jobs/route.ts
export async function GET(request: Request) {
  // Query database for all jobs
  const jobs = await db.jobs.findAll()
  
  // Apply filters if provided
  const { search, skills, city } = new URL(request.url).searchParams
  
  // Return filtered results
  return Response.json(jobs)
}
```

---

## Data Validation

### Validation Rules for New Records

```typescript
interface JobValidation {
  job_id: /^JOB_\d{3,}$/, // JOB_001, JOB_001
  experience_years: number >= 0,
  experience_level: 'Junior' | 'Mid-level' | 'Senior',
  employment_type: 'Full-time' | 'Contract' | 'Part-time',
  role_category: 'General' | 'Specialized',
  source_type: 'Text' | 'PDF' | 'Image' | 'DOCX' | 'CSV' | 'XML',
  method_used: 'hybrid' | 'ocr' | 'extraction',
  skills: string[], // Non-empty, normalized
  city: string, // Not empty
  country: string, // Not empty
}
```

---

## Data Transformation Tracking

### Skills Normalization Example

```
Raw (extracted):     Normalized (output):
"python"       →     "Python"
"APIs"         →     "REST APIs"
"SQL"          →     "SQL"
"Reac"         →     "React"
"Docker"       →     "Docker"
```

### How to Add Custom Normalization

```typescript
// lib/normalization.ts
const SKILL_MAP = {
  'python': 'Python',
  'apis': 'REST APIs',
  'sql': 'SQL',
  'reac': 'React',
  'docker': 'Docker',
  'k8s': 'Kubernetes',
  'aws': 'AWS',
  // ... add more mappings
}

export function normalizeSkill(raw: string): string {
  return SKILL_MAP[raw.toLowerCase()] || raw
}

// Usage in data pipeline
const normalized = raw.map(skill => normalizeSkill(skill))
```

---

## Analytics Data Structure

The analytics section aggregates data:

```typescript
interface Analytics {
  totalJobs: number              // 8
  uniqueCities: number           // 7
  uniqueStates: number           // 6
  uniqueCountries: number        // 1
  uniqueSkills: number           // 32
  skillFrequency: {              // Skills → count
    'Python': 3,
    'REST APIs': 2,
    // ...
  }
  cityFrequency: {               // Cities → count
    'Chennai': 1,
    'Bangalore': 2,
    // ...
  }
  experienceLevelCount: {        // Level → count
    'Junior': 3,
    'Mid-level': 3,
    'Senior': 2
  }
  sourceTypeCount: {             // Type → count
    'Text': 3,
    'PDF': 2,
    'Image': 2,
    'Text': 1
  }
  employmentTypeCount: {         // Type → count
    'Full-time': 7,
    'Contract': 1
  }
}
```

---

## Performance Optimization

### Why Pre-Computed Search Tokens?

**Without search_tokens:**
```typescript
// Slow - checks multiple fields for each job
const result = jobs.filter(job => 
  job.display_title.includes(query) ||
  job.job_title.includes(query) ||
  job.city.includes(query) ||
  job.skills.some(s => s.includes(query))
)
// Time: O(n * m) where m = number of fields
```

**With search_tokens:**
```typescript
// Fast - single array check
const result = jobs.filter(job => 
  job.search_tokens.some(token => token.includes(query))
)
// Time: O(n) where n = number of tokens
```

### Search Token Generation

```typescript
function generateSearchTokens(job: JobRecord): string[] {
  return [
    ...job.city.toLowerCase().split(/\s+/),
    job.employment_type.toLowerCase(),
    job.experience_level.toLowerCase(),
    job.role_category.toLowerCase(),
    ...job.job_title.toLowerCase().split(/\s+/),
    ...job.skills.map(s => s.toLowerCase()),
    // ... more fields
  ].filter(token => token.length > 0)
}
```

---

## Common Use Cases

### Use Case 1: Add a New Skill

```typescript
// User finds a job with skill "kubernetes"
// 1. Add to skills_raw: ["kubernetes"]
// 2. Add to skills (normalized): ["Kubernetes"]
// 3. Add to search_tokens: ["kubernetes"]
// 4. Analytics automatically picks it up
```

### Use Case 2: Update Location

```typescript
// Correct a city name
"city": "Chenai" → "city": "Chennai"
// Search tokens auto-update
"search_tokens": ["chenai"] → ["chennai"]
```

### Use Case 3: Batch Import

```typescript
// Importing 100 records from CSV
const records = parseCSV(file)
const enriched = records.map(record => ({
  ...record,
  search_tokens: generateSearchTokens(record),
  tags: generateTags(record),
  display_title: createDisplayTitle(record),
}))

// Save to database or JSON
```

---

## Troubleshooting

### Search Not Finding Results

**Problem**: Search for "python" returns 0 results
**Solution**: Check `search_tokens` includes "python" in lowercase

```json
"search_tokens": ["python", "rest apis", "sql"]  // ✅ Include "python"
```

### Filter Not Working

**Problem**: Filtering by "Senior" experience shows all results
**Solution**: Check `experience_level` matches exactly

```json
"experience_level": "Senior"  // ✅ Exact match (case-sensitive in enum)
```

### Missing Data in Detail Modal

**Problem**: JSON tab shows incomplete data
**Solution**: All required fields must be present in record

```typescript
// Required fields
job_id, job_title, city, state, country, skills, experience_level
// Optional fields
raw_input, transformation_details
```

---

## Summary

The JSON data structure is designed for:
- ✅ Fast client-side search
- ✅ Easy API integration
- ✅ Rich metadata capture
- ✅ Transformation tracking
- ✅ Analytics generation

The pre-computed `search_tokens` and `tags` fields enable instant filtering while raw fields preserve original data for audit and transformation tracking.

---

*For more information, see STRUCXIO_README.md or the source code in lib/data.ts*
