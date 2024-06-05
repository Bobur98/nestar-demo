import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMNUNITY COMPONENT - PAGES ROUTER");

  const [title, setTitle] = useState();
  return (
    <div>
      Community
      <button onClick={() => alert("hello MIT")}>press me</button>
    </div>
  );
};
export default withLayoutBasic(Community);
