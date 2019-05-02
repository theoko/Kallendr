import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import AndroidIcon from 'react-native-vector-icons/Foundation';

const startTabs = () => {

    Promise.all([
        Platform.OS === "ios" ? Icon.getImageSource("md-people", 30) : AndroidIcon.getImageSource("torsos-all", 30),
        Platform.OS === "ios" ? Icon.getImageSource("md-calendar", 30) : AndroidIcon.getImageSource("calendar", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "Kallendr.TeamCalendar",
                    label: "Team Calendar",
                    title: "Team Calendar",
                    icon: sources[0]
                },
                {
                    screen: "Kallendr.MyCalendar",
                    label: "My Calendar",
                    title: "My Calendar",
                    icon: sources[1]
                }
            ]
        });
    });
    
};

export default startTabs;