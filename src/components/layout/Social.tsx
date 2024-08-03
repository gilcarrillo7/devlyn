import * as React from "react";
import SocialIcon from "../shared/SocialIcon";

const Social = () => {
  const social = [
    {
      name: "facebook",
      url: "",
    },
    { name: "instagram", url: "" },
    {
      name: "linkedin",
      url: "",
    },
  ];
  return (
    <div className="flex space-between gap-3 justify-center sm:justify-start">
      {social.map((item) => (
        <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
          <SocialIcon variant={item.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
