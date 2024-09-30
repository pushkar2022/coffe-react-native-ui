npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm i react-native-vector-icons


react-native.config.js

module.exports = {
      project: {
        ios: {},
        android: {},
      },
      assets: ['./src/assets/fonts/', './node_modules/react-native-vector-icons/Fonts'], // add the vector icons fonts path
    };
    

npx react-native-asset


53
android /app/build.gradle

    project.ext.vectoricons = [
    iconFontNames: [ 'MaterialCommunityIcons.tff','MaterialIcons.ttf' ] // Specify font files
]
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")


import AntDesign from 'react-native-vector-icons/AntDesign';
      <!-- <AntDesign name="rightcircleo" size={30} color="red" /> -->
      <!-- https://oblador.github.io/react-native-vector-icons/ -->



<!-- https://www.figma.com/design/0OdqECDJ15b1LAminpxEGj/Coffe-Shop-React-Native-(Community)?node-id=402-2&node-type=symbol&t=qtXY6hFaI3DBOSA0-0 -->