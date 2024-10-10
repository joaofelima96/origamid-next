"use client";

export default function ProdutosError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h1>Um erro ocorreu</h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
