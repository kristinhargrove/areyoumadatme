import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state) { //passes state to react
    return {
        amount: state.count
    }
}

export default connect(mapStateToProps)(Output);