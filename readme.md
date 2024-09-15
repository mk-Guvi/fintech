## Commands
- npx create-expo-app fintech -t tabs - creates the project with templates tabs
- npx expo install expo-dev-client react-native-reanimated react-native-gesture-handler
- npx expo prebuild//Continuous native generation
- npx expo run:ios
- control(^) + d or command+shift+k to open developer menu in mobile.
- npx expo install expo-av // For playing vids
- npx expo install expo-asset //For loading vids
- npm install @clerk/clerk-expo
- npx expo install expo-secure-store //this will store the tokens in the device securely.
- npm i react-native-confirmation-code-field
- npm i react-native-ios-context-menu react-native-ios-utilities
- npm i zeego
- npm i zustand
- npm i react-native-mmkv // for localStorage
- npx expo install expo-blur
- npm i @tanstack/react-query

## DOCS
- https://docs.swmansion.com/react-native-gesture-handler/docs/
- https://docs.swmansion.com/react-native-reanimated/
- https://github.com/wcandillon/can-it-be-done-in-react-native
- https://coinmarketcap.com/settings/account-security/ 

## NOTES 

- To create APIs similar to Next.js, configure the web output to be served as a server by adding the following configuration to your project:

    ```json
    "web": {
    "bundler": "metro",
    "output": "server",
    "favicon": "./assets/images/favicon.png"
    }
    ```

    This setup enables server-side output using the Metro bundler. Additionally, make sure to add the origin in the plugins, as these are not bundled with React Native by default.