import React from 'react'
import { Receipt as ReceiptIcon } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="glass-strong border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
            <ReceiptIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Receipt Compiler
            </h1>
            <p className="text-sm text-gray-600">Organize your transport receipts</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
