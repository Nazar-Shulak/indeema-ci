module.exports = () => ({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 1338,
    admin:{
        auth:{
            secret: process.env.JWT_SECRET || 'aafca602-8a10-4d0e-b683-ccd6e293c011'
        },
        autoOpen: false
    },
    proxy: process.env.IS_PROXIED || true,
    cron: {
      enabled: process.env.CRON_ENABLED || false
    }
  });
