import { getCurso } from "@/app/cursos";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);

  return (
    <main>
      <h2>Curso - {curso.nome}</h2>

      <h3>Aulas:</h3>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
