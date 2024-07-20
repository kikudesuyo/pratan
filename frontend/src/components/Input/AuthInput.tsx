type Props = {
  email: string;
  password: string;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
};

const AuthInput = ({ email, password, setEmail, setPassword }: Props) => {
  return (
    <div className="-space-y-px shadow-sm">
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="w-full rounded-t-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-500 focus:border-2 focus:ring-orange-500 sm:text-sm"
        placeholder="e.g.) example@pratan.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="w-full rounded-b-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-500 focus:ring-orange-500 sm:text-sm"
        placeholder="your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default AuthInput;
