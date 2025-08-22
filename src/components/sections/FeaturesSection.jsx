import { FeatureBlock } from "./FeatureBlock";
import { FeatureBlockList } from "../../data/featureBlocks";

// components
import PricingSection from "./PricingSection";
import CallToActionSection from "./CallToActionSection";
import Sponsor from "../sections/Sponsor";

function FeaturesSection() {
  return (
    <div>
      {FeatureBlockList.map((data, index) => (
        <div key={`block${index}`}>
          <FeatureBlock {...data} />

          {index === 1 && (
            <>
              <PricingSection />
              <CallToActionSection />
            </>
          )}

          {index === 2 && <Sponsor />}
        </div>
      ))}
    </div>
  );
}
export default FeaturesSection;
