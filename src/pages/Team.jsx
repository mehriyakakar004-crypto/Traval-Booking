import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Team.css";

import sediqaImg from "../assets/team/sediqa.jpg";
import mehriyaImg from "../assets/team/mehriya.jpg";
import saharImg from "../assets/team/sahar.jpg";
import motaharaImg from "../assets/team/mutahhera.jpg";
import denaImg from "../assets/team/dina.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Sediqa Farooq",
    role: "Designer of page Home",
    image: sediqaImg,
  },

  {
    id: 2,
    name: "Mehriya Kaker",
    role: "Designer of page Booking",
    image: mehriyaImg,
  },

  {
    id: 3,
    name: "Sahar Salihy",
    role: "Designer of page About",
    image: saharImg,
  },

  {
    id: 4,
    name: "Mutahhera Abedi",
    role: "Designer of page Team",
    image: motaharaImg,
  },

  {
    id: 5,
    name: "Dina Mihrabi",
    role: "Designer of page Contact",
    image: denaImg,
  },
];

const Team = () => {
  return (
    <>
      <Navbar />

      <div className="team-page">
        <h1>Meet Our Team</h1>

        <div className="team-container">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} />

              <h2>{member.name}</h2>

              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;