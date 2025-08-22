import { DefaultButton } from "../ui/Button";
import Logo from "../../assets/Logo.svg";

const LinksList = [
  {
    title: "Products",
    links: [
      { link: "#", text: "Overview" },
      { link: "#", text: "Pricing" },
      { link: "#", text: "Customer stories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { link: "#", text: "Blog" },
      { link: "#", text: "Guides & tutorials" },
      { link: "#", text: "Help center" },
    ],
  },
  {
    title: "Company",
    links: [
      { link: "#", text: "About us" },
      { link: "#", text: "Careers" },
      { link: "#", text: "Media kit" },
    ],
  },
];

const FooterCTA = [
  {
    path: "#",
    text: "English",
  },
  {
    path: "#",
    text: "Terms & Privacy",
  },
  {
    path: "#",
    text: "Security",
  },
  {
    path: "#",
    text: "Status",
  },
];

function FooterLinks(props) {
  return (
    <li>
      <a className="hover:text-secondary-yellow text-sm" href={props.link}>
        {props.text}
      </a>
    </li>
  );
}

function Links({ title, contentLink }) {
  return (
    <div className="text-secondary-white my-10 text-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <ul>
        {contentLink.map((item, index) => (
          <FooterLinks key={index} link={item.link} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-darkBlue">
      <div className="text-secondary-white flex flex-col items-center text-center">
        <div className="my-5">
          <h1 className="my-5 text-lg font-bold lg:text-6xl">
            Try Whitespace today
          </h1>
          <p>Get started for free.</p>
          <p className="mb-5">Add your whole team as your needs grow.</p>
          <DefaultButton text="Try Whitespace" />
          <p className="mt-5">On a big team? Contact sales</p>
        </div>
        <div className="flex flex-col items-center justify-around lg:flex-row">
          <div className="flex flex-col items-center">
            <img src={Logo} className="max-w-80" alt="" />
            <p className="w-90 text-center lg:text-left">
              whitespace was created for the new ways we live and work. We make
              a better workspace around the world
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {LinksList.map((data) => {
              return <Links title={data.title} contentLink={data.links} />;
            })}
          </div>
          <div>
            <h1 className="text-lg font-bold">Try it Today</h1>
            <p className="w-90 px-10 py-3 text-center lg:text-left">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <DefaultButton text="Start today" />
          </div>
        </div>
      </div>
      <div className="text-secondary-white mt-20 flex flex-col text-center">
        <hr className="border-secondary-black mx-auto hidden w-[95%] lg:block" />
        <ul className="m-5 flex flex-col justify-around text-sm lg:ml-10 lg:flex-row lg:gap-30">
          {FooterCTA.map((CTA) => {
            return <a href={CTA.path}>{CTA.text}</a>;
          })}
          <p>&copy;2021 Whitespace LLC.</p>
        </ul>

        <hr className="border-secondary-black mx-auto block w-[90%] lg:hidden" />
      </div>
    </footer>
  );
}

export default Footer;
