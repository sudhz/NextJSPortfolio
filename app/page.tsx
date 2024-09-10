import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const ProfilePicture = () => {
  return (
    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      <Image
        src="/self.png"
        alt="Profile picture of Sudhanshu"
        className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full p-3 animate-scale"
        width={384}
        height={384}
        quality={100}
        priority
      />
    </div>
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>🏙️ based in Bengaluru</li>
      <li>🤖 generative AI enthusiast</li>
      <li>
        <a href="mailto:sudhanshumakwana@gmail.com">📧 let's get in touch!</a>
      </li>
      <li>
        📝 check out my{" "}
        <a
          className="link link-primary"
          href="/SudhanshuResume.pdf"
          download="SudhanshuResume"
        >
          resume
        </a>
      </li>
    </ul>
  );
};

const WavingHand = () => {
  return <span className="animate-wave inline-block ">🤚🏻</span>;
};

const socials = [
  {
    name: "Github",
    icon: <FaGithub />,
    href: "https://github.com/sudhz/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/sudhz/",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    href: "https://x.com/sudhz_",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@sudhanshumakwana/videos",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">
              Sudhanshu
            </span>
            <WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a software developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center md:justify-start text-3xl gap-12 mt-8">
          {socials.map((social, index) => (
            <li
              key={index}
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
            >
              <Link
                href={social.href}
                target="_blank"
                aria-label={`visit my ${social.name} profile`}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
