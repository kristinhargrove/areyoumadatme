import FriendQuestions from '../components/FriendQuestions';
import { connect } from 'react-redux';

import { actionIncrement, actionIncrementQuestions } from '../actions';

function mapStateToProps(state) {

    return {
        // propName seen by React : value-in-state
        friendQuestions: state.friendQuestions,
        questionCount: state.questionCount

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleYesClick: () => {
            dispatch(actionIncrement());
            dispatch(actionIncrementQuestions());
        },

        handleNoClick: () => {
            dispatch(actionIncrementQuestions());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendQuestions);
