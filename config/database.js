const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'strapi-database.cfvfjkkyjya9.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Postgres810'),
      ssl: {
        ca: fs.readFileSync(`${__dirname}/certificate/rds-ca-2019-root.pem`).toString(),
      },
    },
    useNullAsDefault: true,
  },
});
