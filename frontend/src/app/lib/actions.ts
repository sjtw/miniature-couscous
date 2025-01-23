import { Comm } from '@/app/lib/definitions';

const BASE_URL = 'http://localhost:3000';

export async function getComm(id: string): Promise<Comm> {
  const url = `${BASE_URL}/comms/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}