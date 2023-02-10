const axios = require('axios');
axios.post("http://192.168.29.108:5000/vendor_signup",
              // `${process.env.REACT_APP_BASEURL}/home?page=0&per_page=400`,
              {email:"rmjjjmail.com"},
            
            ).then((response) => {
            //   let data = response.data;
            console.log("test==========================================111111===========")

              console.log(response.status);
              console.log(response.data);
              console.log("test=======================================222222222==============")

            }).catch((err)=>{console.log(err)})

            