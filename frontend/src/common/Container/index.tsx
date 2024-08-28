type MainProps = {
  children: React.ReactNode;
};

type SmallPageProps = {
  children: React.ReactNode;
  header: string;
};

export const Main = ({ children }: MainProps) => (
  <main className="relative flex flex-col min-h-[calc(100vh_-_7.5rem)] w-full pt-24 pb-12 items-center justify-center">
    {children}
  </main>
);

export const SmallPage = ({ children, header }: SmallPageProps) => (
  <div className="bg-white max-w-xl w-full px-16 pb-20 rounded-xl border border-gray-lighter shadow-light-md">
    <h2 className="flex justify-center p-6 border-b border-gray-extra-light my-10 text-3xl font-bold">
      {header}
    </h2>
    {children}
  </div>
);
