import { db } from "./db";
import { users, loans, type User, type InsertUser, type Loan, type InsertLoan } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLoan(loan: InsertLoan & { userId: number }): Promise<Loan>;
  getLoansByUser(userId: number): Promise<Loan[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createLoan(loan: InsertLoan & { userId: number }): Promise<Loan> {
    const [newLoan] = await db.insert(loans).values(loan).returning();
    return newLoan;
  }

  async getLoansByUser(userId: number): Promise<Loan[]> {
    return db.select().from(loans).where(eq(loans.userId, userId));
  }
}

export const storage = new DatabaseStorage();
