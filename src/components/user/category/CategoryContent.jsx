import HomeCatSection from "../home/HomeCatSection";
import timoutLoading from "../../../config/timeoutLoading";

const CategoryContent = () => {
  timoutLoading();
  return (
    <div className="w-full h-auto min-h-[calc(100vh-4.5rem)]">
      <HomeCatSection from={"category"} />
    </div>
  );
};

export default CategoryContent;
