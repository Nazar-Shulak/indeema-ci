module.exports = ({ env }) => ({
    host: env('HOST', 'localhost'),
    port: env.int('PORT', 1338),
    admin:{
        auth:{
            secret: env('ADMIN_JWT_SECRET', '92e096b0dd7b57921e9d0a17d47728f9')
        },
        autoOpen: false
    },
    proxy: env.bool('IS_PROXIED', true),
    cron: {
      enabled: env.bool('CRON_ENABLED', false),
    },
  });
        
