# Stack Navigator 6x fail on React 71.8

Hi, 
this repo contains a plain react native init app of version 71.8 with 2 basic pages & react navigation 6x packages that are available from yarn as of this date, which is 12 May, 2023. the stack navigator renders only the header & not any body. This occured while updating our main app too. For berevity's sake, I created a simple app & added the same react navigation packages. Same thing happened. If I return a single screen, only shows white screen. If I return a stack, it renders only the header with name. 

these are the packages :

 "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/drawer": "^6.6.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-gesture-handler": "^2.10.0",
    "react-native-safe-area-context": "^4.5.2",
    "react-native-screens": "^3.20.0"

if you want to try them : 

`yarn add @react-native-community/masked-view@0.1.11 react-navigation/bottom-tabs@6.5.7 @react-navigation/drawer@6.6.2 @react-navigation/native@6.1.6
@react-navigation/stack@6.3.16 react-native-gesture-handler@2.10.0 react-native-safe-area-context@4.5.2 react-native-screens@3.20.0`

<img width="1686" alt="Screenshot 2023-05-12 at 6 58 03 PM" src="https://github.com/kaiyes/stackNavigatorFail71/assets/5293742/0eb7adde-cca3-47f8-8b2f-c4a0b87434db">
<img width="2234" alt="Screenshot 2023-05-12 at 7 20 40 PM" src="https://github.com/kaiyes/stackNavigatorFail71/assets/5293742/7b12339e-44b1-421d-b9a6-bc39bf2fa62d">
<img width="953" alt="Screenshot 2023-05-12 at 7 23 13 PM" src="https://github.com/kaiyes/stackNavigatorFail71/assets/5293742/dbfac895-38fc-43b9-9593-13ef743f1a6a">
![simulator_screenshot_6F617CFF-A00B-4442-85AA-FC3C9FBA0CED](https://github.com/kaiyes/stackNavigatorFail71/assets/5293742/7082bf68-4502-4722-8b31-b26211697d88)
