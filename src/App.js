import "./App.css";
import NavLink from "./components/NavLink";
import { navLinks } from "./constants/navLinks";
import Logo from "./assets/logo.svg";
import LandingPagePicture from "./assets/landing-page-picture.png";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <div className="bg-primary h-[913px] flex flex-col items-center">
          <div className="fixed h-[123px] md:h-[203px] w-full flex justify-center bg-primary">
            <div className="flex flex-col items-left justify-evenly container">
              <img
                src={Logo}
                alt="Construktiv Logo"
                className="h-12 w-12 md:h-[52px] md:w-[200px]"
              />
              <nav className="flex justify-between items-center">
                <div className="flex space-x-4">
                  {navLinks.map((link) => (
                    <NavLink title={link.title} href={link.href} />
                  ))}
                </div>
              </nav>
            </div>
          </div>

          <div className="container mt-[203px] h-[710px] w-full flex items-center justify-between">
            <div className="text-left text-secondary text-[70px]">
              <h1 className="font-bold">CONSTRUKTIV,</h1>
              <h2>WERBEN IM JETZT</h2>
            </div>

            <img
              src={LandingPagePicture}
              alt="Landing Page"
              className="rounded-md h-[800px] w-[800px]"
            />
          </div>
        </div>

        <div className="flex flex-col h-[400px] w-full items-center justify-center">
          <div className="w-1/3">
            <h2 className="text-[40px] text-secondary text-left">
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

        <div className="h-screen w-full flex justify-center items-center">
          <div className="container flex justify-evenly gap-1">
            <div className="bg-secondary h-[566px] w-[710px] rounded-md"></div>
            <div className="bg-primary h-[566px] w-[710px] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
