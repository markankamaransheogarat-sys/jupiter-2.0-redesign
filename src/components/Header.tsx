import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Monitor, 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Wallet,
  ArrowRightLeft,
  TrendingUp,
  Clock
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'swap' | 'perps' | 'dca' | 'casestudy';
  setActiveTab: (tab: 'swap' | 'perps' | 'dca' | 'casestudy') => void;
  isMobileView: boolean;
  setIsMobileView: (val: boolean) => void;
  isLegacyMode: boolean;
  setIsLegacyMode: (val: boolean) => void;
  openBeforeAfterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isMobileView,
  setIsMobileView,
  isLegacyMode,
  setIsLegacyMode,
  openBeforeAfterModal
}) => {
  return (
    <header className="border-b border-slate-800/80 bg-[#0d121b]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand & Edition */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-[#c7f284] to-[#00bef0] p-0.5 shadow-lg shadow-[#c7f284]/15">
              <div className="w-full h-full bg-[#0b0e14] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c7f284] to-[#00bef0] text-lg font-mono">
                  J2
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white tracking-tight text-base font-['Plus_Jakarta_Sans']">
                  Jupiter <span className="text-[#c7f284]">2.0</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#c7f284]/10 text-[#c7f284] border border-[#c7f284]/20 font-semibold tracking-wider">
                  Superteam Edition
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Next-Gen DeFi & Perp Terminal</p>
            </div>
          </div>
        </div>

        {/* Center Nav Tabs */}
        <nav className="hidden md:flex items-center bg-[#131a24] p-1 rounded-xl border border-slate-800/80 text-sm font-medium">
          <button
            onClick={() => setActiveTab('swap')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'swap'
                ? 'bg-[#1e293b] text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowRightLeft className="size-4 text-[#c7f284]" />
            Smart Swap
          </button>
          <button
            onClick={() => setActiveTab('perps')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'perps'
                ? 'bg-[#1e293b] text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="size-4 text-[#00bef0]" />
            Perp HUD
          </button>
          <button
            onClick={() => setActiveTab('dca')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'dca'
                ? 'bg-[#1e293b] text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="size-4 text-amber-400" />
            DCA Engine
          </button>
          <button
            onClick={() => setActiveTab('casestudy')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'casestudy'
                ? 'bg-purple-950/60 text-purple-200 border border-purple-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="size-4 text-purple-400" />
            UX Case Study
          </button>
        </nav>

        {/* Right Action Tools: Before/After, Mobile Switch, Wallet */}
        <div className="flex items-center gap-2.5">
          
          {/* Compare Before/After Button */}
          <button
            onClick={openBeforeAfterModal}
            className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#c7f284]/10 text-[#c7f284] border border-[#c7f284]/30 hover:bg-[#c7f284]/20 transition-all cursor-pointer"
            title="Open side-by-side comparative analysis"
          >
            <Layers className="size-3.5" />
            <span className="hidden sm:inline">Before vs After</span>
          </button>

          {/* Viewport Switcher */}
          <button
            onClick={() => setIsMobileView(!isMobileView)}
            className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 cursor-pointer ${
              isMobileView 
                ? 'bg-[#00bef0]/15 border-[#00bef0]/40 text-[#00bef0]' 
                : 'bg-[#131a24] border-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Toggle between Desktop and Mobile iPhone preview"
          >
            {isMobileView ? (
              <>
                <Smartphone className="size-4" />
                <span className="hidden sm:inline">Mobile (393px)</span>
              </>
            ) : (
              <>
                <Monitor className="size-4" />
                <span className="hidden sm:inline">Desktop</span>
              </>
            )}
          </button>

          {/* Mock Connected Wallet Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#131a24] border border-slate-800 rounded-xl text-xs">
            <div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-slate-300 font-mono font-medium">8Fx9...3kQ</span>
            <div className="h-3 w-px bg-slate-700"></div>
            <span className="text-[#c7f284] font-semibold font-mono">24.5 SOL</span>
          </div>

        </div>

      </div>

      {/* Mobile sub-nav */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800/80 px-2 py-1.5 bg-[#0b0e14]">
        <button
          onClick={() => setActiveTab('swap')}
          className={`flex items-center gap-1 text-xs py-1 px-2.5 rounded ${activeTab === 'swap' ? 'bg-[#1e293b] text-[#c7f284] font-semibold' : 'text-slate-400'}`}
        >
          <ArrowRightLeft className="size-3.5" /> Swap
        </button>
        <button
          onClick={() => setActiveTab('perps')}
          className={`flex items-center gap-1 text-xs py-1 px-2.5 rounded ${activeTab === 'perps' ? 'bg-[#1e293b] text-[#00bef0] font-semibold' : 'text-slate-400'}`}
        >
          <TrendingUp className="size-3.5" /> Perps
        </button>
        <button
          onClick={() => setActiveTab('dca')}
          className={`flex items-center gap-1 text-xs py-1 px-2.5 rounded ${activeTab === 'dca' ? 'bg-[#1e293b] text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <Clock className="size-3.5" /> DCA
        </button>
        <button
          onClick={() => setActiveTab('casestudy')}
          className={`flex items-center gap-1 text-xs py-1 px-2.5 rounded ${activeTab === 'casestudy' ? 'bg-purple-950/60 text-purple-300 font-semibold' : 'text-slate-400'}`}
        >
          <BookOpen className="size-3.5" /> Audit
        </button>
      </div>
    </header>
  );
};
