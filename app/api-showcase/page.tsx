'use client'

import { useEffect, useState } from 'react'

export default function APIShowcase() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('/api/quote')
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">API Playground</h1>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Quote of the Day</h2>
        <code className="block bg-white p-2 rounded text-sm">GET /api/quote</code>
        <p className="mt-4 italic text-green-700">“{quote}”</p>
      </div>
    </main>
  )
}