# Secret Santa Mobile App

React Native application for iOS and Android.

## Getting Started

### Prerequisites
- Node.js >= 18
- Yarn
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and SDK

### Installation

From the root directory:
```bash
yarn install
```

### Running the App

#### iOS
```bash
cd apps/mobile
yarn ios
```

#### Android
```bash
cd apps/mobile
yarn android
```

### Development
```bash
yarn start
```

## Building

### iOS
1. Open `ios/SecretSanta.xcworkspace` in Xcode
2. Select your device/simulator
3. Build and run

### Android
```bash
cd android
./gradlew assembleRelease
```
