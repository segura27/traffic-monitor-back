const mongoose = require("mongoose");

mongoose.pluralize(null);

mongoose.connect("mongodb+srv://traffic-app:CoyMYwI0qL4KRsJG@cluster0-iwzcl.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true
});



//CoyMYwI0qL4KRsJG

// const test_device_registration1 = new device_metadata({
//     device_id: 1,
//     device_name_type: "Arduino Uno Rev3",
//     device_owner: "Daniel Segura Madriz",
//     device_owner_email: "segura2794@gmail.com"
//   });
//   test_device_registration
//     .save()
//     .then(() => {
//       console.log(test_device_registration);
//     })
//     .catch(error => {
//       console.log("Error!", error);
//     });

// const test_device_registration2 = new device_metadata({
//   device_id: 2,
//   device_name_type: "Arduino Uno Rev3",
//   device_owner: "Mauricio Rodriguez Alas",
//   device_owner_email: "muripspgmail.com"
// });
// test_device_registration
//   .save()
//   .then(() => {
//     console.log(test_device_registration);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });

// const test_device_registration3 = new device_metadata({
//     device_id: 3,
//     device_name_type: "Raspberry Pi 3 Model B",
//     device_owner: "Antonio Alvarez-Marin",
//     device_owner_email: "canadianwithanaccent@gmail.com"
//   });
//   test_device_registration
//     .save()
//     .then(() => {
//       console.log(test_device_registration);
//     })
//     .catch(error => {
//       console.log("Error!", error);
//     });
