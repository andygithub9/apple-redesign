/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // body 這個 key 是自定義的名稱，可以用 font-body 來訪問這個自定義的字體
        // 自定義名稱: ["字體名稱", "字體名稱", "字體名稱"...]
        body: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
