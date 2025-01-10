import CategoryList from "../_components/CategoryList";
import PopularProducts from "../_components/PopularProducts";
import Sliders from "../_components/Sliders";


export default function Home() {
  return (
    <div className="px-5 w-full max-w-7xl mx-auto flex flex-col gap-4">
      <Sliders />
      <CategoryList />
      <PopularProducts />
    </div>
  );
}
