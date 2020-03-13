import React from 'react';

function CharacterCard(props) {
    const { character } = props;
  
    return (//"display: inline-block;"
        <a data-placement="top" rel="tooltip" style={{display: "inline-block"}} title="" href>
            <img src= {"https://minotar.net/avatar/"+character+"/50.png"} alt={character} data-toggle="tooltip" data-placement="bottom" title={character} style={{width: "40px", height: "40px", marginBottom: "5px", marginRight: "5px", borderRadius: "3px"}}/>
        </a>
    );
  }

class query extends React.Component{

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
        return(//style="font-size:0px;
            <div class="span8" style={{fontSize: "0px"}}>
                {this.state.data.Playerlist && this.state.data.Playerlist.map(character =>(
                    
                        <CharacterCard character={character}/>
                    
                ))}
                {this.state.data.Playerlist ? '' : 'No hay judadores conectados'}
                
            </div>
        )
    }
}

export default query;