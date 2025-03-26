import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div className="font-sf">
      <div className="flex justify-between pl-[24px] pr-[16px] py-[14px] border-b border-b-[#F2F2F7] items-center">
        <div className="flex items-center gap-x-[12px]">
          <h1 className="text-[22px] font-semibold">Теория</h1>
          <div className="w-[1px] h-[26px] bg-[#E9E9E9]"></div>
          <p className="text-[17px] text-[#525252]">
            Задача (Elixir.Task_5_3_5(x1))
          </p>
        </div>

        <div>
          <button onClick={() => router.back()} className="float-right rounded">
            <Image
              src={"/icons/close.svg"}
              alt="circle"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
