import React from 'react'
import { Mail, Shield, Zap } from 'lucide-react'

interface EmailConnectProps {
  onConnect: () => void
}

const EmailConnect: React.FC<EmailConnectProps> = ({ onConnect }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-strong rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Connect Your Email
          </h2>
          <p className="text-gray-600">
            Securely connect your email to start organizing receipts
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 glass rounded-xl">
            <Shield className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Secure & Private</h3>
              <p className="text-sm text-gray-600">
                Your data is encrypted and never shared with third parties
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 glass rounded-xl">
            <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Automatic Detection</h3>
              <p className="text-sm text-gray-600">
                AI-powered receipt detection from Uber, Lyft, Metro, and more
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onConnect}
          className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
        >
          Connect Email Account
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default EmailConnect
# Navigate to your project folder
cd path/to/your/receipt-compiler

# Copy the updated files (I provided them above in the artifact)
# Then stage the changes
git add src/components/EmailConnect.tsx src/App.tsx index.html

# Commit the changes
git commit -m "Add OAuth debugging and fix implicit flow"

# Push to GitHub
git push origin main
