import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContactCreationPage = ({ onSave }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSave = () => {
    onSave({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ContactCreationPage;
