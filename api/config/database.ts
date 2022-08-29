export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'server.simplifysoftwares.com.br'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'simplify_geradorrpg'),
      user: env('DATABASE_USERNAME', 'simplify_gerador'),
      password: env('DATABASE_PASSWORD', '3Y7zyPfjkn9e'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
