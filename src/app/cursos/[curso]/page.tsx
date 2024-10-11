import { getCurso, getCursos } from "@/app/cursos";
import { Metadata } from "next";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
  };
};

// gera uma página estática para os possíveis caminhos da rota dinâmica
// isso faz com que o servidor já faça um fetch antes de mostrar para o usuário
// tornando uma rota dinâmica em uma rota estática

export async function generateStaticParams() {
  const pegarCursos = await getCursos();

  return pegarCursos.map((curso) => ({
    curso: curso.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const curso = await getCurso(params.curso);
  return {
    title: curso.nome,
    description: curso.descricao,
  };
}

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
