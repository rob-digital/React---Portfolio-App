import React, {Component} from 'react';

class _10Jokes extends Component {

    state= { jokes: []};

 

    fetchData = () => {

    fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }
    render() {
        return (
            <div>  
                
                 <button onClick={this.fetchData}>Fetch more Jokes</button>

                <div >
                {this.state.jokes.map(joke1 => {
                    return(
                        <SingleJoke key={joke1.id} fetchJoke={joke1} />
                    )
                })}
            </div>
            </div>
        )
    }

}


const  SingleJoke = props =>  {
  
        const {setup, punchline} = props.fetchJoke;

        return (
            <div style={{width: '30%', border: 'solid 1px black', display: 'inline-block', height: '100%'}}>
                
                <p>{setup}</p> => <em><p>{punchline}</p></em><hr/>
            </div>
        )
    
}
export default _10Jokes;