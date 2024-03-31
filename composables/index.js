import CheckModule from "./modules/check";
import CookieModule from "./modules/cookie";

export const MainComposables = () => {
  return {
    check: new CheckModule(),
    cookie: new CookieModule()
  };
};