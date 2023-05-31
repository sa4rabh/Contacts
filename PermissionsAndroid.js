import { PermissionsAndroid } from 'react-native';

// Function to request contacts permission
const requestContactsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts Permission',
        message: 'This app requires access to your contacts.',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Contacts permission granted');
      // Access the contacts here
    } else {
      console.log('Contacts permission denied');
      // Handle the case when permission is denied
    }
  } catch (error) {
    console.error('Error while requesting contacts permission:', error);
  }
};

// Call the function to request contacts permission
requestContactsPermission();
