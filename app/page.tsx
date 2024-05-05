import Middle from "./components/Middle/Middle";
import { DemoModal } from './components/DemoModal/DemoModal'
import Top from "./components/Top/Top";

export default function Home() {
  return (
    <main className="flex-auto w-full minH ">
      <Top/>
      {/* <Middle/> */}
      <DemoModal/>
    </main>
  );
}
