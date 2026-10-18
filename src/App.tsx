import React, { useState } from 'react';
import { Header } from './components/Header';
import { SwapTerminal } from './components/SwapTerminal';
import { PerpsTerminal } from './components/PerpsTerminal';
import { DcaTerminal } from './components/DcaTerminal';
import { CaseStudy } from './components/CaseStudy';
import { BeforeAfterModal } from './components/BeforeAfterModal';
import { 
  Sparkles, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  ArrowRight,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'swap' | 'perps' | 'dca' | 'casestudy'>('swap');
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isLegacyMode, setIsLegacyMode] = useState<boolean>(false);
  const [isBeforeAfterModalOpen, setIsBeforeAfterModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileView={isMobileView}
        setIsMobileView={setIsMobileView}
        isLegacyMode={isLegacyMode}
        setIsLegacyMode={setIsLegacyMode}
        openBeforeAfterModal={() => setIsBeforeAfterModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center justify-center">
        
        {isMobileView ? (
          /* Mobile Device Frame Simulator (iPhone 16 Pro - 393px) */
          <div className="w-[393px] h-[812px] bg-[#0c1017] border-[10px] border-slate-800 rounded-[50px] shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-slate-700/50">
            
            {/* Dynamic Island & Notch */}
            <div className="h-10 bg-[#0c1017] flex items-center justify-between px-6 pt-2 shrink-0 z-20 select-none">
              <span className="text-[12px] font-semibold text-slate-300 font-mono">9:41</span>
              <div className="w-24 h-4 bg-black rounded-full mx-auto"></div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Signal className="size-3" />
                <Wifi className="size-3" />
                <Battery className="size-3" />
              </div>
            </div>

            {/* Simulated Mobile Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeTab === 'swap' && <SwapTerminal />}
              {activeTab === 'perps' && <PerpsTerminal />}
              {activeTab === 'dca' && <DcaTerminal />}
              {activeTab === 'casestudy' && <CaseStudy />}
            </div>

            {/* Home Indicator */}
            <div className="h-6 flex items-center justify-center shrink-0 bg-[#0c1017]">
              <div className="w-32 h-1 bg-slate-600 rounded-full"></div>
            </div>

          </div>
        ) : (
          /* Full Desktop View */
          <div className="w-full">
            {activeTab === 'swap' && <SwapTerminal />}
            {activeTab === 'perps' && <PerpsTerminal />}
            {activeTab === 'dca' && <DcaTerminal />}
            {activeTab === 'casestudy' && <CaseStudy />}
          </div>
        )}

      </main>

      {/* Bottom Footer Info */}
      <footer className="border-t border-slate-900 bg-[#090c12] py-4 text-xs text-slate-500 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Jupiter 2.0 UX Redesign • Built for Superteam Earn ($1,500 USDC Bounty)</span>
          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => setIsBeforeAfterModalOpen(true)}
              className="hover:text-[#c7f284] underline cursor-pointer"
            >
              Before/After Audit
            </button>
            <button 
              onClick={() => setActiveTab('casestudy')}
              className="hover:text-[#c7f284] underline cursor-pointer"
            >
              Full Case Study
            </button>
          </div>
        </div>
      </footer>

      {/* Before / After Modal */}
      <BeforeAfterModal
        isOpen={isBeforeAfterModalOpen}
        onClose={() => setIsBeforeAfterModalOpen(false)}
      />

    </div>
  );
}
