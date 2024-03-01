function AppLayout({ children }) {
  return (
    <main className="grid grid-cols-[2fr_5fr] grid-rows-[1fr_80px] h-dvh">
      {children}
    </main>
  );
}

export default AppLayout;
