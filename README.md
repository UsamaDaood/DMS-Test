# This is a assessment Task in React Native TypeScript.

### In this project I've used the following.

- React Native
- TypeScript
- React Navigation
- Redux Toolkit (for Global State Management)
- React Hooks (for State Management)
- Axios, Intercepters for APIs Calls

### Code Overview

There are following architecture I've used.

- **/app/common** => All the common Files which are most of the common are used throughtout the app
- **/app/config** => Redux Store Implementation
- **/app/features** => Complete Redux Toolkit Slices including Thunk Networking Call implementation
- **/app/interfaces** => All Interfaces which are using in app.
- **/app/libs** => Some common files like as Common Colors, toast messages etc.
- **/app/navigation** => Complete navigation Stack are in this directry.
- **/app/networking** => All the Networking config
- **/app/screens** => All Screens like Splash Screen.
- **/app/styles** => All styles files are here
- **/app/utils** => Some Utils files like as Consts, All Image Sources Files.

# Deployment

## Play Store Release

Generate a Signed APK/Bundle
To release the app on the Play Store, you need to generate a signed APK or AAB:

Open Android Studio and select Build > Generate Signed Bundle / APK.
Choose Android App Bundle or APK.
Create a new key store (or use an existing one), and generate the release bundle/APK.
The output will be in the android/app/release directory.
Upload to Play Console

Go to the Google Play Console.
Create a new app or update an existing app.
Fill in the necessary details like app name, description, icon, screenshots, etc.
Upload the generated APK or AAB under Release > Production > Create New Release.
Complete the checklist and submit the app for review.
Release the App

Once the app passes Google Play's review process, it will be available for download.

# App Store Release

Prepare for Release in Xcode

Open your project in Xcode.
Change the build scheme to Release mode.
Archive the app via Product > Archive.
Once archived, upload the build to App Store Connect via the Organizer window.
App Store Connect Setup

Go to App Store Connect.
Create a new app under My Apps or update an existing one.
Upload the required metadata like app name, description, keywords, screenshots, and app icon.
Assign the uploaded build to the app in TestFlight or directly in the App Store.
Submit for Review

Under App Store > Submit for Review, send your app for Apple's review.
After approval, your app will be released on the App Store for users to download.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# OR using Yarn
yarn install
This above command is used to install the node modules which are used in React Native App.
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# My Updated Portfolio is below.

### 1. Choose your reader (iOS app)

https://apps.apple.com/us/app/chooseyourreader/id1441417724

### 2. Choose your reader (android app)

https://play.google.com/store/apps/details?id=com.chooseyourreader

### 3. Room service app (android)

https://play.google.com/store/apps/details?id=com.roomservices

### 4. Room Service iOS App.

https://apps.apple.com/kw/app/room-service/id1555331613

### 5. Therapute Android App.

https://play.google.com/store/apps/details?id=com.simlecloudology.therapute

### 7. Wander App (Android Version)

https://play.google.com/store/apps/details?id=com.venndii.wanderapp

### 8. Dukan.pk (E-Commerce Android App )

https://play.google.com/store/apps/details?id=pk.dukan

### 9. Dukan.pk (E-Commerce IOS App)

https://apps.apple.com/pk/app/dukan-pk/id1525721580

### 10. My Tutor Source - MTS (IOS App)

https://apps.apple.com/us/app/my-tutor-source-mts/id1593204750

### 11. My Tutor Source - MTS (Android App)

https://play.google.com/store/apps/details?id=com.mytutorsource.customers

### 12. GBD (Map Drawing Pad)

https://play.google.com/store/apps/details?id=co.uk.getbritaindriving.gbd

### 13. GBD (Map Drawing Pad)

https://apps.apple.com/pk/app/get-britain-driving/id6446020351
