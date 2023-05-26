import React from "react";
import {
    Alarm,
    Calendar,
    Code,
    Eyedropper,
    FloppyDisk,
    Gradient,
    MagnifyingGlass,
    Intersect,
    Swap,
    Tag,
    PencilSimple
  } from "phosphor-react";

const siteData = {
    "sitesaver": [
     {
       icon: <FloppyDisk />,
       heading: "Save Urls",
       text: "Save your important URLs in just one click with different tags.",
     },
     {
       icon: <Tag />,
       heading: "Search Tags",
       text: "Save and tag your links for easy retrieval, ensuring you never forget URLs.",
     },
     {
       icon: <PencilSimple />,
       heading: "CURD Operations",
       text: "Perform CRUD operations on URLs for efficient link manipulation.",
     },
   ],
   "vibrantcolortools":  [
     {
       icon: <Eyedropper />,
       heading: "Powerful Eyedropper",
       text: "A tool for extracting each pixel from inside/outside the browser tab.",
     },
     {
       icon: <FloppyDisk />,
       heading: "Save Hexcode",
       text: "Save up to 50 recent colors for developer easing in finding the perfect color pallet.",
     },
     {
       icon: <Gradient />,
       heading: "Color Grader",
       text: "Effortlessly extract a variety of color shades with intuitive color extraction tool.",
     },
     {
       icon: <MagnifyingGlass />,
       heading: "Color Namer",
       text: "A color tool that identifies color names based on inputting the color's hex code.",
     },
     {
       icon: <Intersect />,
       heading: "Color Mixer",
       text: "Seamlessly mixes and determines mixed hexcodes for perfect color blending.",
     },
     {
       icon: <Swap />,
       heading: "Color Converter",
       text: "A tool to convert a color value from hex code to RGB value and vice versa.",
     },
   ],
   "cpcontestcalendar": [
     {
       icon: <Code />,
       heading: "Platforms support",
       text: "Seamless integration with 8 cp platforms for showing contest details.",
     },
     {
       icon: <Calendar />,
       heading: "Contest Details",
       text: "Showcase contest details in an easy-to-understand calendar-based format.",
     },
     {
       icon: <Alarm />,
       heading: "Contest Alarm",
       text: "Set contest alarms for important contests to get notified 1 min before starting the contest.",
     }
   ]
   };

export default siteData;