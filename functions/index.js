const admin = require('firebase-admin');
const functions = require('firebase-functions');

const serviceAccount = require("../src/test-ylt-firebase-adminsdk-6yz0i-dc6ff52bf0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.addSuperuserRole = functions.https.onCall((data, context) => {
    if (context.auth.token.superuser !== true) {
        return {
            error: "Request not authorized.  User must be a moderator to fulfill request."
        }
    }
    const email = data.email;
    return  grantSuperuserRole(email).then(() => {
        return {
            result: `Request fulfilled! ${email} is now a moderator.`
        }
    })
})

async function grantSuperuserRole(email){
    const user = await admin.auth().getUserByEmail(email);
    if (user.customClaims && (user.customClaims).superuser === true ) {
        return;
    }
    return admin.auth().setCustomUserClaims(user.uid, {
        superuser: true,
    });
}
