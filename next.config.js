const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "dl.dropboxusercontent.com",
      "icon2.cleanpng.com",
    ],
  },
  webpack: (config, { isServer }) => {
    config.externals = [...config.externals, "bcrypt"];
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }

    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
