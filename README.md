![W1pVACsPZ](https://user-images.githubusercontent.com/77713888/148638710-3512fb8a-1858-4580-9c68-d7ca33d146eb.jpg)

# Create Linktree Clone
### Using React, Styled-Components also with amazing dark mode toggle!

Do first, understand later. That is the approach here. If you are new to some of these technologies, don’t worry about it. Just follow along, and dive into topics afterward.

**In this guide, we will:**

- Forking a github repository.
- Modifying content and pushing code.
- Auto deploy to Cloudflare pages.

**What you will need:**

- Node.JS is installed on your local machine. (https://nodejs.org/en/download/)
- Yarn installed on your local system. (https://yarnpkg.com/)
- An Github account. (sign up for free http://github.com/)
- A Cloudflare account with a domain registered. (https://www.cloudflare.com/)

**Introduction**

Nowadays web applications like  [Linktree](https://linktr.ee/) are used by developers to showcase their social, project links. Today let's see how to create our custom Linktree by below easy 3 steps. Let's dive in...

**Forking Github Repository**

[Linktree Template](https://github.com/vigneshshettyin/Linktree) this is a link to my Linktree Clone repository which was developed using React, Styled-Components. We can even use Next JS instead of React for better Search Engine Optimizing and better search indexing.  [LinkFree](https://github.com/DELTA-SJEC/LinkFree) this is a link to the Linktree Clone which was developed using Next JS. 

 [Linktree Clone - Live Link ](https://linktree-aww.pages.dev/) 

 [Linkfree Clone - Live Link](https://link-free-delta-sjec.vercel.app/) 


![Group 21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641618205491/6OD9twoTc.png)

If you already have a github directly login or create a new github account then head over to the Linktree Clone repository link then clone as shown in the above image. 

**Updating Github Repository**

Once you have cloned the repository to your github account then press dot or create new codespaces as shown in the below image. 

![Group 21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641619034986/vJrGG8PBp.png)

This will open the current repository in a web view visual studio code. Now find the src/data/data.js file. That file will almost like this 

![Group 23.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641619377254/zI00ARzOG.png)

```
const socialLinks = [
  "https://github.com/vigneshshettyin",
  "https://linkedin.com/in/vigneshshettyin",
  "https://twitter.com/vigneshshettyin",
  "https://instagram.com/vigneshshettyin",
  "https://facebook.com/vigneshshettyin",
];
const profileData = {
  userName: "vigneshshettyin",
  photoLink: "https://github.com/vigneshshettyin.png",
  desc: "Tech Geek | Mentor @ DeltaSJEC",
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
    id: 1,
    link: "https://go.vigneshcodes.in/meetly",
    name: "Meetly - Conferencing App",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 2,
    link: "https://go.vigneshcodes.in/certify",
    name: "Certify - Certification App",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 3,
    link: "https://eatmyurl.ml",
    name: "EatMyUrl - Free URL Shortener",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 4,
    link: "https://go.vigneshcodes.in/bulkmailer",
    name: "BulkMailer - Free Bulk Mailer App",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 5,
    link: "https://tesla.vigneshcodes.in",
    name: "Tesla UI Clone Using ReactJS",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 6,
    link: "https://webscraper.vigneshin.ml/",
    name: "Free S.E.O Scrapper / API",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 7,
    link: "https://react-blog.vigneshcodes.in",
    name: "Free Blogging Application",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 8,
    link: "https://blog.vigneshin.ml",
    name: "Free Blogging Application",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 9,
    link: "https://react-opensource.vigneshcodes.in/",
    name: "Open-Source React",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 10,
    link: "https://linktree.vigneshcodes.in",
    name: "Display Links Uniquely ",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
  {
    id: 11,
    link: "https://blog.vigneshcodes.in/quick-guide-to-deploy-using-docker",
    name: "Quick Guide To Deploy Using Docker",
    image:
      "https://play-lh.googleusercontent.com/QYc9QNf0_c-M7rhF4eo8daWbIRg_ukwzabR3Xj9TX_6zxG-AbzhKF5NS3CAd2X79fm0=s360-rw",
  },
];

export { socialLinks, profileData, linkData, themeData };

``` 

Now, update the content as per your requirements. Once the data is updated the next step is to push the updated code to the current repository. Go to the source control section on the sidebar or press [Ctrl + Shift + G]

![Group 24.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641619937054/LcfT-xsf9C.png)

In Step - 1 we are writing a commit message. Step - 2 we are pushing the updated content to the current github repository. Now, if we check the Linktree Clone github repository our data will be updated. The next step is to host the site using Cloudflare Pages. 

**Deploy - Cloudflare Pages**

Head over to [Cloudflare Pages Website](https://pages.cloudflare.com/). Log in if you have already created a Cloudflare account or else sign up. 

![Group 25.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641620473283/6RLuZ1F-M.png)

Click on create a project then there will be a pop-up to connect to GitHub or GitLab. Choose GitHub as we have already pushed the code to GitHub. 

![Group 26.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641620625923/zpAnGfblh.png)

![Screenshot 2022-01-08 111432.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641620689170/ePijhqnRC.png)

Once GitHub is connected to Cloudflare then change the setting as given in the above image. Now, our Linktree Clone repository is linked to the Cloudflare Pages project. 

![Group 27.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641620884245/Xb2lD-ETv.png)

![Group 28.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641621006588/8O_JJlq79.png)

Update Build command & Build output directory accordingly as given in the above image then click on the save and deploy button which will start the deployment process. If Framework preset is selected as none by default change it to **Create React App**.  The deployment process may take around 4-5 minutes. 

Hurray!! Now our  [Linktree Clone](https://linktree-aww.pages.dev/)  is auto deployed using Cloudflare Pages. If required you can link a custom domain by updating the CNAME record.  [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/get-started)

![Screenshot 2022-01-08 112823.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641621517468/tVxoBztjm.png)

Cheers, <br/>
Vignesh
