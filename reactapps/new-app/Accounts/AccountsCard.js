import React from 'react';

const AccountsCard = ({accountId, accountName, accountBalance, toggleModal}) => {
  return(
    <div 
    className="accountsCard"
    id = "viewAccount"
    onClick = {((event) => toggleModal(event, accountId))}
    >
      <span className="accName">{accountName}</span>
      <span className="accBalance">${accountBalance}</span>
    </div>
  );
}

export default AccountsCard;
