import jobs from '@/data/mock-jobs.json'

export interface JobRecord {
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

export const getAllJobs = (): JobRecord[] => {
  return jobs as JobRecord[]
}

export const getJobById = (id: string): JobRecord | undefined => {
  return jobs.find((job: JobRecord) => job.job_id === id)
}

export interface SearchFilters {
  query: string
  skills: string[]
  experience_levels: string[]
  employment_types: string[]
  role_categories: string[]
  source_types: string[]
  cities: string[]
  states: string[]
  countries: string[]
}

export const searchJobs = (
  filters: Partial<SearchFilters> = {}
): JobRecord[] => {
  let results = jobs as JobRecord[]

  // Text search across all relevant fields
  if (filters.query && filters.query.trim()) {
    const query = filters.query.toLowerCase().trim()
    results = results.filter((job) => {
      // Search in search_tokens for efficiency
      if (job.search_tokens.some((token) => token.includes(query))) {
        return true
      }
      // Also search display_title and job_title directly
      if (
        job.display_title.toLowerCase().includes(query) ||
        job.job_title.toLowerCase().includes(query) ||
        job.city.toLowerCase().includes(query) ||
        job.state.toLowerCase().includes(query) ||
        job.country.toLowerCase().includes(query) ||
        job.source_file.toLowerCase().includes(query)
      ) {
        return true
      }
      return false
    })
  }

  // Filter by skills (match any selected skill)
  if (filters.skills && filters.skills.length > 0) {
    results = results.filter((job) =>
      filters.skills!.some((skill) =>
        job.skills.some((s) => s.toLowerCase() === skill.toLowerCase())
      )
    )
  }

  // Filter by experience levels
  if (filters.experience_levels && filters.experience_levels.length > 0) {
    results = results.filter((job) =>
      filters.experience_levels!.includes(job.experience_level)
    )
  }

  // Filter by employment types
  if (filters.employment_types && filters.employment_types.length > 0) {
    results = results.filter((job) =>
      filters.employment_types!.includes(job.employment_type)
    )
  }

  // Filter by role categories
  if (filters.role_categories && filters.role_categories.length > 0) {
    results = results.filter((job) =>
      filters.role_categories!.includes(job.role_category)
    )
  }

  // Filter by source types
  if (filters.source_types && filters.source_types.length > 0) {
    results = results.filter((job) =>
      filters.source_types!.includes(job.source_type)
    )
  }

  // Filter by cities
  if (filters.cities && filters.cities.length > 0) {
    results = results.filter((job) =>
      filters.cities!.some((city) => city.toLowerCase() === job.city.toLowerCase())
    )
  }

  // Filter by states
  if (filters.states && filters.states.length > 0) {
    results = results.filter((job) =>
      filters.states!.some((state) => state.toLowerCase() === job.state.toLowerCase())
    )
  }

  // Filter by countries
  if (filters.countries && filters.countries.length > 0) {
    results = results.filter((job) =>
      filters.countries!.some((country) => country.toLowerCase() === job.country.toLowerCase())
    )
  }

  return results
}

// Extract unique values for filters
export const getUniqueSkills = (): string[] => {
  const skillSet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    job.skills.forEach((skill) => skillSet.add(skill))
  })
  return Array.from(skillSet).sort()
}

export const getUniqueCities = (): string[] => {
  const citySet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    citySet.add(job.city)
  })
  return Array.from(citySet).sort()
}

export const getUniqueStates = (): string[] => {
  const stateSet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    stateSet.add(job.state)
  })
  return Array.from(stateSet).sort()
}

export const getUniqueCountries = (): string[] => {
  const countrySet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    countrySet.add(job.country)
  })
  return Array.from(countrySet).sort()
}

export const getUniqueExperienceLevels = (): string[] => {
  const levelSet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    levelSet.add(job.experience_level)
  })
  return Array.from(levelSet).sort()
}

export const getUniqueEmploymentTypes = (): string[] => {
  const typeSet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    typeSet.add(job.employment_type)
  })
  return Array.from(typeSet).sort()
}

export const getUniqueRoleCategories = (): string[] => {
  const categorySet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    categorySet.add(job.role_category)
  })
  return Array.from(categorySet).sort()
}

export const getUniqueSourceTypes = (): string[] => {
  const typeSet = new Set<string>()
  jobs.forEach((job: JobRecord) => {
    typeSet.add(job.source_type)
  })
  return Array.from(typeSet).sort()
}

// Analytics data
export const getAnalyticsData = () => {
  const jobsList = jobs as JobRecord[]

  const skillFrequency: Record<string, number> = {}
  const cityFrequency: Record<string, number> = {}
  const experienceLevelCount: Record<string, number> = {}
  const sourceTypeCount: Record<string, number> = {}
  const employmentTypeCount: Record<string, number> = {}

  jobsList.forEach((job) => {
    // Skills
    job.skills.forEach((skill) => {
      skillFrequency[skill] = (skillFrequency[skill] || 0) + 1
    })

    // Cities
    cityFrequency[job.city] = (cityFrequency[job.city] || 0) + 1

    // Experience levels
    experienceLevelCount[job.experience_level] =
      (experienceLevelCount[job.experience_level] || 0) + 1

    // Source types
    sourceTypeCount[job.source_type] = (sourceTypeCount[job.source_type] || 0) + 1

    // Employment types
    employmentTypeCount[job.employment_type] =
      (employmentTypeCount[job.employment_type] || 0) + 1
  })

  return {
    totalJobs: jobsList.length,
    uniqueCities: new Set(jobsList.map((j) => j.city)).size,
    uniqueStates: new Set(jobsList.map((j) => j.state)).size,
    uniqueCountries: new Set(jobsList.map((j) => j.country)).size,
    uniqueSkills: new Set(jobsList.flatMap((j) => j.skills)).size,
    skillFrequency,
    cityFrequency,
    experienceLevelCount,
    sourceTypeCount,
    employmentTypeCount,
  }
}
