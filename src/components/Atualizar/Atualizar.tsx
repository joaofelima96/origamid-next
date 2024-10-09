"use client";

import { revalidatePathAction } from "@/app/acoes/revalidate-path";
import { revalidateTagAction } from "@/app/acoes/revalidate-tags";
import { useEffect } from "react";

export default function Atualizar() {
  function updateRoute() {
    revalidatePathAction("/acoes");
    revalidateTagAction("acoes");
  }

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   updateRoute();
    // }, 5000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  return <button onClick={updateRoute}>Atualizar</button>;
}
