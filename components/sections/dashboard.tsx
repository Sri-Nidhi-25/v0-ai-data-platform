'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  searchJobs,
  getUniqueSkills,
  getUniqueLocations,
  getUniqueExperienceLevels,
  getUniqueEmploymentTypes,
  getUniqueSourceTypes,
  type JobRecord,
} from '@/lib/data'
import {
  Search,
  LayoutGrid,
  LayoutList,
  X,
  MapPin,
  Briefcase,
  Zap,
} from 'lucide-react'

interface DashboardProps {
  onSelectJob: (job: JobRecord) => void
}

export function Dashboard({ onSelectJob }: DashboardProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedEmployment, setSelectedEmployment] = useState<string[]>([])
  const [selectedSources, setSelectedSources] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Get filter options
  const skills = useMemo(() => getUniqueSkills(), [])
  const locations = useMemo(() => getUniqueLocations(), [])
  const experienceLevels = useMemo(() => getUniqueExperienceLevels(), [])
  const employmentTypes = useMemo(() => getUniqueEmploymentTypes(), [])
  const sourceTypes = useMemo(() => getUniqueSourceTypes(), [])

  // Search and filter
  const results = useMemo(() => {
    return searchJobs({
      query: searchQuery,
      skills: selectedSkills,
      locations: selectedLocations,
      experience_levels: selectedExperience,
      employment_types: selectedEmployment,
      source_types: selectedSources,
    })
  }, [
    searchQuery,
    selectedSkills,
    selectedLocations,
    selectedExperience,
    selectedEmployment,
    selectedSources,
  ])

  const activeFiltersCount =
    selectedSkills.length +
    selectedLocations.length +
    selectedExperience.length +
    selectedEmployment.length +
    selectedSources.length

  const clearAllFilters = () => {
    setSelectedSkills([])
    setSelectedLocations([])
    setSelectedExperience([])
    setSelectedEmployment([])
    setSelectedSources([])
    setSearchQuery('')
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Searchable Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore, filter, and analyze your structured job records
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-4 mb-6 border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Input
              placeholder="Search by title, location, skills, employment type, source file..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent text-lg placeholder-muted-foreground focus-visible:ring-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </Card>

        {/* Controls and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={showFilters ? 'default' : 'outline'}
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>
            {activeFiltersCount > 0 && (
              <Button
                size="sm"
                variant="ghost"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <p className="text-sm text-muted-foreground">
              {results.length} results
            </p>
            <div className="flex gap-1 border border-border/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'table'
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="p-6 mb-8 border-border/50 bg-card/50 backdrop-blur-sm animate-in fade-in-50 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skills Filter */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Skills</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {skills.map((skill) => (
                    <label key={skill} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(skill)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSkills([...selectedSkills, skill])
                          } else {
                            setSelectedSkills(
                              selectedSkills.filter((s) => s !== skill)
                            )
                          }
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {skill}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Locations Filter */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Locations</p>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLocations([...selectedLocations, location])
                          } else {
                            setSelectedLocations(
                              selectedLocations.filter((l) => l !== location)
                            )
                          }
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {location}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level Filter */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Experience Level</p>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExperience.includes(level)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedExperience([...selectedExperience, level])
                          } else {
                            setSelectedExperience(
                              selectedExperience.filter((l) => l !== level)
                            )
                          }
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Employment Type Filter */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Employment Type</p>
                <div className="space-y-2">
                  {employmentTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedEmployment.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedEmployment([...selectedEmployment, type])
                          } else {
                            setSelectedEmployment(
                              selectedEmployment.filter((t) => t !== type)
                            )
                          }
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>



              {/* Source Type Filter */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Source Type</p>
                <div className="space-y-2">
                  {sourceTypes.map((source) => (
                    <label key={source} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSources.includes(source)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSources([...selectedSources, source])
                          } else {
                            setSelectedSources(
                              selectedSources.filter((s) => s !== source)
                            )
                          }
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {source}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.length > 0 ? (
              results.map((job) => (
                <Card
                  key={job.job_id}
                  className="p-6 cursor-pointer border-border/50 hover:border-border hover:bg-muted/30 transition-all duration-200 hover:shadow-lg group"
                  onClick={() => onSelectJob(job)}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                        {job.job_title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        {job.location || 'Not specified'}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{job.experience_level}</Badge>
                        <Badge
                          className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/30 dark:border-blue-900/30"
                          variant="outline"
                        >
                          {job.employment_type}
                        </Badge>
                      </div>
                    </div>

                    {job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {job.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30 text-xs"
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 3 && (
                          <Badge
                            className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30 text-xs"
                            variant="outline"
                          >
                            +{job.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground space-y-0.5">
                        <p>{job.source_file}</p>
                        <p>via {job.method_used}</p>
                      </div>
                      <Zap className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>No jobs found matching your filters.</p>
              </div>
            )}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="border border-border/50 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Experience
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Skills
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {results.length > 0 ? (
                    results.map((job) => (
                      <tr
                        key={job.job_id}
                        onClick={() => onSelectJob(job)}
                        className="hover:bg-muted/30 cursor-pointer transition-colors"
                      >
                        <td className="px-6 py-4">
                          <p className="font-medium">{job.job_title}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {job.location || 'Not specified'}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Badge variant="outline">
                            {job.experience_level}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {job.skills.slice(0, 2).map((skill) => (
                              <Badge
                                key={skill}
                                className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30"
                                variant="outline"
                              >
                                {skill}
                              </Badge>
                            ))}
                            {job.skills.length > 2 && (
                              <Badge
                                className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30"
                                variant="outline"
                              >
                                +{job.skills.length - 2}
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {job.employment_type}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {job.source_type}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                        No jobs found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
