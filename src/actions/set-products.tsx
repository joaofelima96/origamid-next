"use server";

import { revalidatePathAction } from "@/app/acoes/revalidate-path";
import { Produto } from "@/components/ProdutosLista/ProdutosLista";
import { redirect } from "next/navigation";

export async function setProduct(produto: Produto) {
  const response = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });

  if (response.ok) {
    revalidatePathAction("/produtos");
    redirect("/produtos");
  } else {
    return Response.json({ erro: "Usuário ou senha incorreto" });
  }
}
