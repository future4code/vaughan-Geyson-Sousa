import { UserAccount } from './UserAccount'

//Questão3
export class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public setAccount(account: UserAccount) {
        (this.accounts).push(account)
    }

    public getAccounts() {
        return this.accounts
    }
}