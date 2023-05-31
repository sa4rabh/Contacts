import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ContactDetailsModal = ({ contact, onClose }) => {
  const handleWhatsApp = () => {
    const phoneNumber = contact?.phoneNumbers[0]?.number;
    if (phoneNumber) {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      Linking.openURL(whatsappURL);
    }
  };

  const handleCall = () => {
    const phoneNumber = contact?.phoneNumbers[0]?.number;
    if (phoneNumber) {
      const phoneURL = `tel:${phoneNumber}`;
      Linking.openURL(phoneURL);
    }
  };

  const handleMessage = () => {
    const phoneNumber = contact?.phoneNumbers[0]?.number;
    if (phoneNumber) {
      const messageURL = `sms:${phoneNumber}`;
      Linking.openURL(messageURL);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>Name: {contact?.name}</Text>
      {contact?.phoneNumbers &&
        contact.phoneNumbers.map((phoneNumber, index) => (
          <Text key={index} style={styles.phoneNumber}>
            Number: {phoneNumber.number}
          </Text>
        ))}
      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.callButton} onPress={handleCall}>
        <Text style={styles.buttonText}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
        <Text style={styles.buttonText}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <AntDesign name="close" size={30} color="#27374D" />
      </TouchableOpacity>
      <Text style={styles.footer}>Made By Saurabh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F4F4',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  whatsappButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  callButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  messageButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    color: 'black',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  footer: {
    color: '#9DB2BF',
    fontSize: 16,
    marginTop: 150,
  },
});

export default ContactDetailsModal;
