import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  ShieldAlert, 
  Sliders, 
  Percent, 
  ArrowUpRight, 
  Info,
  CheckCircle2,
  Lock,
  Compass
} from 'lucide-react';

export const PerpsTerminal: React.FC = () => {
  const [side, setSide] = useState<'LONG' | 'SHORT'>('LONG');
  const [collateral, setCollateral] = useState<string>('500'); // $500 collateral
  const [leverage, setLeverage] = useState<number>(10); // 10x
  const [tpPrice, setTpPrice] = useState<string>('215.00');
  const [slPrice, setSlPrice] = useState<string>('174.00');
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  // Asset: SOL-PERP
  const markPrice = 182.45;
  const numCollateral = parseFloat(collateral) || 0;
  const positionSizeUsd = numCollateral * leverage;
  const positionSizeSol = (positionSizeUsd / markPrice).toFixed(2);

  // Liquidation calculation
  // For Long: entry * (1 - 1/leverage + maintenance_margin)
  const mm = 0.015; // 1.5% maintenance margin
  const liqDistancePct = side === 'LONG' 
    ? Math.max(1, (1 / leverage - mm) * 100)
    : Math.max(1, (1 / leverage - mm) * 100);

  const liqPrice = side === 'LONG'
    ? (markPrice * (1 - liqDistancePct / 100)).toFixed(2)
    : (markPrice * (1 + liqDistancePct / 100)).toFixed(2);

  // Safety rating
  const isHighRisk = leverage >= 25 || liqDistancePct < 5;
  const isMediumRisk = leverage >= 10 && leverage < 25;

  // Holding Cost (borrow rate: ~0.01% / 8h)
  const borrowRate8h = 0.012; // 0.012% per 8h
  const cost8h = (positionSizeUsd * (borrowRate8h / 100)).toFixed(2);
  const cost24h = (parseFloat(cost8h) * 3).toFixed(2);
  const cost7d = (parseFloat(cost24h) * 7).toFixed(2);

  // TP/SL calculations
  const numTp = parseFloat(tpPrice) || markPrice;
  const numSl = parseFloat(slPrice) || markPrice;
  const tpDiff = Math.abs(numTp - markPrice);
  const slDiff = Math.abs(markPrice - numSl);
  const estProfit = ((tpDiff / markPrice) * positionSizeUsd).toFixed(2);
  const estLoss = ((slDiff / markPrice) * positionSizeUsd).toFixed(2);
  const rrRatio = parseFloat(estLoss) > 0 ? (parseFloat(estProfit) / parseFloat(estLoss)).toFixed(2) : '1.0';

  const handleOpenPosition = () => {
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      
      {/* Top Perp Header Card */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        
        {/* Title & Market Stats */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5">
              <div className="w-full h-full bg-[#0b0e14] rounded-[14px] flex items-center justify-center font-bold text-white">
                SOL
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">SOL-PERP</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  +3.82% 24h
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Index: ${markPrice} • 1h Funding: +0.0014%</p>
            </div>
          </div>

          {/* Long / Short Switch */}
          <div className="flex items-center bg-[#090d14] p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => setSide('LONG')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                side === 'LONG'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="size-3.5" /> Long
            </button>
            <button
              onClick={() => setSide('SHORT')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                side === 'SHORT'
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingDown className="size-3.5" /> Short
            </button>
          </div>
        </div>

        {/* Collateral Input */}
        <div className="bg-[#0b0f16] border border-slate-800 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Margin (Collateral in USDC)</span>
            <span className="font-mono">Avail: $4,250.00</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <input
              type="number"
              value={collateral}
              onChange={(e) => setCollateral(e.target.value)}
              className="bg-transparent text-3xl font-mono font-bold text-white outline-none w-full"
              placeholder="0.0"
            />
            <div className="flex items-center gap-1.5">
              {[100, 250, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setCollateral(amt.toString())}
                  className="px-2 py-1 text-[11px] font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer"
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Leverage Slider with HUD indicators */}
        <div className="bg-[#090d14] border border-slate-800 rounded-2xl p-4 mb-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
              <Sliders className="size-3.5 text-[#00bef0]" /> Position Leverage
            </span>
            <span className={`text-base font-mono font-bold ${
              isHighRisk ? 'text-rose-400' : isMediumRisk ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {leverage}x
            </span>
          </div>

          {/* Interactive Range Input */}
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={leverage}
            onChange={(e) => setLeverage(parseInt(e.target.value))}
            className="w-full accent-[#c7f284] cursor-pointer"
          />

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>1x (Spot)</span>
            <span>5x</span>
            <span>10x (Balanced)</span>
            <span>20x</span>
            <span>50x (Max)</span>
          </div>
        </div>

        {/* Redesigned LIQUIDATION RISK HUD */}
        <div className={`p-4 rounded-2xl border transition-all ${
          isHighRisk 
            ? 'bg-rose-950/20 border-rose-500/40 text-rose-200' 
            : isMediumRisk 
            ? 'bg-amber-950/20 border-amber-500/40 text-amber-200' 
            : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
        } mb-4`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold flex items-center gap-1.5">
              {isHighRisk ? (
                <ShieldAlert className="size-4 text-rose-400 animate-pulse" />
              ) : (
                <CheckCircle2 className="size-4 text-emerald-400" />
              )}
              Liquidation Safety HUD
            </span>
            <span className="text-xs font-mono font-bold">
              {liqDistancePct.toFixed(1)}% Distance buffer
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono pt-1">
            <div className="bg-[#0b0e14]/60 p-2 rounded-xl">
              <p className="text-slate-400 text-[10px]">Position Size</p>
              <p className="text-white font-bold">${positionSizeUsd.toLocaleString()} ({positionSizeSol} SOL)</p>
            </div>
            <div className="bg-[#0b0e14]/60 p-2 rounded-xl">
              <p className="text-slate-400 text-[10px]">Est. Liquidation Price</p>
              <p className={`font-bold ${isHighRisk ? 'text-rose-400' : 'text-white'}`}>${liqPrice}</p>
            </div>
            <div className="bg-[#0b0e14]/60 p-2 rounded-xl col-span-2 sm:col-span-1">
              <p className="text-slate-400 text-[10px]">Risk Tier</p>
              <p className={`font-bold uppercase text-[11px] ${
                isHighRisk ? 'text-rose-400' : isMediumRisk ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {isHighRisk ? 'High Alert' : isMediumRisk ? 'Moderate' : 'Conservative'}
              </p>
            </div>
          </div>
        </div>

        {/* Transparent Holding Decay Matrix */}
        <div className="p-3.5 rounded-2xl bg-[#090d14] border border-slate-800/80 mb-4 text-xs font-mono space-y-1.5">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span className="flex items-center gap-1">
              <Info className="size-3 text-slate-500" /> Transparent Holding Cost (Borrow + Funding)
            </span>
            <span className="text-[#00bef0]">0.012% / 8h</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1 text-[11px]">
            <div className="p-1.5 rounded-lg bg-[#111722] border border-slate-800">
              <p className="text-slate-500 text-[10px]">8 Hours</p>
              <p className="text-slate-200">-${cost8h}</p>
            </div>
            <div className="p-1.5 rounded-lg bg-[#111722] border border-slate-800">
              <p className="text-slate-500 text-[10px]">24 Hours</p>
              <p className="text-slate-200">-${cost24h}</p>
            </div>
            <div className="p-1.5 rounded-lg bg-[#111722] border border-slate-800">
              <p className="text-slate-500 text-[10px]">7 Days</p>
              <p className="text-slate-200">-${cost7d}</p>
            </div>
          </div>
        </div>

        {/* Visual Take-Profit / Stop-Loss Bracket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 flex items-center justify-between">
              Take Profit Target
              <span className="text-emerald-400 font-mono font-semibold">+${estProfit}</span>
            </span>
            <input
              type="text"
              value={tpPrice}
              onChange={(e) => setTpPrice(e.target.value)}
              className="bg-transparent font-mono text-lg font-bold text-emerald-400 outline-none w-full"
            />
          </div>
          <div className="p-3 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 flex items-center justify-between">
              Stop Loss Target
              <span className="text-rose-400 font-mono font-semibold">-${estLoss}</span>
            </span>
            <input
              type="text"
              value={slPrice}
              onChange={(e) => setSlPrice(e.target.value)}
              className="bg-transparent font-mono text-lg font-bold text-rose-400 outline-none w-full"
            />
          </div>
        </div>

        {/* Risk / Reward Badge */}
        <div className="mb-5 flex items-center justify-between text-xs font-mono bg-[#131a24] p-2.5 rounded-xl border border-slate-800">
          <span className="text-slate-400">Calculated Risk/Reward Ratio:</span>
          <span className="text-[#c7f284] font-bold">1 : {rrRatio} {parseFloat(rrRatio) >= 2 ? '(Favorable)' : '(Suboptimal)'}</span>
        </div>

        {/* Open Order Button */}
        <button
          onClick={handleOpenPosition}
          className={`w-full py-4 rounded-2xl font-bold text-base transition-all cursor-pointer shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 ${
            side === 'LONG'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 shadow-emerald-500/20'
              : 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white shadow-rose-500/20'
          }`}
        >
          {side === 'LONG' ? `Open Long ${positionSizeSol} SOL (${leverage}x)` : `Open Short ${positionSizeSol} SOL (${leverage}x)`}
        </button>

      </div>

      {orderSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-between animate-in zoom-in-95 duration-200">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
            <p className="text-sm font-semibold">Perp Order Placed with Liquidation Shield & TP/SL!</p>
          </div>
        </div>
      )}

    </div>
  );
};
