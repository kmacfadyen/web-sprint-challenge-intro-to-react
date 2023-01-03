// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    return (
        <div>
            {props.charName.map((idx) => {
                console.log(idx);
                return <CharacterCard key1={idx.name} character1={idx} />
            })}
{console.log(props.charName)};
        </div>
    )
}

const CharacterCard = ({ key1, character1 }) => {
                {console.log(character1)}

    return (
        <div>
            <ol>
                <h3>{key1}</h3>
               
            </ol>
        </div>
    )
}

export default Character;