const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/recenzje-produktow';

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db();
    console.log('Połączono z bazą danych MongoDB');
    return db;
  } catch (error) {
    console.error('Błąd połączenia z bazą danych:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
