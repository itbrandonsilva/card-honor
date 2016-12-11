const express = require('express');
const admin = require('firebase-admin');
const path = require('path');

var serviceAccount = require(path.join(__dirname, 'card-honor-firebase-adminsdk-sgyiq-8606fab212.json'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://card-honor.firebaseio.com"
});