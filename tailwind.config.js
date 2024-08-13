/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '92': '23rem', // กำหนดความกว้าง 92 หน่วย (23rem)
      },
      height: {
        '92': '23rem', // กำหนดความสูง 32 หน่วย (8rem)
      },
      boxShadow: {
        'custom-right-bottom': '10px 10px 20px rgba(0, 0, 0, 0.5)',
        'custom-right-bottom-2': '12px 12px 22px rgba(0, 0, 0, 0.6)',
        'text-right-bottom': '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },
      
      //  ANIMATION
       
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 2s ease-in-out forwards',
      },
      spacing: {
        '42': '10.5rem',
        '41' : '10rem', // กำหนด top-42 เป็น 10.5rem (หรือค่าที่ต้องการ)
      },
    
      
    },
  },
  plugins: [],
}

