/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   swcPlugins: [["next-superjson-plugin", {}]],
  // },
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "dl.dropboxusercontent.com",
      "icon2.cleanpng.com",
    ],
  },
};

module.exports = nextConfig;
