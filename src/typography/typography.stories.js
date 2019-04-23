import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Typography", module).add("Heading H1", () => (
    <h1
        style={{
            fontFamily: "Nunito",
            fontSize: "72px",
            fontWeight: "bold",
            color: "#000000",
            letterSpacing: "0",
            textAlign: "center"
        }}>
        Heading One
    </h1>
));
