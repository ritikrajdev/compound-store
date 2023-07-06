module.exports = {
  'username': process.env.MYSQL_USER || 'root',
  'password': process.env.MYSQL_PASSWORD || null,
  'database': process.env.MYSQL_DATABASE || 'compound',
  'host': process.env.MYSQL_HOST ||'127.0.0.1',
  'port': process.env.MYSQL_PORT || '3306',
  'dialect': 'mysql',
};