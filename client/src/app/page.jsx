import CategoryList from "./_components/CategoryList";
import Footer from "./_components/Footer";
import Sliders from "./_components/Sliders";

export default function Home() {
  return (
    <div className="p-5 w-full max-w-7xl mx-auto flex flex-col gap-4">
      <Sliders />
      <CategoryList />
      <Footer />
    </div>
  );
}
