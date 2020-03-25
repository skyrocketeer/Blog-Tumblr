const User = require('../../models/User'); 

async function verifyEmail(userInfo,res){
   let query = { id: userInfo.id };
   try{
      User.findOne(query, (err, user) => {
         if(err) {
            return res.status(500).json({ message: 'Server error' })
         }
         if(user){
            let activated = { isVerified: true }
            updateStatus(query.id, activated)
               .then(response => {
                  if(response.result) {
                     mailServer(userInfo.email)
                        .then(emailData => res.json(emailData))
                        .catch(err => res.json('error'));

                     // return res.status(200).json({message: 'Email verified'}) 
                  }
                  else return res.status(200).json({message: 'error'})
               })
         }
      })
   }catch(err){
      console.log(err)
      res.status(500).json({ message: 'Server error' })
   }
}

function updateStatus(id, status){
   return new Promise( (resolve, reject) => { 
      (async () => {
         let update = await User.findOneAndUpdate(id,status, { new: true })
         console.log(update);
         if(update.status) resolve({'result':true})
         else {
            resolve({'result':false})
         };
      })();
   });
}

module.exports = verifyEmail