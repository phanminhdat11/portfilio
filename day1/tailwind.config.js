module.exports = {
  content: ['./src/**/*.{html,js}'], // Các file cần quét để giữ lại CSS
  theme: {
    extend: {
      // Customization nằm trong phần này
      height: {
        '400px': '500px',
      },

    },
  },
  plugins: [],
}
