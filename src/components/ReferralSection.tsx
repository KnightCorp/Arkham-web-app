import { motion } from 'framer-motion';
import { Share2, Copy, Users, Coins, Trophy, ChevronRight, Gift, Award, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const referralCode = "ARCHIVES-NOIR-7X9Y2";
  const referralLink = `https://archives.edu/join?ref=${referralCode}`;

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = {
    totalReferrals: 12,
    activeSubscribers: 8,
    totalEarnings: 247.50,
    socialPoints: 1250
  };

  const recentReferrals = [
    { name: "Alice Scholar", date: "March 15, 1970", status: "Subscribed", commission: 19.99 },
    { name: "Bob Reader", date: "March 14, 1970", status: "Pending", commission: 0 },
    { name: "Carol Learner", date: "March 12, 1970", status: "Subscribed", commission: 19.99 }
  ];

  const rewards = [
    { level: "Bronze", requirement: "5 referrals", reward: "100 bonus points", achieved: true },
    { level: "Silver", requirement: "10 referrals", reward: "300 bonus points", achieved: true },
    { level: "Gold", requirement: "25 referrals", reward: "1000 bonus points", achieved: false },
    { level: "Platinum", requirement: "50 referrals", reward: "3000 bonus points", achieved: false }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Share2 className="w-6 h-6 text-[#C0A080]" />
          <h2 className="text-3xl font-serif text-[#E0D0C0]">Referral Program</h2>
        </div>
        <p className="text-[#8A8A8A] font-serif mb-8">
          Share the knowledge, earn rewards. Receive 10% commission and social points for each successful referral.
        </p>

        {/* Referral Code Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Your Referral Code</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 p-3 bg-[#2A2A2A] rounded-lg text-[#C0A080] font-mono">
                  {referralCode}
                </code>
                <button
                  onClick={() => copyToClipboard(referralCode)}
                  className="p-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5 text-[#C0A080]" />
                </button>
              </div>
            </div>

            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Referral Link</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 p-3 bg-[#2A2A2A] rounded-lg text-[#C0A080] font-mono text-sm truncate">
                  {referralLink}
                </code>
                <button
                  onClick={() => copyToClipboard(referralLink)}
                  className="p-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5 text-[#C0A080]" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <Users className="w-5 h-5 text-[#C0A080] mb-2" />
              <div className="text-2xl font-serif text-[#E0D0C0]">{referralStats.totalReferrals}</div>
              <div className="text-[#8A8A8A] text-sm">Total Referrals</div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <Trophy className="w-5 h-5 text-[#C0A080] mb-2" />
              <div className="text-2xl font-serif text-[#E0D0C0]">{referralStats.activeSubscribers}</div>
              <div className="text-[#8A8A8A] text-sm">Active Subscribers</div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <Coins className="w-5 h-5 text-[#C0A080] mb-2" />
              <div className="text-2xl font-serif text-[#E0D0C0]">${referralStats.totalEarnings}</div>
              <div className="text-[#8A8A8A] text-sm">Total Earnings</div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <Gift className="w-5 h-5 text-[#C0A080] mb-2" />
              <div className="text-2xl font-serif text-[#E0D0C0]">{referralStats.socialPoints}</div>
              <div className="text-[#8A8A8A] text-sm">Social Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="glass-card rounded-xl p-8">
        <h3 className="text-xl font-serif text-[#E0D0C0] mb-6">Recent Referrals</h3>
        <div className="space-y-4">
          {recentReferrals.map((referral) => (
            <div
              key={referral.name}
              className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] flex items-center justify-between"
            >
              <div>
                <div className="text-[#E0D0C0] font-serif">{referral.name}</div>
                <div className="text-[#8A8A8A] text-sm">{referral.date}</div>
              </div>
              <div className="flex items-center gap-6">
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm",
                  referral.status === "Subscribed" 
                    ? "bg-green-500/10 text-green-400"
                    : "bg-[#2A2A2A] text-[#8A8A8A]"
                )}>
                  {referral.status}
                </span>
                <div className="text-right">
                  <div className="text-[#C0A080] font-serif">
                    {referral.commission > 0 ? `$${referral.commission}` : '-'}
                  </div>
                  <div className="text-[#8A8A8A] text-sm">Commission</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Tiers */}
      <div className="glass-card rounded-xl p-8">
        <h3 className="text-xl font-serif text-[#E0D0C0] mb-6">Rewards Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((tier) => (
            <div
              key={tier.level}
              className={cn(
                "p-6 rounded-lg border relative overflow-hidden",
                tier.achieved
                  ? "bg-[#C0A080]/10 border-[#C0A080]/30"
                  : "bg-[#1A1A1A] border-[#3A3A3A]"
              )}
            >
              {tier.achieved && (
                <div className="absolute top-2 right-2">
                  <Award className="w-4 h-4 text-[#C0A080]" />
                </div>
              )}
              <h4 className="text-[#E0D0C0] font-serif mb-2">{tier.level}</h4>
              <p className="text-[#8A8A8A] text-sm mb-4">{tier.requirement}</p>
              <div className={cn(
                "text-sm font-medium",
                tier.achieved ? "text-[#C0A080]" : "text-[#8A8A8A]"
              )}>
                {tier.reward}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="text-center pt-4 pb-8">
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-[#8A8A8A] hover:text-[#C0A080] text-sm flex items-center gap-2 mx-auto transition-colors">
              <ExternalLink className="w-4 h-4" />
              Terms of Use
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#1A1A1A] border-[#3A3A3A] text-[#E0D0C0] max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl mb-4">Terms of Use</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 font-serif text-[#8A8A8A]">
              <div>
                <h4 className="text-[#C0A080] mb-2">1. Referral Program Eligibility</h4>
                <p className="text-sm">
                  To participate in the referral program, you must be an active subscriber of The Archives. Your account must be in good standing and comply with our community guidelines.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] mb-2">2. Commission Structure</h4>
                <p className="text-sm">
                  You will receive 10% commission on the first subscription payment made by your referred users. Commissions are paid only after the referred user's subscription payment has been successfully processed and any trial period has ended.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] mb-2">3. Social Points</h4>
                <p className="text-sm">
                  Social points are awarded for successful referrals and can be used within The Archives platform. Points cannot be exchanged for cash and have no monetary value.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] mb-2">4. Referral Code Usage</h4>
                <p className="text-sm">
                  Your referral code is unique to your account and should not be used in spam or unauthorized advertising. Any fraudulent use will result in immediate termination from the program.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] mb-2">5. Payment Terms</h4>
                <p className="text-sm">
                  Commissions are paid monthly for the previous month's referrals. Minimum payout threshold is $20. Payments are made via the payment method specified in your account settings.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] mb-2">6. Program Changes</h4>
                <p className="text-sm">
                  The Archives reserves the right to modify or terminate the referral program at any time. Changes will be communicated through our platform or via email.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}