import ProgressCard from "@/card/progress-card";
import Dashboard from "@/components/dashboard";
import ProfileDetails from "@/components/profile-details";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Dashboard headerTitle={"Профиль"}>
      <div className="grid grid-cols-12 gap-x-[24px]">
        <div className="col-span-5 border border-[#E9E9E9] rounded-[12px]">
          <div className="flex justify-center items-center flex-col  p-[20px]">
            <Image
              src={"/images/avatar-profile.png"}
              alt="avatar"
              width={100}
              height={100}
              className="rounded-full bg-black"
            />

            <h3 className="text-[17px] font-semibold mt-[16px] mb-[6px]">
              Dilshod Suyunov
            </h3>
            <p className="text-[#8A8A8E] text-[15px]">ID:123023020</p>
          </div>

          <div className="border-t border-t-[#E9E9E9]">
            <div className="p-[20px]">
              <ul>
                <li>
                  <ProfileDetails
                    detailIcon={"phone"}
                    title={"Номер телефона"}
                    desc={"+998 93 233 33 53"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"email"}
                    title={"Email адрес"}
                    desc={"dilshod323@gmail.com"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"calendar"}
                    title={"Дата рождения"}
                    desc={"12/02/2002"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"region"}
                    title={"Регион"}
                    desc={"Ташкент регион"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"region"}
                    title={"Область"}
                    desc={"Ташкентская область"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"address"}
                    title={"Адрес"}
                    desc={"Юнус раджаби 72/33"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"education"}
                    title={"Учреждение"}
                    desc={"Педагогический институт"}
                  />
                </li>

                <li>
                  <ProfileDetails
                    detailIcon={"course"}
                    title={"Курс"}
                    desc={"2 курс"}
                  />
                </li>
              </ul>

              <button
                onClick={() => router.push("/dashboard/student/profile/1")}
                className="border border-[#D1D1D6] flex justify-center items-center p-[12px] gap-x-[8px] rounded-[10px] w-full mt-[8px]"
              >
                <Image
                  src={`/icons/edit.svg`}
                  alt={`edit`}
                  width={20}
                  height={20}
                />
                <p className="font-medium">Изменить</p>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-7">
          <div className="flex gap-x-[24px]">
            <div className="space-y-[20px] w-2/3">
              <div className="relative border border-[#E9E9E9] rounded-[12px] py-[12px] px-[16px] space-y-[12px]">
                <Image
                  src={`/images/education.png`}
                  alt={`education`}
                  width={71}
                  height={71}
                  className="absolute right-0 top-9 right-9 lg:block hidden"
                />
                <p className="text-[28px] font-extrabold">6,825</p>
                <div className="space-y-[4px]">
                  <p className="text-[17px]">Total students</p>
                  <div className="flex gap-x-[4px] items-center py-[3px]">
                    <Image
                      src={`/icons/arrow-up.svg`}
                      alt={`arrow-up`}
                      width={20}
                      height={20}
                    />

                    <p className="text-[17px] text-[#2EB14F] font-medium">
                      +14%
                    </p>
                    <p className="text-[15px] font-medium text-[#8A8A8E]">
                      Больше в этом месяце
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative border border-[#E9E9E9] rounded-[12px] py-[12px] px-[16px] space-y-[12px]">
                <Image
                  src={`/images/education.png`}
                  alt={`education`}
                  width={71}
                  height={71}
                  className="absolute right-0 top-9 right-3"
                />
                <p className="text-[28px] font-extrabold">6,825</p>
                <div className="space-y-[4px]">
                  <p className="text-[17px]">Total students</p>
                  <div className="flex gap-x-[4px] items-center py-[3px]">
                    <Image
                      src={`/icons/arrow-up.svg`}
                      alt={`arrow-up`}
                      width={20}
                      height={20}
                    />

                    <p className="text-[17px] text-[#2EB14F] font-medium">
                      +14%
                    </p>
                    <p className="text-[15px] font-medium text-[#8A8A8E]">
                      Больше в этом месяце
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#114FFF] rounded-[12px] w-1/3">
              <ProgressCard />
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Index;
