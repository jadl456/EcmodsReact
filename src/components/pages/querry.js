import React from 'react';

function CharacterCard(props) {
    const { character } = props;
  
    return (
        <a data-placement="top" rel="tooltip" style={{display: "inline-block", fontSize: "2px"}} title={character} href>
            <img src= {"https://minotar.net/avatar/"+character+"/50.png"} alt={character} data-toggle="tooltip" data-placement="bottom" title={character} style={{width: "40px", height: "40px", marginBottom: "5px", marginRight: "5px", borderRadius: "3px"}}/>
        </a>
    );
  }

class Querry extends React.Component{

    state = {
        loading: true,
        error: null,
        data: {
            Playerlist: []
        },
    };

    componentDidMount(){
        this.fetchCharacters();

        this.intervalId = setInterval(this.fetchCharacters, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
      }

    fetchCharacters = async () =>{
        this.setState({loading: true, error: null})

        try{
        const response = await fetch('https://api.minetools.eu/query/mc.ecmods.com/25565');

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
        return(//style="font-size:0px;
            <div class="my-2">
                {this.state.data.Playerlist && this.state.data.Playerlist.map(character =>(
                    
                        <CharacterCard character={character.toString()}/>
                    
                ))}
                {this.state.data.Playerlist ? '' : 'No hay judadores conectados'}
                
            </div>
            
        )
    }
}

export default Querry;