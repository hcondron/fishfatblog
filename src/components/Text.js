import { createElement as h } from "react";
import styled from "styled-components";
import theme from "../config/theme";

export const withDynamicTag = (Component) => {
  const bucket = Object.create(null);

  const DynamicTag = (props) => {
    const { tag } = props;

    if (typeof tag !== "string") {
      return h(Component, props);
    }

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag);
    }

    return h(bucket[tag], props);
  };

  const name = Component.displayName || Component.constructor.name;

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`;
  }

  return DynamicTag;
};

const TextBase = styled.p`
  cursor: ${({ cursor }) => cursor || "auto"};
  color: ${({ color }) => color || theme.colors.secondary100};
  font-size: ${({ size, mobileSize }) =>
    mobileSize
      ? theme.fontScale[mobileSize]
      : theme.fontScale[size] || theme.fontScale.x3};
  font-weight: ${({ weight }) =>
    theme.fontWeight[weight] || theme.fontWeight.normal};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: 0;
  padding: 0;
  @media (${theme.breakpoints.mediumAndUp}) {
    font-size: ${({ size }) => theme.fontScale[size] || theme.fontScale.x3};
  }
`;

export const Strong = styled.strong`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Em = styled.em`
  text-decoration: italic;
`;

export default withDynamicTag(TextBase);
