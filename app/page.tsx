import Middle from "./components/Middle/Middle";
import { DemoModal } from './components/DemoModal/DemoModal'
import Top from "./components/Top/Top";
import { Contacts } from './components/Contacts/Contacts'
import Bottom from "./components/Bottom/Bottom";

export default function Home() {
  return (
    <main className="flex-auto w-full minH ">
      <Top/>
      <Middle/>
      <Bottom/>
      {/* <DemoModal isDemo/> */}
      {/* <DemoModal isDemo={false}/> */}
    </main>
  );
}
