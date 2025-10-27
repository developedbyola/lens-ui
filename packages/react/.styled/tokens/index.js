const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--aspect-ratios-golden)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "blurs.none": {
    "value": " ",
    "variable": "var(--blurs-none)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.md": {
    "value": "8px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "12px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "16px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "24px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "40px",
    "variable": "var(--blurs-3xl)"
  },
  "blurs.4xl": {
    "value": "64px",
    "variable": "var(--blurs-4xl)"
  },
  "borders.xs": {
    "value": "0.5px solid",
    "variable": "var(--borders-xs)"
  },
  "borders.sm": {
    "value": "1px solid",
    "variable": "var(--borders-sm)"
  },
  "borders.md": {
    "value": "2px solid",
    "variable": "var(--borders-md)"
  },
  "borders.lg": {
    "value": "4px solid",
    "variable": "var(--borders-lg)"
  },
  "borders.xl": {
    "value": "8px solid",
    "variable": "var(--borders-xl)"
  },
  "colors.transparent": {
    "value": "transparent",
    "variable": "var(--colors-transparent)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.white": {
    "value": "oklch(100 0 0)",
    "variable": "var(--colors-white)"
  },
  "colors.black": {
    "value": "oklch(0 0 0)",
    "variable": "var(--colors-black)"
  },
  "colors.red.10": {
    "value": "oklch(0.971 0.013 17.38)",
    "variable": "var(--colors-red-10)"
  },
  "colors.red.20": {
    "value": "oklch(0.936 0.032 17.717)",
    "variable": "var(--colors-red-20)"
  },
  "colors.red.30": {
    "value": "oklch(0.885 0.062 18.334)",
    "variable": "var(--colors-red-30)"
  },
  "colors.red.40": {
    "value": "oklch(0.808 0.114 19.571)",
    "variable": "var(--colors-red-40)"
  },
  "colors.red.50": {
    "value": "oklch(0.704 0.191 22.216)",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.60": {
    "value": "oklch(0.637 0.237 25.331)",
    "variable": "var(--colors-red-60)"
  },
  "colors.red.70": {
    "value": "oklch(0.577 0.245 27.325)",
    "variable": "var(--colors-red-70)"
  },
  "colors.red.80": {
    "value": "oklch(0.505 0.213 27.518)",
    "variable": "var(--colors-red-80)"
  },
  "colors.red.90": {
    "value": "oklch(0.444 0.177 26.899)",
    "variable": "var(--colors-red-90)"
  },
  "colors.red.95": {
    "value": "oklch(0.396 0.141 25.723)",
    "variable": "var(--colors-red-95)"
  },
  "colors.red.100": {
    "value": "oklch(0.258 0.092 26.042)",
    "variable": "var(--colors-red-100)"
  },
  "colors.orange.10": {
    "value": "oklch(0.98 0.016 73.684)",
    "variable": "var(--colors-orange-10)"
  },
  "colors.orange.20": {
    "value": "oklch(0.954 0.038 75.164)",
    "variable": "var(--colors-orange-20)"
  },
  "colors.orange.30": {
    "value": "oklch(0.901 0.076 70.697)",
    "variable": "var(--colors-orange-30)"
  },
  "colors.orange.40": {
    "value": "oklch(0.837 0.128 66.29)",
    "variable": "var(--colors-orange-40)"
  },
  "colors.orange.50": {
    "value": "oklch(0.75 0.183 55.934)",
    "variable": "var(--colors-orange-50)"
  },
  "colors.orange.60": {
    "value": "oklch(0.705 0.213 47.604)",
    "variable": "var(--colors-orange-60)"
  },
  "colors.orange.70": {
    "value": "oklch(0.646 0.222 41.116)",
    "variable": "var(--colors-orange-70)"
  },
  "colors.orange.80": {
    "value": "oklch(0.553 0.195 38.402)",
    "variable": "var(--colors-orange-80)"
  },
  "colors.orange.90": {
    "value": "oklch(0.47 0.157 37.304)",
    "variable": "var(--colors-orange-90)"
  },
  "colors.orange.95": {
    "value": "oklch(0.408 0.123 38.172)",
    "variable": "var(--colors-orange-95)"
  },
  "colors.orange.100": {
    "value": "oklch(0.266 0.079 36.259)",
    "variable": "var(--colors-orange-100)"
  },
  "colors.amber.10": {
    "value": "oklch(0.987 0.022 95.277)",
    "variable": "var(--colors-amber-10)"
  },
  "colors.amber.20": {
    "value": "oklch(0.962 0.059 95.617)",
    "variable": "var(--colors-amber-20)"
  },
  "colors.amber.30": {
    "value": "oklch(0.924 0.12 95.746)",
    "variable": "var(--colors-amber-30)"
  },
  "colors.amber.40": {
    "value": "oklch(0.879 0.169 91.605)",
    "variable": "var(--colors-amber-40)"
  },
  "colors.amber.50": {
    "value": "oklch(0.828 0.189 84.429)",
    "variable": "var(--colors-amber-50)"
  },
  "colors.amber.60": {
    "value": "oklch(0.769 0.188 70.08)",
    "variable": "var(--colors-amber-60)"
  },
  "colors.amber.70": {
    "value": "oklch(0.666 0.179 58.318)",
    "variable": "var(--colors-amber-70)"
  },
  "colors.amber.80": {
    "value": "oklch(0.555 0.163 48.998)",
    "variable": "var(--colors-amber-80)"
  },
  "colors.amber.90": {
    "value": "oklch(0.473 0.137 46.201)",
    "variable": "var(--colors-amber-90)"
  },
  "colors.amber.95": {
    "value": "oklch(0.414 0.112 45.904)",
    "variable": "var(--colors-amber-95)"
  },
  "colors.amber.100": {
    "value": "oklch(0.279 0.077 45.635)",
    "variable": "var(--colors-amber-100)"
  },
  "colors.yellow.10": {
    "value": "oklch(0.987 0.026 102.212)",
    "variable": "var(--colors-yellow-10)"
  },
  "colors.yellow.20": {
    "value": "oklch(0.973 0.071 103.193)",
    "variable": "var(--colors-yellow-20)"
  },
  "colors.yellow.30": {
    "value": "oklch(0.945 0.129 101.54)",
    "variable": "var(--colors-yellow-30)"
  },
  "colors.yellow.40": {
    "value": "oklch(0.905 0.182 98.111)",
    "variable": "var(--colors-yellow-40)"
  },
  "colors.yellow.50": {
    "value": "oklch(0.852 0.199 91.936)",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.60": {
    "value": "oklch(0.795 0.184 86.047)",
    "variable": "var(--colors-yellow-60)"
  },
  "colors.yellow.70": {
    "value": "oklch(0.681 0.162 75.834)",
    "variable": "var(--colors-yellow-70)"
  },
  "colors.yellow.80": {
    "value": "oklch(0.554 0.135 66.442)",
    "variable": "var(--colors-yellow-80)"
  },
  "colors.yellow.90": {
    "value": "oklch(0.476 0.114 61.907)",
    "variable": "var(--colors-yellow-90)"
  },
  "colors.yellow.95": {
    "value": "oklch(0.421 0.095 57.708)",
    "variable": "var(--colors-yellow-95)"
  },
  "colors.yellow.100": {
    "value": "oklch(0.286 0.066 53.813)",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.lime.10": {
    "value": "oklch(0.986 0.031 120.757)",
    "variable": "var(--colors-lime-10)"
  },
  "colors.lime.20": {
    "value": "oklch(0.967 0.067 122.328)",
    "variable": "var(--colors-lime-20)"
  },
  "colors.lime.30": {
    "value": "oklch(0.938 0.127 124.321)",
    "variable": "var(--colors-lime-30)"
  },
  "colors.lime.40": {
    "value": "oklch(0.897 0.196 126.665)",
    "variable": "var(--colors-lime-40)"
  },
  "colors.lime.50": {
    "value": "oklch(0.841 0.238 128.85)",
    "variable": "var(--colors-lime-50)"
  },
  "colors.lime.60": {
    "value": "oklch(0.768 0.233 130.85)",
    "variable": "var(--colors-lime-60)"
  },
  "colors.lime.70": {
    "value": "oklch(0.648 0.2 131.684)",
    "variable": "var(--colors-lime-70)"
  },
  "colors.lime.80": {
    "value": "oklch(0.532 0.157 131.589)",
    "variable": "var(--colors-lime-80)"
  },
  "colors.lime.90": {
    "value": "oklch(0.453 0.124 130.933)",
    "variable": "var(--colors-lime-90)"
  },
  "colors.lime.95": {
    "value": "oklch(0.405 0.101 131.063)",
    "variable": "var(--colors-lime-95)"
  },
  "colors.lime.100": {
    "value": "oklch(0.274 0.072 132.109)",
    "variable": "var(--colors-lime-100)"
  },
  "colors.green.10": {
    "value": "oklch(0.982 0.018 155.826)",
    "variable": "var(--colors-green-10)"
  },
  "colors.green.20": {
    "value": "oklch(0.962 0.044 156.743)",
    "variable": "var(--colors-green-20)"
  },
  "colors.green.30": {
    "value": "oklch(0.925 0.084 155.995)",
    "variable": "var(--colors-green-30)"
  },
  "colors.green.40": {
    "value": "oklch(0.871 0.15 154.449)",
    "variable": "var(--colors-green-40)"
  },
  "colors.green.50": {
    "value": "oklch(0.792 0.209 151.711)",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.60": {
    "value": "oklch(0.723 0.219 149.579)",
    "variable": "var(--colors-green-60)"
  },
  "colors.green.70": {
    "value": "oklch(0.627 0.194 149.214)",
    "variable": "var(--colors-green-70)"
  },
  "colors.green.80": {
    "value": "oklch(0.527 0.154 150.069)",
    "variable": "var(--colors-green-80)"
  },
  "colors.green.90": {
    "value": "oklch(0.448 0.119 151.328)",
    "variable": "var(--colors-green-90)"
  },
  "colors.green.95": {
    "value": "oklch(0.393 0.095 152.535)",
    "variable": "var(--colors-green-95)"
  },
  "colors.green.100": {
    "value": "oklch(0.266 0.065 152.934)",
    "variable": "var(--colors-green-100)"
  },
  "colors.emerald.10": {
    "value": "oklch(0.979 0.021 166.113)",
    "variable": "var(--colors-emerald-10)"
  },
  "colors.emerald.20": {
    "value": "oklch(0.95 0.052 163.051)",
    "variable": "var(--colors-emerald-20)"
  },
  "colors.emerald.30": {
    "value": "oklch(0.905 0.093 164.15)",
    "variable": "var(--colors-emerald-30)"
  },
  "colors.emerald.40": {
    "value": "oklch(0.845 0.143 164.978)",
    "variable": "var(--colors-emerald-40)"
  },
  "colors.emerald.50": {
    "value": "oklch(0.765 0.177 163.223)",
    "variable": "var(--colors-emerald-50)"
  },
  "colors.emerald.60": {
    "value": "oklch(0.696 0.17 162.48)",
    "variable": "var(--colors-emerald-60)"
  },
  "colors.emerald.70": {
    "value": "oklch(0.596 0.145 163.225)",
    "variable": "var(--colors-emerald-70)"
  },
  "colors.emerald.80": {
    "value": "oklch(0.508 0.118 165.612)",
    "variable": "var(--colors-emerald-80)"
  },
  "colors.emerald.90": {
    "value": "oklch(0.432 0.095 166.913)",
    "variable": "var(--colors-emerald-90)"
  },
  "colors.emerald.95": {
    "value": "oklch(0.378 0.077 168.94)",
    "variable": "var(--colors-emerald-95)"
  },
  "colors.emerald.100": {
    "value": "oklch(0.262 0.051 172.552)",
    "variable": "var(--colors-emerald-100)"
  },
  "colors.teal.10": {
    "value": "oklch(0.984 0.014 180.72)",
    "variable": "var(--colors-teal-10)"
  },
  "colors.teal.20": {
    "value": "oklch(0.953 0.051 180.801)",
    "variable": "var(--colors-teal-20)"
  },
  "colors.teal.30": {
    "value": "oklch(0.91 0.096 180.426)",
    "variable": "var(--colors-teal-30)"
  },
  "colors.teal.40": {
    "value": "oklch(0.855 0.138 181.071)",
    "variable": "var(--colors-teal-40)"
  },
  "colors.teal.50": {
    "value": "oklch(0.777 0.152 181.912)",
    "variable": "var(--colors-teal-50)"
  },
  "colors.teal.60": {
    "value": "oklch(0.704 0.14 182.503)",
    "variable": "var(--colors-teal-60)"
  },
  "colors.teal.70": {
    "value": "oklch(0.6 0.118 184.704)",
    "variable": "var(--colors-teal-70)"
  },
  "colors.teal.80": {
    "value": "oklch(0.511 0.096 186.391)",
    "variable": "var(--colors-teal-80)"
  },
  "colors.teal.90": {
    "value": "oklch(0.437 0.078 188.216)",
    "variable": "var(--colors-teal-90)"
  },
  "colors.teal.95": {
    "value": "oklch(0.386 0.063 188.416)",
    "variable": "var(--colors-teal-95)"
  },
  "colors.teal.100": {
    "value": "oklch(0.277 0.046 192.524)",
    "variable": "var(--colors-teal-100)"
  },
  "colors.cyan.10": {
    "value": "oklch(0.984 0.019 200.873)",
    "variable": "var(--colors-cyan-10)"
  },
  "colors.cyan.20": {
    "value": "oklch(0.956 0.045 203.388)",
    "variable": "var(--colors-cyan-20)"
  },
  "colors.cyan.30": {
    "value": "oklch(0.917 0.08 205.041)",
    "variable": "var(--colors-cyan-30)"
  },
  "colors.cyan.40": {
    "value": "oklch(0.865 0.127 207.078)",
    "variable": "var(--colors-cyan-40)"
  },
  "colors.cyan.50": {
    "value": "oklch(0.789 0.154 211.53)",
    "variable": "var(--colors-cyan-50)"
  },
  "colors.cyan.60": {
    "value": "oklch(0.715 0.143 215.221)",
    "variable": "var(--colors-cyan-60)"
  },
  "colors.cyan.70": {
    "value": "oklch(0.609 0.126 221.723)",
    "variable": "var(--colors-cyan-70)"
  },
  "colors.cyan.80": {
    "value": "oklch(0.52 0.105 223.128)",
    "variable": "var(--colors-cyan-80)"
  },
  "colors.cyan.90": {
    "value": "oklch(0.45 0.085 224.283)",
    "variable": "var(--colors-cyan-90)"
  },
  "colors.cyan.95": {
    "value": "oklch(0.398 0.07 227.392)",
    "variable": "var(--colors-cyan-95)"
  },
  "colors.cyan.100": {
    "value": "oklch(0.302 0.056 229.695)",
    "variable": "var(--colors-cyan-100)"
  },
  "colors.sky.10": {
    "value": "oklch(0.977 0.013 236.62)",
    "variable": "var(--colors-sky-10)"
  },
  "colors.sky.20": {
    "value": "oklch(0.951 0.026 236.824)",
    "variable": "var(--colors-sky-20)"
  },
  "colors.sky.30": {
    "value": "oklch(0.901 0.058 230.902)",
    "variable": "var(--colors-sky-30)"
  },
  "colors.sky.40": {
    "value": "oklch(0.828 0.111 230.318)",
    "variable": "var(--colors-sky-40)"
  },
  "colors.sky.50": {
    "value": "oklch(0.746 0.16 232.661)",
    "variable": "var(--colors-sky-50)"
  },
  "colors.sky.60": {
    "value": "oklch(0.685 0.169 237.323)",
    "variable": "var(--colors-sky-60)"
  },
  "colors.sky.70": {
    "value": "oklch(0.588 0.158 241.966)",
    "variable": "var(--colors-sky-70)"
  },
  "colors.sky.80": {
    "value": "oklch(0.5 0.134 242.749)",
    "variable": "var(--colors-sky-80)"
  },
  "colors.sky.90": {
    "value": "oklch(0.443 0.11 240.79)",
    "variable": "var(--colors-sky-90)"
  },
  "colors.sky.95": {
    "value": "oklch(0.391 0.09 240.876)",
    "variable": "var(--colors-sky-95)"
  },
  "colors.sky.100": {
    "value": "oklch(0.293 0.066 243.157)",
    "variable": "var(--colors-sky-100)"
  },
  "colors.blue.10": {
    "value": "oklch(0.97 0.014 254.604)",
    "variable": "var(--colors-blue-10)"
  },
  "colors.blue.20": {
    "value": "oklch(0.932 0.032 255.585)",
    "variable": "var(--colors-blue-20)"
  },
  "colors.blue.30": {
    "value": "oklch(0.882 0.059 254.128)",
    "variable": "var(--colors-blue-30)"
  },
  "colors.blue.40": {
    "value": "oklch(0.809 0.105 251.813)",
    "variable": "var(--colors-blue-40)"
  },
  "colors.blue.50": {
    "value": "oklch(0.707 0.165 254.624)",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.60": {
    "value": "oklch(0.623 0.214 259.815)",
    "variable": "var(--colors-blue-60)"
  },
  "colors.blue.70": {
    "value": "oklch(0.546 0.245 262.881)",
    "variable": "var(--colors-blue-70)"
  },
  "colors.blue.80": {
    "value": "oklch(0.488 0.243 264.376)",
    "variable": "var(--colors-blue-80)"
  },
  "colors.blue.90": {
    "value": "oklch(0.424 0.199 265.638)",
    "variable": "var(--colors-blue-90)"
  },
  "colors.blue.95": {
    "value": "oklch(0.379 0.146 265.522)",
    "variable": "var(--colors-blue-95)"
  },
  "colors.blue.100": {
    "value": "oklch(0.282 0.091 267.935)",
    "variable": "var(--colors-blue-100)"
  },
  "colors.indigo.10": {
    "value": "oklch(0.962 0.018 272.314)",
    "variable": "var(--colors-indigo-10)"
  },
  "colors.indigo.20": {
    "value": "oklch(0.93 0.034 272.788)",
    "variable": "var(--colors-indigo-20)"
  },
  "colors.indigo.30": {
    "value": "oklch(0.87 0.065 274.039)",
    "variable": "var(--colors-indigo-30)"
  },
  "colors.indigo.40": {
    "value": "oklch(0.785 0.115 274.713)",
    "variable": "var(--colors-indigo-40)"
  },
  "colors.indigo.50": {
    "value": "oklch(0.673 0.182 276.935)",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.60": {
    "value": "oklch(0.585 0.233 277.117)",
    "variable": "var(--colors-indigo-60)"
  },
  "colors.indigo.70": {
    "value": "oklch(0.511 0.262 276.966)",
    "variable": "var(--colors-indigo-70)"
  },
  "colors.indigo.80": {
    "value": "oklch(0.457 0.24 277.023)",
    "variable": "var(--colors-indigo-80)"
  },
  "colors.indigo.90": {
    "value": "oklch(0.398 0.195 277.366)",
    "variable": "var(--colors-indigo-90)"
  },
  "colors.indigo.95": {
    "value": "oklch(0.359 0.144 278.697)",
    "variable": "var(--colors-indigo-95)"
  },
  "colors.indigo.100": {
    "value": "oklch(0.257 0.09 281.288)",
    "variable": "var(--colors-indigo-100)"
  },
  "colors.violet.10": {
    "value": "oklch(0.969 0.016 293.756)",
    "variable": "var(--colors-violet-10)"
  },
  "colors.violet.20": {
    "value": "oklch(0.943 0.029 294.588)",
    "variable": "var(--colors-violet-20)"
  },
  "colors.violet.30": {
    "value": "oklch(0.894 0.057 293.283)",
    "variable": "var(--colors-violet-30)"
  },
  "colors.violet.40": {
    "value": "oklch(0.811 0.111 293.571)",
    "variable": "var(--colors-violet-40)"
  },
  "colors.violet.50": {
    "value": "oklch(0.702 0.183 293.541)",
    "variable": "var(--colors-violet-50)"
  },
  "colors.violet.60": {
    "value": "oklch(0.606 0.25 292.717)",
    "variable": "var(--colors-violet-60)"
  },
  "colors.violet.70": {
    "value": "oklch(0.541 0.281 293.009)",
    "variable": "var(--colors-violet-70)"
  },
  "colors.violet.80": {
    "value": "oklch(0.491 0.27 292.581)",
    "variable": "var(--colors-violet-80)"
  },
  "colors.violet.90": {
    "value": "oklch(0.432 0.232 292.759)",
    "variable": "var(--colors-violet-90)"
  },
  "colors.violet.95": {
    "value": "oklch(0.38 0.189 293.745)",
    "variable": "var(--colors-violet-95)"
  },
  "colors.violet.100": {
    "value": "oklch(0.283 0.141 291.089)",
    "variable": "var(--colors-violet-100)"
  },
  "colors.purple.10": {
    "value": "oklch(0.977 0.014 308.299)",
    "variable": "var(--colors-purple-10)"
  },
  "colors.purple.20": {
    "value": "oklch(0.946 0.033 307.174)",
    "variable": "var(--colors-purple-20)"
  },
  "colors.purple.30": {
    "value": "oklch(0.902 0.063 306.703)",
    "variable": "var(--colors-purple-30)"
  },
  "colors.purple.40": {
    "value": "oklch(0.827 0.119 306.383)",
    "variable": "var(--colors-purple-40)"
  },
  "colors.purple.50": {
    "value": "oklch(0.714 0.203 305.504)",
    "variable": "var(--colors-purple-50)"
  },
  "colors.purple.60": {
    "value": "oklch(0.627 0.265 303.9)",
    "variable": "var(--colors-purple-60)"
  },
  "colors.purple.70": {
    "value": "oklch(0.558 0.288 302.321)",
    "variable": "var(--colors-purple-70)"
  },
  "colors.purple.80": {
    "value": "oklch(0.496 0.265 301.924)",
    "variable": "var(--colors-purple-80)"
  },
  "colors.purple.90": {
    "value": "oklch(0.438 0.218 303.724)",
    "variable": "var(--colors-purple-90)"
  },
  "colors.purple.95": {
    "value": "oklch(0.381 0.176 304.987)",
    "variable": "var(--colors-purple-95)"
  },
  "colors.purple.100": {
    "value": "oklch(0.291 0.149 302.717)",
    "variable": "var(--colors-purple-100)"
  },
  "colors.fuchsia.10": {
    "value": "oklch(0.977 0.017 320.058)",
    "variable": "var(--colors-fuchsia-10)"
  },
  "colors.fuchsia.20": {
    "value": "oklch(0.952 0.037 318.852)",
    "variable": "var(--colors-fuchsia-20)"
  },
  "colors.fuchsia.30": {
    "value": "oklch(0.903 0.076 319.62)",
    "variable": "var(--colors-fuchsia-30)"
  },
  "colors.fuchsia.40": {
    "value": "oklch(0.833 0.145 321.434)",
    "variable": "var(--colors-fuchsia-40)"
  },
  "colors.fuchsia.50": {
    "value": "oklch(0.74 0.238 322.16)",
    "variable": "var(--colors-fuchsia-50)"
  },
  "colors.fuchsia.60": {
    "value": "oklch(0.667 0.295 322.15)",
    "variable": "var(--colors-fuchsia-60)"
  },
  "colors.fuchsia.70": {
    "value": "oklch(0.591 0.293 322.896)",
    "variable": "var(--colors-fuchsia-70)"
  },
  "colors.fuchsia.80": {
    "value": "oklch(0.518 0.253 323.949)",
    "variable": "var(--colors-fuchsia-80)"
  },
  "colors.fuchsia.90": {
    "value": "oklch(0.452 0.211 324.591)",
    "variable": "var(--colors-fuchsia-90)"
  },
  "colors.fuchsia.95": {
    "value": "oklch(0.401 0.17 325.612)",
    "variable": "var(--colors-fuchsia-95)"
  },
  "colors.fuchsia.100": {
    "value": "oklch(0.293 0.136 325.661)",
    "variable": "var(--colors-fuchsia-100)"
  },
  "colors.pink.10": {
    "value": "oklch(0.971 0.014 343.198)",
    "variable": "var(--colors-pink-10)"
  },
  "colors.pink.20": {
    "value": "oklch(0.948 0.028 342.258)",
    "variable": "var(--colors-pink-20)"
  },
  "colors.pink.30": {
    "value": "oklch(0.899 0.061 343.231)",
    "variable": "var(--colors-pink-30)"
  },
  "colors.pink.40": {
    "value": "oklch(0.823 0.12 346.018)",
    "variable": "var(--colors-pink-40)"
  },
  "colors.pink.50": {
    "value": "oklch(0.718 0.202 349.761)",
    "variable": "var(--colors-pink-50)"
  },
  "colors.pink.60": {
    "value": "oklch(0.656 0.241 354.308)",
    "variable": "var(--colors-pink-60)"
  },
  "colors.pink.70": {
    "value": "oklch(0.592 0.249 0.584)",
    "variable": "var(--colors-pink-70)"
  },
  "colors.pink.80": {
    "value": "oklch(0.525 0.223 3.958)",
    "variable": "var(--colors-pink-80)"
  },
  "colors.pink.90": {
    "value": "oklch(0.459 0.187 3.815)",
    "variable": "var(--colors-pink-90)"
  },
  "colors.pink.95": {
    "value": "oklch(0.408 0.153 2.432)",
    "variable": "var(--colors-pink-95)"
  },
  "colors.pink.100": {
    "value": "oklch(0.284 0.109 3.907)",
    "variable": "var(--colors-pink-100)"
  },
  "colors.rose.10": {
    "value": "oklch(0.969 0.015 12.422)",
    "variable": "var(--colors-rose-10)"
  },
  "colors.rose.20": {
    "value": "oklch(0.941 0.03 12.58)",
    "variable": "var(--colors-rose-20)"
  },
  "colors.rose.30": {
    "value": "oklch(0.892 0.058 10.001)",
    "variable": "var(--colors-rose-30)"
  },
  "colors.rose.40": {
    "value": "oklch(0.81 0.117 11.638)",
    "variable": "var(--colors-rose-40)"
  },
  "colors.rose.50": {
    "value": "oklch(0.712 0.194 13.428)",
    "variable": "var(--colors-rose-50)"
  },
  "colors.rose.60": {
    "value": "oklch(0.645 0.246 16.439)",
    "variable": "var(--colors-rose-60)"
  },
  "colors.rose.70": {
    "value": "oklch(0.586 0.253 17.585)",
    "variable": "var(--colors-rose-70)"
  },
  "colors.rose.80": {
    "value": "oklch(0.514 0.222 16.935)",
    "variable": "var(--colors-rose-80)"
  },
  "colors.rose.90": {
    "value": "oklch(0.455 0.188 13.697)",
    "variable": "var(--colors-rose-90)"
  },
  "colors.rose.95": {
    "value": "oklch(0.41 0.159 10.272)",
    "variable": "var(--colors-rose-95)"
  },
  "colors.rose.100": {
    "value": "oklch(0.271 0.105 12.094)",
    "variable": "var(--colors-rose-100)"
  },
  "colors.slate.10": {
    "value": "oklch(0.984 0.003 247.858)",
    "variable": "var(--colors-slate-10)"
  },
  "colors.slate.20": {
    "value": "oklch(0.968 0.007 247.896)",
    "variable": "var(--colors-slate-20)"
  },
  "colors.slate.30": {
    "value": "oklch(0.929 0.013 255.508)",
    "variable": "var(--colors-slate-30)"
  },
  "colors.slate.40": {
    "value": "oklch(0.869 0.022 252.894)",
    "variable": "var(--colors-slate-40)"
  },
  "colors.slate.50": {
    "value": "oklch(0.704 0.04 256.788)",
    "variable": "var(--colors-slate-50)"
  },
  "colors.slate.60": {
    "value": "oklch(0.554 0.046 257.417)",
    "variable": "var(--colors-slate-60)"
  },
  "colors.slate.70": {
    "value": "oklch(0.446 0.043 257.281)",
    "variable": "var(--colors-slate-70)"
  },
  "colors.slate.80": {
    "value": "oklch(0.372 0.044 257.287)",
    "variable": "var(--colors-slate-80)"
  },
  "colors.slate.90": {
    "value": "oklch(0.279 0.041 260.031)",
    "variable": "var(--colors-slate-90)"
  },
  "colors.slate.95": {
    "value": "oklch(0.208 0.042 265.755)",
    "variable": "var(--colors-slate-95)"
  },
  "colors.slate.100": {
    "value": "oklch(0.129 0.042 264.695)",
    "variable": "var(--colors-slate-100)"
  },
  "colors.gray.10": {
    "value": "oklch(0.985 0.002 247.839)",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.20": {
    "value": "oklch(0.967 0.003 264.542)",
    "variable": "var(--colors-gray-20)"
  },
  "colors.gray.30": {
    "value": "oklch(0.928 0.006 264.531)",
    "variable": "var(--colors-gray-30)"
  },
  "colors.gray.40": {
    "value": "oklch(0.872 0.01 258.338)",
    "variable": "var(--colors-gray-40)"
  },
  "colors.gray.50": {
    "value": "oklch(0.707 0.022 261.325)",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.60": {
    "value": "oklch(0.551 0.027 264.364)",
    "variable": "var(--colors-gray-60)"
  },
  "colors.gray.70": {
    "value": "oklch(0.446 0.03 256.802)",
    "variable": "var(--colors-gray-70)"
  },
  "colors.gray.80": {
    "value": "oklch(0.373 0.034 259.733)",
    "variable": "var(--colors-gray-80)"
  },
  "colors.gray.90": {
    "value": "oklch(0.278 0.033 256.848)",
    "variable": "var(--colors-gray-90)"
  },
  "colors.gray.95": {
    "value": "oklch(0.21 0.034 264.665)",
    "variable": "var(--colors-gray-95)"
  },
  "colors.gray.100": {
    "value": "oklch(0.13 0.028 261.692)",
    "variable": "var(--colors-gray-100)"
  },
  "colors.zinc.10": {
    "value": "oklch(0.985 0 0)",
    "variable": "var(--colors-zinc-10)"
  },
  "colors.zinc.20": {
    "value": "oklch(0.967 0.001 286.375)",
    "variable": "var(--colors-zinc-20)"
  },
  "colors.zinc.30": {
    "value": "oklch(0.92 0.004 286.32)",
    "variable": "var(--colors-zinc-30)"
  },
  "colors.zinc.40": {
    "value": "oklch(0.871 0.006 286.286)",
    "variable": "var(--colors-zinc-40)"
  },
  "colors.zinc.50": {
    "value": "oklch(0.705 0.015 286.067)",
    "variable": "var(--colors-zinc-50)"
  },
  "colors.zinc.60": {
    "value": "oklch(0.552 0.016 285.938)",
    "variable": "var(--colors-zinc-60)"
  },
  "colors.zinc.70": {
    "value": "oklch(0.442 0.017 285.786)",
    "variable": "var(--colors-zinc-70)"
  },
  "colors.zinc.80": {
    "value": "oklch(0.37 0.013 285.805)",
    "variable": "var(--colors-zinc-80)"
  },
  "colors.zinc.90": {
    "value": "oklch(0.274 0.006 286.033)",
    "variable": "var(--colors-zinc-90)"
  },
  "colors.zinc.95": {
    "value": "oklch(0.21 0.006 285.885)",
    "variable": "var(--colors-zinc-95)"
  },
  "colors.zinc.100": {
    "value": "oklch(0.141 0.005 285.823)",
    "variable": "var(--colors-zinc-100)"
  },
  "colors.neutral.10": {
    "value": "oklch(0.985 0 0)",
    "variable": "var(--colors-neutral-10)"
  },
  "colors.neutral.20": {
    "value": "oklch(0.97 0 0)",
    "variable": "var(--colors-neutral-20)"
  },
  "colors.neutral.30": {
    "value": "oklch(0.922 0 0)",
    "variable": "var(--colors-neutral-30)"
  },
  "colors.neutral.40": {
    "value": "oklch(0.87 0 0)",
    "variable": "var(--colors-neutral-40)"
  },
  "colors.neutral.50": {
    "value": "oklch(0.708 0 0)",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.60": {
    "value": "oklch(0.556 0 0)",
    "variable": "var(--colors-neutral-60)"
  },
  "colors.neutral.70": {
    "value": "oklch(0.439 0 0)",
    "variable": "var(--colors-neutral-70)"
  },
  "colors.neutral.80": {
    "value": "oklch(0.371 0 0)",
    "variable": "var(--colors-neutral-80)"
  },
  "colors.neutral.90": {
    "value": "oklch(0.269 0 0)",
    "variable": "var(--colors-neutral-90)"
  },
  "colors.neutral.95": {
    "value": "oklch(0.205 0 0)",
    "variable": "var(--colors-neutral-95)"
  },
  "colors.neutral.100": {
    "value": "oklch(0.145 0 0)",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.stone.10": {
    "value": "oklch(0.985 0.001 106.423)",
    "variable": "var(--colors-stone-10)"
  },
  "colors.stone.20": {
    "value": "oklch(0.97 0.001 106.424)",
    "variable": "var(--colors-stone-20)"
  },
  "colors.stone.30": {
    "value": "oklch(0.923 0.003 48.717)",
    "variable": "var(--colors-stone-30)"
  },
  "colors.stone.40": {
    "value": "oklch(0.869 0.005 56.366)",
    "variable": "var(--colors-stone-40)"
  },
  "colors.stone.50": {
    "value": "oklch(0.709 0.01 56.259)",
    "variable": "var(--colors-stone-50)"
  },
  "colors.stone.60": {
    "value": "oklch(0.553 0.013 58.071)",
    "variable": "var(--colors-stone-60)"
  },
  "colors.stone.70": {
    "value": "oklch(0.444 0.011 73.639)",
    "variable": "var(--colors-stone-70)"
  },
  "colors.stone.80": {
    "value": "oklch(0.374 0.01 67.558)",
    "variable": "var(--colors-stone-80)"
  },
  "colors.stone.90": {
    "value": "oklch(0.268 0.007 34.298)",
    "variable": "var(--colors-stone-90)"
  },
  "colors.stone.95": {
    "value": "oklch(0.216 0.006 56.043)",
    "variable": "var(--colors-stone-95)"
  },
  "colors.stone.100": {
    "value": "oklch(0.147 0.004 49.25)",
    "variable": "var(--colors-stone-100)"
  },
  "colors.blackAlpha.10": {
    "value": "oklch(0% 0 0 / 0.04)",
    "variable": "var(--colors-black-alpha-10)"
  },
  "colors.blackAlpha.20": {
    "value": "oklch(0% 0 0 / 0.06)",
    "variable": "var(--colors-black-alpha-20)"
  },
  "colors.blackAlpha.30": {
    "value": "oklch(0% 0 0 / 0.08)",
    "variable": "var(--colors-black-alpha-30)"
  },
  "colors.blackAlpha.40": {
    "value": "oklch(0% 0 0 / 0.16)",
    "variable": "var(--colors-black-alpha-40)"
  },
  "colors.blackAlpha.50": {
    "value": "oklch(0% 0 0 / 0.24)",
    "variable": "var(--colors-black-alpha-50)"
  },
  "colors.blackAlpha.60": {
    "value": "oklch(0% 0 0 / 0.36)",
    "variable": "var(--colors-black-alpha-60)"
  },
  "colors.blackAlpha.70": {
    "value": "oklch(0% 0 0 / 0.48)",
    "variable": "var(--colors-black-alpha-70)"
  },
  "colors.blackAlpha.80": {
    "value": "oklch(0% 0 0 / 0.64)",
    "variable": "var(--colors-black-alpha-80)"
  },
  "colors.blackAlpha.90": {
    "value": "oklch(0% 0 0 / 0.8)",
    "variable": "var(--colors-black-alpha-90)"
  },
  "colors.blackAlpha.95": {
    "value": "oklch(0% 0 0 / 0.86)",
    "variable": "var(--colors-black-alpha-95)"
  },
  "colors.blackAlpha.100": {
    "value": "oklch(0% 0 0 / 0.92)",
    "variable": "var(--colors-black-alpha-100)"
  },
  "colors.whiteAlpha.10": {
    "value": "oklch(100% 0 0 / 0.04)",
    "variable": "var(--colors-white-alpha-10)"
  },
  "colors.whiteAlpha.20": {
    "value": "oklch(100% 0 0 / 0.06)",
    "variable": "var(--colors-white-alpha-20)"
  },
  "colors.whiteAlpha.30": {
    "value": "oklch(100% 0 0 / 0.08)",
    "variable": "var(--colors-white-alpha-30)"
  },
  "colors.whiteAlpha.40": {
    "value": "oklch(100% 0 0 / 0.16)",
    "variable": "var(--colors-white-alpha-40)"
  },
  "colors.whiteAlpha.50": {
    "value": "oklch(100% 0 0 / 0.24)",
    "variable": "var(--colors-white-alpha-50)"
  },
  "colors.whiteAlpha.60": {
    "value": "oklch(100% 0 0 / 0.36)",
    "variable": "var(--colors-white-alpha-60)"
  },
  "colors.whiteAlpha.70": {
    "value": "oklch(100% 0 0 / 0.48)",
    "variable": "var(--colors-white-alpha-70)"
  },
  "colors.whiteAlpha.80": {
    "value": "oklch(100% 0 0 / 0.64)",
    "variable": "var(--colors-white-alpha-80)"
  },
  "colors.whiteAlpha.90": {
    "value": "oklch(100% 0 0 / 0.8)",
    "variable": "var(--colors-white-alpha-90)"
  },
  "colors.whiteAlpha.95": {
    "value": "oklch(100% 0 0 / 0.86)",
    "variable": "var(--colors-white-alpha-95)"
  },
  "colors.whiteAlpha.100": {
    "value": "oklch(100% 0 0 / 0.92)",
    "variable": "var(--colors-white-alpha-100)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.moderate": {
    "value": "200ms",
    "variable": "var(--durations-moderate)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "easings.ease-in": {
    "value": "cubic-bezier(0.42, 0, 1, 1)",
    "variable": "var(--easings-ease-in)"
  },
  "easings.ease-out": {
    "value": "cubic-bezier(0, 0, 0.58, 1)",
    "variable": "var(--easings-ease-out)"
  },
  "easings.ease-in-out": {
    "value": "cubic-bezier(0.42, 0, 0.58, 1)",
    "variable": "var(--easings-ease-in-out)"
  },
  "easings.ease-in-smooth": {
    "value": "cubic-bezier(0.32, 0.72, 0, 1)",
    "variable": "var(--easings-ease-in-smooth)"
  },
  "fonts.sans": {
    "value": "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.mono": {
    "value": "Google Sans Code, SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
    "variable": "var(--fonts-mono)"
  },
  "fontSizes.8": {
    "value": "0.8rem",
    "variable": "var(--font-sizes-8)"
  },
  "fontSizes.10": {
    "value": "1.0rem",
    "variable": "var(--font-sizes-10)"
  },
  "fontSizes.12": {
    "value": "1.2rem",
    "variable": "var(--font-sizes-12)"
  },
  "fontSizes.13": {
    "value": "1.3rem",
    "variable": "var(--font-sizes-13)"
  },
  "fontSizes.14": {
    "value": "1.4rem",
    "variable": "var(--font-sizes-14)"
  },
  "fontSizes.16": {
    "value": "1.6rem",
    "variable": "var(--font-sizes-16)"
  },
  "fontSizes.18": {
    "value": "1.8rem",
    "variable": "var(--font-sizes-18)"
  },
  "fontSizes.20": {
    "value": "2.0rem",
    "variable": "var(--font-sizes-20)"
  },
  "fontSizes.24": {
    "value": "2.4rem",
    "variable": "var(--font-sizes-24)"
  },
  "fontSizes.32": {
    "value": "3.2rem",
    "variable": "var(--font-sizes-32)"
  },
  "fontSizes.40": {
    "value": "4rem",
    "variable": "var(--font-sizes-40)"
  },
  "fontSizes.48": {
    "value": "4.8rem",
    "variable": "var(--font-sizes-48)"
  },
  "fontSizes.56": {
    "value": "5.6rem",
    "variable": "var(--font-sizes-56)"
  },
  "fontSizes.64": {
    "value": "6.4rem",
    "variable": "var(--font-sizes-64)"
  },
  "fontSizes.80": {
    "value": "8rem",
    "variable": "var(--font-sizes-80)"
  },
  "fontSizes.96": {
    "value": "9.6rem",
    "variable": "var(--font-sizes-96)"
  },
  "fontSizes.128": {
    "value": "12.8rem",
    "variable": "var(--font-sizes-128)"
  },
  "fontWeights.100": {
    "value": "100",
    "variable": "var(--font-weights-100)"
  },
  "fontWeights.200": {
    "value": "200",
    "variable": "var(--font-weights-200)"
  },
  "fontWeights.300": {
    "value": "300",
    "variable": "var(--font-weights-300)"
  },
  "fontWeights.400": {
    "value": "400",
    "variable": "var(--font-weights-400)"
  },
  "fontWeights.500": {
    "value": "500",
    "variable": "var(--font-weights-500)"
  },
  "fontWeights.600": {
    "value": "600",
    "variable": "var(--font-weights-600)"
  },
  "fontWeights.700": {
    "value": "700",
    "variable": "var(--font-weights-700)"
  },
  "fontWeights.800": {
    "value": "800",
    "variable": "var(--font-weights-800)"
  },
  "fontWeights.900": {
    "value": "900",
    "variable": "var(--font-weights-900)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "lineHeights.shorter": {
    "value": 1.05,
    "variable": "var(--line-heights-shorter)"
  },
  "lineHeights.short": {
    "value": 1.24,
    "variable": "var(--line-heights-short)"
  },
  "lineHeights.moderate": {
    "value": 1.6,
    "variable": "var(--line-heights-moderate)"
  },
  "lineHeights.tall": {
    "value": 1.8,
    "variable": "var(--line-heights-tall)"
  },
  "lineHeights.taller": {
    "value": 2,
    "variable": "var(--line-heights-taller)"
  },
  "radii.0": {
    "value": "0",
    "variable": "var(--radii-0)"
  },
  "radii.2": {
    "value": "0.2rem",
    "variable": "var(--radii-2)"
  },
  "radii.4": {
    "value": "0.4rem",
    "variable": "var(--radii-4)"
  },
  "radii.6": {
    "value": "0.6rem",
    "variable": "var(--radii-6)"
  },
  "radii.8": {
    "value": "0.8rem",
    "variable": "var(--radii-8)"
  },
  "radii.12": {
    "value": "1.2rem",
    "variable": "var(--radii-12)"
  },
  "radii.16": {
    "value": "1.6rem",
    "variable": "var(--radii-16)"
  },
  "radii.20": {
    "value": "2rem",
    "variable": "var(--radii-20)"
  },
  "radii.24": {
    "value": "2.4rem",
    "variable": "var(--radii-24)"
  },
  "radii.32": {
    "value": "3.2rem",
    "variable": "var(--radii-32)"
  },
  "radii.48": {
    "value": "4.8rem",
    "variable": "var(--radii-48)"
  },
  "radii.64": {
    "value": "6.4rem",
    "variable": "var(--radii-64)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.1rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.2rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.4": {
    "value": "0.4rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.6": {
    "value": "0.6rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.8": {
    "value": "0.8rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.10": {
    "value": "1.0rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.12": {
    "value": "1.2rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.16": {
    "value": "1.6rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "2rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "2.4rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.32": {
    "value": "3.2rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.40": {
    "value": "4rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.56": {
    "value": "5.6rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.64": {
    "value": "6.4rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.80": {
    "value": "8rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "9.6rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.120": {
    "value": "12rem",
    "variable": "var(--spacing-120)"
  },
  "spacing.144": {
    "value": "14.4rem",
    "variable": "var(--spacing-144)"
  },
  "spacing.160": {
    "value": "16rem",
    "variable": "var(--spacing-160)"
  },
  "spacing.192": {
    "value": "19.2rem",
    "variable": "var(--spacing-192)"
  },
  "spacing.224": {
    "value": "22.4rem",
    "variable": "var(--spacing-224)"
  },
  "spacing.256": {
    "value": "25.6rem",
    "variable": "var(--spacing-256)"
  },
  "spacing.288": {
    "value": "28.8rem",
    "variable": "var(--spacing-288)"
  },
  "spacing.320": {
    "value": "32rem",
    "variable": "var(--spacing-320)"
  },
  "sizes.4": {
    "value": "0.2rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.8": {
    "value": "0.4rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.12": {
    "value": "1.2rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.16": {
    "value": "1.6rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "2rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "2.4rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "2.8rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "3.2rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "3.6rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "4rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "4.4rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.46": {
    "value": "4.6rem",
    "variable": "var(--sizes-46)"
  },
  "sizes.48": {
    "value": "4.8rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.50": {
    "value": "5rem",
    "variable": "var(--sizes-50)"
  },
  "sizes.52": {
    "value": "5.2rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "5.6rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.64": {
    "value": "6.4rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "7.2rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "8rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "9.6rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.128": {
    "value": "12.8rem",
    "variable": "var(--sizes-128)"
  },
  "sizes.160": {
    "value": "16rem",
    "variable": "var(--sizes-160)"
  },
  "sizes.200": {
    "value": "20rem",
    "variable": "var(--sizes-200)"
  },
  "sizes.256": {
    "value": "25.6rem",
    "variable": "var(--sizes-256)"
  },
  "sizes.320": {
    "value": "32rem",
    "variable": "var(--sizes-320)"
  },
  "sizes.360": {
    "value": "36rem",
    "variable": "var(--sizes-360)"
  },
  "sizes.400": {
    "value": "40rem",
    "variable": "var(--sizes-400)"
  },
  "sizes.448": {
    "value": "44.8rem",
    "variable": "var(--sizes-448)"
  },
  "sizes.512": {
    "value": "51.2rem",
    "variable": "var(--sizes-512)"
  },
  "sizes.576": {
    "value": "57.6rem",
    "variable": "var(--sizes-576)"
  },
  "sizes.640": {
    "value": "64rem",
    "variable": "var(--sizes-640)"
  },
  "sizes.768": {
    "value": "76.8rem",
    "variable": "var(--sizes-768)"
  },
  "sizes.896": {
    "value": "89.6rem",
    "variable": "var(--sizes-896)"
  },
  "sizes.1024": {
    "value": "102.4rem",
    "variable": "var(--sizes-1024)"
  },
  "sizes.1280": {
    "value": "128rem",
    "variable": "var(--sizes-1280)"
  },
  "sizes.1536": {
    "value": "153.6rem",
    "variable": "var(--sizes-1536)"
  },
  "sizes.1/12": {
    "value": "8.333333%",
    "variable": "var(--sizes-1\\/12)"
  },
  "sizes.2/12": {
    "value": "16.666667%",
    "variable": "var(--sizes-2\\/12)"
  },
  "sizes.3/12": {
    "value": "25%",
    "variable": "var(--sizes-3\\/12)"
  },
  "sizes.4/12": {
    "value": "33.333333%",
    "variable": "var(--sizes-4\\/12)"
  },
  "sizes.5/12": {
    "value": "41.666667%",
    "variable": "var(--sizes-5\\/12)"
  },
  "sizes.6/12": {
    "value": "50%",
    "variable": "var(--sizes-6\\/12)"
  },
  "sizes.7/12": {
    "value": "58.333333%",
    "variable": "var(--sizes-7\\/12)"
  },
  "sizes.8/12": {
    "value": "66.666667%",
    "variable": "var(--sizes-8\\/12)"
  },
  "sizes.9/12": {
    "value": "75%",
    "variable": "var(--sizes-9\\/12)"
  },
  "sizes.10/12": {
    "value": "83.333333%",
    "variable": "var(--sizes-10\\/12)"
  },
  "sizes.11/12": {
    "value": "91.666667%",
    "variable": "var(--sizes-11\\/12)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.dvh": {
    "value": "100dvh",
    "variable": "var(--sizes-dvh)"
  },
  "sizes.svh": {
    "value": "100svh",
    "variable": "var(--sizes-svh)"
  },
  "sizes.lvh": {
    "value": "100lvh",
    "variable": "var(--sizes-lvh)"
  },
  "sizes.dvw": {
    "value": "100dvw",
    "variable": "var(--sizes-dvw)"
  },
  "sizes.svw": {
    "value": "100svw",
    "variable": "var(--sizes-svw)"
  },
  "sizes.lvw": {
    "value": "100lvw",
    "variable": "var(--sizes-lvw)"
  },
  "sizes.vw": {
    "value": "100vw",
    "variable": "var(--sizes-vw)"
  },
  "sizes.vh": {
    "value": "100vh",
    "variable": "var(--sizes-vh)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipNav": {
    "value": 1600,
    "variable": "var(--z-index-skip-nav)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "zIndex.max": {
    "value": 2147483647,
    "variable": "var(--z-index-max)"
  },
  "cursor.button": {
    "value": "pointer",
    "variable": "var(--cursor-button)"
  },
  "cursor.checkbox": {
    "value": "default",
    "variable": "var(--cursor-checkbox)"
  },
  "cursor.disabled": {
    "value": "not-allowed",
    "variable": "var(--cursor-disabled)"
  },
  "cursor.menuitem": {
    "value": "default",
    "variable": "var(--cursor-menuitem)"
  },
  "cursor.option": {
    "value": "default",
    "variable": "var(--cursor-option)"
  },
  "cursor.radio": {
    "value": "default",
    "variable": "var(--cursor-radio)"
  },
  "cursor.slider": {
    "value": "default",
    "variable": "var(--cursor-slider)"
  },
  "cursor.swittch": {
    "value": "pointer",
    "variable": "var(--cursor-swittch)"
  },
  "colors.bg": {
    "value": "var(--colors-bg)",
    "variable": "var(--colors-bg)"
  },
  "colors.bg.subtle": {
    "value": "var(--colors-bg-subtle)",
    "variable": "var(--colors-bg-subtle)"
  },
  "colors.bg.muted": {
    "value": "var(--colors-bg-muted)",
    "variable": "var(--colors-bg-muted)"
  },
  "colors.bg.surface": {
    "value": "var(--colors-bg-surface)",
    "variable": "var(--colors-bg-surface)"
  },
  "colors.bg.inverted": {
    "value": "var(--colors-bg-inverted)",
    "variable": "var(--colors-bg-inverted)"
  },
  "colors.bg.emphasized": {
    "value": "var(--colors-bg-emphasized)",
    "variable": "var(--colors-bg-emphasized)"
  },
  "colors.fg": {
    "value": "var(--colors-fg)",
    "variable": "var(--colors-fg)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-fg-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-fg-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.inverted": {
    "value": "var(--colors-fg-inverted)",
    "variable": "var(--colors-fg-inverted)"
  },
  "colors.fg.headline": {
    "value": "var(--colors-fg-headline)",
    "variable": "var(--colors-fg-headline)"
  },
  "colors.link": {
    "value": "var(--colors-link)",
    "variable": "var(--colors-link)"
  },
  "colors.link.emphasized": {
    "value": "var(--colors-link-emphasized)",
    "variable": "var(--colors-link-emphasized)"
  },
  "colors.border": {
    "value": "var(--colors-border)",
    "variable": "var(--colors-border)"
  },
  "colors.border.muted": {
    "value": "var(--colors-border-muted)",
    "variable": "var(--colors-border-muted)"
  },
  "colors.accent": {
    "value": "var(--colors-accent)",
    "variable": "var(--colors-accent)"
  },
  "colors.accent.emphasized": {
    "value": "var(--colors-accent-emphasized)",
    "variable": "var(--colors-accent-emphasized)"
  },
  "colors.accent.subtle": {
    "value": "var(--colors-accent-subtle)",
    "variable": "var(--colors-accent-subtle)"
  },
  "colors.interaction.focus": {
    "value": "var(--colors-interaction-focus)",
    "variable": "var(--colors-interaction-focus)"
  },
  "colors.interaction.hover": {
    "value": "var(--colors-interaction-hover)",
    "variable": "var(--colors-interaction-hover)"
  },
  "colors.interaction.pressed": {
    "value": "var(--colors-neutral-20)",
    "variable": "var(--colors-interaction-pressed)"
  },
  "colors.red.filled.bg": {
    "value": "var(--colors-red-filled-bg)",
    "variable": "var(--colors-red-filled-bg)"
  },
  "colors.red.filled.fg": {
    "value": "var(--colors-red-filled-fg)",
    "variable": "var(--colors-red-filled-fg)"
  },
  "colors.red.filled.hover.bg": {
    "value": "var(--colors-red-filled-hover-bg)",
    "variable": "var(--colors-red-filled-hover-bg)"
  },
  "colors.red.soft.bg": {
    "value": "var(--colors-red-soft-bg)",
    "variable": "var(--colors-red-soft-bg)"
  },
  "colors.red.soft.fg": {
    "value": "var(--colors-red-soft-fg)",
    "variable": "var(--colors-red-soft-fg)"
  },
  "colors.red.soft.hover.bg": {
    "value": "var(--colors-red-soft-hover-bg)",
    "variable": "var(--colors-red-soft-hover-bg)"
  },
  "colors.red.outlined.fg": {
    "value": "var(--colors-red-outlined-fg)",
    "variable": "var(--colors-red-outlined-fg)"
  },
  "colors.red.outlined.border": {
    "value": "var(--colors-red-outlined-border)",
    "variable": "var(--colors-red-outlined-border)"
  },
  "colors.red.outlined.hover.bg": {
    "value": "var(--colors-red-outlined-hover-bg)",
    "variable": "var(--colors-red-outlined-hover-bg)"
  },
  "colors.red.outlined.hover.border": {
    "value": "var(--colors-red-outlined-hover-border)",
    "variable": "var(--colors-red-outlined-hover-border)"
  },
  "colors.red.ghost.fg": {
    "value": "var(--colors-red-ghost-fg)",
    "variable": "var(--colors-red-ghost-fg)"
  },
  "colors.red.ghost.hover.bg": {
    "value": "var(--colors-red-ghost-hover-bg)",
    "variable": "var(--colors-red-ghost-hover-bg)"
  },
  "colors.orange.filled.bg": {
    "value": "var(--colors-orange-filled-bg)",
    "variable": "var(--colors-orange-filled-bg)"
  },
  "colors.orange.filled.fg": {
    "value": "var(--colors-orange-filled-fg)",
    "variable": "var(--colors-orange-filled-fg)"
  },
  "colors.orange.filled.hover.bg": {
    "value": "var(--colors-orange-filled-hover-bg)",
    "variable": "var(--colors-orange-filled-hover-bg)"
  },
  "colors.orange.soft.bg": {
    "value": "var(--colors-orange-soft-bg)",
    "variable": "var(--colors-orange-soft-bg)"
  },
  "colors.orange.soft.fg": {
    "value": "var(--colors-orange-soft-fg)",
    "variable": "var(--colors-orange-soft-fg)"
  },
  "colors.orange.soft.hover.bg": {
    "value": "var(--colors-orange-soft-hover-bg)",
    "variable": "var(--colors-orange-soft-hover-bg)"
  },
  "colors.orange.outlined.fg": {
    "value": "var(--colors-orange-outlined-fg)",
    "variable": "var(--colors-orange-outlined-fg)"
  },
  "colors.orange.outlined.border": {
    "value": "var(--colors-orange-outlined-border)",
    "variable": "var(--colors-orange-outlined-border)"
  },
  "colors.orange.outlined.hover.bg": {
    "value": "var(--colors-orange-outlined-hover-bg)",
    "variable": "var(--colors-orange-outlined-hover-bg)"
  },
  "colors.orange.outlined.hover.border": {
    "value": "var(--colors-orange-outlined-hover-border)",
    "variable": "var(--colors-orange-outlined-hover-border)"
  },
  "colors.orange.ghost.fg": {
    "value": "var(--colors-orange-ghost-fg)",
    "variable": "var(--colors-orange-ghost-fg)"
  },
  "colors.orange.ghost.hover.bg": {
    "value": "var(--colors-orange-ghost-hover-bg)",
    "variable": "var(--colors-orange-ghost-hover-bg)"
  },
  "colors.amber.filled.bg": {
    "value": "var(--colors-amber-filled-bg)",
    "variable": "var(--colors-amber-filled-bg)"
  },
  "colors.amber.filled.fg": {
    "value": "var(--colors-amber-filled-fg)",
    "variable": "var(--colors-amber-filled-fg)"
  },
  "colors.amber.filled.hover.bg": {
    "value": "var(--colors-amber-filled-hover-bg)",
    "variable": "var(--colors-amber-filled-hover-bg)"
  },
  "colors.amber.soft.bg": {
    "value": "var(--colors-amber-soft-bg)",
    "variable": "var(--colors-amber-soft-bg)"
  },
  "colors.amber.soft.fg": {
    "value": "var(--colors-amber-soft-fg)",
    "variable": "var(--colors-amber-soft-fg)"
  },
  "colors.amber.soft.hover.bg": {
    "value": "var(--colors-amber-soft-hover-bg)",
    "variable": "var(--colors-amber-soft-hover-bg)"
  },
  "colors.amber.outlined.fg": {
    "value": "var(--colors-amber-outlined-fg)",
    "variable": "var(--colors-amber-outlined-fg)"
  },
  "colors.amber.outlined.border": {
    "value": "var(--colors-amber-outlined-border)",
    "variable": "var(--colors-amber-outlined-border)"
  },
  "colors.amber.outlined.hover.bg": {
    "value": "var(--colors-amber-outlined-hover-bg)",
    "variable": "var(--colors-amber-outlined-hover-bg)"
  },
  "colors.amber.outlined.hover.border": {
    "value": "var(--colors-amber-outlined-hover-border)",
    "variable": "var(--colors-amber-outlined-hover-border)"
  },
  "colors.amber.ghost.fg": {
    "value": "var(--colors-amber-ghost-fg)",
    "variable": "var(--colors-amber-ghost-fg)"
  },
  "colors.amber.ghost.hover.bg": {
    "value": "var(--colors-amber-ghost-hover-bg)",
    "variable": "var(--colors-amber-ghost-hover-bg)"
  },
  "colors.yellow.filled.bg": {
    "value": "var(--colors-yellow-filled-bg)",
    "variable": "var(--colors-yellow-filled-bg)"
  },
  "colors.yellow.filled.fg": {
    "value": "var(--colors-yellow-filled-fg)",
    "variable": "var(--colors-yellow-filled-fg)"
  },
  "colors.yellow.filled.hover.bg": {
    "value": "var(--colors-yellow-filled-hover-bg)",
    "variable": "var(--colors-yellow-filled-hover-bg)"
  },
  "colors.yellow.soft.bg": {
    "value": "var(--colors-yellow-soft-bg)",
    "variable": "var(--colors-yellow-soft-bg)"
  },
  "colors.yellow.soft.fg": {
    "value": "var(--colors-yellow-soft-fg)",
    "variable": "var(--colors-yellow-soft-fg)"
  },
  "colors.yellow.soft.hover.bg": {
    "value": "var(--colors-yellow-soft-hover-bg)",
    "variable": "var(--colors-yellow-soft-hover-bg)"
  },
  "colors.yellow.outlined.fg": {
    "value": "var(--colors-yellow-outlined-fg)",
    "variable": "var(--colors-yellow-outlined-fg)"
  },
  "colors.yellow.outlined.border": {
    "value": "var(--colors-yellow-outlined-border)",
    "variable": "var(--colors-yellow-outlined-border)"
  },
  "colors.yellow.outlined.hover.bg": {
    "value": "var(--colors-yellow-outlined-hover-bg)",
    "variable": "var(--colors-yellow-outlined-hover-bg)"
  },
  "colors.yellow.outlined.hover.border": {
    "value": "var(--colors-yellow-outlined-hover-border)",
    "variable": "var(--colors-yellow-outlined-hover-border)"
  },
  "colors.yellow.ghost.fg": {
    "value": "var(--colors-yellow-ghost-fg)",
    "variable": "var(--colors-yellow-ghost-fg)"
  },
  "colors.yellow.ghost.hover.bg": {
    "value": "var(--colors-yellow-ghost-hover-bg)",
    "variable": "var(--colors-yellow-ghost-hover-bg)"
  },
  "colors.lime.filled.bg": {
    "value": "var(--colors-lime-filled-bg)",
    "variable": "var(--colors-lime-filled-bg)"
  },
  "colors.lime.filled.fg": {
    "value": "var(--colors-lime-filled-fg)",
    "variable": "var(--colors-lime-filled-fg)"
  },
  "colors.lime.filled.hover.bg": {
    "value": "var(--colors-lime-filled-hover-bg)",
    "variable": "var(--colors-lime-filled-hover-bg)"
  },
  "colors.lime.soft.bg": {
    "value": "var(--colors-lime-soft-bg)",
    "variable": "var(--colors-lime-soft-bg)"
  },
  "colors.lime.soft.fg": {
    "value": "var(--colors-lime-soft-fg)",
    "variable": "var(--colors-lime-soft-fg)"
  },
  "colors.lime.soft.hover.bg": {
    "value": "var(--colors-lime-soft-hover-bg)",
    "variable": "var(--colors-lime-soft-hover-bg)"
  },
  "colors.lime.outlined.fg": {
    "value": "var(--colors-lime-outlined-fg)",
    "variable": "var(--colors-lime-outlined-fg)"
  },
  "colors.lime.outlined.border": {
    "value": "var(--colors-lime-outlined-border)",
    "variable": "var(--colors-lime-outlined-border)"
  },
  "colors.lime.outlined.hover.bg": {
    "value": "var(--colors-lime-outlined-hover-bg)",
    "variable": "var(--colors-lime-outlined-hover-bg)"
  },
  "colors.lime.outlined.hover.border": {
    "value": "var(--colors-lime-outlined-hover-border)",
    "variable": "var(--colors-lime-outlined-hover-border)"
  },
  "colors.lime.ghost.fg": {
    "value": "var(--colors-lime-ghost-fg)",
    "variable": "var(--colors-lime-ghost-fg)"
  },
  "colors.lime.ghost.hover.bg": {
    "value": "var(--colors-lime-ghost-hover-bg)",
    "variable": "var(--colors-lime-ghost-hover-bg)"
  },
  "colors.green.filled.bg": {
    "value": "var(--colors-green-filled-bg)",
    "variable": "var(--colors-green-filled-bg)"
  },
  "colors.green.filled.fg": {
    "value": "var(--colors-green-filled-fg)",
    "variable": "var(--colors-green-filled-fg)"
  },
  "colors.green.filled.hover.bg": {
    "value": "var(--colors-green-filled-hover-bg)",
    "variable": "var(--colors-green-filled-hover-bg)"
  },
  "colors.green.soft.bg": {
    "value": "var(--colors-green-soft-bg)",
    "variable": "var(--colors-green-soft-bg)"
  },
  "colors.green.soft.fg": {
    "value": "var(--colors-green-soft-fg)",
    "variable": "var(--colors-green-soft-fg)"
  },
  "colors.green.soft.hover.bg": {
    "value": "var(--colors-green-soft-hover-bg)",
    "variable": "var(--colors-green-soft-hover-bg)"
  },
  "colors.green.outlined.fg": {
    "value": "var(--colors-green-outlined-fg)",
    "variable": "var(--colors-green-outlined-fg)"
  },
  "colors.green.outlined.border": {
    "value": "var(--colors-green-outlined-border)",
    "variable": "var(--colors-green-outlined-border)"
  },
  "colors.green.outlined.hover.bg": {
    "value": "var(--colors-green-outlined-hover-bg)",
    "variable": "var(--colors-green-outlined-hover-bg)"
  },
  "colors.green.outlined.hover.border": {
    "value": "var(--colors-green-outlined-hover-border)",
    "variable": "var(--colors-green-outlined-hover-border)"
  },
  "colors.green.ghost.fg": {
    "value": "var(--colors-green-ghost-fg)",
    "variable": "var(--colors-green-ghost-fg)"
  },
  "colors.green.ghost.hover.bg": {
    "value": "var(--colors-green-ghost-hover-bg)",
    "variable": "var(--colors-green-ghost-hover-bg)"
  },
  "colors.emerald.filled.bg": {
    "value": "var(--colors-emerald-filled-bg)",
    "variable": "var(--colors-emerald-filled-bg)"
  },
  "colors.emerald.filled.fg": {
    "value": "var(--colors-emerald-filled-fg)",
    "variable": "var(--colors-emerald-filled-fg)"
  },
  "colors.emerald.filled.hover.bg": {
    "value": "var(--colors-emerald-filled-hover-bg)",
    "variable": "var(--colors-emerald-filled-hover-bg)"
  },
  "colors.emerald.soft.bg": {
    "value": "var(--colors-emerald-soft-bg)",
    "variable": "var(--colors-emerald-soft-bg)"
  },
  "colors.emerald.soft.fg": {
    "value": "var(--colors-emerald-soft-fg)",
    "variable": "var(--colors-emerald-soft-fg)"
  },
  "colors.emerald.soft.hover.bg": {
    "value": "var(--colors-emerald-soft-hover-bg)",
    "variable": "var(--colors-emerald-soft-hover-bg)"
  },
  "colors.emerald.outlined.fg": {
    "value": "var(--colors-emerald-outlined-fg)",
    "variable": "var(--colors-emerald-outlined-fg)"
  },
  "colors.emerald.outlined.border": {
    "value": "var(--colors-emerald-outlined-border)",
    "variable": "var(--colors-emerald-outlined-border)"
  },
  "colors.emerald.outlined.hover.bg": {
    "value": "var(--colors-emerald-outlined-hover-bg)",
    "variable": "var(--colors-emerald-outlined-hover-bg)"
  },
  "colors.emerald.outlined.hover.border": {
    "value": "var(--colors-emerald-outlined-hover-border)",
    "variable": "var(--colors-emerald-outlined-hover-border)"
  },
  "colors.emerald.ghost.fg": {
    "value": "var(--colors-emerald-ghost-fg)",
    "variable": "var(--colors-emerald-ghost-fg)"
  },
  "colors.emerald.ghost.hover.bg": {
    "value": "var(--colors-emerald-ghost-hover-bg)",
    "variable": "var(--colors-emerald-ghost-hover-bg)"
  },
  "colors.teal.filled.bg": {
    "value": "var(--colors-teal-filled-bg)",
    "variable": "var(--colors-teal-filled-bg)"
  },
  "colors.teal.filled.fg": {
    "value": "var(--colors-teal-filled-fg)",
    "variable": "var(--colors-teal-filled-fg)"
  },
  "colors.teal.filled.hover.bg": {
    "value": "var(--colors-teal-filled-hover-bg)",
    "variable": "var(--colors-teal-filled-hover-bg)"
  },
  "colors.teal.soft.bg": {
    "value": "var(--colors-teal-soft-bg)",
    "variable": "var(--colors-teal-soft-bg)"
  },
  "colors.teal.soft.fg": {
    "value": "var(--colors-teal-soft-fg)",
    "variable": "var(--colors-teal-soft-fg)"
  },
  "colors.teal.soft.hover.bg": {
    "value": "var(--colors-teal-soft-hover-bg)",
    "variable": "var(--colors-teal-soft-hover-bg)"
  },
  "colors.teal.outlined.fg": {
    "value": "var(--colors-teal-outlined-fg)",
    "variable": "var(--colors-teal-outlined-fg)"
  },
  "colors.teal.outlined.border": {
    "value": "var(--colors-teal-outlined-border)",
    "variable": "var(--colors-teal-outlined-border)"
  },
  "colors.teal.outlined.hover.bg": {
    "value": "var(--colors-teal-outlined-hover-bg)",
    "variable": "var(--colors-teal-outlined-hover-bg)"
  },
  "colors.teal.outlined.hover.border": {
    "value": "var(--colors-teal-outlined-hover-border)",
    "variable": "var(--colors-teal-outlined-hover-border)"
  },
  "colors.teal.ghost.fg": {
    "value": "var(--colors-teal-ghost-fg)",
    "variable": "var(--colors-teal-ghost-fg)"
  },
  "colors.teal.ghost.hover.bg": {
    "value": "var(--colors-teal-ghost-hover-bg)",
    "variable": "var(--colors-teal-ghost-hover-bg)"
  },
  "colors.cyan.filled.bg": {
    "value": "var(--colors-cyan-filled-bg)",
    "variable": "var(--colors-cyan-filled-bg)"
  },
  "colors.cyan.filled.fg": {
    "value": "var(--colors-cyan-filled-fg)",
    "variable": "var(--colors-cyan-filled-fg)"
  },
  "colors.cyan.filled.hover.bg": {
    "value": "var(--colors-cyan-filled-hover-bg)",
    "variable": "var(--colors-cyan-filled-hover-bg)"
  },
  "colors.cyan.soft.bg": {
    "value": "var(--colors-cyan-soft-bg)",
    "variable": "var(--colors-cyan-soft-bg)"
  },
  "colors.cyan.soft.fg": {
    "value": "var(--colors-cyan-soft-fg)",
    "variable": "var(--colors-cyan-soft-fg)"
  },
  "colors.cyan.soft.hover.bg": {
    "value": "var(--colors-cyan-soft-hover-bg)",
    "variable": "var(--colors-cyan-soft-hover-bg)"
  },
  "colors.cyan.outlined.fg": {
    "value": "var(--colors-cyan-outlined-fg)",
    "variable": "var(--colors-cyan-outlined-fg)"
  },
  "colors.cyan.outlined.border": {
    "value": "var(--colors-cyan-outlined-border)",
    "variable": "var(--colors-cyan-outlined-border)"
  },
  "colors.cyan.outlined.hover.bg": {
    "value": "var(--colors-cyan-outlined-hover-bg)",
    "variable": "var(--colors-cyan-outlined-hover-bg)"
  },
  "colors.cyan.outlined.hover.border": {
    "value": "var(--colors-cyan-outlined-hover-border)",
    "variable": "var(--colors-cyan-outlined-hover-border)"
  },
  "colors.cyan.ghost.fg": {
    "value": "var(--colors-cyan-ghost-fg)",
    "variable": "var(--colors-cyan-ghost-fg)"
  },
  "colors.cyan.ghost.hover.bg": {
    "value": "var(--colors-cyan-ghost-hover-bg)",
    "variable": "var(--colors-cyan-ghost-hover-bg)"
  },
  "colors.sky.filled.bg": {
    "value": "var(--colors-sky-filled-bg)",
    "variable": "var(--colors-sky-filled-bg)"
  },
  "colors.sky.filled.fg": {
    "value": "var(--colors-sky-filled-fg)",
    "variable": "var(--colors-sky-filled-fg)"
  },
  "colors.sky.filled.hover.bg": {
    "value": "var(--colors-sky-filled-hover-bg)",
    "variable": "var(--colors-sky-filled-hover-bg)"
  },
  "colors.sky.soft.bg": {
    "value": "var(--colors-sky-soft-bg)",
    "variable": "var(--colors-sky-soft-bg)"
  },
  "colors.sky.soft.fg": {
    "value": "var(--colors-sky-soft-fg)",
    "variable": "var(--colors-sky-soft-fg)"
  },
  "colors.sky.soft.hover.bg": {
    "value": "var(--colors-sky-soft-hover-bg)",
    "variable": "var(--colors-sky-soft-hover-bg)"
  },
  "colors.sky.outlined.fg": {
    "value": "var(--colors-sky-outlined-fg)",
    "variable": "var(--colors-sky-outlined-fg)"
  },
  "colors.sky.outlined.border": {
    "value": "var(--colors-sky-outlined-border)",
    "variable": "var(--colors-sky-outlined-border)"
  },
  "colors.sky.outlined.hover.bg": {
    "value": "var(--colors-sky-outlined-hover-bg)",
    "variable": "var(--colors-sky-outlined-hover-bg)"
  },
  "colors.sky.outlined.hover.border": {
    "value": "var(--colors-sky-outlined-hover-border)",
    "variable": "var(--colors-sky-outlined-hover-border)"
  },
  "colors.sky.ghost.fg": {
    "value": "var(--colors-sky-ghost-fg)",
    "variable": "var(--colors-sky-ghost-fg)"
  },
  "colors.sky.ghost.hover.bg": {
    "value": "var(--colors-sky-ghost-hover-bg)",
    "variable": "var(--colors-sky-ghost-hover-bg)"
  },
  "colors.blue.filled.bg": {
    "value": "var(--colors-blue-filled-bg)",
    "variable": "var(--colors-blue-filled-bg)"
  },
  "colors.blue.filled.fg": {
    "value": "var(--colors-blue-filled-fg)",
    "variable": "var(--colors-blue-filled-fg)"
  },
  "colors.blue.filled.hover.bg": {
    "value": "var(--colors-blue-filled-hover-bg)",
    "variable": "var(--colors-blue-filled-hover-bg)"
  },
  "colors.blue.soft.bg": {
    "value": "var(--colors-blue-soft-bg)",
    "variable": "var(--colors-blue-soft-bg)"
  },
  "colors.blue.soft.fg": {
    "value": "var(--colors-blue-soft-fg)",
    "variable": "var(--colors-blue-soft-fg)"
  },
  "colors.blue.soft.hover.bg": {
    "value": "var(--colors-blue-soft-hover-bg)",
    "variable": "var(--colors-blue-soft-hover-bg)"
  },
  "colors.blue.outlined.fg": {
    "value": "var(--colors-blue-outlined-fg)",
    "variable": "var(--colors-blue-outlined-fg)"
  },
  "colors.blue.outlined.border": {
    "value": "var(--colors-blue-outlined-border)",
    "variable": "var(--colors-blue-outlined-border)"
  },
  "colors.blue.outlined.hover.bg": {
    "value": "var(--colors-blue-outlined-hover-bg)",
    "variable": "var(--colors-blue-outlined-hover-bg)"
  },
  "colors.blue.outlined.hover.border": {
    "value": "var(--colors-blue-outlined-hover-border)",
    "variable": "var(--colors-blue-outlined-hover-border)"
  },
  "colors.blue.ghost.fg": {
    "value": "var(--colors-blue-ghost-fg)",
    "variable": "var(--colors-blue-ghost-fg)"
  },
  "colors.blue.ghost.hover.bg": {
    "value": "var(--colors-blue-ghost-hover-bg)",
    "variable": "var(--colors-blue-ghost-hover-bg)"
  },
  "colors.indigo.filled.bg": {
    "value": "var(--colors-indigo-filled-bg)",
    "variable": "var(--colors-indigo-filled-bg)"
  },
  "colors.indigo.filled.fg": {
    "value": "var(--colors-indigo-filled-fg)",
    "variable": "var(--colors-indigo-filled-fg)"
  },
  "colors.indigo.filled.hover.bg": {
    "value": "var(--colors-indigo-filled-hover-bg)",
    "variable": "var(--colors-indigo-filled-hover-bg)"
  },
  "colors.indigo.soft.bg": {
    "value": "var(--colors-indigo-soft-bg)",
    "variable": "var(--colors-indigo-soft-bg)"
  },
  "colors.indigo.soft.fg": {
    "value": "var(--colors-indigo-soft-fg)",
    "variable": "var(--colors-indigo-soft-fg)"
  },
  "colors.indigo.soft.hover.bg": {
    "value": "var(--colors-indigo-soft-hover-bg)",
    "variable": "var(--colors-indigo-soft-hover-bg)"
  },
  "colors.indigo.outlined.fg": {
    "value": "var(--colors-indigo-outlined-fg)",
    "variable": "var(--colors-indigo-outlined-fg)"
  },
  "colors.indigo.outlined.border": {
    "value": "var(--colors-indigo-outlined-border)",
    "variable": "var(--colors-indigo-outlined-border)"
  },
  "colors.indigo.outlined.hover.bg": {
    "value": "var(--colors-indigo-outlined-hover-bg)",
    "variable": "var(--colors-indigo-outlined-hover-bg)"
  },
  "colors.indigo.outlined.hover.border": {
    "value": "var(--colors-indigo-outlined-hover-border)",
    "variable": "var(--colors-indigo-outlined-hover-border)"
  },
  "colors.indigo.ghost.fg": {
    "value": "var(--colors-indigo-ghost-fg)",
    "variable": "var(--colors-indigo-ghost-fg)"
  },
  "colors.indigo.ghost.hover.bg": {
    "value": "var(--colors-indigo-ghost-hover-bg)",
    "variable": "var(--colors-indigo-ghost-hover-bg)"
  },
  "colors.violet.filled.bg": {
    "value": "var(--colors-violet-filled-bg)",
    "variable": "var(--colors-violet-filled-bg)"
  },
  "colors.violet.filled.fg": {
    "value": "var(--colors-violet-filled-fg)",
    "variable": "var(--colors-violet-filled-fg)"
  },
  "colors.violet.filled.hover.bg": {
    "value": "var(--colors-violet-filled-hover-bg)",
    "variable": "var(--colors-violet-filled-hover-bg)"
  },
  "colors.violet.soft.bg": {
    "value": "var(--colors-violet-soft-bg)",
    "variable": "var(--colors-violet-soft-bg)"
  },
  "colors.violet.soft.fg": {
    "value": "var(--colors-violet-soft-fg)",
    "variable": "var(--colors-violet-soft-fg)"
  },
  "colors.violet.soft.hover.bg": {
    "value": "var(--colors-violet-soft-hover-bg)",
    "variable": "var(--colors-violet-soft-hover-bg)"
  },
  "colors.violet.outlined.fg": {
    "value": "var(--colors-violet-outlined-fg)",
    "variable": "var(--colors-violet-outlined-fg)"
  },
  "colors.violet.outlined.border": {
    "value": "var(--colors-violet-outlined-border)",
    "variable": "var(--colors-violet-outlined-border)"
  },
  "colors.violet.outlined.hover.bg": {
    "value": "var(--colors-violet-outlined-hover-bg)",
    "variable": "var(--colors-violet-outlined-hover-bg)"
  },
  "colors.violet.outlined.hover.border": {
    "value": "var(--colors-violet-outlined-hover-border)",
    "variable": "var(--colors-violet-outlined-hover-border)"
  },
  "colors.violet.ghost.fg": {
    "value": "var(--colors-violet-ghost-fg)",
    "variable": "var(--colors-violet-ghost-fg)"
  },
  "colors.violet.ghost.hover.bg": {
    "value": "var(--colors-violet-ghost-hover-bg)",
    "variable": "var(--colors-violet-ghost-hover-bg)"
  },
  "colors.purple.filled.bg": {
    "value": "var(--colors-purple-filled-bg)",
    "variable": "var(--colors-purple-filled-bg)"
  },
  "colors.purple.filled.fg": {
    "value": "var(--colors-purple-filled-fg)",
    "variable": "var(--colors-purple-filled-fg)"
  },
  "colors.purple.filled.hover.bg": {
    "value": "var(--colors-purple-filled-hover-bg)",
    "variable": "var(--colors-purple-filled-hover-bg)"
  },
  "colors.purple.soft.bg": {
    "value": "var(--colors-purple-soft-bg)",
    "variable": "var(--colors-purple-soft-bg)"
  },
  "colors.purple.soft.fg": {
    "value": "var(--colors-purple-soft-fg)",
    "variable": "var(--colors-purple-soft-fg)"
  },
  "colors.purple.soft.hover.bg": {
    "value": "var(--colors-purple-soft-hover-bg)",
    "variable": "var(--colors-purple-soft-hover-bg)"
  },
  "colors.purple.outlined.fg": {
    "value": "var(--colors-purple-outlined-fg)",
    "variable": "var(--colors-purple-outlined-fg)"
  },
  "colors.purple.outlined.border": {
    "value": "var(--colors-purple-outlined-border)",
    "variable": "var(--colors-purple-outlined-border)"
  },
  "colors.purple.outlined.hover.bg": {
    "value": "var(--colors-purple-outlined-hover-bg)",
    "variable": "var(--colors-purple-outlined-hover-bg)"
  },
  "colors.purple.outlined.hover.border": {
    "value": "var(--colors-purple-outlined-hover-border)",
    "variable": "var(--colors-purple-outlined-hover-border)"
  },
  "colors.purple.ghost.fg": {
    "value": "var(--colors-purple-ghost-fg)",
    "variable": "var(--colors-purple-ghost-fg)"
  },
  "colors.purple.ghost.hover.bg": {
    "value": "var(--colors-purple-ghost-hover-bg)",
    "variable": "var(--colors-purple-ghost-hover-bg)"
  },
  "colors.fuchsia.filled.bg": {
    "value": "var(--colors-fuchsia-filled-bg)",
    "variable": "var(--colors-fuchsia-filled-bg)"
  },
  "colors.fuchsia.filled.fg": {
    "value": "var(--colors-fuchsia-filled-fg)",
    "variable": "var(--colors-fuchsia-filled-fg)"
  },
  "colors.fuchsia.filled.hover.bg": {
    "value": "var(--colors-fuchsia-filled-hover-bg)",
    "variable": "var(--colors-fuchsia-filled-hover-bg)"
  },
  "colors.fuchsia.soft.bg": {
    "value": "var(--colors-fuchsia-soft-bg)",
    "variable": "var(--colors-fuchsia-soft-bg)"
  },
  "colors.fuchsia.soft.fg": {
    "value": "var(--colors-fuchsia-soft-fg)",
    "variable": "var(--colors-fuchsia-soft-fg)"
  },
  "colors.fuchsia.soft.hover.bg": {
    "value": "var(--colors-fuchsia-soft-hover-bg)",
    "variable": "var(--colors-fuchsia-soft-hover-bg)"
  },
  "colors.fuchsia.outlined.fg": {
    "value": "var(--colors-fuchsia-outlined-fg)",
    "variable": "var(--colors-fuchsia-outlined-fg)"
  },
  "colors.fuchsia.outlined.border": {
    "value": "var(--colors-fuchsia-outlined-border)",
    "variable": "var(--colors-fuchsia-outlined-border)"
  },
  "colors.fuchsia.outlined.hover.bg": {
    "value": "var(--colors-fuchsia-outlined-hover-bg)",
    "variable": "var(--colors-fuchsia-outlined-hover-bg)"
  },
  "colors.fuchsia.outlined.hover.border": {
    "value": "var(--colors-fuchsia-outlined-hover-border)",
    "variable": "var(--colors-fuchsia-outlined-hover-border)"
  },
  "colors.fuchsia.ghost.fg": {
    "value": "var(--colors-fuchsia-ghost-fg)",
    "variable": "var(--colors-fuchsia-ghost-fg)"
  },
  "colors.fuchsia.ghost.hover.bg": {
    "value": "var(--colors-fuchsia-ghost-hover-bg)",
    "variable": "var(--colors-fuchsia-ghost-hover-bg)"
  },
  "colors.pink.filled.bg": {
    "value": "var(--colors-pink-filled-bg)",
    "variable": "var(--colors-pink-filled-bg)"
  },
  "colors.pink.filled.fg": {
    "value": "var(--colors-pink-filled-fg)",
    "variable": "var(--colors-pink-filled-fg)"
  },
  "colors.pink.filled.hover.bg": {
    "value": "var(--colors-pink-filled-hover-bg)",
    "variable": "var(--colors-pink-filled-hover-bg)"
  },
  "colors.pink.soft.bg": {
    "value": "var(--colors-pink-soft-bg)",
    "variable": "var(--colors-pink-soft-bg)"
  },
  "colors.pink.soft.fg": {
    "value": "var(--colors-pink-soft-fg)",
    "variable": "var(--colors-pink-soft-fg)"
  },
  "colors.pink.soft.hover.bg": {
    "value": "var(--colors-pink-soft-hover-bg)",
    "variable": "var(--colors-pink-soft-hover-bg)"
  },
  "colors.pink.outlined.fg": {
    "value": "var(--colors-pink-outlined-fg)",
    "variable": "var(--colors-pink-outlined-fg)"
  },
  "colors.pink.outlined.border": {
    "value": "var(--colors-pink-outlined-border)",
    "variable": "var(--colors-pink-outlined-border)"
  },
  "colors.pink.outlined.hover.bg": {
    "value": "var(--colors-pink-outlined-hover-bg)",
    "variable": "var(--colors-pink-outlined-hover-bg)"
  },
  "colors.pink.outlined.hover.border": {
    "value": "var(--colors-pink-outlined-hover-border)",
    "variable": "var(--colors-pink-outlined-hover-border)"
  },
  "colors.pink.ghost.fg": {
    "value": "var(--colors-pink-ghost-fg)",
    "variable": "var(--colors-pink-ghost-fg)"
  },
  "colors.pink.ghost.hover.bg": {
    "value": "var(--colors-pink-ghost-hover-bg)",
    "variable": "var(--colors-pink-ghost-hover-bg)"
  },
  "colors.rose.filled.bg": {
    "value": "var(--colors-rose-filled-bg)",
    "variable": "var(--colors-rose-filled-bg)"
  },
  "colors.rose.filled.fg": {
    "value": "var(--colors-rose-filled-fg)",
    "variable": "var(--colors-rose-filled-fg)"
  },
  "colors.rose.filled.hover.bg": {
    "value": "var(--colors-rose-filled-hover-bg)",
    "variable": "var(--colors-rose-filled-hover-bg)"
  },
  "colors.rose.soft.bg": {
    "value": "var(--colors-rose-soft-bg)",
    "variable": "var(--colors-rose-soft-bg)"
  },
  "colors.rose.soft.fg": {
    "value": "var(--colors-rose-soft-fg)",
    "variable": "var(--colors-rose-soft-fg)"
  },
  "colors.rose.soft.hover.bg": {
    "value": "var(--colors-rose-soft-hover-bg)",
    "variable": "var(--colors-rose-soft-hover-bg)"
  },
  "colors.rose.outlined.fg": {
    "value": "var(--colors-rose-outlined-fg)",
    "variable": "var(--colors-rose-outlined-fg)"
  },
  "colors.rose.outlined.border": {
    "value": "var(--colors-rose-outlined-border)",
    "variable": "var(--colors-rose-outlined-border)"
  },
  "colors.rose.outlined.hover.bg": {
    "value": "var(--colors-rose-outlined-hover-bg)",
    "variable": "var(--colors-rose-outlined-hover-bg)"
  },
  "colors.rose.outlined.hover.border": {
    "value": "var(--colors-rose-outlined-hover-border)",
    "variable": "var(--colors-rose-outlined-hover-border)"
  },
  "colors.rose.ghost.fg": {
    "value": "var(--colors-rose-ghost-fg)",
    "variable": "var(--colors-rose-ghost-fg)"
  },
  "colors.rose.ghost.hover.bg": {
    "value": "var(--colors-rose-ghost-hover-bg)",
    "variable": "var(--colors-rose-ghost-hover-bg)"
  },
  "colors.slate.filled.bg": {
    "value": "var(--colors-slate-filled-bg)",
    "variable": "var(--colors-slate-filled-bg)"
  },
  "colors.slate.filled.fg": {
    "value": "var(--colors-slate-filled-fg)",
    "variable": "var(--colors-slate-filled-fg)"
  },
  "colors.slate.filled.hover.bg": {
    "value": "var(--colors-slate-filled-hover-bg)",
    "variable": "var(--colors-slate-filled-hover-bg)"
  },
  "colors.slate.soft.bg": {
    "value": "var(--colors-slate-soft-bg)",
    "variable": "var(--colors-slate-soft-bg)"
  },
  "colors.slate.soft.fg": {
    "value": "var(--colors-slate-soft-fg)",
    "variable": "var(--colors-slate-soft-fg)"
  },
  "colors.slate.soft.hover.bg": {
    "value": "var(--colors-slate-soft-hover-bg)",
    "variable": "var(--colors-slate-soft-hover-bg)"
  },
  "colors.slate.outlined.fg": {
    "value": "var(--colors-slate-outlined-fg)",
    "variable": "var(--colors-slate-outlined-fg)"
  },
  "colors.slate.outlined.border": {
    "value": "var(--colors-slate-outlined-border)",
    "variable": "var(--colors-slate-outlined-border)"
  },
  "colors.slate.outlined.hover.bg": {
    "value": "var(--colors-slate-outlined-hover-bg)",
    "variable": "var(--colors-slate-outlined-hover-bg)"
  },
  "colors.slate.outlined.hover.border": {
    "value": "var(--colors-slate-outlined-hover-border)",
    "variable": "var(--colors-slate-outlined-hover-border)"
  },
  "colors.slate.ghost.fg": {
    "value": "var(--colors-slate-ghost-fg)",
    "variable": "var(--colors-slate-ghost-fg)"
  },
  "colors.slate.ghost.hover.bg": {
    "value": "var(--colors-slate-ghost-hover-bg)",
    "variable": "var(--colors-slate-ghost-hover-bg)"
  },
  "colors.gray.bg": {
    "value": "var(--colors-gray-bg)",
    "variable": "var(--colors-gray-bg)"
  },
  "colors.gray.bgSubtle": {
    "value": "var(--colors-gray-bg-subtle)",
    "variable": "var(--colors-gray-bg-subtle)"
  },
  "colors.gray.bgMuted": {
    "value": "var(--colors-gray-bg-muted)",
    "variable": "var(--colors-gray-bg-muted)"
  },
  "colors.gray.bgBlush": {
    "value": "var(--colors-gray-bg-blush)",
    "variable": "var(--colors-gray-bg-blush)"
  },
  "colors.gray.border": {
    "value": "var(--colors-gray-border)",
    "variable": "var(--colors-gray-border)"
  },
  "colors.gray.borderSubtle": {
    "value": "var(--colors-gray-border-subtle)",
    "variable": "var(--colors-gray-border-subtle)"
  },
  "colors.gray.fg": {
    "value": "var(--colors-gray-fg)",
    "variable": "var(--colors-gray-fg)"
  },
  "colors.gray.fgSubtle": {
    "value": "var(--colors-gray-fg-subtle)",
    "variable": "var(--colors-gray-fg-subtle)"
  },
  "colors.zinc.bg": {
    "value": "var(--colors-zinc-bg)",
    "variable": "var(--colors-zinc-bg)"
  },
  "colors.zinc.bgSubtle": {
    "value": "var(--colors-zinc-bg-subtle)",
    "variable": "var(--colors-zinc-bg-subtle)"
  },
  "colors.zinc.bgMuted": {
    "value": "var(--colors-zinc-bg-muted)",
    "variable": "var(--colors-zinc-bg-muted)"
  },
  "colors.zinc.bgBlush": {
    "value": "var(--colors-zinc-bg-blush)",
    "variable": "var(--colors-zinc-bg-blush)"
  },
  "colors.zinc.border": {
    "value": "var(--colors-zinc-border)",
    "variable": "var(--colors-zinc-border)"
  },
  "colors.zinc.borderSubtle": {
    "value": "var(--colors-zinc-border-subtle)",
    "variable": "var(--colors-zinc-border-subtle)"
  },
  "colors.zinc.fg": {
    "value": "var(--colors-zinc-fg)",
    "variable": "var(--colors-zinc-fg)"
  },
  "colors.zinc.fgSubtle": {
    "value": "var(--colors-zinc-fg-subtle)",
    "variable": "var(--colors-zinc-fg-subtle)"
  },
  "colors.neutral.bg": {
    "value": "var(--colors-neutral-bg)",
    "variable": "var(--colors-neutral-bg)"
  },
  "colors.neutral.bgSubtle": {
    "value": "var(--colors-neutral-bg-subtle)",
    "variable": "var(--colors-neutral-bg-subtle)"
  },
  "colors.neutral.bgMuted": {
    "value": "var(--colors-neutral-bg-muted)",
    "variable": "var(--colors-neutral-bg-muted)"
  },
  "colors.neutral.bgBlush": {
    "value": "var(--colors-neutral-bg-blush)",
    "variable": "var(--colors-neutral-bg-blush)"
  },
  "colors.neutral.border": {
    "value": "var(--colors-neutral-border)",
    "variable": "var(--colors-neutral-border)"
  },
  "colors.neutral.borderSubtle": {
    "value": "var(--colors-neutral-border-subtle)",
    "variable": "var(--colors-neutral-border-subtle)"
  },
  "colors.neutral.fg": {
    "value": "var(--colors-neutral-fg)",
    "variable": "var(--colors-neutral-fg)"
  },
  "colors.neutral.fgSubtle": {
    "value": "var(--colors-neutral-fg-subtle)",
    "variable": "var(--colors-neutral-fg-subtle)"
  },
  "colors.stone.bg": {
    "value": "var(--colors-stone-bg)",
    "variable": "var(--colors-stone-bg)"
  },
  "colors.stone.bgSubtle": {
    "value": "var(--colors-stone-bg-subtle)",
    "variable": "var(--colors-stone-bg-subtle)"
  },
  "colors.stone.bgMuted": {
    "value": "var(--colors-stone-bg-muted)",
    "variable": "var(--colors-stone-bg-muted)"
  },
  "colors.stone.bgBlush": {
    "value": "var(--colors-stone-bg-blush)",
    "variable": "var(--colors-stone-bg-blush)"
  },
  "colors.stone.border": {
    "value": "var(--colors-stone-border)",
    "variable": "var(--colors-stone-border)"
  },
  "colors.stone.borderSubtle": {
    "value": "var(--colors-stone-border-subtle)",
    "variable": "var(--colors-stone-border-subtle)"
  },
  "colors.stone.fg": {
    "value": "var(--colors-stone-fg)",
    "variable": "var(--colors-stone-fg)"
  },
  "colors.stone.fgSubtle": {
    "value": "var(--colors-stone-fg-subtle)",
    "variable": "var(--colors-stone-fg-subtle)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-120": {
    "value": "calc(var(--spacing-120) * -1)",
    "variable": "var(--spacing-120)"
  },
  "spacing.-144": {
    "value": "calc(var(--spacing-144) * -1)",
    "variable": "var(--spacing-144)"
  },
  "spacing.-160": {
    "value": "calc(var(--spacing-160) * -1)",
    "variable": "var(--spacing-160)"
  },
  "spacing.-192": {
    "value": "calc(var(--spacing-192) * -1)",
    "variable": "var(--spacing-192)"
  },
  "spacing.-224": {
    "value": "calc(var(--spacing-224) * -1)",
    "variable": "var(--spacing-224)"
  },
  "spacing.-256": {
    "value": "calc(var(--spacing-256) * -1)",
    "variable": "var(--spacing-256)"
  },
  "spacing.-288": {
    "value": "calc(var(--spacing-288) * -1)",
    "variable": "var(--spacing-288)"
  },
  "spacing.-320": {
    "value": "calc(var(--spacing-320) * -1)",
    "variable": "var(--spacing-320)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--shadows-2xl)",
    "variable": "var(--shadows-2xl)"
  },
  "shadows.inner": {
    "value": "var(--shadows-inner)",
    "variable": "var(--shadows-inner)"
  },
  "shadows.inset": {
    "value": "var(--shadows-inset)",
    "variable": "var(--shadows-inset)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.20": {
    "value": "var(--colors-color-palette-20)",
    "variable": "var(--colors-color-palette-20)"
  },
  "colors.colorPalette.30": {
    "value": "var(--colors-color-palette-30)",
    "variable": "var(--colors-color-palette-30)"
  },
  "colors.colorPalette.40": {
    "value": "var(--colors-color-palette-40)",
    "variable": "var(--colors-color-palette-40)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.60": {
    "value": "var(--colors-color-palette-60)",
    "variable": "var(--colors-color-palette-60)"
  },
  "colors.colorPalette.70": {
    "value": "var(--colors-color-palette-70)",
    "variable": "var(--colors-color-palette-70)"
  },
  "colors.colorPalette.80": {
    "value": "var(--colors-color-palette-80)",
    "variable": "var(--colors-color-palette-80)"
  },
  "colors.colorPalette.90": {
    "value": "var(--colors-color-palette-90)",
    "variable": "var(--colors-color-palette-90)"
  },
  "colors.colorPalette.95": {
    "value": "var(--colors-color-palette-95)",
    "variable": "var(--colors-color-palette-95)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.surface": {
    "value": "var(--colors-color-palette-surface)",
    "variable": "var(--colors-color-palette-surface)"
  },
  "colors.colorPalette.inverted": {
    "value": "var(--colors-color-palette-inverted)",
    "variable": "var(--colors-color-palette-inverted)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--colors-color-palette-emphasized)",
    "variable": "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.headline": {
    "value": "var(--colors-color-palette-headline)",
    "variable": "var(--colors-color-palette-headline)"
  },
  "colors.colorPalette.focus": {
    "value": "var(--colors-color-palette-focus)",
    "variable": "var(--colors-color-palette-focus)"
  },
  "colors.colorPalette.hover": {
    "value": "var(--colors-color-palette-hover)",
    "variable": "var(--colors-color-palette-hover)"
  },
  "colors.colorPalette.pressed": {
    "value": "var(--colors-color-palette-pressed)",
    "variable": "var(--colors-color-palette-pressed)"
  },
  "colors.colorPalette.filled.bg": {
    "value": "var(--colors-color-palette-filled-bg)",
    "variable": "var(--colors-color-palette-filled-bg)"
  },
  "colors.colorPalette.bg": {
    "value": "var(--colors-color-palette-bg)",
    "variable": "var(--colors-color-palette-bg)"
  },
  "colors.colorPalette.filled.fg": {
    "value": "var(--colors-color-palette-filled-fg)",
    "variable": "var(--colors-color-palette-filled-fg)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--colors-color-palette-fg)",
    "variable": "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.filled.hover.bg": {
    "value": "var(--colors-color-palette-filled-hover-bg)",
    "variable": "var(--colors-color-palette-filled-hover-bg)"
  },
  "colors.colorPalette.hover.bg": {
    "value": "var(--colors-color-palette-hover-bg)",
    "variable": "var(--colors-color-palette-hover-bg)"
  },
  "colors.colorPalette.soft.bg": {
    "value": "var(--colors-color-palette-soft-bg)",
    "variable": "var(--colors-color-palette-soft-bg)"
  },
  "colors.colorPalette.soft.fg": {
    "value": "var(--colors-color-palette-soft-fg)",
    "variable": "var(--colors-color-palette-soft-fg)"
  },
  "colors.colorPalette.soft.hover.bg": {
    "value": "var(--colors-color-palette-soft-hover-bg)",
    "variable": "var(--colors-color-palette-soft-hover-bg)"
  },
  "colors.colorPalette.outlined.fg": {
    "value": "var(--colors-color-palette-outlined-fg)",
    "variable": "var(--colors-color-palette-outlined-fg)"
  },
  "colors.colorPalette.outlined.border": {
    "value": "var(--colors-color-palette-outlined-border)",
    "variable": "var(--colors-color-palette-outlined-border)"
  },
  "colors.colorPalette.border": {
    "value": "var(--colors-color-palette-border)",
    "variable": "var(--colors-color-palette-border)"
  },
  "colors.colorPalette.outlined.hover.bg": {
    "value": "var(--colors-color-palette-outlined-hover-bg)",
    "variable": "var(--colors-color-palette-outlined-hover-bg)"
  },
  "colors.colorPalette.outlined.hover.border": {
    "value": "var(--colors-color-palette-outlined-hover-border)",
    "variable": "var(--colors-color-palette-outlined-hover-border)"
  },
  "colors.colorPalette.hover.border": {
    "value": "var(--colors-color-palette-hover-border)",
    "variable": "var(--colors-color-palette-hover-border)"
  },
  "colors.colorPalette.ghost.fg": {
    "value": "var(--colors-color-palette-ghost-fg)",
    "variable": "var(--colors-color-palette-ghost-fg)"
  },
  "colors.colorPalette.ghost.hover.bg": {
    "value": "var(--colors-color-palette-ghost-hover-bg)",
    "variable": "var(--colors-color-palette-ghost-hover-bg)"
  },
  "colors.colorPalette.bgSubtle": {
    "value": "var(--colors-color-palette-bg-subtle)",
    "variable": "var(--colors-color-palette-bg-subtle)"
  },
  "colors.colorPalette.bgMuted": {
    "value": "var(--colors-color-palette-bg-muted)",
    "variable": "var(--colors-color-palette-bg-muted)"
  },
  "colors.colorPalette.bgBlush": {
    "value": "var(--colors-color-palette-bg-blush)",
    "variable": "var(--colors-color-palette-bg-blush)"
  },
  "colors.colorPalette.borderSubtle": {
    "value": "var(--colors-color-palette-border-subtle)",
    "variable": "var(--colors-color-palette-border-subtle)"
  },
  "colors.colorPalette.fgSubtle": {
    "value": "var(--colors-color-palette-fg-subtle)",
    "variable": "var(--colors-color-palette-fg-subtle)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar