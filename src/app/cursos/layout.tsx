import Link from "next/link";
import { getCursos } from "../cursos";

export default async function CursosPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursos = await getCursos();

  return (
    <div style={{ display: "flex" }}>
      <h2>Cursos</h2>
      <nav style={{ marginRight: "4rem" }}>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
