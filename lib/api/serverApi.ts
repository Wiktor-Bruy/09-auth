import { cookies } from 'next/headers';
import { nextServer } from './api';

import type { User } from '@/types/user';

export async function fetchNotes() {}

export async function fetchNoteById() {}

export async function getMe(): Promise<User> {
  const cookieStore = await cookies();

  const res = await nextServer.get('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function checkSession() {
  const cookieStore = await cookies();

  const res = await nextServer.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
}
