const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
const sending = async (req) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nucleus.electrons@gmail.com',
      pass: '0147896523'
    }
  })
  
  const info = {
    from: 'nucleus.electrons@gmail.com', // sender address
    to: req.email, // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hi how are you?</b>" // html body
  }
  
  // send mail with defined transport object
  await transporter.sendMail(info, (err,res) => {
    return new Promise( (resolve,reject)=> {
      if(err){
        console.log(err); 
        reject(err);
      }

      if(res) {
        console.log(res);
        resolve(res);
      } 
    })
  });
  console.log('email sent')
}

module.exports = sending;