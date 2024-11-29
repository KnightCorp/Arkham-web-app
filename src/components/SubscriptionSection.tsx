import { motion } from 'framer-motion';
import { CreditCard, Shield, Zap, Crown, Check, ChevronRight, Wallet, Send, QrCode, History, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

// ... plans array remains the same ...

export function SubscriptionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* Header and Plans sections remain the same */}

      {/* Wallet Section */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Wallet className="w-6 h-6 text-[#C0A080]" />
          <h2 className="text-2xl font-serif text-[#E0D0C0]">Archives Wallet</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Balance Card */}
          <div className="bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C0A080]/20 rounded-tl-lg" />
            <div className="mb-4">
              <p className="text-[#8A8A8A] font-serif">Available Balance</p>
              <h3 className="text-3xl font-serif text-[#E0D0C0] mt-1">$124.50</h3>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Money</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors">
                <Send className="w-4 h-4" />
                <span>Transfer</span>
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-[#E0D0C0]">Recent Transactions</h3>
              <button className="text-[#C0A080] text-sm hover:text-[#B09070] transition-colors">View All</button>
            </div>
            <div className="space-y-3">
              {[
                { type: 'Received', from: 'Alice Scholar', amount: '+$25.00', date: 'Today' },
                { type: 'Sent', from: 'Bob Reader', amount: '-$15.50', date: 'Yesterday' }
              ].map((tx) => (
                <div key={tx.from} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-[#E0D0C0] text-sm">{tx.from}</p>
                    <p className="text-[#8A8A8A] text-xs">{tx.date}</p>
                  </div>
                  <span className={cn(
                    "font-medium",
                    tx.type === 'Received' ? 'text-green-400' : 'text-[#C0A080]'
                  )}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-[#C0A080]" />
          <h2 className="text-2xl font-serif text-[#E0D0C0]">Payment Methods</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Credit Card */}
          <div className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-[#2A2A2A] rounded flex items-center justify-center">
                  <span className="text-[#E0D0C0] font-serif">VISA</span>
                </div>
                <div>
                  <p className="text-[#E0D0C0]">•••• 4242</p>
                  <p className="text-[#8A8A8A] text-sm">Expires 12/25</p>
                </div>
              </div>
              <button className="text-[#C0A080] hover:text-[#B09070] transition-colors">
                Edit
              </button>
            </div>
          </div>

          {/* UPI Section */}
          <div className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-[#2A2A2A] rounded flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-[#C0A080]" />
                </div>
                <div>
                  <p className="text-[#E0D0C0]">UPI</p>
                  <p className="text-[#8A8A8A] text-sm">user@upi</p>
                </div>
              </div>
              <button className="text-[#C0A080] hover:text-[#B09070] transition-colors">
                Edit
              </button>
            </div>
          </div>

          {/* Add New Method Button */}
          <button className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] border-dashed flex items-center justify-center gap-2 text-[#8A8A8A] hover:text-[#C0A080] hover:border-[#C0A080] transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Payment Method</span>
          </button>
        </div>

        {/* UPI QR Code Section */}
        <div className="mt-6 p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-[#E0D0C0]">UPI Quick Pay</h3>
            <button className="text-[#C0A080] text-sm hover:text-[#B09070] transition-colors">
              Download QR
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 bg-[#2A2A2A] rounded-lg flex items-center justify-center">
              <QrCode className="w-16 h-16 text-[#C0A080]" />
            </div>
            <div className="space-y-2">
              <p className="text-[#E0D0C0] font-serif">Scan to pay via UPI</p>
              <p className="text-[#8A8A8A] text-sm">Supports all UPI apps</p>
              <div className="flex gap-2">
                {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                  <span key={app} className="px-2 py-1 bg-[#2A2A2A] rounded text-xs text-[#8A8A8A]">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <History className="w-6 h-6 text-[#C0A080]" />
          <h2 className="text-2xl font-serif text-[#E0D0C0]">Transaction History</h2>
        </div>
        <div className="space-y-4">
          {[
            { date: 'March 1, 1970', amount: '$19.99', status: 'Paid', method: 'Credit Card' },
            { date: 'February 1, 1970', amount: '$19.99', status: 'Paid', method: 'UPI' },
            { date: 'January 1, 1970', amount: '$19.99', status: 'Paid', method: 'Wallet' }
          ].map((invoice) => (
            <div
              key={invoice.date}
              className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]"
            >
              <div>
                <p className="text-[#E0D0C0]">{invoice.date}</p>
                <p className="text-[#8A8A8A] text-sm">{invoice.amount} • {invoice.method}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400">{invoice.status}</span>
                <button className="text-[#C0A080] hover:text-[#B09070] transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}