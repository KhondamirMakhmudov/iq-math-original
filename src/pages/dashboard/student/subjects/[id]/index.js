import Dashboard from "@/components/dashboard";

const Index = () => {
  return (
    <Dashboard headerTitle={"Математика"}>
      <div className="font-sf">
        <h2 className="font-semibold text-[22px] mb-[18px]">Темы/разделы</h2>

        <div className="grid grid-cols-12 gap-[24px]"></div>
      </div>
    </Dashboard>
  );
};

export default Index;
