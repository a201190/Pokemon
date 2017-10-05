import React from 'react';
import fetch from 'isomorphic-fetch';
import Pokemon from '.././Pokemon'
import PokemonSearch from '.././PokemonSearch';
class PokemonList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data : [],
        fetched : false,
        loading : false,
      };
    }
   async componentWillMount(){
      this.setState({
        loading : true
      });
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
      .then(response=>{
        this.setState({
          data : response.results,
          loading : true,
          fetched : true
        });
      });
    }
    render(){
      let content ;
      if(this.state.fetched){
        content =
        [
       <PokemonSearch key="i" Pokemon={this.state.data.map((pokemon)=>{return pokemon.name})}
         data={this.state.data.map((data)=>{return data})}/>,
        <div className="pokemon-3" key="2">
          {this.state.data.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} Pokemon={pokemon}/>)}
          </div>
        ];
      }else if(this.state.loading && !this.state.fetched){
          content = <div className="loader"></div>;
      }
      return (
          <div>
            {content}
          </div>
        );
    }
  }
  export default PokemonList;