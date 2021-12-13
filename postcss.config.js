module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('cssnano')
      : null,
  ]
}