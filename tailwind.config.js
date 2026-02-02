/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",   // blue-600 (same)
          secondary: "#3B82F6", // blue-500
          muted: "#DBEAFE",     // blue-100

          // Dark accents (same hue, softer)
          primaryDark: "#3B82F6",
          mutedDark: "#1E3A8A", // blue-900 toned
        },

        surface: {
          // Light
          base: "#FFFFFF",
          subtle: "#F9FAFB",
          elevated: "#FFFFFF",

          // Dark (premium)
          darkBase: "#0B1220",      // deep navy (NOT pure black)
          darkSubtle: "#0F172A",    // slate-900
          darkElevated: "#111827",  // gray-900
        },

        text: {
          // Light
          primary: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",

          // Dark
          darkPrimary: "#E5E7EB",   // gray-200
          darkSecondary: "#9CA3AF", // gray-400
          darkMuted: "#6B7280",     // gray-500
        },

        border: {
          // Light
          default: "#E5E7EB",
          focus: "#3B82F6",

          // Dark
          darkDefault: "#1F2937", // gray-800
          darkFocus: "#60A5FA",   // blue-400
        },

        status: {
          success: "#22C55E",
          danger: "#EF4444",
          warning: "#EAB308",

          // Dark (slightly softer)
          successDark: "#16A34A",
          dangerDark: "#DC2626",
          warningDark: "#CA8A04",
        },
      },
    },
  },
  plugins: [],
};
