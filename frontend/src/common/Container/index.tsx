type MainProps = {
  children: React.ReactNode;
};

type SmallPageProps = {
  children: React.ReactNode;
  header: string;
  subheader?: string;
  size?: 1 | 2 | 3 | 4;
  gap?: 0 | 4 | 8;
};

export const Main = ({ children }: MainProps) => (
  <main className="relative flex flex-col min-h-[calc(100vh_-_7.5rem)] w-full pt-24 pb-12 bg-gray-1000 bg-[url(/bg.png)] bg-cover items-center justify-center">
    {children}
  </main>
);

// max-w-${size === 1 ? "" : size}xl처럼 하면 tailwind에서 깔끔하게 처리되지 않을 것 같아 일단 if-else로 처리
export const SmallPage = ({ children, header, subheader, size = 1, gap = 0 }: SmallPageProps) => (
  <div className={`flex flex-col ${
    size === 1
    ? "max-w-xl"
    : size === 2
      ? "max-w-2xl"
      : size === 3
        ? "max-w-3xl"
        : "max-w-4xl"
  } ${
    gap === 4
    ? "gap-4"
    : gap === 8
      ? "gap-8"
      : ""
  } w-full px-16 pt-10 pb-20 rounded-xl border border-gray-lighter bg-white shadow-light-md`}>
    {subheader && <h3 className="flex justify-center text-md text-gray-light font-medium tracking-tight">{subheader}</h3>}
    <h2 className={`flex justify-center ${subheader ? "pt-2" : "pt-6"} pb-6 border-b border-gray-extra-light ${gap === 4 ? "mb-6" : gap === 8 ? "mb-2" : "mb-10"} text-3xl font-bold tracking-tight`}>
      {header}
    </h2>
    {children}
  </div>
);
