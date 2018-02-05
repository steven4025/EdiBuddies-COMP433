# comp433
Final project for comp 433. The project deals with displaying data regarding the [UNC Edible Campus](http://ediblecampus.web.unc.edu/) gardens. It will display the locations of each edible campus garden on a google map. The users can click on the map markers to get a description of the edible garden. Users can also use the QR scanner to get information about the gardens by scanning a QR code on the edible campus garden.
## Requirements
- [Node](https://nodejs.org/en/)
- [Expo App](https://expo.io/) on your mobile device
- [Website](http://www.qr-code-generator.com/) for creating QR codes. Note: Code data must be of type text and be a string that is a number 0-9
## Setup
- Install node.
- Install expo app on your iPhone or android device.
- Connect your mobile device to the same network as your computer. Note: you can't use eduroam or campus wifi for this. If you're on campus and running this you need to hotspot on your phone and have your computer connect to the hotspot.
- Open up a command line interface in the root directory of the project.
- cd to the 'Gardens' folder.
- Run `npm install` in the command line interface.
- Run `npm start` This will cause the project to start building. When it finishes building a qr code will appear in the command line interface.
- Open up the expo app and sign in if needed.
- Scan the qr code on your computer with the expo app. It will now start to build on your phone. You can monitor its progress in the bototm right corner.
- If any dialog windows appear on your phone that are orange or red, press dismiss on the bottom part of the screen.
- The app should now be running!