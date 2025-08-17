import Spline from "@splinetool/react-spline/next";

export const Feature1 = () => {
  return (
    <div className="bg-black) relative flex min-h-screen w-full flex-col overflow-hidden">
      {/**object animate */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Spline scene="https://prod.spline.design/qiWr3xgXmOKWTWAd/scene.splinecode" />
      </div>

      {/**title heading */}
      <main className="z-10 mt-40 block space-y-7 text-center">
        <div className="text-4xl font-bold md:text-6xl">
          <h1>You can change anything</h1>
          <h1>But you don&apos;t have to</h1>
        </div>
        <p className="mx-auto max-w-xl text-lg text-gray-400">
          Get the full control of the code of your website. Change it or just use the defaults.
          Customize it in seconds with CSS variables. 🚀
        </p>
      </main>
    </div>
  );
};
