import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage(kind) {
  return <Button variant={kind}>Hello world</Button>;
}

export function Mui() {
  return (
    <>
      <div className="page-wrap">
        {ButtonUsage("outlined")} {ButtonUsage("contained")}
      </div>
    </>
  );
}
