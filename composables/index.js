import CheckModule from "./modules/check";

export const MainComposables = () => {
  return {
    check: new CheckModule(),
  };
};