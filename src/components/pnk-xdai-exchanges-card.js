import { ReactComponent as Swapr } from "../assets/images/swapr.svg";
import { ReactComponent as Omnibridge } from "../assets/images/omnibridge.svg";
import React from "react";
import styled from "styled-components/macro";

const StyledExchangeCard = styled.a`
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 6px 36px #bc9cff;
  display: flex;
  height: 40px;
  padding: 40px 26px;

  svg,
  img {
    vertical-align: middle;
    max-width: 80%;
    max-height: 70px;
  }
`;

const StyledExchangeSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
`;

const Exchanges = [
  {
    logo: <Omnibridge />,
    link: "https://omni.xdaichain.com/bridge?from=1&to=100&token=0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
  },
  {
    logo: <Swapr />,
    link: "https://swapr.eth.link/#/swap?inputCurrency=0x37b60f4e9a31a64ccc0024dce7d0fd07eaa0f7b3&chainId=100",
  },
];

// eslint-disable-next-line react/display-name
export default () => (
  <StyledExchangeSection>
    {Exchanges.map((exchange, i) => (
      <StyledExchangeCard key={i} href={exchange.link}>
        {exchange.logo}
      </StyledExchangeCard>
    ))}
  </StyledExchangeSection>
);
