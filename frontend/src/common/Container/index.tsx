type MainProps = {
  children: React.ReactNode;
};

type SmallPageProps = {
  children: React.ReactNode;
  header: string;
  color?: string;
  subheader?: string;
  size?: 1 | 2 | 3 | 4;
  padding?: 10 | 16;
};

export const Main = ({ children }: MainProps) => (
  <main className="relative flex min-h-[calc(100vh_-_7.5rem)] w-full flex-col items-center justify-center bg-gray-1000 bg-[url(/bg.png)] bg-cover pb-12 pt-24">
    {children}
  </main>
);

// max-w-${size === 1 ? "" : size}xl처럼 하면 tailwind에서 깔끔하게 처리되지 않을 것 같아 일단 if-else로 처리
export const SmallPage = ({
  children,
  header,
  subheader,
  color = "bg-white",
  size = 1,
  padding = 16,
}: SmallPageProps) => (
  <div
    className={`w-full ${
      size === 1
        ? 'max-w-xl'
        : size === 2
          ? 'max-w-2xl'
          : size === 3
            ? 'max-w-3xl'
            : 'max-w-4xl'
    } border border-gray-lighter rounded-xl shadow-light-md ${
      color
    } pt-10 ${
      padding === 10 ? 'px-10 pb-10' : 'px-16 pb-16'
    } flex flex-col`}
  >
    {subheader && (
      <h3 className="text-md font-haru font-medium tracking-tight text-gray-light flex justify-center">
        {subheader}
      </h3>
    )}
    <h2
      className={`pt-2 ${
        padding === 10 ? "pb-4 mb-7" : "pb-6 mb-10"
      } border-b border-gray-extra-light text-3xl font-bold tracking-tight flex justify-center`}
    >
      {header}
    </h2>
    {children}
  </div>
);
