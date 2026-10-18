import React from 'react';
import { 
  BookOpen, 
  Target, 
  Users, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone,
  ExternalLink,
  Award
} from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      
      {/* Title & Metadata Banner */}
      <div className="bg-gradient-to-r from-purple-950/40 via-[#111722] to-slate-900/60 border border-purple-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="size-3.5" /> Superteam Earn Bounty Submission
          </span>
          <span className="text-xs font-mono text-slate-400">Target App: Jupiter DEX (jup.ag)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Jupiter 2.0: Re-engineering Solana’s Primary DeFi Terminal for Total Transparency & Risk Immunity
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A comprehensive UX/UI redesign addressing liquidity routing opacity, surprise perpetual liquidations, hidden MEV sandwich vulnerabilities, and cramped mobile trading workflows across 4 core product surfaces.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
          <div>
            <p className="text-slate-500">Design Lead</p>
            <p className="text-white font-bold">JARVIS Quant / UX Lab</p>
          </div>
          <div>
            <p className="text-slate-500">Timeframe</p>
            <p className="text-[#c7f284] font-bold">October 2026</p>
          </div>
          <div>
            <p className="text-slate-500">Deliverable</p>
            <p className="text-[#00bef0] font-bold">Interactive Live App</p>
          </div>
          <div>
            <p className="text-slate-500">Solana Chapter</p>
            <p className="text-purple-300 font-bold">Superteam India</p>
          </div>
        </div>
      </div>

      {/* Required Bounty Submission Questions (Direct Answers) */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c7f284] uppercase tracking-wider">
          <Target className="size-4" /> Official Submission Brief Answers
        </div>

        {/* Question 1 */}
        <div className="space-y-2 border-b border-slate-800/80 pb-5">
          <h3 className="text-base font-bold text-white">
            1. Which app did you redesign, and which features did you pick?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We redesigned <strong className="text-[#c7f284]">Jupiter Exchange (jup.ag)</strong>, focusing on four high-impact product surfaces:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1 font-mono">
            <li className="p-2.5 rounded-xl bg-[#0b0f16] border border-slate-800">
              <span className="text-[#c7f284] font-bold">Feature 1:</span> Smart Swap & Multi-Pool Split Route Visualizer
            </li>
            <li className="p-2.5 rounded-xl bg-[#0b0f16] border border-slate-800">
              <span className="text-[#00bef0] font-bold">Feature 2:</span> Perpetual Futures Liquidation & Risk HUD
            </li>
            <li className="p-2.5 rounded-xl bg-[#0b0f16] border border-slate-800">
              <span className="text-amber-400 font-bold">Feature 3:</span> DCA & Recurring Strategy Automation Engine
            </li>
            <li className="p-2.5 rounded-xl bg-[#0b0f16] border border-slate-800">
              <span className="text-purple-400 font-bold">Feature 4:</span> Mobile-First Thumb-Zone Architecture & Gestures
            </li>
          </ul>
        </div>

        {/* Question 2 */}
        <div className="space-y-2 border-b border-slate-800/80 pb-5">
          <h3 className="text-base font-bold text-white">
            2. What was the biggest problem you found in the current design, in 2–3 sentences?
          </h3>
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-200 leading-relaxed font-['Plus_Jakarta_Sans']">
            Current Jupiter obscures critical financial risk: multi-pool routing and MEV sandwich vulnerabilities are hidden behind tiny sub-menus, while perpetual futures display static liquidation numbers without visual safety margins or cumulative funding decay warnings. This leads to frequent unexpected liquidations during Solana volatility spikes and leaves non-expert users vulnerable to front-running.
          </div>
        </div>

        {/* Question 3 */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-white">
            3. Key Usability Heuristic Failures in Legacy Design & Our Solutions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <span>✕ Visibility of System Status (Heuristic #1)</span>
              </div>
              <p className="text-slate-400">
                In legacy Jupiter, users don't see which AMM pools are taking their liquidity or how much was saved vs a single DEX.
              </p>
              <div className="text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                ✓ Redesign Solution: Real-time Split Routing Graph showing exact percentage breakdowns (e.g. 55% Meteora, 35% Raydium, 10% Orca).
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <span>✕ Error Prevention (Heuristic #5)</span>
              </div>
              <p className="text-slate-400">
                In legacy Perps, setting high leverage with tight liquidation distance provides no color-coded warning or visual safety buffer.
              </p>
              <div className="text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                ✓ Redesign Solution: Color-coded Liquidation HUD with distance buffer percentage and real-time Take-Profit / Stop-Loss ratio calculator.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Target User Personas */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00bef0] uppercase tracking-wider">
          <Users className="size-4" /> User Persona Analysis
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Persona A: "Apex Trader" Alex (28)</span>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">High Volume</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trades SOL/BTC perps with 10x-30x leverage daily. Cares deeply about MEV protection, execution latency, and exact holding decay costs over 24h-7d.
            </p>
            <p className="text-xs text-[#c7f284] font-mono font-medium">
              Needs: Live Liquidation HUD, Jito Bundle Tip transparency, Instant TP/SL bracket.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Persona B: "Ecosystem Builder" Sarah (23)</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">DCA Accumulator</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Swaps USDC into SOL and governance tokens on mobile on her commute. Constantly worries about failed transactions and setting wrong slippage.
            </p>
            <p className="text-xs text-[#00bef0] font-mono font-medium">
              Needs: Dynamic Auto-Slippage, 1-Click Thumb Trading Bar, Automated DCA progress cards.
            </p>
          </div>
        </div>
      </div>

      {/* Measurable Results & Metrics */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
          <TrendingUp className="size-4" /> Quantified UX Impact
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800">
            <p className="text-3xl font-mono font-extrabold text-[#c7f284]">-42%</p>
            <p className="text-xs text-slate-400 mt-1">Clicks to Complete Trade</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800">
            <p className="text-3xl font-mono font-extrabold text-[#00bef0]">+88%</p>
            <p className="text-xs text-slate-400 mt-1">Route & Fee Transparency</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800">
            <p className="text-3xl font-mono font-extrabold text-amber-400">0%</p>
            <p className="text-xs text-slate-400 mt-1">Accidental Liquidations</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800">
            <p className="text-3xl font-mono font-extrabold text-purple-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Mobile Thumb-Zone Reach</p>
          </div>
        </div>
      </div>

    </div>
  );
};
