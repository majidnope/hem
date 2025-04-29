'use client'

import { useState } from 'react'
import { pdfService, SearchResult } from '@/utils/pdfService'

export default function PdfSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [indexStatus, setIndexStatus] = useState<string | null>(null)
  const [indexClass, setIndexClass] = useState<string>('')

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('Please enter a search query')
      return
    }

    setIsSearching(true)
    setSearchError(null)
    
    try {
      const response = await pdfService.searchPdfs(query)
      
      if (response.success) {
        setResults(response.results || [])
      } else {
        setSearchError(response.error || 'Unknown error occurred')
      }
    } catch (error) {
      setSearchError(error instanceof Error ? error.message : 'Unknown error occurred')
    } finally {
      setIsSearching(false)
    }
  }

  const handleIndexPdfs = async () => {
    setIndexStatus('Indexing PDFs...')
    setIndexClass('')
    
    try {
      const response = await pdfService.indexPdfs()
      
      if (response.success) {
        setIndexStatus('Indexing completed successfully!')
        setIndexClass('text-green-500')
      } else {
        setIndexStatus(`Error: ${response.error}`)
        setIndexClass('text-red-500')
      }
    } catch (error) {
      setIndexStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setIndexClass('text-red-500')
    }
  }

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">PDF Semantic Search</h1>
      
      <div className="mb-6">
        <button 
          onClick={handleIndexPdfs}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Index PDFs
        </button>
        {indexStatus && (
          <span className={`ml-3 ${indexClass}`}>{indexStatus}</span>
        )}
      </div>
      
      <div className="flex mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Enter your search query"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>
      
      {isSearching && (
        <div className="flex items-center mb-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-2"></div>
          <span>Searching...</span>
        </div>
      )}
      
      {searchError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          Error: {searchError}
        </div>
      )}
      
      {!isSearching && !searchError && (
        <div className="mt-6">
          {results.length === 0 ? (
            query && <div className="text-center py-4">No results found</div>
          ) : (
            results.map((result, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
                <div className="flex justify-between">
                  <div className="text-blue-600 font-bold">Source: {result.source}</div>
                  <div className="text-gray-500">#{index + 1}</div>
                </div>
                <div className="mt-2 whitespace-pre-line">{result.content}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
} 