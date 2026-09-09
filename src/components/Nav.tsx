import { HiCurrencyDollar } from "react-icons/hi";
import Logo from "../assets/logo.png";

export function Nav({ coin }: { coin: number }) {
  return (
    <>
      <nav className="bg-amber-100 p-2">
        <div className="container mx-auto flex justify-between">
          <img src={Logo} alt="" />
          <ul className="flex gap-4 items-center">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <h2 className="flex font-bold justify-center items-center text-3xl gap-1">
            <HiCurrencyDollar />
            {coin}
          </h2>
        </div>
      </nav>
    </>
  );
}
