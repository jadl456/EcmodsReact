import React from 'react';

// function CharacterCard(props) {
//     const { character } = props;
  
//     return (
//         <div >
//             <img src= {"https://minotar.net/avatar/"+character+"/25.png"} alt={character}/>
//           {character}
//         </div>
//     );
//   }

class List extends React.Component{

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
        return(
        <div>
           {this.state.data.Players ? <h4>Jugadores conectados: {this.state.data.Players}/{this.state.data.MaxPlayers}</h4> : <h4>No hay judadores conectados</h4>}       
        </div>
        )
    }
}

export default List;