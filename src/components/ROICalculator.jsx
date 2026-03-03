import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Target, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

const currencyOptions = [
  {
    key: 'USD',
    label: 'Dollar',
    icon: '$',
    locale: 'en-US',
    currency: 'USD',
    rateFromUSD: 1,
    revenueMin: 10000,
    revenueMax: 500000,
    revenueStep: 5000,
    adSpendMin: 1000,
    adSpendMax: 100000,
    adSpendStep: 1000,
    compactDivisor: 1000,
    compactSuffix: 'K',
  },
  {
    key: 'INR',
    label: 'INR',
    icon: '₹',
    locale: 'en-IN',
    currency: 'INR',
    rateFromUSD: 83,
    revenueMin: 830000,
    revenueMax: 41500000,
    revenueStep: 415000,
    adSpendMin: 83000,
    adSpendMax: 8300000,
    adSpendStep: 83000,
    compactDivisor: 100000,
    compactSuffix: 'L',
  },
  {
    key: 'GBP',
    label: 'Pound',
    icon: '£',
    locale: 'en-GB',
    currency: 'GBP',
    rateFromUSD: 0.79,
    revenueMin: 7900,
    revenueMax: 395000,
    revenueStep: 3950,
    adSpendMin: 790,
    adSpendMax: 79000,
    adSpendStep: 790,
    compactDivisor: 1000,
    compactSuffix: 'K',
  },
];

const ROICalculator = () => {
  const [currencyKey, setCurrencyKey] = useState('USD');
  const [currentRevenueUsd, setCurrentRevenueUsd] = useState(50000);
  const [adSpendUsd, setAdSpendUsd] = useState(5000);
  const [selectedPeriod, setSelectedPeriod] = useState('1-year');
  const [isCalculated, setIsCalculated] = useState(false);

  const periodOptions = [
    { key: '1-year', label: '1 Year', revenueMultiplier: 3 },
    { key: '2-year', label: '2 Year', revenueMultiplier: 4 },
    { key: '3-year', label: '3 Year', revenueMultiplier: 6 },
    { key: 'custom', label: 'Custom' },
  ];

  const activeCurrency = currencyOptions.find((option) => option.key === currencyKey) || currencyOptions[0];
  const activePeriod = periodOptions.find((option) => option.key === selectedPeriod) || periodOptions[0];
  const revenueMultiplier = activePeriod.revenueMultiplier || 3;
  const currentRevenue = Math.round(currentRevenueUsd * activeCurrency.rateFromUSD);
  const adSpend = Math.round(adSpendUsd * activeCurrency.rateFromUSD);

  // Growth logic from provided rules:
  // 1 Year -> current revenue + (ad spend * 3)
  // 2 Year -> current revenue + (ad spend * 4)
  // 3 Year -> current revenue + (ad spend * 6)
  // Ad spend remains as current ad spend.
  const totalCurrentRevenue = currentRevenue;
  const totalProjectedRevenue = currentRevenue + (adSpend * revenueMultiplier);
  const totalCurrentAdSpend = adSpend;
  const totalProjectedAdSpend = adSpend;
  const totalRevenueGain = totalProjectedRevenue - totalCurrentRevenue;
  const projectedROI = Math.round((totalRevenueGain / (totalCurrentAdSpend || 1)) * 100);
  const periodLabel = activePeriod.label;

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const handleTimePeriodSelect = (optionKey) => {
    if (optionKey === 'custom') {
      const message = `Hi, I need a custom ROI projection. My current monthly revenue is ${formatCurrency(currentRevenue)} and monthly ad spend is ${formatCurrency(adSpend)}.`;
      window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
      return;
    }

    setSelectedPeriod(optionKey);
    setIsCalculated(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCurrencySelect = (nextCurrencyKey) => {
    setCurrencyKey(nextCurrencyKey);
    setIsCalculated(false);
  };

  const formatCompactValue = (value) => {
    const compactValue = value / activeCurrency.compactDivisor;
    const formattedValue =
      compactValue >= 100 ? Math.round(compactValue).toString() : compactValue.toFixed(compactValue % 1 === 0 ? 0 : 1);

    return `${activeCurrency.icon}${formattedValue}${activeCurrency.compactSuffix}`;
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat(activeCurrency.locale, {
      style: 'currency',
      currency: activeCurrency.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amazon-dark via-gray-900 to-amazon-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-6 py-3 rounded-full text-base font-bold border border-primary-500/30 mb-6"
          >
            <Calculator className="w-5 h-5" />
            ROI Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Potential Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Calculate how much you could save and earn with our proven strategies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Enter Your Current Numbers</h3>

            <div className="space-y-8">
              {/* Currency Selector */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-medium flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary-400" />
                    Currency
                  </label>
                  <span className="text-xl font-bold text-primary-400">{activeCurrency.icon} {activeCurrency.label}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {currencyOptions.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => handleCurrencySelect(option.key)}
                      className={`px-4 py-3 rounded-lg border transition-colors duration-200 font-semibold ${
                        currencyKey === option.key
                          ? 'bg-primary-500/20 border-primary-400 text-primary-400'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-primary-400/60'
                      }`}
                    >
                      <span className="mr-2 text-lg">{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-medium flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary-400" />
                    Monthly Revenue
                  </label>
                  <span className="text-2xl font-bold text-primary-400">{formatCurrency(currentRevenue)}</span>
                </div>
                <input
                  type="range"
                  min={activeCurrency.revenueMin}
                  max={activeCurrency.revenueMax}
                  step={activeCurrency.revenueStep}
                  value={currentRevenue}
                  onChange={(e) => {
                    setCurrentRevenueUsd(parseInt(e.target.value, 10) / activeCurrency.rateFromUSD);
                    setIsCalculated(false);
                  }}
                  className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer slider-primary"
                  style={{
                    background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${((currentRevenue - activeCurrency.revenueMin) / (activeCurrency.revenueMax - activeCurrency.revenueMin)) * 100}%, rgba(255,255,255,0.1) ${((currentRevenue - activeCurrency.revenueMin) / (activeCurrency.revenueMax - activeCurrency.revenueMin)) * 100}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{formatCompactValue(activeCurrency.revenueMin)}</span>
                  <span>{formatCompactValue(activeCurrency.revenueMax)}</span>
                </div>
              </div>

              {/* Monthly Ad Spend Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-medium flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-400" />
                    Monthly Ad Spend
                  </label>
                  <span className="text-2xl font-bold text-primary-400">{formatCurrency(adSpend)}</span>
                </div>
                <input
                  type="range"
                  min={activeCurrency.adSpendMin}
                  max={activeCurrency.adSpendMax}
                  step={activeCurrency.adSpendStep}
                  value={adSpend}
                  onChange={(e) => {
                    setAdSpendUsd(parseInt(e.target.value, 10) / activeCurrency.rateFromUSD);
                    setIsCalculated(false);
                  }}
                  className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${((adSpend - activeCurrency.adSpendMin) / (activeCurrency.adSpendMax - activeCurrency.adSpendMin)) * 100}%, rgba(255,255,255,0.1) ${((adSpend - activeCurrency.adSpendMin) / (activeCurrency.adSpendMax - activeCurrency.adSpendMin)) * 100}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{formatCompactValue(activeCurrency.adSpendMin)}</span>
                  <span>{formatCompactValue(activeCurrency.adSpendMax)}</span>
                </div>
              </div>

              {/* Time Period Selector */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-medium flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary-400" />
                    Time Period
                  </label>
                  <span className="text-xl font-bold text-primary-400">{periodLabel}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {periodOptions.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => handleTimePeriodSelect(option.key)}
                      className={`px-4 py-3 rounded-lg border transition-colors duration-200 font-semibold ${
                        selectedPeriod === option.key
                          ? 'bg-primary-500/20 border-primary-400 text-primary-400'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-primary-400/60'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleCalculate}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 group"
              >
                <Calculator className="w-5 h-5" />
                Calculate My Potential
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {isCalculated ? (
              <>
                {/* Projected Revenue Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-6 border border-green-500/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{periodLabel} Projected Revenue</h4>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-green-400">{formatCurrency(totalProjectedRevenue)}</span>
                    <span className="text-green-400 font-bold">+ Ad Spend x{revenueMultiplier}</span>
                  </div>
                  <p className="text-gray-400 mt-2">Up from {formatCurrency(totalCurrentRevenue)}</p>
                </motion.div>

                {/* Ad Spend Savings Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-2xl p-6 border border-primary-500/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary-500/20 p-2 rounded-lg">
                      <DollarSign className="w-6 h-6 text-primary-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{periodLabel} Projected Ad Spend</h4>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-primary-400">{formatCurrency(totalProjectedAdSpend)}</span>
                    <span className="text-primary-400 font-bold">No Change</span>
                  </div>
                  <p className="text-gray-400 mt-2">Maintained from current spend {formatCurrency(totalCurrentAdSpend)}</p>
                </motion.div>

                {/* Period Gain Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{periodLabel} Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Revenue Gain</p>
                      <p className="text-2xl font-bold text-green-400">{formatCurrency(totalRevenueGain)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Projected ROI</p>
                      <p className="text-2xl font-bold text-primary-400">{projectedROI}%</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.button
                  onClick={scrollToContact}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-amazon-dark px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-10 h-10 text-gray-500" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Ready to See Your Potential?</h4>
                <p className="text-gray-400">Adjust the sliders and click calculate to see your projected growth</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.4);
          border: 3px solid white;
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.4);
          border: 3px solid white;
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;
