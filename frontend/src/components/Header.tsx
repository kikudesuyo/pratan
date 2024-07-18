import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 justify-between border-b-2 border-slate-300 bg-white p-3 shadow-md">
      <div className="flex flex-col justify-center text-xl font-bold">
        <button>Pratan📙</button>
      </div>
      <div className="flex gap-4">
        <Button label="Login" func={() => {}} />
        <Button label="Signup" func={() => {}} />
      </div>
    </header>
  );
};

export default Header;
