// /** @type {import('next').NextConfig} */
// // const path = require("path")
// // const withImagesAndTM = require("next-images", "next-transpile-modules")

// // const withTM = require("next-transpile-modules")
// // require("dotenv").config({ path: `../../.env.${process.env.NODE_ENV}` })
// // const { INSTAGRAM_ACCESS_TOKEN, DEPLOYMENT_ENV = "production" } = process.env
// // if (INSTAGRAM_ACCESS_TOKEN === undefined) {
// //   console.error("INSTAGRAM_ACCESS_TOKEN is not set")
// //   process.exit(1)
// // }

// //toto je správně
// // const withImages = require("next-images")

// // const nextConfig = {
// //   reactStrictMode: true,
// //   swcMinify: true,
// //   env: {},
// // }

// // module.exports = nextConfig

// // module.exports = withImages({
// //   exclude: path.resolve(__dirname, "/public/icons"),
// //   images: {
// //     disableStaticImages: true,
// //   },
// //   webpack(config) {
// //     return config
// //   },
// // })



// //potřebuju
// const compose = require('next-compose')
// const path = require("path")
// const withTM = require("next-transpile-modules")(["@next/vedlejsi"])
// //const withImages = require("next-images")
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,

//   env: {},
// }

// module.exports = compose([
//   [withImages, {
//     fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
//     // exclude: path.resolve("**/public/icons"),
//   }],
//   [withTM],
//   {
//     webpack(config) {
//       return config
//     },
//   }
// ])

// pokus 2
const withTM = require("next-transpile-modules")(["@next/vedlejsi"])
module.exports = withTM({
  images: {disableStaticImages: true},
})
