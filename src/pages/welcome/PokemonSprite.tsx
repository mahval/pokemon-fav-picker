import React from 'react'

interface PokemonSpriteProps {
    pokemonUrl: string
}
const PokemonSprite = ({ pokemonUrl }: PokemonSpriteProps) => (
    <img src={pokemonUrl} alt={pokemonUrl} />
)

export default PokemonSprite
