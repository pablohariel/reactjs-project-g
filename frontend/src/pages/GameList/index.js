import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../Header';

import api from '../../services/api';
import './styles.css';

export default function GameList() {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        api.get('games').then(response => {
            setGames(response.data);
        })
    }, []);

    async function handleDeleteGame(id) {
        try {
            api.delete(`games/${id}`);
            setGames(games.filter(game => game.id !== id));
        } catch(err) {
            alert('Error when deleting game');
        }
    }

    return (
        <main>
            <Header />
            <div className="border-first">
                <p>Last games</p>
                
                <div className="search">
                    <input placeholder="Search..." /> 
                    <button>
                        <FiSearch />
                    </button>
                </div>
                
            </div>
            <div className="games-container">
                <ul>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/9egutdn4h.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/crqp650s4.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/yjl7yme7m.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/p220ch08i.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/zklflylw1.jpg" title="Game name" /></a></li>
                    
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/t47qgwjtk.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/wq302jxqx.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/hxzmxbq0n.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/pny832kza.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/96wmzb404.jpg" title="Game name" /></a></li>
                    
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/qrgcx6x8q.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/wuda9zqlz.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/fnppp2ys0.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/776v8zv05.jpg" title="Game name" /></a></li>
                    <li><a href="https//:www.google.com"><img src="https://b2.crackwatch.com/file/crackwatch-temp/pbqb6wqfx.jpg" title="Game name" /></a></li>
                    {games.map(game => (
                        <li>
                            <a href={game.link_steam}><img src={game.img_url} title={game.title} /></a>
                            {/* <button onClick={() => handleDeleteGame(game.id)} type="button">
                                Delete
                            </button> */}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <p>@pablohariel</p>
            </div>
        </main>
        
    );
}