import { SET_TEAM_NAME } from "../actions/actionTypes";

const initialState = {
    teamName: null,
    teamNameValid: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEAM_NAME:
            return {
                ...state,
                teamName: state.teamName,
                teamNameValid: true,
            }
    
        default:
            return state;
    }
}

export default reducer;