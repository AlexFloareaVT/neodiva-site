import type { Route } from "./+types/home";
import { Singers } from "../singers/singerspage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NeoDIVA Singers" },
    { name: "description", content: "Welcome to NeoDIVA!" },
  ];
}

export default function Home() {
  return <Singers />;
}
