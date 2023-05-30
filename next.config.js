/** @type {import('next').NextConfig} */
let assetPrefix = '';
let basePath = '';

if (process.env.GITHUB_ACTIONS) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix,
  basePath,
  images: { unoptimized: true },
  output: 'export',
};

module.exports = nextConfig;
