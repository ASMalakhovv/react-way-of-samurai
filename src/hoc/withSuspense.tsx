import {Component, ComponentType, ReactNode, Suspense} from "react";
import {Preloader} from "../Components/common/Preloader/Preloader";

export function withSuspense<T>(Component: ComponentType<T>) {
    return (restProps: JSX.IntrinsicAttributes & T & { children?: ReactNode; }) => {
      return <Suspense fallback={<Preloader/>}>
           <Component {...restProps} />
      </Suspense>
  }
}
