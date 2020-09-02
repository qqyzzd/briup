let axios = require('axios')
async function foo(){			
    let customers = await axios.get("http://39.105.67.242:5588/customer/findAll");
    console.log("customers:",customers.data.data[0].id);		

}				
foo();
