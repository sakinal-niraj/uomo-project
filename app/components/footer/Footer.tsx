export default function Footer() {
  return (
    <footer className="w-screen bg-white">
      <div className="flex justify-center">
        <div className="3xl:max-w-[1430px] 3xl:w-full  2xl:max-w-[1380px]  xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full">
          {/* Sign up now */}
          <div className="flex flex-col items-center mt-28 space-y-4">
            <h1 className="text-[26px] font-medium">Sign up now & get 10% off</h1>
            <p className="text-sm text-[#767676]">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex gap-5 pt-2">
              <input type="text" placeholder="Your email address" className="p-3 border-[1px] w-[500px] border-gray-200 text-sm" />
              <button className="text-sm font-medium text-white bg-[#222222] px-12">JOIN</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
