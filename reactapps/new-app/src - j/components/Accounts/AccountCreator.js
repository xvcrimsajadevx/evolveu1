import React, { Component } from 'react';

class AccountCreator extends Component {
 constructor(props) {
   super(props);
   this.state = {
     accountBalance: 0,
     selectedOption: '',
   };
 }

 handleOptionChange = (event) => {
   this.setState({
     selectedOption: event.target.value
   });
 }

 render() {
   //console.log ("Accounts creator", this.props.modal)
   return (
     <div>
       <h1>Create New Account</h1>
       <span>Account Name: </span> <input></input>
       <br/>
       <h2>Starting Balance: ${this.state.accountBalance}</h2>

       <div>
         <fieldset>
           <legend>Would you like to:</legend>

         <label htmlFor = "Transfer"><input
           type = "radio"
           id= "Transfer"
           name = "transferDepositRadio"
           value='transfer'
           onChange={this.handleOptionChange}
         />
           Transfer</label>
           <label htmlFor = "Deposit"><input
             type = "radio"
             id= "Deposit"
             name = "transferDepositRadio"
             value='deposit'
             onChange={this.handleOptionChange}
           />
           Deposit</label>
         <br />
           { (this.state.selectedOption === 'deposit' ) ? <input type = "number"></input> : "" }
           { (this.state.selectedOption === 'transfer' ) ? "Function not yet intruduced" : "" }
         </fieldset>

         <br/>
         <button onClick={this.props.modal.modalOff}>Cancel</button>
         <button onClick= {this.props.onAccountsModalSubmit}>Submit</button>
         <br/>

       </div>
     </div>
   );
 }
}

export default AccountCreator;


