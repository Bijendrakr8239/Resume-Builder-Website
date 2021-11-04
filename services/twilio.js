const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const clientTwilio = require("twilio")(accountSid, authToken);

module.exports = clientTwilio;
