import { motion } from 'framer-motion';
import { TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import { CONTAINER } from '../constants';

const RealClientDashboards = () => {
  // Actual data from Amazon Seller Central screenshots
  const dashboards = [
    {
      dateRange: '1/6/2025 - 30/6/2025',
      orderItems: '17,298',
      unitsOrdered: '17,932',
      sales: '₹46,57,877.00',
      avgUnits: '1.04',
      avgSales: '₹269.27',
      currency: 'INR',
      marketplace: 'IN',
      color: 'from-primary-400 to-amber-500',
    },
    {
      dateRange: '7/1/2025 - 7/31/2025',
      orderItems: '1,186',
      unitsOrdered: '1,307',
      sales: '$107,968.26',
      avgUnits: '1.1',
      avgSales: '$91.04',
      currency: 'USD',
      marketplace: 'US',
      color: 'from-blue-400 to-blue-600',
    },
    {
      dateRange: '6/1/2025 - 6/30/2025',
      orderItems: '961',
      unitsOrdered: '1,099',
      sales: '$97,149.80',
      avgUnits: '1.14',
      avgSales: '$101.09',
      currency: 'USD',
      marketplace: 'US',
      color: 'from-green-400 to-emerald-600',
    },
    {
      dateRange: '12/1/2025 - 1/31/2025',
      orderItems: '1,876',
      unitsOrdered: '1,932',
      sales: '₹4,91,377.88',
      avgUnits: '1.03',
      avgSales: '₹261.93',
      currency: 'INR',
      marketplace: 'IN',
      color: 'from-orange-400 to-amber-600',
    },
    {
      dateRange: '10/7/2025 - 11/7/2025',
      orderItems: '1,002',
      unitsOrdered: '1,040',
      sales: '₹2,85,795.12',
      avgUnits: '1.04',
      avgSales: '₹285.22',
      currency: 'INR',
      marketplace: 'IN',
      color: 'from-purple-400 to-violet-600',
    },
    {
      dateRange: '1/7/2025 - 31/7/2025',
      orderItems: '19,630',
      unitsOrdered: '20,345',
      sales: '₹53,64,884.00',
      avgUnits: '1.04',
      avgSales: '₹273.30',
      currency: 'INR',
      marketplace: 'IN',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  // Mini chart SVG component
  const MiniChart = ({ color, type = 'up' }) => (
    <svg viewBox="0 0 100 40" className="w-full h-12">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {type === 'up' ? (
        <>
          <path
            d="M0,35 Q10,30 20,28 T40,20 T60,15 T80,12 T100,8"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <path
            d="M0,35 Q10,30 20,28 T40,20 T60,15 T80,12 T100,8 V40 H0 Z"
            fill={`url(#gradient-${color})`}
          />
        </>
      ) : (
        <>
          <path
            d="M0,15 Q15,18 30,20 T50,25 T70,22 T85,18 T100,15"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className={`relative ${CONTAINER.default}`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-400 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg shadow-primary-400/30 mb-6">
            <BarChart3 className="w-5 h-5" />
            Real Client Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Actual <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Sales Snapshots</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real screenshots from our clients' Amazon Seller Central dashboards
          </p>
        </motion.div>

        {/* Dashboard Cards Grid - Amazon Seller Central Style */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 lg:gap-8">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              {/* Dashboard Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base break-words">{dashboard.dateRange}</span>
                  </div>
                  <div className={`self-start sm:self-auto px-3 py-1 rounded text-xs font-bold ${
                    dashboard.marketplace === 'IN'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    Amazon {dashboard.marketplace}
                  </div>
                </div>
              </div>

              {/* Sales Snapshot Title */}
              <div className="px-4 sm:px-6 pt-4 pb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Sales Snapshot
                </h3>
                <p className="text-xs text-gray-500">taken at 27/9/2025</p>
              </div>

              {/* Main Metrics Row */}
              <div className="px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-6 gap-3 sm:gap-4 border-b border-gray-100">
                <div className="2xl:col-span-1 min-w-0 rounded-lg bg-gray-50/70 px-3 py-2">
                  <p className="text-xs text-gray-500 mb-1">Total order items</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{dashboard.orderItems}</p>
                </div>
                <div className="2xl:col-span-1 min-w-0 rounded-lg bg-gray-50/70 px-3 py-2">
                  <p className="text-xs text-gray-500 mb-1">Units ordered</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{dashboard.unitsOrdered}</p>
                </div>
                <div className="sm:col-span-2 2xl:col-span-2 min-w-0 rounded-lg bg-gray-50/70 px-3 py-2">
                  <p className="text-xs text-gray-500 mb-1">Ordered product sales</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight tracking-tight break-words">
                    {dashboard.sales}
                  </p>
                </div>
                <div className="2xl:col-span-1 min-w-0 rounded-lg bg-gray-50/70 px-3 py-2">
                  <p className="text-xs text-gray-500 mb-1">Avg. units/order</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{dashboard.avgUnits}</p>
                </div>
                <div className="2xl:col-span-1 min-w-0 rounded-lg bg-gray-50/70 px-3 py-2">
                  <p className="text-xs text-gray-500 mb-1">Avg. sales/order</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{dashboard.avgSales}</p>
                </div>
              </div>

              {/* Compare Sales Section */}
              <div className="px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h4 className="font-semibold text-gray-800">Compare Sales</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-primary-400 text-white text-xs rounded font-medium">
                      Graph view
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                      Table view
                    </button>
                  </div>
                </div>

                {/* Mini Charts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-2">Units ordered</p>
                    <MiniChart color={index} type="up" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-2">Ordered product sales</p>
                    <MiniChart color={index} type="sales" />
                  </div>
                </div>

                {/* Compare Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Compare</span>
                    <span className="text-xs text-blue-600 underline">What is this</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-xs text-gray-600">Selected date range</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-3 h-3 bg-orange-400 rounded"></div>
                      <span className="text-xs text-gray-600">Same date range one year ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 sm:px-6 py-3 border-t border-green-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 text-sm font-medium">Store is healthy</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">Verified Data</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Combined Performance</h3>
            <p className="text-gray-600">Aggregate results across all managed accounts</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                41,953+
              </p>
              <p className="text-gray-600 mt-2">Total Orders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                43,655+
              </p>
              <p className="text-gray-600 mt-2">Units Sold</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                ₹1.1Cr+
              </p>
              <p className="text-gray-600 mt-2">Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                100%
              </p>
              <p className="text-gray-600 mt-2">Client Success</p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            * All data sourced directly from Amazon Seller Central dashboards. Screenshots taken with client permission.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealClientDashboards;
