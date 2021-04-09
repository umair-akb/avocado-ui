module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth DOC Starter',
        description: 'Use your own description...',
        siteUrl: 'https://example.com',
        sections: ['Getting-Started', 'Open-Source', 'Components']
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`space-grotesk`],
        display: 'swap'
      }
    }
  ]
}
