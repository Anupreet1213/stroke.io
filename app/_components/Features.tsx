const Features = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What do we offer?</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-group text-purple-500"
            >
              <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
              <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
              <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
              <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
              <rect width="7" height="5" x="7" y="7" rx="1"></rect>
              <rect width="7" height="5" x="10" y="12" rx="1"></rect>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Teams</h2>

            <p className="mt-1 text-sm text-gray-300">
              Create multiple teams for different projects
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-file text-purple-500"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Files</h2>

            <p className="mt-1 text-sm text-gray-300">
              Multiple files creation per team
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-file-archive text-purple-500"
            >
              <path d="M10 12v-1"></path>
              <path d="M10 18v-2"></path>
              <path d="M10 7V6"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"></path>
              <circle cx="10" cy="20" r="2"></circle>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Documentation</h2>

            <p className="mt-1 text-sm text-gray-300">
              Document everything with your custom documentation tool
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-pen text-purple-500"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Canvas</h2>

            <p className="mt-1 text-sm text-gray-300">
              Draw your imagination, desires, shapes and figures however you
              want!
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-database text-purple-500"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Database Storage
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Store and fetch all your saved files at once
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-timer text-purple-500"
            >
              <line x1="10" x2="14" y1="2" y2="2"></line>
              <line x1="12" x2="15" y1="14" y2="11"></line>
              <circle cx="12" cy="14" r="8"></circle>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Management</h2>

            <p className="mt-1 text-sm text-gray-300">
              Manage your teams and files on dashboard
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
