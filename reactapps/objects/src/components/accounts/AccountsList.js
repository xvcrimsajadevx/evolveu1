import React from 'react';
import AccountsCard from './AccountsCard';

const AccountsList = ( {accounts} ) => {
    return(
      <div className="accountsList">
        { (accounts === undefined || accounts.length === 0) ? <h3>You have no accounts</h3> :
          accounts.map((account, i) => {
            return (<AccountsCard
              key={accounts[i].id}
              accountName={ accounts[i].accountName }
              accountBalance={ accounts[i].accountBalance }
            />)
          })
        }
      </div>
    );
  }


export default AccountsList;
