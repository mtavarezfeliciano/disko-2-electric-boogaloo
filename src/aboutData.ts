import DiskoColorized from "./assets/images/ember colorized1.jpeg";
import DiskoPosted from "./assets/images/disko posted.jpg";

interface Item {
  id: number;
  image: string;
  description: string;
}

const data: Item[] = [
  {
    id: 1,
    image: DiskoColorized,
    description:
      "From my early years, electronic music held an irresistible allure, yet I grappled with limited gear and time. College life saw me deeply engrossed in DJ mixes, but I struggled to revive my DJing aspirations initially. That all changed in 2019 when I encountered a transformative set by nonstoppup/geist, leaving an indelible mark on me. It was a revelation, igniting a strong desire to delve into DJing and share the magic of music with others.",
  },
  {
    id: 2,
    image: DiskoPosted,
    description: `As 2019 came to a close, I found myself in a fortunate financial position, which marked the turning point in my journey. The onset of the pandemic provided ample time for practice, making it a joy to uncover new mashups and sound combinations that resonate with my soul. Today, I'm driven by a deep love for electronic music, and my goal is to share the songs that move me with a wider audience, creating a harmonious connection through music. `,
  },
];

export default data;
