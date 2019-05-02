import { SET_TEAM_NAME } from './actionTypes';

export const setTeamName = (teamName) => {
    return {
        type: SET_TEAM_NAME,
        teamName: teamName,
        teamNameValid: false,
    }
}

