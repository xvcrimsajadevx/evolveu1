import React, { Component } from 'react';

class AccountsTransactionCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            accountName: "undefined",
            previousBalance: "undefined",
            currentBalance: "undefined"

         };
    }
    render() {
        return (
            <div  style =  "color: white;">
                <div>
                    <h1>Account Name: {this.state.accountName} </h1>
                    <br/>
                    <h1>Previous Balance: {this.state.previousBalance}</h1>
                    <br/>
                    <h1>New Balance: {this.state.currentBalance}</h1>
                    </div>
                <div>
                    <button style = "color: white;">Okay</button>
                </div>
            </div>
        );
    }
}

export default AccountsTransactionCompleted;