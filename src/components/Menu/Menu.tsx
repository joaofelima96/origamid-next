import { cookies } from "next/headers";
import Link from "next/link";

export default async function Menu() {
  let conta = {
    autorizado: false,
    usuario: "",
  };

  const token = cookies().get("token")?.value;

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (response.ok) {
    conta = await response.json();
  }

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
        {conta.autorizado ? conta.usuario : <Link href="/login">Login</Link>}
      </li>
    </ul>
  );
}
