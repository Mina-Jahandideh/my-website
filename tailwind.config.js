/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.html",
  "./public/*.html",
  "./public/pages/*.html",
  "./src/**/*.js", // اگر js داری
  "./scripts/**/*.js"],

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0,0,0,0.05)"
      },
      variants: {
        extend: {
          divideColor: ['group-hover'],
        }
      },
      
    },
  },
  plugins: [
    function({ addVariant}) {
      addVariant("child" , "&>*")
      addVariant("child-hover" , "&>*:hover")
    },
   
  ],
   safelist: [
    'rotate-180',
    // هر کلاس دیگه‌ای که فقط دینامیک اضافه می‌کنی
  ],
}


