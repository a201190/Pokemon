import React from 'react';
class PokemonSearch extends React.Component{
    constructor() {
        super();
        this.state = {
          search: ''
        }
      }
      updateSearch(event) {
        this.setState({
         search: event.target.value
        });
      }
    render(){
        let FilterPokemon=this.props.data.filter((data)=>{ 
            let FilterData;
          if(this.state.search)
            {
                FilterData=data.name.includes(this.state.search);
            }
            else {
                FilterData='Pokemon not available'
            }
            return FilterData
        })
        return(
            <div>
                <div>
                    <input className="SearchPokemon" type="search" placeholder="search pokemon" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </div>
                <div className="pokemon-3">
                {FilterPokemon.map((data,i) => {
            return (
                    <div className="pokemon-1" key={i}>
                        <div className="pokemon-2">  
                            <img src={require(`../.././PokemonImg/${i+1}.png`)} alt="pokemanImg" />
                            <h3> {data.name} </h3>
                        </div>
                    </div>
                    );
                })}
                
                </div>
            </div>
        );
    }
}
export default PokemonSearch;