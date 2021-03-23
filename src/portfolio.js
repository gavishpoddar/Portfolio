
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Gavish Poddar",
  title: "Hi all, I'm Gavish Poddar",
  subTitle: emoji("Software Developer 👨‍💻 | Data Science Enthusiast 📊 | Tech Writer ✍️ "),};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/gavishpoddar",
  linkedin: "https://www.linkedin.com/in/gavishpoddar",
  gmail: "gavishpoddar@hotmail.com",
  facebook: "https://www.facebook.com/gavishpoddar"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "HANDLING ALL TEST AUTOMATION ACTIVITIES AND EXPLORING DATA SCIENCE",
  skills: [
    emoji("⚡ Designing and developing Test Automation frameworks using Python and Java"),
    emoji("⚡ End to End automation executions"),
    emoji("⚡ Working on test automation tools like Selenium, Appium, UFT, SoapUI, AutoIT, Katalon Studio, Seetest Mobile Cloud administration, etc"),
    emoji("⚡ Building predictive models to extract insights and make decisions out of data")
  ],


  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "selenium",
      classname: "logos:selenium",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "cucumber",
      classname: "logos:cucumber",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "appium",
      classname: "logos:appium",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "webservices",
      classname: "dashicons:rest-api",
      style: {
        backgroundColor: "transparent",
        color: "#B7950B"
      }
    },
    {
      skillName: "maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "keras",
      classname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000"
      }
    },
    {
      skillName: "flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "reactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB"
      }
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};



// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "GavishPoddar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: []
};

// Your Achievement

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: []
};

// Your certifications

const certifications = {
	certifications: []
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@gavishpoddar/circular-repoting-20c80c5d1071",
      title: "Circular Repoting",
      description: "The dangerous fake news phenomenon"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "your title",
      subtitle: "your subtitle",
      slides_url: "Your slides url here",
      event_url: "your event url",
      image: "image url"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["Paste your podcast url here"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "gavishpoddar@hotmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Gavish__K"//Replace "twitter" with your twitter username without @
};


  

export { 
  greeting, 
  socialMediaLinks, 
  skillsSection, 
  techStack, 
  workExperiences, 
  openSource, 
  bigProjects, 
  achievementSection, 
  blogSection, 
  talkSection, 
  podcastSection, 
  contactInfo , 
  twitterDetails,
  certifications
};
