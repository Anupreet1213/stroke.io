import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const { user } = useKindeBrowserClient();

  return (
    <header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a
          className="text-teal-600 flex justify-center items-center gap-3"
          href="#"
        >
          <span className="sr-only">Home</span>

          <svg className="h-4" viewBox="0 0 1699 660">
            <path
              fill="#EC2C40"
              d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
            ></path>
            <path
              fill="#00A9E5"
              d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
            ></path>
          </svg>
          <span className="text-lg text-white">stroke.io</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-200/75"
                  href="https://anupreet-portfolio.netlify.app/"
                >
                  {" "}
                  Author{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-200/75"
                  href="https://github.com/Anupreet1213"
                >
                  {" "}
                  Github{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-200/75"
                  href="https://www.linkedin.com/in/anupreet-srivastava-973013223/"
                >
                  {" "}
                  LinkedIn{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-200/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-200/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <a className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition ">
                  <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
                </a>

                <a className="hidden rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium transition hover:opacity-90 sm:block">
                  <RegisterLink>Register</RegisterLink>
                </a>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition ">
                  <LoginLink postLoginRedirectURL="/dashboard">
                    Dashboard
                  </LoginLink>
                </a>

                <a className="hidden rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium transition hover:opacity-90 sm:block">
                  <LogoutLink>Logout</LogoutLink>
                </a>
              </div>
            )}

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
