const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cea0i994reb52upbe17g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi-test'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'F8gqIMeH05fhSW08fJ5jPWjM6ECiL20t'),
      ssl: {
        ca: fs.readFileSync(`${__dirname}/certificate/rds-ca-2019-root.pem`).toString(),
      },
    },
    useNullAsDefault: true,
  },
});
