import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieCardScreen from '../components/MovieCard';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MovieCardScreen} />
    </Tab.Navigator>
  );
}