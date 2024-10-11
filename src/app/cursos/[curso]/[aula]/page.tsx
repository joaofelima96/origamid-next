import { Aula, getAula, getCurso, getCursos } from "@/app/cursos";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export async function generateStaticParams() {
  const pegarCursos = await getCursos();
  const aulas = await Promise.all(
    pegarCursos.map((curso) => getCurso(curso.slug))
  );

  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: pegarCursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }));
}

export default async function AulaPage({ params }: PageParams) {
  console.log(params);
  const aula = await getAula(params.curso, params.aula);

  return (
    <main>
      <h2>
        Aula: {params.curso} {">"} {aula.nome}
      </h2>

      <p>Descrição: {aula.descricao}</p>
      <p>Tempo: {aula.tempo}min</p>
    </main>
  );
}
