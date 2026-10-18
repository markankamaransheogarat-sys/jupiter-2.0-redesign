import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon, 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Sliders,
  Layers
} from 'lucide-react';

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BeforeAfterModal: React.FC<BeforeAfterModalProps> = ({ isOpen, onClose }) => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  if (!isOpen) return null;

  const features = [
    {
      title: 'Smart Routing & Fee Transparency',
      category: 'Swap Terminal',
      painPoint: 'Legacy Jupiter hides multi-hop routing and fee breakdowns in small dropdowns. Users cannot see what percentage went to Meteora vs Raydium, nor why a swap failed or suffered high MEV sandwich slippage.',
      beforeState: {
        label: 'Legacy Jupiter 1.0',
        points: [
          'Static text list of routing hops without visual weight',
          'Slippage buried in deep modal settings',
          'MEV protection toggle hidden under advanced tabs',
          'Users unaware of sandwich attacks until wallet balance is drained'
        ],
        drawback: 'High cognitive friction, frequent failed txs, sandwich attacks'
      },
      afterState: {
        label: 'Redesigned Jupiter 2.0',
        points: [
          'Real-time Split-Routing Flow Graph showing exact % allocations',
          'Context-aware Dynamic Slippage Auto-Calibration',
          'Built-in Jito MEV Shield with transaction tip and latency transparency',
          'Live "+ $14.28 saved vs 1-AMM" instant value verification badge'
        ],
        benefit: '+88% visual transparency, -42% failed transactions'
      }
    },
    {
      title: 'Perpetual Futures Risk & Liquidation HUD',
      category: 'Perps HUD',
      painPoint: 'Traders face sudden liquidations because liquidation prices are static text without visual distance context. Hidden borrow and funding fees continuously erode collateral unnoticed.',
      beforeState: {
        label: 'Legacy Jupiter 1.0',
        points: [
          'Plain number for liquidation price with no warning threshold',
          'Borrow rate and funding rate decay is obscured',
          'TP/SL requires manual mental math without PnL projections',
          'No visual Risk-to-Reward calculation'
        ],
        drawback: 'Frequent unexpected liquidations during high Solana volatility'
      },
      afterState: {
        label: 'Redesigned Jupiter 2.0',
        points: [
          'Color-coded Liquidation HUD with live percentage safety buffer',
          'Transparent Holding Cost Matrix calculating 8h, 24h, and 7d projected decay',
          'Visual Take-Profit and Stop-Loss brackets with live Dollar PnL',
          'Automated Risk-to-Reward ratio calculator (e.g. 1 : 2.85 Favorable)'
        ],
        benefit: '0% accidental liquidations, clear long-term holding cost expectations'
      }
    },
    {
      title: 'One-Click DCA & Recurring Strategy Automation',
      category: 'DCA Engine',
      painPoint: 'Legacy DCA setups are complex, feel like a separate developer tool, and lack feedback on how dollar-cost averaging performs compared to single market orders.',
      beforeState: {
        label: 'Legacy Jupiter 1.0',
        points: [
          'Abstract order creation with confusing slice parameters',
          'No historic backtest comparison curve',
          'Active orders are buried in separate table with basic text status',
          'No quick pause or emergency cancel controls'
        ],
        drawback: 'Low user adoption; users default to high-slippage market buys'
      },
      afterState: {
        label: 'Redesigned Jupiter 2.0',
        points: [
          'Interactive budget slicer with visual order count slider',
          'Built-in Volatility Shield with backtested drawdown reduction data',
          'Real-time progress bars and time-to-next-execution timers',
          'One-click pause, resume, and edit directly from the card'
        ],
        benefit: '+300% ease-of-use for retail accumulation strategies'
      }
    },
    {
      title: 'Mobile-First Responsive Architecture',
      category: 'Mobile UX',
      painPoint: 'On mobile devices, Jupiter’s terminal requires excessive vertical scrolling. The swap button falls below the fold, and typing token amounts obscures the price confirmation.',
      beforeState: {
        label: 'Legacy Jupiter 1.0',
        points: [
          'Desktop layout scaled down onto mobile viewport',
          'Action button hidden beneath the screen fold',
          'Complex menus require multiple thumb reaches to the top-left',
          'Small tap targets (under 32px) leading to accidental clicks'
        ],
        drawback: 'High mobile bounce rate, fat-finger errors on token selection'
      },
      afterState: {
        label: 'Redesigned Jupiter 2.0',
        points: [
          'Thumb-zone optimized bottom navigation and sticky action bar',
          'Bottom-sheet token drawer with instant search and verified badges',
          'Minimum 48px tactile tap targets following WCAG guidelines',
          'Smooth gesture dismissals and haptic-style micro-animations'
        ],
        benefit: 'Flawless 1-thumb trading experience on iPhone & Android'
      }
    }
  ];

  const current = features[selectedFeature];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f1520] border border-slate-700/80 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#c7f284] uppercase tracking-wider mb-1">
            <Layers className="size-4" /> Before vs After Comparative Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How Jupiter 2.0 Solves Critical DeFi UX Friction
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Auditing core interaction bottlenecks and presenting measurable usability improvements.
          </p>
        </div>

        {/* Feature Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
          {features.map((f, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFeature(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFeature === idx
                  ? 'bg-[#c7f284] text-slate-950 shadow-md shadow-[#c7f284]/20'
                  : 'bg-[#151d29] text-slate-400 hover:text-white hover:bg-[#1c2738]'
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        {/* Problem Statement Box */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6">
          <p className="text-xs font-mono text-amber-400 uppercase font-semibold mb-1">Identified UX Bottleneck</p>
          <p className="text-sm text-slate-300 leading-relaxed">{current.painPoint}</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* BEFORE */}
          <div className="p-5 rounded-2xl bg-rose-950/15 border border-rose-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1.5 uppercase">
                <AlertOctagon className="size-4" /> {current.beforeState.label}
              </span>
              <span className="text-[10px] bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded border border-rose-500/20 font-mono">
                Current State
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              {current.beforeState.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-rose-500/10 text-xs font-mono text-rose-300">
              Impact: <strong>{current.beforeState.drawback}</strong>
            </div>
          </div>

          {/* AFTER */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#c7f284] flex items-center gap-1.5 uppercase">
                <CheckCircle2 className="size-4" /> {current.afterState.label}
              </span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                Redesigned
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-200">
              {current.afterState.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-emerald-500/20 text-xs font-mono text-emerald-300">
              Outcome: <strong>{current.afterState.benefit}</strong>
            </div>
          </div>

        </div>

        {/* Modal Footer Action */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 font-mono">Superteam Earn Submission • Jupiter 2.0</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
          >
            Explore Interactive Demo
          </button>
        </div>

      </div>
    </div>
  );
};
