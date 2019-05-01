import React, { Component } from 'react';

class AccountCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 0
         };
    }

    render() {
        console.log ("Accounts creator", this.props.modal)
        return (
            <div>
                <h1><strong>Create New Account</strong></h1>
                <span>Account Name: </span> <input></input>
                <br/>
                <h2>Starting Balance: ${this.state.accountBalance}</h2>

                <div>
                    <h2>Would you like to do:</h2>

                    <div>
                        <input type = "radio" id= "Transfer" name = "transferDepositRadio" value="Transfer"/>
                        <label htmlFor = "Transfer">Transfer</label>
                        <input type = "radio" id= "Deposit" name = "transferDepositRadio" value="Deposit"/>
                        <label htmlFor = "Transfer">Deposit</label>
                    </div>
                    <br/>
                    <button onClick={this.props.modal.modalOff}>Cancel</button>
                    <button onClick= {this.props.onAccountsModelSubmit}>Submit</button>
                    <br/>
                    <input type = "number"></input>

                </div>

            </div>
        );
    }
}

export default AccountCreator;
