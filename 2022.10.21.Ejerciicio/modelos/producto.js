var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type : String,required: true , max: 150},
    tipo: {type : Number,required: true , max: 99}
});

module.exports = mongoose.model('producto', ProductoSchema);