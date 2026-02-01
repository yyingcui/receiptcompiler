import React from 'react'
import { FileText, Download, Image } from 'lucide-react'

interface CompilePanelProps {
  selectedCount: number
  onCompile: (format: 'pdf' | 'images') => void
}

const CompilePanel: React.FC<CompilePanelProps> = ({ selectedCount, onCompile }) => {
  return (
    <div className="glass-strong rounded-2xl p-6 shadow-lg sticky top-24">
      <div className="text-center mb-6">
        <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-3">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Compile Receipts</h2>
        <p className="text-sm text-gray-600">
          {selectedCount} receipt{selectedCount !== 1 ? 's' : ''} selected
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => onCompile('pdf')}
          disabled={selectedCount === 0}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Download className="w-5 h-5" />
          <span>Download as PDF</span>
        </button>

        <button
          onClick={() => onCompile('images')}
          disabled={selectedCount === 0}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 glass border-2 border-cyan-500 text-cyan-700 font-semibold rounded-xl hover:bg-cyan-50/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image className="w-5 h-5" />
          <span>Download as Images</span>
        </button>
      </div>

      <div className="mt-6 p-4 glass-light rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm">Export Options</h3>
        <ul className="space-y-2 text-xs text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>PDF: All receipts in one document</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>Images: Individual PNG files in a ZIP</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CompilePanel
