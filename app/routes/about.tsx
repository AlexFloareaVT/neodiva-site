import type { Route } from "./+types/home";
import { About } from "../about/aboutpage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About NeoDIVA" },
    { name: "description", content: "Welcome to NeoDIVA!" },
  ];
}

export default function Home() {
  return <About />;
}
