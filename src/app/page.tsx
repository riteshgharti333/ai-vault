import { Banner } from "./components/Banner";
import {Categories} from "./components/Categories";
import { FeaturedAITools } from "./components/FeaturedAITools";
import PopularCollections from "./components/PopularCollections";
import Tools from "./components/Tools";
import TopCompanies from "./components/TopCompanies";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Tools />
      <FeaturedAITools />
      <Categories />
      <PopularCollections />
      <TopCompanies />
    </div>
  );
}
