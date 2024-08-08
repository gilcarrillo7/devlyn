import * as React from "react";
import SocialIcon from "../shared/SocialIcon";

const Social = ({ color }: { color?: "complementary" | "primary" }) => {
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
    <div className="flex space-between gap-8 justify-center sm:justify-start">
      {social.map((item) => (
        <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
          <SocialIcon variant={item.name} color={color} />
        </a>
      ))}
    </div>
  );
};

export default Social;
