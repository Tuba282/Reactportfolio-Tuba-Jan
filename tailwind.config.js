export default {
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s linear 1.0s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
};
