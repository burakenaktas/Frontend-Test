import "./App.css";
import NavLink from "./components/NavLink";
import { navLinks } from "./constants/navLinks";
import Logo from "./assets/logo.svg";
import LandingPagePicture from "./assets/landing-page-picture.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherCard } from "./components/WeatherCard";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Berlin"
  );

  const changeLocation = (e) => {
    localStorage.setItem("location", e.target.value);
    setLocation(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="bg-primary h-[600px] lg:h-[703px] flex flex-col items-center">
          <div className="fixed h-[153px] lg:h-[203px] w-full flex px-4 lg:px-0 lg:justify-center bg-primary">
            <div className="flex w-full flex-col sm:flex-row items-left justify-between lg:container">
              <div className="h-full flex flex-col justify-evenly">
                <div className="flex justify-between">
                  <img
                    src={Logo}
                    alt="Construktiv Logo"
                    className="h-[31px] w-[130px] lg:h-[52px] lg:w-[200px]"
                  />
                  <select
                    value={location}
                    onChange={(e) => changeLocation(e)}
                    className="w-[120px] sm:hidden h-[32px] bg-white rounded-lg text-[16px] text-primary font-bold border-none lg:mt-8 px-2 py-1"
                  >
                    {["Bremen", "Berlin", "Hamburg"].map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <nav className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {navLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    ))}
                  </div>
                </nav>
              </div>

              <select
                value={location}
                onChange={(e) => changeLocation(e)}
                className="hidden sm:flex sm:w-[140px] h-[40px] bg-white rounded-lg text-[16px] text-primary font-bold border-none mt-8 px-2 py-1"
              >
                {["Bremen", "Berlin", "Hamburg"].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-[123px] lg:mt-[203px] px-4 lg:px-0 h-[653px] lg:h-[710px] w-full flex border-t border-gray-400 flex justify-center">
            <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between w-full lg:container">
              <div className="my-[50px] lg:mt-[124px] text-left text-secondary text-[50px] lg:text-[70px]">
                <h1 className="font-bold">Construktiv,</h1>
                <h2>werben im jetzt</h2>
              </div>

              <img
                src={LandingPagePicture}
                alt="Landing Page"
                className="rounded-[10px] max-w-[350px] lg:h-[710px] lg:max-w-[710px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[140px] h-[600px] w-full items-center justify-center">
          <div className="px-4 max-w-[360px] lg:px-0 lg:max-w-2xl">
            <h2 className="text-[35px] lg:text-[40px] text-secondary text-left leading-[50px]">
              <strong>Wilkommen in der Welt des Digital Marketing,</strong> wo
              wir Ihnen helfen, Ihr Unternehmen zu vergrößern.
            </h2>

            <p className="text-[#484848] text-[16px] text-left mt-4">
              Wir sind ein Team von Experten, die sich auf digitales Marketing
              spezialisiert haben. Wir bieten Ihnen die besten Lösungen für Ihr
              Unternehmen und helfen Ihnen,{" "}
              <strong>Ihre Ziele zu erreichen.</strong> Wir unterstützen Sie bei
              der Erstellung von Inhalten, der Optimierung Ihrer Website und
              vielem mehr. Wir sind hier, um Ihnen zu helfen, Ihre Marke zu
              stärken und Ihr Unternehmen zu vergrößern. Wir freuen uns darauf,
              mit Ihnen zusammenzuarbeiten.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center pt-16 lg:pt-0 pb-20">
          <div className="container flex flex-col items-center gap-4 lg:flex-row justify-evenly px-4 lg:px-0">
            <div className="bg-secondary max-w-[360px] lg:h-[566px] lg:max-w-full flex-1 rounded-[10px] p-4 lg:p-10">
              <p className="text-[24px] lg:text-[30px] text-left text-white ">
                Wir sind ein Team von Experten, die sich auf digitales Marketing
                spezialisiert haben. Wir bieten Ihnen die besten Lösungen für
                Ihr Unternehmen und helfen Ihnen,{" "}
                <strong>Ihre Ziele zu erreichen.</strong> Wir unterstützen Sie
                bei der Erstellung von Inhalten, der Optimierung Ihrer Website
                und vielem mehr.
              </p>
            </div>
            <div className="flex flex-col items-left bg-primary max-w-[360px] lg:h-[566px] lg:max-w-full flex-1 rounded-[10px] p-4 lg:p-10">
              <h2 className="text-[30px] text-secondary text-left">
                Kontaktieren Sie uns, <strong>um mehr zu erfahren.</strong>
              </h2>

              <form className="h-full flex flex-col gap-2 my-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white  px-4 py-2 w-full rounded-lg"
                />
                <input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="bg-white px-4 py-2 w-full rounded-lg"
                />
                <textarea
                  type="text"
                  placeholder="Nachricht"
                  className="bg-white px-4 py-2 w-full h-full rounded-lg"
                />
              </form>

              <div className="flex">
                <input type="checkbox" className="mr-2 " />
                <p className="text-white text-[16px]">
                  Einwilligung zur Datenverarbeitung*
                </p>
              </div>
              <button className="bg-[#FF6F4B] hover:bg-[#DD5C3B] font-bold text-[16px] text-white px-4 py-2 rounded-lg max-w-[176px] mt-2">
                Jetzt absenden!
              </button>
            </div>
          </div>
        </div>

        <WeatherCard location={location} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
