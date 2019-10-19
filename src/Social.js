import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';



class Socials extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h3>Social Media</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
                            return (
                                <OneSocialItem key={SOCIAL_PROFILE.id} social={SOCIAL_PROFILE} />
                            )
                        })
                    }
                </div>
                <hr/>
            </div>
        )
    }
}

class OneSocialItem extends Component {
    render() {
        const { title, image, link } = this.props.social;

        return(
            <div style={{display: 'inline-block', width: '300', margin: '10px'}}>
                <h3>{title}</h3>
                <div><img src={image} style={{width: '50px', 'margin': '0 auto'}}/></div>
                <div>{link}</div>
            </div>
        )
    }
}

export default Socials;