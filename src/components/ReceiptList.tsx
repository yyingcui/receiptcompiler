import React from 'react'
import { Receipt } from '../types'
import { CheckSquare, Square, Eye } from 'lucide-react'

interface ReceiptListProps {
  receipts: Receipt[]
  selectedReceipts: string[]
  onSelectReceipt: (id: string) => void
  onSelectAll: () => void
  onViewReceipt: (receipt: Receipt) => void
}

const ReceiptList: React.FC<ReceiptListProps> = ({
  receipts,
  selectedReceipts,
  onSelectReceipt,
  onSelectAll,
  onViewReceipt
}) => {
  const allSelected = receipts.length > 0 && selectedReceipts.length === receipts.length

  const getTypeColor = (type: Receipt['type']) => {
    const colors = {
      Uber: 'from-black to-gray-800',
      Lyft: 'from-pink-500 to-purple-600',
      Metro: 'from-blue-500 to-cyan-600',
      Train: 'from-green-500 to-emerald-600',
      Bus: 'from-orange-500 to-red-600'
    }
    return colors[type]
  }

  return (
    <div className="glass-strong rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Receipts ({receipts.length})
        </h2>
        <button
          onClick={onSelectAll}
          className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-colors"
        >
          {allSelected ? (
            <CheckSquare className="w-5 h-5 text-cyan-600" />
          ) : (
            <Square className="w-5 h-5 text-gray-600" />
          )}
          <span className="text-sm font-medium text-gray-700">Select All</span>
        </button>
      </div>

      <div className="space-y-3">
        {receipts.map((receipt) => {
          const isSelected = selectedReceipts.includes(receipt.id)
          
          return (
            <div
              key={receipt.id}
              className={`glass rounded-xl p-4 transition-all duration-200 ${
                isSelected ? 'ring-2 ring-cyan-500 bg-cyan-50/50' : 'hover:bg-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => onSelectReceipt(receipt.id)}
                  className="flex-shrink-0 mt-1"
                >
                  {isSelected ? (
                    <CheckSquare className="w-6 h-6 text-cyan-600" />
                  ) : (
                    <Square className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {receipt.subject}
                      </h3>
                      <p className="text-sm text-gray-600">{receipt.from}</p>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(receipt.type)} text-white text-xs font-semibold rounded-full`}>
                      {receipt.type}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {receipt.preview}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{receipt.date}</span>
                      <span className="text-lg font-bold text-gray-800">
                        ${receipt.amount.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => onViewReceipt(receipt)}
                      className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-medium text-gray-700">View</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReceiptList
