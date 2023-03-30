import React, { Suspense } from "react";
import { Loading } from "components/Common/Loading/Loading";
// eslint-disable-next-line no-unused-vars
type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(
  Component: React.ComponentType<T>
): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};
