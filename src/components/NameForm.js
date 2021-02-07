import React from 'react';
import Container from '@material-ui/core/Container';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            sendername:'',
            link: 'https://areyoumad.netlify.app/welcomepage'
        }
    }

    _updateField = (field, val) => {
        this.setState({
            [field]: val
        }, () => {
            console.log(`${field} is now ${val}`) ;
        });
    }

    generateLink = () => {
        this.setState({
            link: this.state.link + '/' + this.state.username + '/' + this.state.sendername
        })
        console.log(this.state.link);
    }

    render() {
        return (
            <Container maxWidth='lg' align='center'>
                <h1>Enter your name:</h1>
                <input 
                    type= 'text'
                    value={this.state.sendername}
                    onChange={(event) => {
                        this._updateField('sendername', event.target.value)
                    }}
                />
                <h1>Enter your friend or significant others name:</h1>
                <input 
                    type= 'text'
                    value={this.state.username}
                    onChange={(event) => {
                        this._updateField('username', event.target.value)
                    }}
                />
                <input 
                    type='submit'
                    onClick={this.generateLink}
                />
                <div>
                <br />
                    Send this link to the person that you think is mad at you:
                    <br />
                    <a href={this.state.link}>{this.state.link}</a>
                    
                </div>
            </Container>
        );
    }
}
export default NameForm;