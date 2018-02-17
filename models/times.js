const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let TimesSchema = new Schema({
    nome: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Times', TimesSchema);