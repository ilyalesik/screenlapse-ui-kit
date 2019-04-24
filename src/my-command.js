import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components/primitives";
import { render } from "react-sketchapp";
import { HeadingH1 } from "./typography/typography";

const Artboard = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: ${(96 + 8) * 4}px;
    justify-content: center;
`;

const Document = () => (
    <Artboard name="Screenlapse UI-kit">
        <HeadingH1>Heading One</HeadingH1>
    </Artboard>
);

Document.propTypes = {};

export default context => {
    render(<Document />, context.document.currentPage());
};
