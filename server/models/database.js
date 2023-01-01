const mongoose = require('mongoose');
mongoose.connect("mongodb://sawsan_185:StEmStEm185@ac-rsktuaw-shard-00-00.uoqgpaz.mongodb.net:27017,ac-rsktuaw-shard-00-01.uoqgpaz.mongodb.net:27017,ac-rsktuaw-shard-00-02.uoqgpaz.mongodb.net:27017/?ssl=true&replicaSet=atlas-bsubl9-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});
// Models
require('./Category');
require('./Recipe');