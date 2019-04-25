import React from 'react';

const AccountsCard = ({id, accountName, accountBalance}) => {
  return(
    <div className="accountsCard">
      <span className="accName">{accountName}</span>
      <span className="accBalance">${accountBalance}</span>
    </div>
  );
}

export default AccountsCard;
