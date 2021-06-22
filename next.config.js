module.exports = {
  async redirects() {
    return [
      {
        source: '/venue/list',
        has: [
          {
            type: 'query',
            key: 'event',
            value: '(?<eventQuery>.*)',
          }
        ],
        permanent: false,
        destination: 'https://venue.bmssearch.net/:eventQuery*?'
      },
    ]
  },
}