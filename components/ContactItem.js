import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ContactItem = ({ contact, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(contact)}>
      <View style={styles.contactContainer}>
        <Text style={styles.contactName}>{contact.name}</Text>
        {contact.phoneNumbers && (
          <ScrollView style={styles.phoneNumberList}>
            {contact.phoneNumbers.map((phoneNumber, index) => (
              <Text key={index} style={styles.phoneNumber}>
                {phoneNumber.number}
              </Text>
            ))}
          </ScrollView>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneNumberList: {
    height: 100,
    marginTop: 5,
  },
  phoneNumber: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default ContactItem;
