import { Content } from "antd/es/layout/layout";
import React from "react";

function PageWrapper(props) {
  const { children } = props;

  return <Content style={{ padding: 24 }}>{children}</Content>;
}

export default PageWrapper;
