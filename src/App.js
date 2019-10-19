import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfile from './Social';
import VideoFile from './data/video';
import profile from './assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Tilte';
import Jokes from './components/Jokes';
import _10Jokes from './components/10Jokes';


class App extends Component {
//     constructor() {
//         super();
//         this.state = { displayBio: false};

//         // Component 'this' ia the App
//         // other functions need acces to 'this ', because they can not create their own state
//         // solution is using 'bind' method as bellow
//         console.log('Component this: ', this );


//         // function toggleDisplayBio has access to this object because of the ' bind method'
//         this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
//     }

//    toggleDisplayBio() {
//        this.setState({ displayBio: !this.state.displayBio });
//    }

state = { displayBio: false, jokes: []};

 fetchData = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(json => this.setState({jokes: json}))
} 

toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
}

    render() {

        return ( 
        <div>

            <div className="rightMedia">
              <FontAwesomeIcon 
              icon={faPlayCircle} 
              onClick={this.playVideo}
              size="6x" />
              </div>


            <img 
             //ref={el => {imgItem = el}}
            src={profile} 
            style={{width: '300px', 'border-radius': '100%'}}/>
            <h1 > Hello World </h1> 
            <p> My name is Robert </p>
             <Title/> 
            {
            this.state.displayBio ? ( 
                <div>                
                    <Title/>
                    <p>... full of passion and commitment</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
                )  : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
            }
             
              <hr/>
               <Projects/>
              <SocialProfile/>
            
              <Jokes/>
              <hr/>
                   
              <_10Jokes/>
        </div>
        ) 
    }
    
 
}

export default App;