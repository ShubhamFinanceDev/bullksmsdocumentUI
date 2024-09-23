module.exports = {

  apps: [

    {

      name: 'bulk-sms-app',

      script: 'node_modules/next/dist/bin/next',

      args: 'start',

      instances: 1,

      autorestart: true,

      watch: false,

      max_memory_restart: '4G',

      env: {

        NODE_ENV: 'uat',

        PORT: 3300

      },

    },

  ],
};
