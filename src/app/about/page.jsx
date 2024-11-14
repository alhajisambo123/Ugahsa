// pages/aboutPage.js
import styles from "./aboutPage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
const AboutPage = () => {
  const executives = [
    {
      id: 1,

      name: "MR. PHAROUK UMAR Umar",
      image: "/pre.jpeg",
      bio: "PRESIDENT",
    },

    {
      id: 3,

      name: "GERALD N.K. QUARTEY",
      image: "/vice.jpeg",
      bio: "VICE PRESIDENT",
    },
    {
      id: 2,

      name: "ERNEST K.A. BOATENG",
      image: "/fi.jpeg",
      bio: "FINANCIAL SECRETARY",
    },
    {
      id: 4,

      name: "AYIDZOE ELLIS KELVIN",
      image: "/hf (1).jpeg",
      bio: "HEALTH OFFICER",
    },
    {
      id: 5,

      name: "AMPAH FRANKLIN GOLDSWORTH",
      image: "/hf (3).jpeg",
      bio: "ORGANIZING SECRETARY",
    },

    {
      id: 6,

      name: "YAKUBU LYDIA",
      image: "/woc.jpeg",
      bio: "WOMEN'S COMMISSIONER",
    },
    {
      id: 7,

      name: "BARBARA ADJEIWAH BOATENG",
      image: "/gen.jpeg",
      bio: "GENERAL SECRETARY",
    },
    {
      id: 8,

      name: "RAMSEY S. WOANYA",
      image: "/hf (4).jpeg",
      bio: "HEALTH OFFICER",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About UGAHSA</h1>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>Who We Are</h2>
          <p>
            The University of Ghana Allied Health Students' Association (UGAHSA)
            represents students across various allied health disciplines,
            including Medical Laboratory Science, Physiotherapy, Radiography,
            Dietetics, Respiratory Therapy and Occupational Therapy. Our mission
            is to create a supportive environment that nurtures academic
            excellence, leadership, and social responsibility while ensuring the
            welfare of all students.
          </p>

          <h2>Our Vision and Values</h2>
          <p>
            At the heart of UGAHSA’s activities is the goal of{" "}
            <strong>empowerment</strong>. We aim to develop well-rounded
            professionals who excel in their careers and contribute meaningfully
            to society. Our core values include:
          </p>
          <ul>
            <li>
              <strong>Leadership:</strong> Nurturing leaders to create positive
              change.
            </li>
            <li>
              <strong>Excellence:</strong> Promoting academic and professional
              ethics.
            </li>
            <li>
              <strong>Service:</strong> Giving back to society through outreach
              programs.
            </li>
            <li>
              <strong>Innovation:</strong> Encouraging creative solutions in
              healthcare.
            </li>
          </ul>

          <h2>What to Expect from UGAHSA</h2>
          <p>
            UGAHSA offers numerous opportunities for growth and engagement
            through events, workshops, and professional networking. Some key
            areas we focus on include:
          </p>
          <ul>
            <li>
              Event Coverage: Recaps of programs, workshops, and seminars.
            </li>
            <li>
              Student Spotlights: Celebrating academic, sports, and community
              achievements.
            </li>
            <li>
              Professional Tips: Insights into internships, research, and
              leadership.
            </li>
            <li>
              Health Education: Informative posts on key allied health topics.
            </li>
          </ul>

          <h2>Join the UGAHSA Family</h2>
          <p>
            UGAHSA is more than an association – it’s a community. We encourage
            all members to actively participate in our events, engage with
            peers, and make a difference on campus and beyond. Stay connected
            with us through this platform and social media to be part of the
            exciting journey.
          </p>

          <p className={styles.closing}>
            <strong>
              Together, let’s build a healthier future, one step at a time!
            </strong>
          </p>
        </div>
        <Menu />
      </div>

      <div className={styles.executiveSection}>
        <h2 className={styles.title}>Meet the 2024 / 2025 Executives</h2>
        <div className={styles.executiveList}>
          {executives.map((executive) => (
            <div key={executive.id} className={styles.executive}>
              <Image
                src={executive.image}
                alt={`${executive.name} - UGAHSA Executive`} // Descriptive alt text
                className={styles.image}
                width={250} // Set explicit width
                height={250} // Set explicit height
              />

              <h3 className={styles.executiveName}>{executive.name}</h3>
              <p className={styles.executiveBio}>{executive.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
