import Cardapio from "./components/Cardapio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionAmbiente from "./components/SectionAmbiente";
import SectionContatos from "./components/SectionContatos";
import SectionDepoimentos from "./components/SectionDepoimentos";
import SectionOrigens from "./components/SectionOrigens";
import SectionPreparo from "./components/SectionPreparo";



export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Cardapio />
      <SectionPreparo />
      <SectionOrigens />
      <SectionAmbiente />
      <SectionDepoimentos />
      <SectionContatos />
      <Footer />
    </>


  );
}
