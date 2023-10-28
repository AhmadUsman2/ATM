export interface User {
    id: string;
    pin: string;
    balance: number;
}

export const users: User[] = [
    { id: 'abc123', pin: '1234', balance: 1000 },
    { id: 'def456', pin: '5678', balance: 2000 },
    // Add more user objects as needed
];