import React from 'react';

function CharacterCard(props) {
    const { character } = props;
  
    return (
        <div >
            <img src= {"https://minotar.net/avatar/"+character+"/25.png"} alt={character}/>
          {character}
        </div>
    );
  }

class status extends React.Component{

    state = {
        loading: true,
        error: null,
        data: {
            Playerlist: []
        },
    };

    componentDidMount(){
        this.fetchCharacters();

        this.intervalId = setInterval(this.fetchCharacters, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
      }

    fetchCharacters = async () =>{
        this.setState({loading: true, error: null})

        try{
        const response = await fetch('https://api.minetools.eu/query/ecmods.craft.gg/25565');

        const data = await response.json();

        this.setState({
            loading: false,
            data: data,
        });
    } catch(error){
        this.setState({
            loading: false,
            error: error,
        });
    }
    };

    render(){
        return(
        <ul class="list-group">
                {this.state.data.Playerlist.map(character =>(
                    <li class="list-group-item" key={character.id}>
                        <CharacterCard character={character}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default status;