"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startATM = void 0;
const user_1 = require("./user");
const readlineSync = __importStar(require("readline-sync"));
function startATM() {
    const userId = readlineSync.question('Enter User ID: ');
    const userPin = readlineSync.question('Enter User PIN: ', {
        hideEchoBack: true,
    });
    const user = user_1.users.find(u => u.id === userId && u.pin === userPin);
    if (user) {
        console.log(`Welcome, User ID: ${user.id}`);
        displayMenu(user);
    }
    else {
        console.log('Invalid User ID or PIN. Please try again.');
    }
}
exports.startATM = startATM;
function displayMenu(user) {
    console.log(`Current Balance: $${user.balance}`);
    console.log('1. Withdraw');
    console.log('2. Deposit');
    console.log('3. Exit');
    const choice = readlineSync.question('Enter your choice: ');
    switch (choice) {
        case '1':
            withdraw(user);
            break;
        case '2':
            deposit(user);
            break;
        case '3':
            console.log('Exiting. Thank you!');
            break;
        default:
            console.log('Invalid choice. Please try again.');
            break;
    }
}
function withdraw(user) {
    const amount = parseInt(readlineSync.question('Enter amount to withdraw: '));
    if (amount <= user.balance) {
        user.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${user.balance}`);
    }
    else {
        console.log('Insufficient funds.');
    }
    displayMenu(user);
}
function deposit(user) {
    const amount = parseInt(readlineSync.question('Enter amount to deposit: '));
    user.balance += amount;
    console.log(`Deposit successful. New balance: $${user.balance}`);
    displayMenu(user);
}
