import { Navigation } from 'react-native-navigation';

const startTeamCreate = () => {

    Navigation.startSingleScreenApp({
        screen: {
          screen: "Kallendr.TeamCreate",
          title: "Create a Team"
        }
    });
    
};

export default startTeamCreate;