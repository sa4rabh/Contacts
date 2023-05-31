import React from 'react';
import ContactsApp from './components/ContactsApp';
import { StyleSheet, View} from 'react-native';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ContactsApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    padding: 20,
  },
});

export default App;
