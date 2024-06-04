import { useState } from "react";

const Community = () => {
  console.log("COMMNUNITY COMPONENT - PAGES ROUTER");

  const [title, setTitle] = useState();
  return (
    <div>
      Community
      <button onClick={() => alert("hello MIT")}>press me</button>
    </div>
  );
};
export default Community;
