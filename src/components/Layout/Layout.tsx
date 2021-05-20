import { Fragment, ReactNode } from "react";

import MainNavigation from "./MainNavigation";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
