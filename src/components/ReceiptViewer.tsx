import React from 'react'
import { Receipt } from '../types'
import { X, Download } from 'lucide-react'

interface ReceiptViewerProps {
  receipt: Receipt
  onClose: () => void
}

const ReceiptViewer: React.FC<ReceiptViewerProps> = ({ receipt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{receipt.subject}</h2>
            <p className="text-sm text-gray-600 mt-1">{receipt.from}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="mb-6">
            <img
              src={receipt.imageUrl}
              alt={receipt.subject}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="glass p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Date</p>
              <p className="font-semibold text-gray-800">{receipt.date}</p>
            </div>
            <div className="glass p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Amount</p>
              <p className="font-semibold text-gray-800 text-xl">
                ${receipt.amount.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="glass p-4 rounded-xl mb-6">
            <p className="text-sm text-gray-600 mb-2">Receipt Details</p>
            <p className="text-gray-700">{receipt.preview}</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
            <Download className="w-5 h-5" />
            <span>Download Receipt</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReceiptViewer
