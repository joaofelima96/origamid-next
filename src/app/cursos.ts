export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export function getCursos(): Promise<Curso[]> {
  return fetch("https://api.origamid.online/cursos/")
    .then((response) => response.json())
    .then((cursos) => cursos);
}

export function getCurso(nomeCurso: string): Promise<Curso> {
  return fetch(`https://api.origamid.online/cursos/${nomeCurso}`)
    .then((response) => response.json())
    .then((curso) => curso);
}

export function getAula(nomeCurso: string, nomeAula: string): Promise<Aula> {
  return fetch(`https://api.origamid.online/cursos/${nomeCurso}/${nomeAula}`)
    .then((response) => response.json())
    .then((aula) => aula);
}
