import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
                <Typography variant="h6">
                    Enter your name:
                </Typography>
                <input 
                    type= 'text'
                    value={this.state.sendername}
                    onChange={(event) => {
                        this._updateField('sendername', event.target.value)
                    }}
                />
                <br /><br />
                <Typography variant="h6">Enter your friend or significant others name:</Typography>
                <input 
                    type= 'text'
                    value={this.state.username}
                    onChange={(event) => {
                        this._updateField('username', event.target.value)
                    }}
                />
                <br /><br />
                <input 
                    type='submit'
                    onClick={this.generateLink}
                />
                <br /><br />
                <div>
                    <Typography variant="subtitle1">
                    Send this link to the person that you think is mad at you:
                    </Typography>
                    <br />
                    <a href={this.state.link}>{this.state.link}</a>
                    
                </div>
            <br /><br /><br />
            </Container>
        );
    }
}
export default NameForm;