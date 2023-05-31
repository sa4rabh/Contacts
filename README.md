**#Components used**
1. **ContactsApp** (components/ContactsApp.js):
   - This component serves as the main entry point for the Contacts application.
   - It manages the state and rendering of the contact list.

2. **Header** (Header.js):
   - This component represents the header section of the application.
   - It typically contains a title or logo and provides a consistent header across screens.

3. **ContactItem** (ContactItem.js):
   - This component represents an individual contact item in the contact list.
   - It displays information such as the contact's name, phone number, and provides actions to interact with the contact.

4. **ContactDetailsModal** (ContactDetailsModal.js):
   - This component represents a modal that displays detailed information about a specific contact.
   - It shows the contact's name, phone numbers, and provides actions such as opening WhatsApp and copying contact details.

**Libraries and Plugins Used:**

1. **react**: A JavaScript library for building user interfaces.
2. **react-native**: A framework for building native mobile apps using React.
    **Components:**
      1. **View**: A core component of React Native used for creating container-like elements that help with layout and styling.

      2. **Text**: A core component used for displaying text content within the app.

      3. **TouchableOpacity**: A component that provides touchable behavior, similar to a button, by adding opacity and feedback when pressed.

      4. **ScrollView**: A component that provides a scrollable view for rendering a large amount of content that exceeds the screen size.

      5. **StyleSheet**: A module used for creating and managing styles in React Native. It allows you to define styles using JavaScript objects.

      6. **Linking**: A module that provides functionality for opening URLs and deep linking within the app. It can be used to open external links or trigger                           specific actions based on URL schemes.      
3. **react-native-vector-icons**: A library that provides a set of customizable icons for React Native apps.
4. **expo-contacts**: A module that allows access to the device's contact list and related functionalities.
5. **@expo/vector-icons**: A library that provides a collection of customizable vector icons for Expo-based projects.




**Hooks used:**

1. **useState**: A hook used for managing state in a functional component. It allows you to declare and update state variables.

2. **useEffect**: A hook used for performing side effects in a functional component. It allows you to run code in response to component lifecycle events, such as when the component mounts, updates, or unmounts.

The useState hook enables the use of local component state. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state.

The useEffect hook is used to perform side effects, such as fetching data, subscribing to events, or manipulating the DOM. It takes a callback function as the first argument and an optional array of dependencies as the second argument. The callback function is executed after the component has rendered, and the effect is re-triggered whenever the dependencies change.


Application : [application-082879bc-179d-47ee-b251-385e7cacc0e4.apk]

