import MainContentHead from "../main-content-head";

const MainContent = ({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
  headTitle,
}) => {
  return (
    <div
      className={`transition-all duration-300 flex-1 font-sf  ${
        isSidebarOpen ? "lg:ml-[350px]" : "lg:ml-0"
      }`}
    >
      <MainContentHead
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        title={headTitle}
      />
      <div className="p-[24px]">{children}</div>
    </div>
  );
};

export default MainContent;
