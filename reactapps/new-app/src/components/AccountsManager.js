import React, { Component } from 'react';
import AccountController from "./AccountController";

class AccountsManager extends Component {
  
    render() {
        return (
    
                <div>
                    
                    <h1>
                        Accounts
                    </h1>
                    <br/>
                    
                    <AccountController />
                    
                    </div>

        );
    }
}

export default AccountsManager;


