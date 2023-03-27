import { Content } from "./components/Content";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen bg-[#1B2033] ">
      <Header />
      <Content />
    </main>
  )
}
