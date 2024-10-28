// utils/generateRandomData.ts
export function generateRandomUsername(): string {
    const prefix = 'gregorio';
    const suffix = Math.floor(Math.random() * 10000); 
    return `${prefix}${suffix}`;
  }
  
  export function generateRandomEmail(): string {
    const prefix = 'claud';
    const suffix = Math.floor(Math.random() * 10000); 
    return `${prefix}${suffix}@gmail.com`;
  }
  