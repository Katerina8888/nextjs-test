/** @type {import('next').NextConfig} */
// const path = require("path")
// const withImagesAndTM = require("next-images", "next-transpile-modules")

// const withTM = require("next-transpile-modules")
// require("dotenv").config({ path: `../../.env.${process.env.NODE_ENV}` })
// const { INSTAGRAM_ACCESS_TOKEN, DEPLOYMENT_ENV = "production" } = process.env
// if (INSTAGRAM_ACCESS_TOKEN === undefined) {
//   console.error("INSTAGRAM_ACCESS_TOKEN is not set")
//   process.exit(1)
// }

const withImages = require("next-images")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
}

module.exports = nextConfig

module.exports = withImages({
  exclude: path.resolve(__dirname, "/public/icons"),
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    return config
  },
})



// const withTM = require("next-transpile-modules")(["@igloonet-web/shared-ui"])
// module.exports = withTM({})