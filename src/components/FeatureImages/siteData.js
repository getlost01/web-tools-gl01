import React from "react";

import { Alarm, Calendar, Eyedropper, Gradient, FloppyDisk, MagnifyingGlass, Intersect, Tag } from "phosphor-react";

const siteData = {
  "cpcontestcalendar":[{
      "heading": "Platforms support",
      "text": "Optimize contest integration by seamlessly integrating with 8 CP platforms. Enhance user experience by providing filters for contest duration and current date, ensuring relevant and up-to-date contest details.",
      "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-4-ce93eca84e.gif?alt=media&token=3a609a2f-33b5-450a-9c45-285aa667fddc",
      "extLink": "https://chrome.google.com/webstore/detail/cp-contest-calendar/nchadgecfkcdikollfdhgobmjoeaiegd",
      "iconComponent": <Calendar />
  },
  {
    "heading": "Contest Alarm",
    "text": "Optimize your contest management by using contest alarms. Users receive notifications 1 minute before contest start (browser must be open). Enhance participation and time management for important contests.",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-4-7c799f70c2.gif?alt=media&token=9e6c7141-9f2c-4c70-83f5-c1bfe2db01f1",
    "extLink": "https://chrome.google.com/webstore/detail/cp-contest-calendar/nchadgecfkcdikollfdhgobmjoeaiegd",
    "iconComponent": <Alarm />
  },
  ],
  "vibrantcolortools":[{
    "heading": "Powerful Eyedropper",
    "text": "Optimize color extraction with a versatile tool that captures pixel colors both inside and outside the browser tab. Enhance design workflows and enable accurate color sampling for improved visual representation.",
    "extLink": "https://chrome.google.com/webstore/detail/vibrant-color-dropper-too/fcekakhpgmlaihglgajajbceajnhlgfn",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-5-f5287703c0.gif?alt=media&token=a7a0bd88-781c-449e-98f1-f1e7a033afb8",
    "iconComponent": <Eyedropper />
  },
  {
    "heading": "Save Recent Colors",
    "text": "Streamline color selection for developers with a storage capacity of 50 recent colors, facilitating efficient palette creation. Simplify hex code copying for effortless implementation.",
    "extLink": "https://chrome.google.com/webstore/detail/vibrant-color-dropper-too/fcekakhpgmlaihglgajajbceajnhlgfn",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-5-c015fd4700.gif?alt=media&token=cfc8d19f-e9c3-4afb-9f23-4e1b127c544d",
    "iconComponent": <FloppyDisk />
  },  
  {
    "heading": "Color Grader",
    "text": "Effortlessly extract a wide range of color shades using our intuitive color grading tool. Easily copy the hex codes and compare colors for a seamless experience.",
    "extLink": "https://chrome.google.com/webstore/detail/vibrant-color-dropper-too/fcekakhpgmlaihglgajajbceajnhlgfn",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-2-62c8188341.gif?alt=media&token=f231bb87-e73f-41e3-8119-f869e87aa4b7",
    "iconComponent": <Gradient />
  },
  {
    "heading": "Color Namer",
    "text": "A color tool that identifies color names by inputting hex codes and fetches data of 29,000+ colors to find the exact or nearest color name.(Type at least 3 characters to see results)",
    "extLink": "https://chrome.google.com/webstore/detail/vibrant-color-dropper-too/fcekakhpgmlaihglgajajbceajnhlgfn",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-1-4a18619822.gif?alt=media&token=450f6f2b-8358-48bd-b687-7789c330dbb5",
    "iconComponent": <MagnifyingGlass />
  },  
  {
    "heading": "Color Mixer",
    "text": "Seamlessly mixes and determines mixed hexcodes for perfect color blending. Easily copy the hex codes and compare colors with petty good experience.",
    "extLink": "https://chrome.google.com/webstore/detail/vibrant-color-dropper-too/fcekakhpgmlaihglgajajbceajnhlgfn",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-1-e5fc1e9121.gif?alt=media&token=bc742b13-1597-4ab2-ad00-c37109e67227",
    "iconComponent": <Intersect />
  }],
  "sitesaver":[{
    "heading": "Save URLs and Tags",
    "text": "Easy manage and tag your crucial URLs in a single click. Streamline URL handling with CRUD operations for optimal link organization.",
    "extLink": "https://chrome.google.com/webstore/detail/site-saver/bhfelhfpjghfmhogedjnlmdpkbhmjhlf",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-4-3e44e5ef76.gif?alt=media&token=7ea990f0-6c66-4f78-a8e0-e85424484788",
    "iconComponent": <Tag />
  },  
  {
    "heading": "Search Tags",
    "text": "Streamline the process of creating and organizing tags while enhancing search capabilities for improved user convenience and efficiency.",
    "extLink": "https://chrome.google.com/webstore/detail/site-saver/bhfelhfpjghfmhogedjnlmdpkbhmjhlf",
    "imgLink": "https://firebasestorage.googleapis.com/v0/b/web-extensions-c4af9.appspot.com/o/ezgif-4-395db0a7cb.gif?alt=media&token=0041e3da-ef25-4633-8351-f50b08a92dcf",
    "iconComponent": <MagnifyingGlass />
  }]
}

export default siteData;