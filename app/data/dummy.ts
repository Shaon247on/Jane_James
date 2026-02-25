export type DocType = "witness" | "client";
export type DocStatus = "pending" | "issue" | "done";

export interface Document {
  id: string;
  title: string;
  updatedAt: string;
  signaturesCompleted: number;
  signaturesTotal: number;
  progress: number;
  type: DocType;
  status: DocStatus;
}

export interface HistoryDoc {
  id: string;
  title: string;
  date: string;
  progress: number;
}

export interface UserProfile {
  name: string;
  email: string;
  stats: { pending: number; issue: number; done: number };
}

export const currentUser: UserProfile = {
  name: "Robert Plet",
  email: "alex.rivera@gmail.com",
  stats: { pending: 5, issue: 1, done: 12 },
};

export const witnessDocuments: Document[] = [
  {
    id: "1",
    title: "Property Disclosure Statement",
    updatedAt: "Updated 10 minutes ago",
    signaturesCompleted: 13,
    signaturesTotal: 20,
    progress: 0,
    type: "witness",
    status: "pending",
  },
  {
    id: "2",
    title: "Mortgage Loan Agreement",
    updatedAt: "Updated 1 hour ago",
    signaturesCompleted: 13,
    signaturesTotal: 20,
    progress: 78,
    type: "witness",
    status: "pending",
  },
];

export const clientDocuments: Document[] = [
  {
    id: "3",
    title: "Property Disclosure Statement",
    updatedAt: "Updated 10 minutes ago",
    signaturesCompleted: 13,
    signaturesTotal: 20,
    progress: 0,
    type: "client",
    status: "done",
  },
  {
    id: "4",
    title: "Mortgage Loan Agreement",
    updatedAt: "Updated 1 hour ago",
    signaturesCompleted: 13,
    signaturesTotal: 20,
    progress: 78,
    type: "client",
    status: "pending",
  },
];

export const historyDocuments: HistoryDoc[] = [
  { id: "1", title: "Lease Agreement", date: "Oct 29, 2026", progress: 100 },
  { id: "2", title: "Lease Agreement", date: "Oct 29, 2026", progress: 100 },
  { id: "3", title: "Lease Agreement", date: "Oct 29, 2026", progress: 100 },
  { id: "4", title: "Lease Agreement", date: "Oct 29, 2026", progress: 100 },
  { id: "5", title: "Lease Agreement", date: "Oct 29, 2026", progress: 100 },
];

export const signatureFields = [
  { id: "f1", label: "Committee Chair", type: "sign" },
  { id: "f2", label: "First Reader", type: "sign" },
  { id: "f3", label: "Second Reader", type: "sign" },
  { id: "f4", label: "Department Head", type: "sign" },
  { id: "f5", label: "Assistant Provost", type: "signAndDate" },
];
