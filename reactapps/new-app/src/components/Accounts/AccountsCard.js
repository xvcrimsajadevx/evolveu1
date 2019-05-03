import React from 'react';

const AccountsCard = ({accountId, accountName, accountBalance, toggleModal}) => {
  return(
    <div
    className="accountsCard"
    id = "viewAccount"
    onClick = {((event) => toggleModal(event, accountId))}
    >
      <span className="accName" id = "viewAccount">{accountName}</span>
      <span className="accBalance" id = "viewAccount">${accountBalance}</span>
    </div>
  );
}

export default AccountsCard;
