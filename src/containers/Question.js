import Question from '../components/Question';
import { connect } from 'react-redux';

function mapStateToProps(state) {

    return {
        // propName seen by React : value-in-state
        partnerQuestions: state.partnerQuestions
    }
}

export default connect(mapStateToProps)(Question);