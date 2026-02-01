import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import EmailConnect from './components/EmailConnect'
import ReceiptList from './components/ReceiptList'
import DateFilter from './components/DateFilter'
import CompilePanel from './components/CompilePanel'
import ReceiptViewer from './components/ReceiptViewer'
import { Receipt } from './types'

// Mock data for demonstration
const mockReceipts: Receipt[] = [
  {
    id: '1',
    subject: 'Your Uber receipt',
    from: 'uber.us@uber.com',
    date: '2024-01-15',
    amount: 24.50,
    type: 'Uber',
    preview: 'Thanks for riding with Uber. Your trip from Downtown to Airport...',
    imageUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
  },
  {
    id: '2',
    subject: 'Lyft ride receipt',
    from: 'receipts@lyft.com',
    date: '2024-01-20',
    amount: 18.75,
    type: 'Lyft',
    preview: 'Your ride with Lyft from Home to Office was completed...',
    imageUrl: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg'
  },
  {
    id: '3',
    subject: 'Metro Card Purchase',
    from: 'noreply@metro.com',
    date: '2024-02-01',
    amount: 127.00,
    type: 'Metro',
    preview: 'Thank you for your Metro Card purchase. Monthly pass activated...',
    imageUrl: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg'
  },
  {
    id: '4',
    subject: 'Train Ticket Confirmation',
    from: 'tickets@amtrak.com',
    date: '2024-02-10',
    amount: 89.00,
    type: 'Train',
    preview: 'Your train ticket from New York to Boston has been confirmed...',
    imageUrl: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg'
  },
  {
    id: '5',
    subject: 'Bus Ticket Receipt',
    from: 'support@greyhound.com',
    date: '2024-02-15',
    amount: 45.50,
    type: 'Bus',
    preview: 'Your bus journey from Chicago to Detroit is confirmed...',
    imageUrl: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg'
  },
  {
    id: '6',
    subject: 'Uber Trip Receipt',
    from: 'uber.us@uber.com',
    date: '2024-03-01',
    amount: 32.25,
    type: 'Uber',
    preview: 'Your recent Uber trip from Mall to Restaurant...',
    imageUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
  }
]

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([])
  const [viewingReceipt, setViewingReceipt] = useState<Receipt | null>(null)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Filter receipts based on date range
  const filteredReceipts = useMemo(() => {
    if (!startDate && !endDate) return mockReceipts

    return mockReceipts.filter(receipt => {
      const receiptDate = new Date(receipt.date)
      const start = startDate ? new Date(startDate) : null
      const end = endDate ? new Date(endDate) : null

      if (start && receiptDate < start) return false
      if (end && receiptDate > end) return false
      return true
    })
  }, [startDate, endDate])

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleSelectReceipt = (id: string) => {
    setSelectedReceipts(prev =>
      prev.includes(id)
        ? prev.filter(receiptId => receiptId !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedReceipts.length === filteredReceipts.length) {
      setSelectedReceipts([])
    } else {
      setSelectedReceipts(filteredReceipts.map(r => r.id))
    }
  }

  const handleCompile = (format: 'pdf' | 'images') => {
    console.log(`Compiling ${selectedReceipts.length} receipts as ${format}`)
    // Implementation for PDF/image compilation will go here
  }

  const handleClearDateFilter = () => {
    setStartDate('')
    setEndDate('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!isConnected ? (
          <EmailConnect onConnect={handleConnect} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <DateFilter
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onClear={handleClearDateFilter}
              />
              
              <ReceiptList
                receipts={filteredReceipts}
                selectedReceipts={selectedReceipts}
                onSelectReceipt={handleSelectReceipt}
                onSelectAll={handleSelectAll}
                onViewReceipt={setViewingReceipt}
              />
            </div>

            <div className="lg:col-span-1">
              <CompilePanel
                selectedCount={selectedReceipts.length}
                onCompile={handleCompile}
              />
            </div>
          </div>
        )}
      </main>

      {viewingReceipt && (
        <ReceiptViewer
          receipt={viewingReceipt}
          onClose={() => setViewingReceipt(null)}
        />
      )}
    </div>
  )
}

export default App
