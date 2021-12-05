const mongoose = require('mongoose');

exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBSERVER}/${process.env.DATABASE}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`;

  // conexion a mongo db
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    'error',
    console.error.bind(console, 'Mongobd connection error'),
  );
  dbConnection.once(
    'open',
    () => { console.log('Connected o MongoDB'); },
  );
};
