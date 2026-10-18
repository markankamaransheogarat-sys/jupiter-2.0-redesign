import React, { useState } from 'react';
import { 
  ArrowDownUp, 
  Settings2, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Info, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  RefreshCw,
  GitFork,
  Check
} from 'lucide-react';
import { TOKENS, type Token } from '../data/tokens';

export const SwapTerminal: React.FC = () => {
  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]); // SOL
  const [toToken, setToToken] = useState<Token>(TOKENS[1]); // USDC
  const [fromAmount, setFromAmount] = useState<string>('5.0');
  const [slippage, setSlippage] = useState<number>(0.3);
  const [priorityMode, setPriorityMode] = useState<'normal' | 'turbo' | 'jito'>('jito');
  const [isSwapping, setIsSwapping] = useState<boolean>(false);
  const [txSuccess, setTxSuccess] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Computed values
  const numAmount = parseFloat(fromAmount) || 0;
  const toAmount = ((numAmount * fromToken.priceUsd) / toToken.priceUsd).toFixed(4);
  const totalUsdValue = (numAmount * fromToken.priceUsd).toFixed(2);
  const priceImpact = numAmount > 50 ? '0.42%' : '0.04%';
  const minReceived = (parseFloat(toAmount) * (1 - slippage / 100)).toFixed(4);

  const handleFlip = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const executeSwap = () => {
    if (numAmount <= 0) return;
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setTxSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">

      {/* Main Swap Card */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#c7f284]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">Smart Swap</span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <Zap className="size-3" /> Best Route v2
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                showSettings ? 'bg-[#c7f284]/15 text-[#c7f284]' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Execution & Protection Settings"
            >
              <Settings2 className="size-4" />
            </button>
          </div>
        </div>

        {/* Settings Flyout */}
        {showSettings && (
          <div className="mb-4 p-4 rounded-2xl bg-[#0c1017] border border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1.5">
                Max Slippage Tolerance
                <Info className="size-3 text-slate-500" />
              </span>
              <span className="font-mono font-semibold text-[#c7f284]">{slippage}% (Dynamic auto)</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0.1, 0.3, 0.5, 1.0].map((val) => (
                <button
                  key={val}
                  onClick={() => setSlippage(val)}
                  className={`py-1.5 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                    slippage === val
                      ? 'bg-[#c7f284]/20 border-[#c7f284] text-[#c7f284]'
                      : 'bg-[#151d29] border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {val}%
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" /> MEV Protection (Jito Bundles)
              </span>
              <div className="flex items-center gap-1">
                {(['normal', 'turbo', 'jito'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPriorityMode(mode)}
                    className={`px-2 py-1 text-[11px] font-mono rounded-md border capitalize transition-all cursor-pointer ${
                      priorityMode === mode
                        ? 'bg-[#00bef0]/20 border-[#00bef0] text-[#00bef0] font-semibold'
                        : 'bg-[#131a24] border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Card (Selling) */}
        <div className="bg-[#0b0f16] border border-slate-800/90 rounded-2xl p-4 transition-all focus-within:border-[#c7f284]/40 focus-within:ring-1 focus-within:ring-[#c7f284]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>You Pay</span>
            <div className="flex items-center gap-1.5">
              <span>Balance: <strong className="font-mono text-slate-300">{fromToken.balance} {fromToken.symbol}</strong></span>
              <button 
                onClick={() => setFromAmount((fromToken.balance / 2).toFixed(2))}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                HALF
              </button>
              <button 
                onClick={() => setFromAmount(fromToken.balance.toString())}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#c7f284]/20 hover:bg-[#c7f284]/30 text-[#c7f284] font-semibold cursor-pointer"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-3xl sm:text-4xl font-mono font-bold text-white outline-none w-full placeholder:text-slate-600"
            />

            {/* Token Selector Pill */}
            <div className="flex items-center gap-2 bg-[#17212e] hover:bg-[#1e2a3b] border border-slate-700/80 px-3 py-2 rounded-2xl cursor-pointer transition-all shrink-0">
              <img src={fromToken.icon} alt={fromToken.symbol} className="size-6 rounded-full" />
              <span className="font-bold text-white text-base font-['Plus_Jakarta_Sans']">{fromToken.symbol}</span>
              <ChevronDown className="size-4 text-slate-400" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>≈ ${totalUsdValue} USD</span>
            <span className="text-slate-400">1 {fromToken.symbol} = ${fromToken.priceUsd.toFixed(2)}</span>
          </div>
        </div>

        {/* Swap Flip Divider Button */}
        <div className="relative my-2.5 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <button
            onClick={handleFlip}
            className="relative size-10 rounded-2xl bg-[#17212e] border border-slate-700/80 text-slate-300 hover:text-[#c7f284] hover:border-[#c7f284]/50 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            title="Switch Tokens"
          >
            <ArrowDownUp className="size-4" />
          </button>
        </div>

        {/* Output Card (Receiving) */}
        <div className="bg-[#0b0f16] border border-slate-800/90 rounded-2xl p-4 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>You Receive (Estimated)</span>
            <span>Balance: <strong className="font-mono text-slate-300">{toToken.balance} {toToken.symbol}</strong></span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-[#c7f284] w-full truncate">
              {toAmount}
            </div>

            {/* To Token Selector */}
            <div className="flex items-center gap-2 bg-[#17212e] hover:bg-[#1e2a3b] border border-slate-700/80 px-3 py-2 rounded-2xl cursor-pointer transition-all shrink-0">
              <img src={toToken.icon} alt={toToken.symbol} className="size-6 rounded-full" />
              <span className="font-bold text-white text-base font-['Plus_Jakarta_Sans']">{toToken.symbol}</span>
              <ChevronDown className="size-4 text-slate-400" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>≈ ${totalUsdValue} USD</span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <Sparkles className="size-3" /> Guaranteed Best Execution
            </span>
          </div>
        </div>

        {/* Redesigned Dynamic Routing Visualizer */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#090d14] border border-slate-800/90 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium flex items-center gap-1.5">
              <GitFork className="size-3.5 text-[#00bef0]" /> Smart Routing Path
            </span>
            <span className="font-mono text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Saved +$14.28 vs 1-AMM
            </span>
          </div>

          {/* Routing Visual Flow */}
          <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
            <div className="p-2 rounded-xl bg-[#131a24] border border-slate-800 text-center">
              <p className="text-slate-400 text-[10px]">Meteora DLMM</p>
              <p className="text-[#c7f284] font-semibold">55% ($501.7)</p>
              <p className="text-[9px] text-slate-500">0.02% fee</p>
            </div>
            <div className="p-2 rounded-xl bg-[#131a24] border border-slate-800 text-center">
              <p className="text-slate-400 text-[10px]">Raydium CLMM</p>
              <p className="text-[#00bef0] font-semibold">35% ($319.3)</p>
              <p className="text-[9px] text-slate-500">0.04% fee</p>
            </div>
            <div className="p-2 rounded-xl bg-[#131a24] border border-slate-800 text-center">
              <p className="text-slate-400 text-[10px]">Orca Whirlpool</p>
              <p className="text-purple-400 font-semibold">10% ($91.2)</p>
              <p className="text-[9px] text-slate-500">0.01% fee</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60 font-mono">
            <span>Price Impact: <strong className="text-emerald-400">{priceImpact}</strong></span>
            <span>Min. Received: <strong className="text-slate-200">{minReceived} {toToken.symbol}</strong></span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={executeSwap}
          disabled={isSwapping || numAmount <= 0}
          className="mt-5 w-full py-4 rounded-2xl bg-gradient-to-r from-[#c7f284] to-[#a3e635] hover:from-[#d9f99d] hover:to-[#bef264] text-slate-950 font-bold text-base transition-all cursor-pointer shadow-lg shadow-[#c7f284]/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSwapping ? (
            <>
              <RefreshCw className="size-5 animate-spin" />
              Simulating & Routing on Solana...
            </>
          ) : numAmount <= 0 ? (
            'Enter an Amount'
          ) : (
            `Swap ${fromToken.symbol} for ${toToken.symbol}`
          )}
        </button>

      </div>

      {/* Transaction Receipt Modal */}
      {txSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-between animate-in zoom-in-95 duration-200 shadow-xl">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Swap Confirmed in 380ms!</p>
              <p className="text-xs text-emerald-300 font-mono">Swapped {fromAmount} {fromToken.symbol} → {toAmount} {toToken.symbol}</p>
            </div>
          </div>
          <button
            onClick={() => setTxSuccess(false)}
            className="text-xs text-emerald-400 hover:text-white underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

    </div>
  );
};
