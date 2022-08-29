const socialLinks = [
  "https://github.com",
  "https://linkedin.com",
  "https://twitter.com",
  "https://instagram.com",
  "https://hashnode.com",
];
const profileData = {
  userName: "johndoe",
  photoLink:
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
  desc: "Linktree Architect",
};

const themeData = {
  light: {
    backgroundColor: "white",
    onHoverBackgroundColor: "#dfe6e9",
    cardBackgroundColor: "#ffffff",
    onHoverTextColor: "#636e72",
    footerColor: "black",
    footerSocialLinkColor: "white",
    headerFontColor: "#black",
    CardtextColor: "#2d3436",
  },
  dark: {
    backgroundColor: "#000000",
    onHoverBackgroundColor: "#02040a",
    cardBackgroundColor: "#222222",
    onHoverTextColor: "white",
    footerColor: "white",
    footerSocialLinkColor: "white",
    headerFontColor: "white",
    CardtextColor: "white",
  },
};
const linkData = [
  {
    name: "github",
    link: "https://github.com",
  },
  {
    name: "linkedin",
    link: "https://linkedin.com",
  },
  {
    name: "twitter",
    link: "https://twitter.com",
  },
];

export { socialLinks, profileData, linkData, themeData };
