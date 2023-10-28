import { User, users } from './user';
import * as readlineSync from 'readline-sync';

export function startATM() {
    const userId = readlineSync.question('Enter User ID: ');
    const userPin = readlineSync.question('Enter User PIN: ', {
        hideEchoBack: true,
    });

    const user = users.find(u => u.id === userId && u.pin === userPin);

    if (user) {
        console.log(`Welcome, User ID: ${user.id}`);
        displayMenu(user);
    } else {
        console.log('Invalid User ID or PIN. Please try again.');
    }
}

function displayMenu(user: User) {
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

function withdraw(user: User) {
    const amount = parseInt(readlineSync.question('Enter amount to withdraw: '));

    if (amount <= user.balance) {
        user.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${user.balance}`);
    } else {
        console.log('Insufficient funds.');
    }

    displayMenu(user);
}

function deposit(user: User) {
    const amount = parseInt(readlineSync.question('Enter amount to deposit: '));
    user.balance += amount;
    console.log(`Deposit successful. New balance: $${user.balance}`);

    displayMenu(user);
}
