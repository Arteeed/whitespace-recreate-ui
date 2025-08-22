import Apple from "../../assets/Apple.svg";
import Microsoft from "../../assets/Microsoft.svg";
import Slack from "../../assets/Slack.svg";
import Google from "../../assets/Google.svg";

function SponsorLogo({ Logo, logoName, imgSize = "w-40 md:w-45 lg:w-55" }) {
  return <img src={Logo} className={imgSize} alt={logoName} />;
}

const Sponsors = [
  { Sponsor: "Apple", Logo: Apple, logoName: "Apple Logo" },
  { Sponsor: "Microsoft", Logo: Microsoft, logoName: "Microsoft Logo" },
  { Sponsor: "Slack", Logo: Slack, logoName: "Slack Logo" },
  { Sponsor: "Google", Logo: Google, logoName: "Google Logo" },
];

function Sponsor() {
  return (
    <div className="w-full text-center">
      <div className="my-10">
        <h1 className="text-secondary-black text-4xl font-bold md:text-6xl">
          Our{" "}
          <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Sponsors
          </span>
        </h1>
      </div>
      <div className="my-10 flex flex-col items-center justify-around gap-5 sm:mx-5 sm:flex-row">
        {Sponsors.map((data) => {
          return (
            <SponsorLogo
              key={data.Sponsor}
              Logo={data.Logo}
              logoName={data.logoName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sponsor;
