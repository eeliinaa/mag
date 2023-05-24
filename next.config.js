const nextConfig = {
  reactStrictMode: true,
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'lms',
    'MYSQL_USER': 'lms',
    'MYSQL_PASSWORD': 'ud4D1q?85',
  },

  output: 'export',
  // distDir: '_static',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
