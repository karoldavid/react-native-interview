import { TabNavigator, StackNavigator } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import DeckListScreen from "../screens/DeckListScreen";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "../screens/QuizScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import AddQuestionScreen from "../screens/AddQuestionScreen";
import KnowScreen from "../screens/KnowScreen";
import DontKnowScreen from "../screens/DontKnowScreen";
import SummaryScreen from "../screens/SummaryScreen";

export const MainNavigator = TabNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    decks: {
      screen: StackNavigator({
        decks: { screen: DeckListScreen },
        deck: { screen: DeckScreen },
        addDeck: { screen: AddDeckScreen },
        addQuestion: { screen: AddQuestionScreen },
        quiz: {
          screen: QuizScreen
        },
        evaluation: {
          screen: TabNavigator(
            {
              yes: { screen: KnowScreen },
              no: { screen: DontKnowScreen },
              summary: { screen: SummaryScreen }
            },
            {
              navigationOptions: {
                tabBarVisible: true,
                header: null,
              },
              tabBarPosition: "bottom",
              lazy: true,
              tabBarOptions: {
                swipeEnabled: false,
                activeTintColor: "white",
                style: {
                  height: 56,
                  backgroundColor: "green",
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
          )
        }
      })
    },
    settings: { screen: SettingsScreen }
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
