export const ministriesContent = {
    hero: {
      eyebrow: "EQUIPPING THE SAINTS",
      title: "Our Ministries",
      description:
        "Discover the spiritual channels and supportive frameworks designed to build your faith, anchor your family, and extend transformative grace to the community.",
      imageSrc: "/ministries/img/hero1.jpg",
      imageAlt: "Congregation worshipping in a church sanctuary",
    },
  
    foundationBibleClass: {
      eyebrow: "DEEP ROOTED DISCIPLESHIP",
      title: "Foundation Bible Class",
      description:
        "A systematic journey into the accurate knowledge of God's Word. From core doctrines to practical Christian living, establish absolute confidence in your faith.",
  
      content: {
        title: "Build an Unshakable Spiritual Foundation",
        description:
          "Our Foundation Bible Class is designed for both new believers and seasoned disciples looking to deepen their grasp of scripture. Guided by experienced teachers, we break down theology into powerful, actionable steps.",
  
        topics: [
          {
            number: "01",
            title: "Accurate Knowledge of God",
            description:
              "Understanding the nature, character, and covenants of God.",
          },
          {
            number: "02",
            title: "New Creation Realities",
            description:
              "Walking in the fullness of your identity, rights, and authority in Christ.",
          },
          {
            number: "03",
            title: "The Ministry of the Holy Spirit",
            description:
              "Partnering with the Spirit to manifest power, gifts, and fruits daily.",
          },
        ],
  
        primaryCta: "REGISTER FOR CLASS",
        primaryCtaHref: "/contact",
        cohortNotice: "Next cohort starts: Sept 12",
      },

      imageSrc: "/ministries/img/bible-class.jpg",
      imageAlt: "Open Bible, notebook, and coffee on a wooden desk",
    },
  
    tribeMentorship: {
      eyebrow: "LIFE TOGETHER",
      title: "Tribe Mentorship Groups",
      description:
        "You weren't meant to walk alone. Join a Tribe to find warm support, personal guidance, and deep fellowship with peers sharing your walk of faith.",
  
      content: {
        title: "Iron Sharpening Iron",
        description:
          "Tribe groups meet bi-weekly across multiple local hubs and virtually. Led by dedicated spiritual mentors, these sessions are designed for real conversation, shared burdens, and spiritual growth.",
  
        stats: [
          {
            value: "45+",
            label: "ACTIVE TRIBES",
          },
          {
            value: "500+",
            label: "TRIBE MEMBERS",
          },
          {
            value: "100%",
            label: "SAFE SPACE",
          },
        ],
  
        actions: {
          primary: "JOIN A TRIBE",
          primaryHref: "/contact",
          secondary: "BECOME A MENTOR",
          secondaryHref: "/contact",
        },
      },

      imageSrc: "/ministries/img/tribe-mentors.jpg",
      imageAlt: "Small group talking together around a coffee table",
    },
  
    kidsAndYouth: {
      eyebrow: "NEXT GENERATION",
      title: "Kids & Youth Ministries",
      description:
        "Cultivating strong spiritual roots early. Empowering children and teenagers to walk in absolute grace and change their world with confidence.",
  
      ministries: [
        {
          title: "Glory Kids Church",
          theme: "light" as const,
          tags: [
            { label: "HOLIDAY CLUB", tone: "gold" as const },
            { label: "KIDS CHURCH", tone: "blue" as const },
          ],
          description:
            "A playful, safe, and values-centered space where children learn about God's love through interactive bible lessons, creative crafts, and lively worship.",
          cta: "DISCOVER HOLIDAY CLUB",
          ctaHref: "/contact",
          imageSrc: "/ministries/img/kids.jpg",
          imageAlt: "Children and teachers doing crafts in a classroom",
        },
        {
          title: "GT Youth Force",
          theme: "dark" as const,
          tags: [
            { label: "SUMMER TRIPS", tone: "sky" as const },
            { label: "YOUTH NIGHTS", tone: "purple" as const },
          ],
          description:
            "Empowering youth aged 12-18 with bold confidence. Real discipleship meets explosive, high-energy events, life-changing camps, and peer-to-peer inspiration.",
          cta: "EXPLORE YOUTH GROUPS",
          ctaHref: "/contact",
          imageSrc: "/ministries/img/youth.jpg",
          imageAlt: "Teenagers sitting around a campfire at night",
        },
      ],
    },
  
    prayer: {
      eyebrow: "24/7 SUPPORT IN FAITH",
      title: "Standing with You in Prayer",
      description:
        '"For where two or three are gathered together in My name, I am there in the midst of them." Whatever you are facing, our intercessory team is ready to stand with you.',
      actions: {
        primary: "SUBMIT PRAYER REQUEST",
        primaryHref: "/contact",
        secondary: "CALL PRAYER LINE NOW",
      },
      imageSrc: "/ministries/img/prayer.jpg",
      imageAlt: "Hands clasped in prayer in a candlelit church",
    },
  
    communitySupport: {
      eyebrow: "LOVE IN ACTION",
      title: "Community Support & Welfare",
  
      description:
        "Sharing God's love through highly organized, impactful social welfare programs designed to uplift families and provide vital physical support.",
  
      services: [
        {
          title: "GT Community Food Bank",
          description:
            "Distributing healthy, wholesome food parcels weekly to vulnerable families, elderly neighbors, and local community shelters across our hubs.",
          cta: "REQUEST FOOD SUPPORT",
          ctaHref: "/contact",
          accent: "blue" as const,
          iconSrc: "/ministries/svg/community-support1.svg",
        },
        {
          title: "Family Welfare & Counseling",
          description:
            "Offering confidential, faith-based professional counseling, crisis management, and parenting support classes to build thriving, resilient homes.",
          cta: "TALK TO A COUNSELOR",
          ctaHref: "/contact",
          accent: "purple" as const,
          iconSrc: "/ministries/svg/community-support2.svg",
          taller: true,
        },
      ],
    },
  
    conference: {
      eyebrow: "ANNUAL EMPOWERMENT CONFERENCE",
      title: "Good Life Conference",
  
      description:
        "A premier annual gathering of industry experts, spiritual leaders, and visionaries, designed to empower you with professional excellence and spiritual clarity.",
  
      featuredEvent: {
        date: "NOVEMBER 2026",
        location: "LONDON HUB & ONLINE",
  
        title: "Reigning in Life, Career & Business",
  
        description:
          "Join thousands of believers for three days of prophetic ministry, masterclasses on financial stewardship, and elite corporate networking to empower your vision.",
  
        actions: {
          primary: "BOOK CONFERENCE TICKET",
          primaryHref: "/contact",
          secondary: "VIEW SPEAKER LINEUP",
          secondaryHref: "/contact",
        },
      },

      imageSrc: "/ministries/img/good-life.jpg",
      imageAlt: "Speaker on stage at a conference with the audience filming",
    },
  
    missions: {
      eyebrow: "BEYOND BOUNDARIES",
      title: "Missions & Charity Outreach",
  
      description:
        "Taking the gospel of grace and practical compassion around the United Kingdom, continental Europe, and rural parts of developing nations.",
  
      content: {
        title: "One Voice, Many Hands",
  
        description:
          "We actively support global missionary networks, fund freshwater well drilling, construct local community learning centers, and dispatch medical relief teams to hard-to-reach terrains.",
  
        footprintTitle: "Our Active Mission Footprints:",
  
        footprints: [
          "UK local prisons, hospitals, and shelter outreaches",
          "Clean water and primary healthcare initiatives in rural Africa",
          "Faith materials translation and printing for Eastern European hubs",
        ],
      },

      imageSrc: "/ministries/img/missions.jpg",
      imageAlt: "Mission team distributing water and supplies in a rural community",
    },
  
    volunteer: {
      eyebrow: "CO-LABORERS IN GRACE",
      title: "Use Your Gift to Serve Others",
  
      description:
        "Glory Time operates through the faithful, joyful stewardship of hundreds of volunteers. Whether your skill is media, teaching, hospitality, or welfare, you have a vital part to play.",
  
      cta: "SIGN UP TO VOLUNTEER",
      ctaHref: "/contact",
    },

  } as const;