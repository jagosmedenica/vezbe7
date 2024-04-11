import { Bank } from "./services/bank";
const bank=new Bank();

const user1={id:1,name:"Jagos",email:"jagos.medenica.mne@gmail.com"};
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);
bank.displayUserAccounts(user1.id);