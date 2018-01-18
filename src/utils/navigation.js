import { TabNavigator, StackNavigator } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import DeckListScreen from "../screens/DeckListScreen";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "../screens/QuizScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const MainNavigator = TabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    main: {
      screen: StackNavigator({
        decks: { screen: DeckListScreen },
        deck: { screen: DeckScreen },
        quiz: {
          screen: StackNavigator({
            quiz: {
              screen: QuizScreen
            },
            settings: { screen: SettingsScreen }
          })
        }
      })
    }
  },
  {
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
      swipeEnabled: false,
      activeTintColor: "white",
      style: {
        height: 56,
        backgroundColor: "blue",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);
