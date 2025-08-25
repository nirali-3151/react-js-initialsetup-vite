import Loader from "@components/loader/Loader";
import React, { Suspense, type ReactNode } from "react";
import { Await } from "react-router";

type FallbackUIProps<T> = {
  data: any;
  children: (resolvedData: T) => ReactNode;
};

const FallbackUI = <T,>({ data, children }: FallbackUIProps<T>) => {
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data}>{children}</Await>
    </Suspense>
  );
};

export default FallbackUI;
