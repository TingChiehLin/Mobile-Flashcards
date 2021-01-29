
function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'DeckDetails':
        return 'Deck Details';
      case 'AddCard':
        return 'Add Card';
      case 'AddCard':
        return 'Add Card';
    }
  }
  
  const AppNavgator = () => (
      <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} 
            options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} 
            option={({ route }) => ({
              headerTitle: getHeaderTitle(route)
          })}/>
          <Stack.Screen name="DeckDetails" component={DeckDetails} 
            option={({ route }) => ({
              headerTitle: getHeaderTitle(route)
          })}/>
          <Stack.Screen name="AddCard" component={AddCard}
              option={({ route }) => ({
                  headerTitle: getHeaderTitle(route)
          })}/>
          <Stack.Screen name="Quiz" component={Quiz} 
            option={({ route }) => ({
              headerTitle: getHeaderTitle(route)
          })}/>
      </Stack.Navigator>
  )
  
  export default AppNavgator;
  
  