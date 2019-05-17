var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carroSchema = new Schema({
  marca: String,
  ano: Number,
  valor: Number
});

var Carro = mongoose.model("carro", carroSchema);

module.exports = Carro;
