export interface User {
  email: string;
  name: string;
  password: string;
}

export const users: User[] = [
  {
    email: "kk@example.com",
    name: "KK",
    password: "Nexus" // In a real app, this would be hashed
  }
];