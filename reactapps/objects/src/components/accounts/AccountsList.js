import React from 'react';
import AccountsCard from './AccountsCard';

const AccountsList = ( {accounts, toggleModal}  ) => {
    return(
      <div className="accountsList">
        { (accounts === undefined || accounts.length === 0) ? <h3>You have no accounts</h3> :
          accounts.map((account, i) => {
            return (<AccountsCard
              key={account.id}
              accountId={account.id}
              accountName={ account.accountName }
              accountBalance={ account.accountBalance }
              toggleModal={ toggleModal }
            />)
          })
        }
      </div>
    );
  }

export default AccountsList;
