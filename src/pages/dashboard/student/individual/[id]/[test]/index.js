import { useRouter } from "next/router";
import { questions } from "@/dummy-data";
import { useState } from "react";
import Button from "@/components/button";
import Image from "next/image";

const symbols = [
  "√x",
  "4",
  "8",
  "9",
  "≤",
  "π",
  "y",
  "z",
  "⌫",
  "∛",
  "3",
  "7",
  "0",
  "≥",
  "¼",
  "x",
  "{",
  "⌫",
  "√",
  "2",
  "6",
  "<",
  "∩",
  "fₓ",
  "e",
  "⌫",
  "%",
  "1",
  "5",
  ">",
  "∪",
  "f(x)",
  "i",
  "⌫",
  "-",
  "×",
  "÷",
  "+",
];

const Index = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const router = useRouter();

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Yaxshiroq yechim sifatida "math.js" ishlatish mumkin
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => setInput("");
  return (
    <div className="font-sf">
      <div className="flex justify-between pl-[24px] pr-[16px] py-[14px] border-b border-b-[#F2F2F7]">
        <div className="flex items-center gap-x-[12px]">
          <h1 className="text-[22px] font-semibold">Теория</h1>
          <div className="w-[1px] h-[26px] bg-[#E9E9E9]"></div>
          <p className="text-[17px] text-[#525252]">
            Задача (Elixir.Task_5_3_5(x1))
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 p-[24px]">
        <div className="col-span-6 overflow-y-auto max-h-screen border-r border-r-[#F2F2F7]">
          <ul className="space-y-2">
            {questions.map((question, index) => (
              <li
                key={index}
                className={`p-3  rounded-md flex items-center gap-x-[12px] cursor-pointer `}
                onClick={() => setSelectedQuestion(question)}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center border-2  ${
                    selectedQuestion === question
                      ? "border-[#007AFF]"
                      : "hover:bg-gray-100 border-gray-300"
                  } rounded-full text-black font-bold`}
                >
                  {index + 1}
                </div>
                <p>{question}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 py-[24px] px-[50px]">
          <div className="flex justify-between p-[4px] border border-[#E9E9E9] rounded-[12px] mb-[60px]">
            <div className="flex gap-x-[15px] items-center">
              <div className="w-[60px] h-[60px] bg-[#EDEDF2] flex items-center justify-center rounded-[8px]">
                <Image
                  src={"/icons/play.svg"}
                  alt="play"
                  width={24}
                  height={24}
                />
              </div>

              <div className="space-y-[4px]">
                <h3 className="text-[17px] font-medium">Видео подсказка</h3>
                <p className="text-[#8A8A8E]">
                  Посмотрите перед тем как начать
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-[8px]">
              <Button
                border={"border border-[#D1D1D6]"}
                px="px-[16px]"
                py="py-[11px]"
              >
                Смотреть
              </Button>
            </div>
          </div>
          {selectedQuestion ? (
            <div className="space-y-[32px]">
              <p className="text-black text-[19px] font-medium text-center">
                {selectedQuestion}
              </p>
              <input
                type="text"
                className="w-full px-4 py-[16px] text-center border-none rounded-[12px] text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="..."
                value={input} // input qiymati ko'rsatiladi
                readOnly // Foydalanuvchi qo'lda o'zgartira olmaydi
              />
            </div>
          ) : (
            <div className="p-4 text-gray-500 italic">Savolni tanlang...</div>
          )}

          <div className="mt-10">
            {/* Tugmalar */}
            <div className="grid grid-cols-10 gap-2">
              {[
                "√x",
                "4",
                "8",
                "9",
                "≤",
                "π",
                "∛",
                "3",
                "7",
                "-",
                "0",

                "≥",
                "¼",
                "√",
                "2",
                "6",
                "<",
                "∩",
                "fx",
                "%",
                "×",
                "1",
                "5",
                ">",
                "∪",
                "f(x)",
              ].map((btn, i) => (
                <button
                  key={i}
                  className="p-3 w-[50px] h-[50px] text-[#59626B] text-2xl font-semibold rounded shadow bg-[#F5F6F8] hover:bg-gray-300 col-span-1"
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}

              {/* Amal tugmalari */}
              {["-", "×", "÷", "+"].map((op, i) => (
                <button
                  key={i}
                  className="p-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600"
                  onClick={() => handleClick(op)}
                >
                  {op}
                </button>
              ))}
            </div>

            {/* Hisoblash va tozalash */}
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 p-3 bg-red-500 text-white rounded shadow"
                onClick={clearInput}
              >
                C
              </button>
              <button
                className="flex-1 p-3 bg-green-500 text-white rounded shadow"
                onClick={calculateResult}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
