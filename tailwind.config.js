// tailwind.config.js
module.exports = {
  // ... other configurations
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Adjust based on duplicated content
        },
      },
      animation: {
        "scroll-left": "scroll-left linear infinite 15s", // Adjust duration as needed
      },
    },
  },
  // ... other configurations
};
