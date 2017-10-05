import React from 'react';
import './index.scss';
import PokemonList from './../Components/PokemonList';
class Home extends React.Component{
  render(){
    return (
    <div className="pokeapp">
      <PokemonList />
    </div>);
  }
}
export default Home
