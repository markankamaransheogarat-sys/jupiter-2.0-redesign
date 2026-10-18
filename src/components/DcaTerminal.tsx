import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Sparkles, 
  Play, 
  Pause, 
  Trash2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sliders
} from 'lucide-react';
import { TOKENS } from '../data/tokens';

export const DcaTerminal: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<string>('1000');
  const [frequency, setFrequency] = useState<'10m' | '1h' | '1d' | '1w'>('1d');
  const [ordersCount, setOrdersCount] = useState<number>(10);
  const [activeTab, setActiveTab] = useState<'create' | 'active'>('create');
  const [orderCreated, setOrderCreated] = useState<boolean>(false);

  // Active mock orders
  const [mockOrders, setMockOrders] = useState([
    {
      id: 'DCA-892',
      from: 'USDC',
      to: 'SOL',
      total: '$1,500',
      progress: '6 / 10 orders',
      pct: 60,
      spent: '$900',
      acquired: '4.95 SOL',
      avgPrice: '$181.80',
      status: 'Active',
      nextExec: 'In 3h 12m'
    },
    {
      id: 'DCA-415',
      from: 'USDC',
      to: 'JUP',
      total: '$500',
      progress: '15 / 20 orders',
      pct: 75,
      spent: '$375',
      acquired: '320.5 JUP',
      avgPrice: '$1.17',
      status: 'Active',
      nextExec: 'In 45m'
    }
  ]);

  const numBudget = parseFloat(totalBudget) || 0;
  const perOrderAmount = (numBudget / ordersCount).toFixed(2);

  const handleCreateDca = () => {
    setOrderCreated(true);
    setTimeout(() => {
      setOrderCreated(false);
      setActiveTab('active');
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">

      {/* Main Container */}
      <div className="bg-[#111722] border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        
        {/* Header Tabs */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">DCA & Recurring Automation</span>
          </div>
          <div className="flex items-center bg-[#090d14] p-1 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab('create')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'create' ? 'bg-[#1e293b] text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              New Strategy
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'active' ? 'bg-[#1e293b] text-[#c7f284] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Active ({mockOrders.length})
            </button>
          </div>
        </div>

        {activeTab === 'create' ? (
          <div className="space-y-4">
            
            {/* Total Budget Card */}
            <div className="bg-[#0b0f16] border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Total Allocation Budget (USDC)</span>
                <span className="font-mono">Avail: $4,250.00</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(e.target.value)}
                  className="bg-transparent text-3xl font-mono font-bold text-white outline-none w-full"
                  placeholder="1000"
                />
                <div className="flex items-center gap-1.5">
                  {[250, 500, 1000, 2000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setTotalBudget(val.toString())}
                      className="px-2 py-1 text-[11px] font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer"
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Asset Pair */}
            <div className="p-3.5 rounded-2xl bg-[#090d14] border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <img src={TOKENS[1].icon} alt="USDC" className="size-6 rounded-full" />
                <span className="font-bold text-white">USDC</span>
              </div>
              <ArrowRight className="size-4 text-slate-500" />
              <div className="flex items-center gap-2">
                <img src={TOKENS[0].icon} alt="SOL" className="size-6 rounded-full" />
                <span className="font-bold text-[#c7f284]">SOL</span>
              </div>
            </div>

            {/* Frequency Selector */}
            <div className="bg-[#0b0f16] border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Execution Interval</span>
                <span className="text-amber-400 font-mono font-semibold">Every {frequency === '10m' ? '10 Minutes' : frequency === '1h' ? '1 Hour' : frequency === '1d' ? 'Day' : 'Week'}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: '10m', label: '10 Min' },
                  { id: '1h', label: 'Hourly' },
                  { id: '1d', label: 'Daily' },
                  { id: '1w', label: 'Weekly' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFrequency(item.id as any)}
                    className={`py-2 text-xs font-mono rounded-xl border transition-all cursor-pointer ${
                      frequency === item.id
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-[#131a24] border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slices / Order Split Calculator */}
            <div className="p-4 rounded-2xl bg-[#090d14] border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400">
                <span>Number of Orders:</span>
                <span className="text-white font-bold">{ordersCount} orders</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={ordersCount}
                onChange={(e) => setOrdersCount(parseInt(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
                <span className="text-slate-400">Amount per order:</span>
                <span className="text-[#c7f284] font-bold">${perOrderAmount} USDC</span>
              </div>
            </div>

            {/* Simulation Advantage Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/20 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                <Sparkles className="size-3.5" /> Volatility Shield (Backtest Insight)
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                DCA into SOL over 10 days historically reduced entry drawdown by <strong className="text-emerald-400">26.4%</strong> compared to single lump-sum execution during local market storms.
              </p>
            </div>

            {/* Start Button */}
            <button
              onClick={handleCreateDca}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base transition-all cursor-pointer shadow-lg shadow-amber-400/20 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Clock className="size-5" /> Start Automated DCA (${totalBudget} USDC)
            </button>

          </div>
        ) : (
          /* Active Orders View */
          <div className="space-y-3">
            {mockOrders.map((order) => (
              <div key={order.id} className="p-4 rounded-2xl bg-[#0b0f16] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-white">{order.id}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {order.from} → {order.to}
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{order.nextExec}</span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mb-1">
                    <span>{order.progress}</span>
                    <span className="text-[#c7f284]">{order.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-[#c7f284] rounded-full transition-all duration-500" 
                      style={{ width: `${order.pct}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 text-slate-400">
                  <div>Spent: <strong className="text-white">{order.spent}</strong> of {order.total}</div>
                  <div>Acquired: <strong className="text-[#c7f284]">{order.acquired}</strong></div>
                  <div>Avg Price: <strong className="text-white">{order.avgPrice}</strong></div>
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer">
                      <Pause className="size-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 cursor-pointer">
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {orderCreated && (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 animate-in zoom-in-95 duration-200">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <p className="text-sm font-semibold">Automated DCA Order Initialized Successfully!</p>
        </div>
      )}

    </div>
  );
};
