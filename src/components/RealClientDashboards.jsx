import { motion } from 'framer-motion';
import { TrendingUp, Package, DollarSign, ShoppingBag, BarChart3 } from 'lucide-react';

const RealClientDashboards = () => {
  // Real data extracted from client dashboards
  const clientResults = [
    {
      name: 'Electronics Brand',
      orderItems: '17,298',
      unitsOrdered: '17,932',
      sales: '$4,657,877',
      avgUnits: '1.04',
      avgSales: '$269.27',
      color: 'from-primary-400 to-amber-500',
    },
    {
      name: 'Home & Kitchen',
      orderItems: '19,630',
      unitsOrdered: '20,345',
      sales: '$5,364,884',
      avgUnits: '1.04',
      avgSales: '$273.30',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Health & Wellness',
      orderItems: '1,876',
      unitsOrdered: '1,932',
      sales: '$491,377',
      avgUnits: '1.03',
      avgSales: '$261.93',
      color: 'from-amber-400 to-primary-600',
    },
    {
      name: 'Sports & Outdoors',
      orderItems: '1,002',
      unitsOrdered: '1,040',
      sales: '$285,795',
      avgUnits: '1.04',
      avgSales: '$285.22',
      color: 'from-orange-400 to-amber-600',
    },
    {
      name: 'Beauty & Personal Care',
      orderItems: '1,186',
      unitsOrdered: '1,307',
      sales: '$107,968',
      avgUnits: '1.1',
      avgSales: '$91.04',
      color: 'from-primary-500 to-yellow-500',
    },
    {
      name: 'Fashion Accessories',
      orderItems: '961',
      unitsOrdered: '1,099',
      sales: '$97,149',
      avgUnits: '1.14',
      avgSales: '$101.09',
      color: 'from-yellow-300 to-amber-400',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-amazon-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-6 py-3 rounded-full text-base font-bold border border-primary-500/30 mb-6">
            <BarChart3 className="w-5 h-5" />
            Real Client Results
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Actual <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Amazon Seller</span> Performance
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Real data from our clients' Amazon Seller Central dashboards - verified results, not marketing fluff
          </p>
        </motion.div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientResults.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">{client.name}</h3>
                <div className={`w-3 h-3 bg-gradient-to-r ${client.color} rounded-full animate-pulse`}></div>
              </div>

              {/* Main Sales Figure */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-1">Total Sales</p>
                <p className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${client.color}`}>
                  {client.sales}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-4 h-4 text-primary-400" />
                  <span className="text-primary-400 text-sm font-medium">Store is healthy</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-xs">Order Items</p>
                  </div>
                  <p className="text-white font-bold text-xl">{client.orderItems}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-xs">Units Ordered</p>
                  </div>
                  <p className="text-white font-bold text-xl">{client.unitsOrdered}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-xs">Avg. Sales</p>
                  </div>
                  <p className="text-primary-400 font-bold text-lg">{client.avgSales}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-xs">Avg. Units</p>
                  </div>
                  <p className="text-primary-400 font-bold text-lg">{client.avgUnits}</p>
                </div>
              </div>

              {/* Amazon Seller Central Badge */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-blue-900 rounded flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">US</span>
                  </div>
                  <span className="text-gray-400 text-sm">Amazon Seller</span>
                </div>
                <span className="text-xs text-gray-500">Verified Data</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-3xl p-8 md:p-12 border border-primary-500/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Combined Performance</h3>
            <p className="text-gray-400">Aggregate results across all managed accounts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                41,953
              </p>
              <p className="text-gray-400 mt-2">Total Orders</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                43,655
              </p>
              <p className="text-gray-400 mt-2">Units Sold</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                $11M+
              </p>
              <p className="text-gray-400 mt-2">Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                100%
              </p>
              <p className="text-gray-400 mt-2">Success Rate</p>
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
            * All data sourced directly from Amazon Seller Central dashboards. Client names changed for privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealClientDashboards;
