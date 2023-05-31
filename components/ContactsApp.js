import React, { useState, useEffect } from 'react';
import { View, TextInput, Modal, ScrollView, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';
import ContactDetailsModal from './ContactDetailsModal';
import * as Contacts from 'expo-contacts';


const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    };

    fetchContacts();
  }, []);

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      (contact.phoneNumbers &&
        contact.phoneNumbers.some((phoneNumber) =>
          phoneNumber.number.includes(searchText)
        ))
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>

      <ScrollView>
        {filteredContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onPress={handleContactPress}
          />
        ))}
      </ScrollView>

      <Modal visible={selectedContact !== null} animationType="slide">
        <ContactDetailsModal
          contact={selectedContact}
          onClose={handleCloseModal}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9FF',
    padding: 20,
  },
  searchContainer: {
    marginBottom: 10,
    borderBottomColor: '#B9E9FC'
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
});

export default ContactsApp;
