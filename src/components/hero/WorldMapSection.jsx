import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Calibrated major-country marker points on this specific map projection.
const COUNTRY_POINTS = {
  usa: { x: 21.8, y: 13.4, flag: '🇺🇸' },
  europe: { x: 50.9, y: 11.3, flag: '🇪🇺' },
  india: { x: 69.6, y: 19.0, flag: '🇮🇳' },
  japan: { x: 86.1, y: 13.8, flag: '🇯🇵' },
  australia: { x: 85.0, y: 31.6, flag: '🇦🇺' },
};

// Location data for markers
const locations = [
  COUNTRY_POINTS.usa,
  COUNTRY_POINTS.europe,
  COUNTRY_POINTS.india,
  COUNTRY_POINTS.japan,
  COUNTRY_POINTS.australia,
];

// Connection paths for data animation
const connectionPaths = [
  {
    path: `M${COUNTRY_POINTS.usa.x},${COUNTRY_POINTS.usa.y} Q36.8,8.4 ${COUNTRY_POINTS.europe.x},${COUNTRY_POINTS.europe.y}`,
    dur: '3s',
  },
  {
    path: `M${COUNTRY_POINTS.europe.x},${COUNTRY_POINTS.europe.y} Q62.8,14.5 ${COUNTRY_POINTS.india.x},${COUNTRY_POINTS.india.y}`,
    dur: '2.8s',
  },
  {
    path: `M${COUNTRY_POINTS.india.x},${COUNTRY_POINTS.india.y} Q77.6,16.5 ${COUNTRY_POINTS.japan.x},${COUNTRY_POINTS.japan.y}`,
    dur: '3.2s',
  },
  {
    path: `M${COUNTRY_POINTS.japan.x},${COUNTRY_POINTS.japan.y} Q88.2,24 ${COUNTRY_POINTS.australia.x},${COUNTRY_POINTS.australia.y}`,
    dur: '2.6s',
  },
];

// Map stats
const mapStats = [
  { value: '15+',  label: 'Marketplaces'   },
  { value: '50+',  label: 'Countries'      },
  { value: '24/7', label: 'Global Support' },
];

const labelDefs = [
  { mx: COUNTRY_POINTS.usa.x, my: COUNTRY_POINTS.usa.y, flag: COUNTRY_POINTS.usa.flag },
  { mx: COUNTRY_POINTS.europe.x, my: COUNTRY_POINTS.europe.y, flag: COUNTRY_POINTS.europe.flag },
  { mx: COUNTRY_POINTS.india.x, my: COUNTRY_POINTS.india.y, flag: COUNTRY_POINTS.india.flag },
  { mx: COUNTRY_POINTS.japan.x, my: COUNTRY_POINTS.japan.y, flag: COUNTRY_POINTS.japan.flag },
  { mx: COUNTRY_POINTS.australia.x, my: COUNTRY_POINTS.australia.y, flag: COUNTRY_POINTS.australia.flag },
];

const WorldMapSection = () => {
  const containerRef = useRef(null);

  // Compute the letterbox offset so HTML labels align with SVG markers.
  // viewBox is 0 0 100 50  →  aspect ratio 2 : 1.
  // When the container is not exactly 2:1 the SVG uses xMidYMid meet,
  // which adds empty space on two sides. We track those offsets so we
  // can convert SVG coordinates to correct CSS percentages.
  const [svgLayout, setSvgLayout] = useState({
    offsetXpct: 0,  // left letterbox as % of container width
    offsetYpct: 0,  // top letterbox  as % of container height
    wPct: 100,      // rendered SVG content width  as % of container width
    hPct: 100,      // rendered SVG content height as % of container height
  });

  useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const { width: W, height: H } = el.getBoundingClientRect();
      if (!W || !H) return;

      let renderedW, renderedH, offsetX, offsetY;
      if (W / H >= 2) {
        // Container wider than 2:1 — letterbox left & right
        renderedH = H;
        renderedW = H * 2;
        offsetX = (W - renderedW) / 2;
        offsetY = 0;
      } else {
        // Container taller than 2:1 — letterbox top & bottom
        renderedW = W;
        renderedH = W / 2;
        offsetX = 0;
        offsetY = (H - renderedH) / 2;
      }

      setSvgLayout({
        offsetXpct: (offsetX / W) * 100,
        offsetYpct: (offsetY / H) * 100,
        wPct: (renderedW / W) * 100,
        hPct: (renderedH / H) * 100,
      });
    };

    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Convert SVG coordinates (x in 0-100, y in 0-50) → CSS % of container
  const toCSS = (svgX, svgY) => ({
    left: `${svgLayout.offsetXpct + (svgX / 100) * svgLayout.wPct}%`,
    top:  `${svgLayout.offsetYpct + (svgY /  50) * svgLayout.hPct}%`,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative w-full"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" />
        <p className="text-primary-400 font-bold text-lg">Global Amazon Marketplace Coverage</p>
      </div>

      {/* Map Container */}
      <div
        ref={containerRef}
        className="relative h-72 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-primary-500/20 bg-gradient-to-br from-amazon-dark/50 to-gray-900/50 backdrop-blur-sm"
      >
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        {/* World Map Image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1280px-World_map_blank_without_borders.svg.png"
          alt="World Map - Global Amazon Marketplaces"
          className="absolute inset-0 w-full h-full object-contain opacity-70"
          style={{ filter: 'sepia(100%) saturate(300%) brightness(60%) hue-rotate(10deg)' }}
        />

        {/* SVG Overlay — markers only (no labels here) */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 50"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="50%"  stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          <g stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)">
            {connectionPaths.map((conn, i) => (
              <path key={i} d={conn.path}>
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0"
                  dur={conn.dur}
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </g>

          {/* Location Markers (single dot per country) */}
          {locations.map((loc, i) => (
            <g key={i} filter="url(#glow)">
              <circle cx={loc.x} cy={loc.y} r="0.9" fill="#f59e0b" />
              <circle cx={loc.x} cy={loc.y} r="0.35" fill="#fff" />
            </g>
          ))}
        </svg>

        {/* Country labels: anchored to each marker and nudged slightly for readability. */}
        <div className="absolute inset-0 pointer-events-none">
          {labelDefs.map((item, i) => {
            const pos = toCSS(item.mx, item.my);

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  ...pos,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="bg-amazon-dark/85 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/40 shadow-lg shadow-black/30">
                  <p className="text-base leading-none">{item.flag}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-3 md:gap-6">
          {mapStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="bg-amazon-dark/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary-500/30"
            >
              <p className="text-primary-400 font-black text-lg md:text-xl">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorldMapSection;
