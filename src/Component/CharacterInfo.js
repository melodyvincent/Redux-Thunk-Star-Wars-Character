import React, {Component} from 'react';

const CharacterInfo = props => {
    return (
    
        <div className="character-info">
            <div className='avatar'>
                <img src={props.character.avatar_url}
                alt="avatar" widt='250px' />

            </div>
        </div>
    )
} 

export default CharacterInfo;