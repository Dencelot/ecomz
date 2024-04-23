import Middle from "./components/Middle/Middle";
import Top from "./components/Top/Top";

export default function Home() {
  return (
    <main className="flex-auto w-full minH over">
      <Top/>
      <Middle/>
    </main>
  );
}
