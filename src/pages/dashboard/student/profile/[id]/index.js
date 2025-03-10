import Dashboard from "@/components/dashboard";
import { useState } from "react";
import RightIcon from "@/components/icons/right";

const Index = () => {
  const [showDropdownMain, setShowDropdownMain] = useState(false);
  const [showDropdownMail, setShowDropdownMail] = useState(false);
  const [showDropdownPassword, setShowDropdownPassword] = useState(false);
  return (
    <Dashboard headerTitle={"Личные данные"}>
      <div className="grid grid-cols-12 gap-[24px] font-sf">
        <div className="col-span-6 space-y-[12px]">
          {/* Main infos */}
          <div className="border py-[17px] px-[24px] rounded-[12px]">
            <div
              onClick={() => setShowDropdownMain(!showDropdownMain)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h4 className="font-medium text-[17px]">Основные данные</h4>
              <button>
                <RightIcon
                  classname={`${
                    !showDropdownMain ? "rotate-90" : "-rotate-90"
                  } transition-all duration-200`}
                  color="#BCBFC2"
                />
              </button>
            </div>

            {showDropdownMain && (
              <div>
                <div className="w-full h-[1px] bg-[#E9E9E9] my-[16px]"></div>

                <form className="space-y-[24px]">
                  <div>
                    <p className="text-[15px] mb-[8px]">
                      Полное имя <span className="text-[#FF3B30] ">*</span>
                    </p>

                    <input
                      type="text"
                      placeholder=""
                      className="border border-[#E9E9E9] rounded-[8px] w-full py-[10px] px-[16px] font-medium"
                      value={"Dilshod Suyunov"}
                    />
                  </div>

                  <div>
                    <p className="text-[15px] mb-[8px]">
                      Номер телефона <span className="text-[#FF3B30] ">*</span>
                    </p>

                    <input
                      type="text"
                      placeholder=""
                      className="border border-[#E9E9E9] rounded-[8px] w-full py-[10px] px-[16px] font-medium"
                      value={"+998 93 233 33 53"}
                    />
                  </div>

                  <div>
                    <p className="text-[15px] mb-[8px]">
                      Дата рождение <span className="text-[#FF3B30] ">*</span>
                    </p>

                    <input
                      type="text"
                      placeholder=""
                      className="border border-[#E9E9E9] rounded-[8px] w-full py-[10px] px-[16px] font-medium"
                      value={"12/02/2002"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="border py-[17px] px-[24px] rounded-[12px]">
            <div
              onClick={() => setShowDropdownMail(!showDropdownMail)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h4 className="font-medium text-[17px]">Изменить email-адрес</h4>
              <button>
                <RightIcon
                  classname={`${
                    !showDropdownMail ? "rotate-90" : "-rotate-90"
                  } transition-all duration-200`}
                  color="#BCBFC2"
                />
              </button>
            </div>

            {showDropdownMail && (
              <div>
                <div className="w-full h-[1px] bg-[#E9E9E9] my-[16px]"></div>

                <form className="space-y-[24px]">
                  <div>
                    <p className="text-[15px] mb-[8px]">
                      Новый email-адрес{" "}
                      <span className="text-[#FF3B30] ">*</span>
                    </p>

                    <input
                      type="email"
                      placeholder=""
                      className="border border-[#E9E9E9] rounded-[8px] w-full py-[10px] px-[16px] font-medium"
                      value={"Dilshod Suyunov"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="border py-[17px] px-[24px] rounded-[12px]">
            <div
              onClick={() => setShowDropdownPassword(!showDropdownPassword)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h4 className="font-medium text-[17px]">Изменить пароль</h4>
              <button>
                <RightIcon
                  classname={`${
                    !showDropdownPassword ? "rotate-90" : "-rotate-90"
                  } transition-all duration-200`}
                  color="#BCBFC2"
                />
              </button>
            </div>

            {showDropdownPassword && (
              <div>
                <div className="w-full h-[1px] bg-[#E9E9E9] my-[16px]"></div>

                <form className="space-y-[24px]">
                  <div>
                    <p className="text-[15px] mb-[8px]">
                      Новый пароль
                      <span className="text-[#FF3B30] ">*</span>
                    </p>

                    <input
                      type="password"
                      placeholder=""
                      className="border border-[#E9E9E9] rounded-[8px] w-full py-[10px] px-[16px] font-medium"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Save or exit section */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-t-[#E9E9E9] p-4 flex justify-end gap-2">
        <button className="py-[13px] px-[16px] bg-[#EDEDF2] text-black rounded-[10px]">
          Отменить изменения
        </button>
        <button className="py-[13px] px-[16px] bg-[#5D87FF]  text-white rounded-[10px]">
          Сохранить изменения
        </button>
      </div>
    </Dashboard>
  );
};

export default Index;
