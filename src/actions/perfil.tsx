"use server";

import { cookies } from "next/headers";

const token = cookies().get("token")?.value;

export async function getPerfil() {
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (response.ok) {
    return response.json();
  }
}
