import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
 // Version can be specified in package.json

 

 // Get started page
 import Getstarted from './screen/Getstarted';

  // Landingpage page
import Landingpage from './screen/Landingpage';

// signup screen
import Signin from './screen/Signin';

//forget password screen
import Forgetpassword from './screen/forgetpassword/Forget';
import Resetpassword from './screen/forgetpassword/Reset';
import Oppspassword from './screen/forgetpassword/Reset';

//Signup screen
import Signup from './screen/Signup/Index';
import Verifyphone from './screen/Signup/Verifyphone';
import Bankdetails from './screen/Signup/Bankdetails';
import Verifybvn from './screen/Signup/Verifybvn';
import Personalinfo from './screen/Signup/Personalinfo';
import Success from './screen/Signup/Success';
import Createpin from './screen/Signup/Createpin';

//Dashboard Screen
import Dashboardindex from './screen/Dashboardindex';


//Report issues
import Issue from './screen/Reportissue/Issue';

//Referral Screen
import Referral from './screen/Referral/Referral';

//Withdraw Screen
import Withdraw from './screen/Withdraw';

//Send Money Screen
import Sendmoney from './screen/SendMoney/Index';

//Bank Screen
import Bank from './screen/Bank';




const RootStack = StackNavigator(
  {
    Landingpage: {
      screen: Landingpage,
        navigationOptions: {
            header: null, 
         },
    },
    Signin: {
      screen: Signin,
        navigationOptions: {
            header: null, 
         },
    },
    Forgetpassword: {
      screen: Forgetpassword,
        navigationOptions: {
            header: null, 
         },
    },

    Resetpassword: {
      screen: Resetpassword,
        navigationOptions: {
            header: null, 
         },
    },
    Oppspassword: {
      screen: Oppspassword,
        navigationOptions: {
            header: null, 
         },
    },
    
    Signup: {
      screen: Signup,
        navigationOptions: {
            header: null, 
         },
    },
    Verifyphone: {
      screen: Verifyphone,
        navigationOptions: {
            header: null, 
         },
    },
    Bankdetails: {
      screen: Bankdetails,
        navigationOptions: {
            header: null, 
         },
    },
    Verifybvn: {
      screen: Verifybvn,
        navigationOptions: {
            header: null, 
         },
    },

    Personalinfo: {
      screen: Personalinfo,
        navigationOptions: {
            header: null, 
         },
    },
    Success: {
      screen: Success,
        navigationOptions: {
            header: null, 
         },
    },

    Createpin: {
      screen: Createpin,
        navigationOptions: {
            header: null, 
         },
    },

    Dashboardindex: {
      screen: Dashboardindex,
        navigationOptions: {
            header: null, 
         },
    },

    Issue: {
      screen: Issue,
        navigationOptions: {
            header: null, 
         },
    },
    Referral: {
      screen: Referral,
        navigationOptions: {
            header: null, 
         },
    },
    Withdraw: {
      screen: Withdraw,
        navigationOptions: {
            header: null, 
         },
    },
    Sendmoney: {
      screen: Sendmoney,
        navigationOptions: {
            header: null, 
         },
         
    },

    Bank: {
      screen: Bank,
        navigationOptions: {
            header: null, 
         },
         
    },
    Getstarted: {
      screen: Getstarted,
        navigationOptions: {
            header: null, 
         },
         
    },
    

    
  },
  {
    initialRouteName: 'Dashboardindex',
  }
);



export default RootStack;