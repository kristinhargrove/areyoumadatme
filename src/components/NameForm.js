import React from 'react';
import Container from '@material-ui/core/Container';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            sender_name:'',
            serverResponse: null
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
        let link = 'https://areyoumad.netlify.app/welcomepage';

        link = link + '/' + this.state.username + '/' + this.state.sender_name;
        console.log(link); 
        return link;
    }

    render() {
        return (
            <Container maxWidth='lg' align='center'>
                <h1>Enter your name:</h1>
                <input 
                    type= 'text'
                    value={this.state.sender_name}
                    onChange={(event) => {
                        this._updateField('sender_name', event.target.value)
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
                    {this.state.username && this.generateLink}
                </div>
            </Container>
        );
    }
}
export default NameForm;