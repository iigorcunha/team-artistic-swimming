const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const sendWelcomeEmail = async (to) => {
    const email = to; 
    console.log(email); 
    let apikey = process.env.SENDINBLUE_API_KEY
    console.log(apikey)
    // auth + setup
    let apiKey = defaultClient.authentications['api-key']; 
    apiKey.apiKey = apikey; 

    // create contact 
    let apiInstance = new SibApiV3Sdk.ContactsApi(); 
    let createContact = new SibApiV3Sdk.CreateContact(); 
    createContact.email = email; 
    createContact.listIds = [2]; 

    // call SIB api 
    apiInstance.createContact(createContact).then((data) => {
        // success 
        console.log('sendinblue success');
        console.log(data);
    }, function (error) {
        // error
        console.log(error);
    });
};

module.exports = sendWelcomeEmail;
