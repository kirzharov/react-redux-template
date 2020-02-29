import { PropsWithChildren, ReactNode } from "react";

export type LayoutPropsT = PropsWithChildren<{
  header: ReactNode;
  footer: string;
}>;
