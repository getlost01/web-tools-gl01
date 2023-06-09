import React from "react";

import FeaturesBig from "components/FeatureImages";
import FeaturesGrid from "components/FeatureGrid";
import Hero from "components/Hero";

// This is the component for the feature page of the extension

function Home(props) {

  return (
    <>
      <Hero site={props.site}/>
      <FeaturesGrid site={props.site}/>
      <FeaturesBig site={props.site}/>
    </>
  );
}

export default Home;

