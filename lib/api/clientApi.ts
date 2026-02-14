import {
  type Note,
  type NewNote,
  type FetchTagNote,
  type User,
  type UserReg,
} from '@/types/note';
import { nextServer } from './api';

interface Answer {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  tag: FetchTagNote,
  page: number,
  search: string
): Promise<Answer> {
  if (tag === 'all' && !search) {
    const res = await nextServer.get<Answer>(`/notes?&page=${page}&perPage=12`);
    return res.data;
  }

  if (tag !== 'all' && !search) {
    const res = await nextServer.get<Answer>(
      `/notes?tag=${tag}&page=${page}&perPage=12`
    );
    return res.data;
  }

  if (tag === 'all' && search) {
    const res = await nextServer.get<Answer>(
      `/notes?search=${search}&page=${page}&perPage=12`
    );
    return res.data;
  }

  const res = await nextServer.get<Answer>(
    `/notes?search=${search}&tag=${tag}&page=${page}&perPage=12`
  );
  return res.data;
}

export async function createNote(note: NewNote): Promise<Note> {
  const res = await nextServer.post<Note>(`/notes`, note);
  return res.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await nextServer.delete<Note>(`/notes/${id}`);
  return res.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
}

export async function register(data: UserReg): Promise<User> {
  const res = await nextServer.post('/auth/register', data);
  return res.data;
}

export async function login() {}

export async function logout() {}

export async function checkSession() {}

export async function getMe() {}

export async function updateMe() {}
