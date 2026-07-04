const admin = require("firebase-admin");

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  // Perbaiki newline private key
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
} else {
  serviceAccount = require("../serviceAccountKey.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;