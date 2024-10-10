"use client";

import { getPerfil } from "@/actions/perfil";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default function Menu() {
  const params = useParams();

  const [account, setAccount] = useState<Conta>({
    autorizado: false,
    usuario: "",
  });

  useEffect(() => {
    async function setConta() {
      try {
        const perfil = await getPerfil();

        setAccount(perfil as Conta);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }

    setConta();
  }, []);

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/cookies">Cookies</Link>
      </li>
      <li>
        <Link href="/acoes">Ações: {params.acao}</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/produtos/adicionar">Adicionar Produtos</Link>
      </li>
      <li>
        {account.autorizado ? (
          account.usuario
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}
