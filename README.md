# 📱 React Native Login and Skills Management App
<p align="center">
  <img src="https://img.shields.io/badge/platform-ios%20%7C%20android-blue" alt="Platform"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License"/>
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version"/>
</p>

This is a React Native project that features a user-friendly login screen, a user registration screen, and a skills management screen. It uses AsyncStorage to store the user's preferences, and it communicates with a server-side API to perform the authentication and data management tasks.

## 🌟 Features

* Login screen with username and password fields, and a show/hide password button.
* "Remember me" checkbox that stores the user's credentials in AsyncStorage if checked.
* Sign up screen with username, password, and confirm password fields.
* Home screen with a list of skills, each containing an image, a name, a level, and a description.
* Skill edition and removal buttons in the skill list.
* Skill creation modal dialog with a dropdown to select a skill.
* Logout button.

## 🛠️ Installation
To install this application, clone the repository and run the following commands:

npm install
npx react-native run-android

Then open the app on your emulator or connected device.

## 🚀 Usage
To use this application, follow these steps:

1. Open the Login screen and enter your username and password.
2. If you want the application to remember your credentials, check the "Remember me" checkbox.
3. Click the Login button. If your credentials are correct, you will be redirected to the Home screen.
4. On the Home screen, you can see the list of skills you have added.
5. To edit a skill's level or remove it, click the corresponding buttons in the skill's row.
6. To add a new skill, click the "Add Skill" button and select a skill from the dropdown list. Then click the Save button.
7. To logout, click the Logout button.

## 🔒 Security

This application implements basic security measures to protect the user's data. It does not allow access to the Home screen without a valid login, and it stores the user's credentials in AsyncStorage only if the "Remember me" checkbox is checked. The application communicates with a server-side API to perform the authentication and data management tasks, and it uses HTTPS protocol to encrypt the data in transit. However, this application is not intended to be used in a production environment without further security enhancements.

## 👏 Credits
This project was created by Pedro Wiskutzki as a Neki project. It uses the following technologies:

React Native [https://reactnative.dev/]
<p align="center">
  <img src="https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>
