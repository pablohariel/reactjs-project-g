const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    isAAA: {
        type: Boolean
    },
    image: {
        type: String
    },
    imagePoster: {
        type: String
    },
    url: {
        type: String
    },
    protections: {
        type: [String]
    },
    releaseDate: {
        type: String
    },
    stores: {
        type: [{ name: String, url: String }]
    }

});

module.exports = mongoose.model('Game', GameSchema);