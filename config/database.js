module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cea0i994reb52upbe17g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_qt26'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'F8gqIMeH05fhSW08fJ5jPWjM6ECiL20t'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    useNullAsDefault: true,
  },
});
