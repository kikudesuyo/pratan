const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 justify-between border-b-2 border-slate-300 bg-white p-3 shadow-md">
      <div className="flex flex-col justify-center text-xl font-bold">
        <p>Pratan📙</p>
      </div>
      <div className="flex gap-2">
        <p className="rounded-2xl bg-slate-300 px-4 py-2 text-center font-bold hover:bg-gray-400">
          ログイン
        </p>
        <p className="rounded-2xl bg-slate-300 px-4 py-2 text-center font-bold hover:bg-gray-400">
          新規登録
        </p>
      </div>
    </header>
  );
};

export default Header;
