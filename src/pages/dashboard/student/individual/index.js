import Dashboard from "@/components/dashboard";
import Image from "next/image";

const Index = () => {
  return (
    <Dashboard headerTitle={"Самостоятельные"}>
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="flex items-center flex-col justify-center font-sf max-w-[556px] w-full">
          <div className="p-[17px] bg-[#E5F1FF] rounded-full">
            <Image
              src={"/icons/grid-circles.svg"}
              alt="circles"
              width={32}
              height={32}
            />
          </div>

          <p className="text-[22px] font-semibold mt-[40px]  mb-[12px]">
            Пока еще нет самостоятельных заданий
          </p>
          <p className="text-[#8A8A8E] text-[17px] font-medium">
            Самостоятельные задания будет назначать ваш учитель
          </p>
        </div>
      </div>
    </Dashboard>
  );
};

export default Index;
