import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

function PageHeader(props) {
  const { title, subtitle, action } = props;

  return (
    <Flex align="center" justify="space-between" style={{ marginBottom: 24 }}>
      <Flex vertical>
        <Title>{title}</Title>

        {/* Paragraph only renders if subtitle has value */}
        {subtitle ? <Paragraph>{subtitle}</Paragraph> : null}
      </Flex>

      {action}
    </Flex>
  );
}

export default PageHeader;
