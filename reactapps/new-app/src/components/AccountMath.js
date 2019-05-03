    import math from './math';
    import AccountController from './AccountController';
    
    class AccountMath {
        constructor (accName, initBalance) {

            this.accName = accName;
            this.balance = initBalance;
            
            
        };
       

        deposit (a, b) {

            console.log (this.balance = math.sumAdd (a,b));
            return (this.balance = math.sumAdd (a,b))

        
        }

        widthdraw () {
            this.balance = math.sumSub (this.balance, AccountController.inputTotal);
            
            return;
            
        }
    }

    // const accountMath1 = new AccountMath("Chequing", 25);

    export default AccountMath



 