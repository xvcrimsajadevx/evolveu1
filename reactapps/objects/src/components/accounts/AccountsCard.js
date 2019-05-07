import React from 'react';

const AccountsCard = ({accountId, accountName, accountBalance, toggleModal}  ) => {
  return(
    <div
      className="accountsCard"
      id="viewAccount"
      account={accountId}
      onClick={ ((event) => toggleModal(event, accountId)) }
    >
      <span id="viewAccount" className="accName">{accountName}</span>
      <span id="viewAccount" className="accBalance">${accountBalance}</span>
    </div>
  );
}

export default AccountsCard;
