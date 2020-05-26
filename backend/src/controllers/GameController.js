const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const games = await connection('games').select('*');
            return res.json(games);
        } catch(err) {
            return res.status(404).send();
        }
        
    },
    async create(req, res) {
        const { title, developer, release_date, link_steam, link_torrent, img_url, genre } = req.body;
        try {
            const response = await connection('games').insert({
                title,
                developer,
                release_date,
                link_steam,
                link_torrent,
                img_url,
                genre
            });
            return res.status(204).send();
        } catch(err) {
            return res.status(400).send();
        }
        
    },
    async update(req, res) {
        const { id } = req.params;
        const { title, developer, release_date, link_steam, link_torrent, img_url, genre } = req.body;
        try {
            const game = await connection('games').where('id', id).select('*').first();
            if(!game){
                throw 'Game undefined';
            }
            await connection('games').where('id', id).update({
                title,
                developer,
                release_date,
                link_steam,
                link_torrent,
                img_url,
                genre
            });
            return res.status(204).send();
        } catch(err) {
            return res.status(400).send();
        }

    },
    async delete(req, res) {
        const { id } = req.params;
        try {
            const game = await connection('games').where('id', id).select('*').first();
            if(!game){
                throw 'Game undefined';
            }
            await connection('games').where('id', id).delete();
            return res.status(204).send();
        } catch(err) {
            return res.status(404).send();
        }
    }
}