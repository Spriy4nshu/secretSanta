export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  organizerId: string;
  members: string[]; // User IDs
  createdAt: Date;
  drawDate?: Date;
}

export interface Assignment {
  id: string;
  groupId: string;
  giverId: string; // User ID
  receiverId: string; // User ID
  createdAt: Date;
}

export interface Wishlist {
  id: string;
  userId: string;
  groupId: string;
  items: WishlistItem[];
  budget?: number;
}

export interface WishlistItem {
  id: string;
  title: string;
  description?: string;
  url?: string;
  priority: 'high' | 'medium' | 'low';
}
