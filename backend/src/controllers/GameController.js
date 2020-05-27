const axios = require('axios');
const Game = require('../models/Game');

module.exports = {
    async index(req, res) {
        try {
            const { sort_by, limit } = req.query;
            var games;
            if(sort_by == 'releasedate') {
                if(limit) {
                    games = await Game.find().sort({releaseDate: -1}).limit(parseInt(limit));
                } else {
                    games = await (await Game.find().sort('releaseDate')).reverse();
                }
            } else {
                games = await Game.find();
            }
            return res.json(games);
        } catch(err) {
            return res.status(404).json(err);
        }   
    },
    async create(req, res) {
        const { title, isAAA, image, imagePoster, releaseDate, slug, protections } = req.body;
        try {
            const game = await Game.findOne({ title: title });
            if(game) {
                throw 'Game already exists'
            }
            const response = await Game.create({
                title,
                isAAA,
                image,
                imagePoster,
                releaseDate,
                url: '/games/' + slug,
                protections
            });
            return res.status(200).send(response);
        } catch(err) {
            return res.status(400).json(err);
        }
        
    },
    async createFromApi(req, res) {
        const { page } = req.query;
        try {
            const response =  await axios('https://api.crackwatch.com/api/games?page=' + page + '&is_released=true');
            const games = response.data;

            const games_add = await games.map( async game => {
                const { title, isAAA, image, imagePoster, releaseDate, slug, protections } = game;
                const gameCheck = await Game.findOne({ title: title });
                if(gameCheck) {
                    console.log('Game ' + title + ' already exists');
                } else {
                    const gameCreated = await Game.create({
                        title,
                        isAAA,
                        image,
                        imagePoster,
                        releaseDate,
                        url: '/games/' + slug,
                        protections
                    });
                    console.log('Game ' + title + ' created');
                }
            });
            return res.status(204).send();
        } catch(err) {
            return res.status(400).json(err);
        }        
    },
    async update(req, res) {
        const { id } = req.params;
        const { title, isAAA, image, imagePoster, releaseDate, slug, protections } = req.body;
        try {
            const game = await Game.findById(id);
            if(!game){
                throw 'Game not found';
            }
            await Game.findByIdAndUpdate(id, {
                title,
                isAAA,
                image,
                imagePoster,
                releaseDate,
                url: '/games/' + slug,
                protections
            });
            return res.status(200).send(game);
        } catch(err) {
            return res.status(400).json(err);
        }

    },
    async delete(req, res) {
        const { id } = req.params;
        try {
            const game = await Game.findById(id);
            if(!game){
                throw 'Game not found';
            }
            await Game.remove({ _id: id });
            return res.status(200).send(game);
        } catch(err) {
            return res.status(404).json(err);
        }
    }
}