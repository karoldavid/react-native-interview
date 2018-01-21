import { TabNavigator, StackNavigator } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import DeckListScreen from "../screens/DeckListScreen";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "../screens/QuizScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import AddQuestionScreen from "../screens/AddQuestionScreen";

export const MainNavigator = TabNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    decks: {
      screen: StackNavigator({
        decks: { screen: DeckListScreen },
        deck: { screen: DeckScreen },
        addQuestion: { screen: AddQuestionScreen },
        quiz: {
          screen: StackNavigator({
            quiz: {
              screen: QuizScreen
            },
            settings: { screen: SettingsScreen }
          })
        }
      })
    },
    addDeck: {
      screen: StackNavigator({
        addDeck: { screen: AddDeckScreen, title: "Add Deck" }
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
