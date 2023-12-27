import { lazy } from "react";

export const lazyLoading = (path) => {
  return lazy(() => import(`.${path}`));
};
