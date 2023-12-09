import SearchModule from "./modules/search";
import CheckModule from "./modules/check";

export const MainComposables = () => {
  return {
    check: new CheckModule(),
    search: new SearchModule()
  };
};