import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NeoDIVA Home" },
    { name: "description", content: "Welcome to NeoDIVA!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
