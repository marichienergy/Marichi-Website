import React, { useState } from 'react';
import { 
  Calculator as CalcIcon, 
  TrendingUp, 
  PiggyBank, 
  ArrowRight, 
  Sun, 
  Zap, 
  Leaf, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { DISCOM_PRESETS } from '../data';

interface CalculatorProps {
  onOpenWaitlist: (role: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenWaitlist }) => {
  const [role, setRole] = useState<'prosumer' | 'consumer'>('prosumer');
  const [selectedDiscomId, setSelectedDiscomId] = useState('bescom');
  const [solarKw, setSolarKw] = useState(5); // 5 kW rooftop
  const [monthlyConsumptionUnits, setMonthlyConsumptionUnits] = useState(600); // 600 kWh

  const currentDiscom = DISCOM_PRESETS.find((d) => d.id === selectedDiscomId) || DISCOM_PRESETS[0];

  // Prosumer calculations:
  // 1 kW generates approx 120 units/month in India (4 units/day)
  // Surplus typically ~50% of generation or configurable
  const monthlyGeneration = solarKw * 120;
  const estimatedSurplusUnits = Math.round(monthlyGeneration * 0.65); // 65% exported to grid
  const standardDiscomEarning = Math.round(estimatedSurplusUnits * currentDiscom.discomNetFeedIn);
  const marichiP2pEarning = Math.round(estimatedSurplusUnits * currentDiscom.p2pFloorPrice);
  const prosumerExtraMonthly = marichiP2pEarning - standardDiscomEarning;
  const prosumerExtraAnnual = prosumerExtraMonthly * 12;

  // Consumer calculations:
  // Buying clean solar through Marichi P2P
  const p2pUnitsEligible = Math.min(monthlyConsumptionUnits, 800);
  const standardDiscomCost = Math.round(p2pUnitsEligible * currentDiscom.discomGridTariff);
  const marichiConsumerCost = Math.round(p2pUnitsEligible * currentDiscom.p2pBuyerPrice);
  const consumerMonthlySavings = standardDiscomCost - marichiConsumerCost;
  const consumerAnnualSavings = consumerMonthlySavings * 12;

  // Environmental impact
  const activeUnits = role === 'prosumer' ? estimatedSurplusUnits : p2pUnitsEligible;
  const co2SavedKg = Math.round(activeUnits * 0.82); // ~0.82 kg CO2 per kWh thermal grid offset in India
  const treesEquiv = Math.round(co2SavedKg / 20);

  return (
    <section id="calculator" className="py-10 sm:py-14 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] block mb-2">
            P2P TARIFF & SAVINGS CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            See How Much You Can{' '}
            <span className="text-[#F5A623]">Earn & Save.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5F6B] mt-3 leading-relaxed">
            Real state-specific DISCOM feed-in rates vs peer-to-peer open access tariffs. 
            Test your numbers below in seconds.
          </p>

          {/* Role selector */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#14171F]/10 shadow-sm mt-6">
            <button
              onClick={() => setRole('prosumer')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                role === 'prosumer'
                  ? 'bg-[#F5A623] text-[#14171F] shadow-sm'
                  : 'text-[#5A5F6B] hover:text-[#1A1A1A]'
              }`}
            >
              <Sun className="w-4 h-4 text-[#14171F]" />
              <span>I Have Rooftop Solar (Seller)</span>
            </button>
            <button
              onClick={() => setRole('consumer')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                role === 'consumer'
                  ? 'bg-[#14171F] text-white shadow-sm'
                  : 'text-[#5A5F6B] hover:text-[#1A1A1A]'
              }`}
            >
              <Zap className="w-4 h-4 text-[#F5A623]" />
              <span>I Want Cheaper Green Power (Buyer)</span>
            </button>
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#14171F]/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Input Controls: Left 6 cols */}
            <div className="md:col-span-6 space-y-6">
              {/* DISCOM Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-2">
                  Select Your DISCOM / Region
                </label>
                <select
                  value={selectedDiscomId}
                  onChange={(e) => setSelectedDiscomId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 bg-white text-sm font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] shadow-sm"
                >
                  {DISCOM_PRESETS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#5A5F6B] mt-1.5 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[#5A5F6B]" />
                  Base DISCOM net-metering feed-in: ₹{currentDiscom.discomNetFeedIn.toFixed(2)}/unit
                </p>
              </div>

              {/* Slider for capacity or monthly consumption */}
              {role === 'prosumer' ? (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#5A5F6B]">
                      Rooftop Solar Capacity
                    </label>
                    <span className="text-base font-extrabold text-[#1A1A1A] bg-[#F5A623]/15 px-3 py-1 rounded-lg">
                      {solarKw} kW
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={solarKw}
                    onChange={(e) => setSolarKw(Number(e.target.value))}
                    className="w-full accent-[#F5A623] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#5A5F6B] mt-1 font-medium">
                    <span>1 kW (Home)</span>
                    <span>10 kW</span>
                    <span>25 kW (Commercial)</span>
                  </div>
                  <div className="mt-3 p-3 rounded-xl bg-[#FAF9F6] border border-[#14171F]/5 text-xs text-[#5A5F6B] flex items-center justify-between">
                    <span>Estimated Monthly Generation:</span>
                    <span className="font-bold text-[#1A1A1A]">~{monthlyGeneration} kWh</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#5A5F6B]">
                      Monthly Electricity Consumption
                    </label>
                    <span className="text-base font-extrabold text-[#1A1A1A] bg-[#14171F] text-white px-3 py-1 rounded-lg">
                      {monthlyConsumptionUnits} Units
                    </span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="2000"
                    step="50"
                    value={monthlyConsumptionUnits}
                    onChange={(e) => setMonthlyConsumptionUnits(Number(e.target.value))}
                    className="w-full accent-[#14171F] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#5A5F6B] mt-1 font-medium">
                    <span>150 Units</span>
                    <span>1,000 Units</span>
                    <span>2,000 Units</span>
                  </div>
                  <div className="mt-3 p-3 rounded-xl bg-[#FAF9F6] border border-[#14171F]/5 text-xs text-[#5A5F6B] flex items-center justify-between">
                    <span>Grid Benchmark Tariff:</span>
                    <span className="font-bold text-[#1A1A1A]">₹{currentDiscom.discomGridTariff.toFixed(2)} / kWh</span>
                  </div>
                </div>
              )}

              {/* Carbon offset badge */}
              <div className="p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#10B981] shrink-0" />
                <div className="text-xs text-[#1A1A1A]">
                  <span className="font-bold text-[#10B981]">Green Impact: </span>
                  Offsets approx. <strong>{co2SavedKg.toLocaleString()} kg of CO₂</strong>/month (~{treesEquiv} trees planted).
                </div>
              </div>
            </div>

            {/* Output Comparison Card: Right 6 cols */}
            <div className="md:col-span-6 rounded-2xl p-6 bg-gradient-to-br from-[#14171F] to-[#1C2230] text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5A623]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-[#F5A623]">
                  {role === 'prosumer' ? 'PROSUMER EXTRA INCOME' : 'CONSUMER BILL REDUCTION'}
                </div>

                {/* Big Number Callout */}
                <div className="mt-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹{(role === 'prosumer' ? prosumerExtraAnnual : consumerAnnualSavings).toLocaleString()}
                    <span className="text-xs font-normal text-white/70 block sm:inline sm:ml-2">
                      / year in added value
                    </span>
                  </div>
                  <p className="text-xs text-white/60 mt-1">
                    {role === 'prosumer'
                      ? `Based on selling ~${estimatedSurplusUnits} surplus units/month at ₹${currentDiscom.p2pFloorPrice}/unit`
                      : `Based on switching ${p2pUnitsEligible} units/month to Marichi P2P @ ₹${currentDiscom.p2pBuyerPrice}/unit`}
                  </p>
                </div>

                {/* Side-by-side rate breakdown */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs">
                  <div className="flex justify-between items-center text-white/70">
                    <span>
                      {role === 'prosumer' ? 'Standard Net Metering Payout' : 'Standard Grid Power Cost'}
                    </span>
                    <span className="font-mono text-white line-through">
                      ₹{(role === 'prosumer' ? standardDiscomEarning : standardDiscomCost).toLocaleString()} /mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#F5A623]">
                      {role === 'prosumer' ? 'With Marichi P2P Marketplace' : 'With Marichi Clean Energy'}
                    </span>
                    <span className="font-mono font-bold text-[#F5A623] text-sm">
                      ₹{(role === 'prosumer' ? marichiP2pEarning : marichiConsumerCost).toLocaleString()} /mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="mt-6 pt-4">
                <button
                  id="calc-claim-early-rate-btn"
                  onClick={() => onOpenWaitlist(role)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lock In Early Pilot Tariff</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-white/50 text-center block mt-2">
                  No installation fees. Cancel anytime.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
