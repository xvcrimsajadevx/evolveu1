import React from 'react';
import AccountsCard from './AccountsCard';

const AccountsList = ( {accounts, toggleModal} ) => {
    return(
      <div className="accountsList">
        { (accounts === undefined || accounts.length === 0) ? <h3>You have no accounts</h3> :
          accounts.map((account, i) => {
            return (<AccountsCard
              key={accounts[i].id}
              accountId= {accounts[i].id}
              accountName={ accounts[i].accountName }
              accountBalance={ accounts[i].accountBalance }
              toggleModal = { toggleModal }
            />)
          })
        }
      </div>
    );
  }


export default AccountsList;
