/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Keneats`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  // {
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": "CFPAT-_sZx2kUzJuKhQvm2Ju5EFgdh7wwT2T2Z57KCHgwqxP8",
  //     "spaceId": "5i2f86b9dc37"
  //   }
  // }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-emotion", 
  "gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};