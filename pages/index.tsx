import type { NextPage } from "next";
import { App, CustomHead } from "@/components";
const Index: NextPage = () => {
  return (
    <>
      <CustomHead />
      <App />
    </>
  );
};

export default Index;
