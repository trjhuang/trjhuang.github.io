// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "A detailed look at my background, research, and journey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my hardware design, computational modeling, and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Hey! Here&#39;s my resume. Feel free to view it below or download a copy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-career-goals",
          title: "career goals",
          description: "A look at my long-term aspirations and the step-by-step journey to achieve them.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/goals/";
          },
        },{id: "news-i-started-my-undergraduate-studies-at-georgia-tech",
          title: 'I started my undergraduate studies at Georgia Tech.',
          description: "",
          section: "News",},{id: "news-i-joined-the-uncommon-sense-lab-as-an-undergraduate-research-assistant",
          title: 'I joined the Uncommon Sense Lab as an undergraduate research assistant.',
          description: "",
          section: "News",},{id: "projects-act-driving-simulator",
          title: 'ACT Driving Simulator',
          description: "Leveraging LLMs for autonomous vehicle operations and trajectory analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-borohma-igem",
          title: 'Borohma (iGEM)',
          description: "Computational modeling for the bioproduction of insect repellents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-magnetic-door-alarm",
          title: 'Magnetic Door Alarm',
          description: "Designed and built a custom circuit for a reed-switch security alarm system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
