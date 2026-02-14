type TagNote = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export type FetchTagNote =
  | 'Todo'
  | 'Work'
  | 'Personal'
  | 'Meeting'
  | 'Shopping'
  | 'all';

export interface Note {
  content: string;
  id: string;
  tag: TagNote;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewNote {
  title: string;
  content: string;
  tag: TagNote;
}

export interface User {
  email: string;
  username: string;
  avatar: string;
}
export interface UserReg {
  email: string;
  password: string;
}
