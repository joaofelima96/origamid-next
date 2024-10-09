"use server";

import { cookies } from "next/headers";

export async function getCookie(key: string) {
  const cookie = cookies().get(key);

  if (cookie) {
    return { funcionou: true, valor: cookie.value };
  } else {
    return { funcionou: false };
  }
}
