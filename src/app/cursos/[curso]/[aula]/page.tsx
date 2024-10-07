import { getAula } from "@/app/cursos";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

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
