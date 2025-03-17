import Dashboard from "@/components/dashboard";
import GridExample from "@/components/grid-table";
import { useState } from "react";

const Index = () => {
  const [tab, setTab] = useState("active");

  const handleTab = (tabName) => {
    setTab(tabName);
  };
  return (
    <Dashboard headerTitle={"Мое обучение"} tab={tab} handleTab={handleTab}>
      {tab === "active" ? <GridExample /> : <p>Yopilgan darslar ro'yxati</p>}
    </Dashboard>
  );
};

export default Index;
