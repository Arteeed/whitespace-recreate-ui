import Browsers from "../assets/Browsers.svg";
import Customize from "../assets/Customize.svg";
import Secure from "../assets/Secure.svg";
import Apps from "../assets/Apps.svg";

export const FeatureBlockList = [
  {
    title: "Use as ",
    highlightedText: "Extension",
    description:
      "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
    image: Browsers,
    imgSize: "max-w-80",
    textColor: "text-secondary-white",
    buttonText: "Let's Go",
  },
  {
    title: "Customize it to ",
    highlightedText: "your needs",
    description:
      "Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
    image: Customize,
    reverse: true,
    textColor: "text-secondary-black",
    bgColor: "bg-secondary-white",
    buttonText: "Let's Go",
  },
  {
    title: "100%",
    highlightedText: "your data",
    description:
      "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encrpytion (E2EE) to secure your notes and ensure no-one but yourself can access them.",
    image: Secure,
    textColor: "text-secondary-black",
    bgColor: "bg-secondary-white",
    buttonText: "Read more",
  },
  {
    title: "Work with Your Favorite Apps Using whitespace",
    description:
      "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
    image: Apps,
    reverse: true,
    textColor: "text-secondary-white",
    bgColor: "bg-primary-darkBlue",
    buttonText: "Read more",
  },
];
