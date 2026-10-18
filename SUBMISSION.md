# Superteam Earn Bounty Submission: Redesign Your Favourite App on Solana

## 🏆 Project: Jupiter 2.0 — Next-Gen DeFi & Perp HUD

- **Target Application**: [Jupiter Exchange](https://jup.ag)
- **Target Category**: Design & Frontend Engineering (Solana DeFi)
- **Bounty**: "Redesign Your Favourite App on Solana" ($1,500 USDC)
- **Submission Type**: Comprehensive UX Case Study + Functional Interactive Web Prototype

---

### 1. Which app did you redesign, and which features did you pick?

We redesigned **Jupiter Exchange (jup.ag)**, the primary liquidity aggregator and perpetual exchange on Solana. We focused on four core feature surfaces:

1. **Smart Swap Terminal & Dynamic Route Optimization**:
   - Replaced hidden routing dropdowns with a real-time **Multi-Pool Split-Routing Graph** showing exact % allocations (Meteora DLMM, Raydium CLMM, Orca Whirlpools) and verified price improvements (`+$14.28 saved vs 1-AMM`).
   - Integrated an inline **Jito MEV & Anti-Sandwich Shield** with dynamic auto-calibrated slippage.

2. **Next-Gen Perpetual Futures Risk & Liquidation HUD**:
   - Created a dynamic **Color-Coded Liquidation Safety Meter** showing distance-to-liquidation percentage and price buffers.
   - Built a **Transparent Holding Cost Matrix** projecting 8h, 24h, and 7d borrow and funding rate decay so traders aren't blindsided by margin erosion.
   - Added visual **Take-Profit / Stop-Loss Brackets** with real-time Risk-to-Reward ratio calculations.

3. **DCA & Recurring Automation Strategy Engine**:
   - Replaced complex order forms with an interactive **Budget Slicer & Volatility Shield** showing backtested drawdown reduction data.
   - Designed real-time active order progress cards with one-click pause, resume, and edit controls.

4. **Mobile-First Responsive Thumb-Zone Architecture**:
   - Redesigned the entire mobile experience with a bottom-docked navigation bar, thumb-accessible swap action, and bottom-sheet token drawers adhering to 48px touch targets.

---

### 2. What was the biggest problem you found in the current design, in 2–3 sentences?

Current Jupiter obscures critical financial risk: multi-pool routing and MEV sandwich vulnerabilities are hidden behind deep sub-menus, while perpetual futures display static liquidation numbers without visual safety margins or cumulative funding decay warnings. This leads to frequent unexpected liquidations during Solana volatility spikes and leaves non-expert users vulnerable to front-running.

---

### 3. Usability Heuristics & UX Decision Matrix (Nielsen Norman Group)

| Heuristic | Legacy Jupiter 1.0 Problem | Jupiter 2.0 Redesign Solution |
| :--- | :--- | :--- |
| **#1: Visibility of System Status** | Routing hops are text-only in hidden dropdowns; users don't know where their swap goes. | Real-time multi-branch split routing flow diagram showing exact percentage and AMM pool fee splits. |
| **#5: Error Prevention** | Traders adjust leverage blindly without understanding proximity to liquidation. | Dynamic Liquidation HUD with visual distance gauge and instant warning badges (Conservative, Moderate, High Alert). |
| **#8: Aesthetic & Minimalist Design** | Screen cluttered with redundant metrics while critical information (holding cost) is omitted. | Streamlined card hierarchy with progressive disclosure and dedicated holding decay matrix. |
| **#7: Flexibility & Efficiency of Use** | Mobile trading requires vertical scrolling past the fold to reach the swap button. | Thumb-zone sticky execution bar and one-click percentage chips (HALF / MAX / 25%). |

---

### 4. Interactive Live Prototype

- **Framework**: React 19 + TypeScript + Vite + Tailwind CSS v4 + Lucide Icons.
- **Features Included**:
  - Full interactive Smart Swap with live slippage and Jito MEV protection toggle.
  - Interactive Perpetual Futures terminal with live leverage slider, liquidation price recalculation, and TP/SL ratio calculator.
  - DCA recurring order generator with live active orders progress simulator.
  - Interactive **Before vs After Modal** for judges.
  - Device Viewport Switcher (Full Desktop vs iPhone 16 Pro 393px Simulator).

---

### 5. Repository & Code
- GitHub Repository: `https://github.com/markankamaransheogarat-sys/jupiter-2.0-redesign`
- Live Interactive Demo: Embedded in Vite preview / GitHub Pages
