import { DefaultButton } from "../ui/Button";

export function FeatureBlock({
  title,
  description,
  image,
  bgColor = "bg-primary-darkBlue",
  reverse = false,
  imgSize,
  highlightedText,
  textColor,
  buttonText,
}) {
  return (
    <section
      className={`${bgColor} ${textColor} flex items-center justify-around text-center lg:text-left xl:gap-10 ${reverse ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"}`}
    >
      <div className="my-10 lg:mx-5 xl:w-xl">
        <h1 className="mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
          {title}{" "}
          <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            {highlightedText}
          </span>
        </h1>
        <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-lg xl:text-xl">
          {description}
        </p>
        <DefaultButton text={buttonText} />
      </div>
      <div
        className={`my-10 h-auto w-3xs sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl ${imgSize}`}
      >
        <img src={image} alt="Image is from unDraw" />
      </div>
    </section>
  );
}
