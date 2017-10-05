import React from 'react';
class Pokemon extends React.Component{
    render(){
      return( 
            <div className="pokemon-1">
              <div className="pokemon-2">  
                <img src={require(`../.././PokemonImg/${this.props.id}.png`)} alt="pokemanImg" />
                <strong style={{fontSize:'2vw'}}> {this.props.Pokemon.name} </strong>
              </div>
            </div>
            );
      }
  }
  export default Pokemon;