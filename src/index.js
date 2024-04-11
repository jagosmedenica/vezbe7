"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./services/bank");
var bank = new bank_1.Bank();
var user1 = { id: 1, name: "Jagos", email: "jagos.medenica.mne@gmail.com" };
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);
bank.displayUserAccounts(user1.id);
