const app = require("firebase/app");
const firestore = require("firebase/firestore");

class FirebaseController {
  constructor(config) {
    this.config = config;

    // Initialize Firebase
    this.app = app.initializeApp(this.config);
    this.db = firestore.getFirestore();
  }
}

module.exports = FirebaseController;