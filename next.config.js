/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent Desktop/package-lock.json made Turbopack pick the wrong root.
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
