"use server";

import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    cookies().set("token", data.token);

    return { sucesso: "ok" };
  } else {
    return Response.json({ erro: "Usuário ou senha incorreto" });
  }
}
