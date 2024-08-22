import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skills } from "../../lib/constants";

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutSudhanshu/" />
        <Prompt
          directory="/aboutSudhanshu"
          branch={true}
          content="cat README.md"
        />
        <p>
          Hello there! I'm Sudhanshu, a Software Developer <b>from Bangalore</b>
          , specializing in <b>React and Java</b>. I have a Computer Science
          degree and I've been working professionally as a developer for about a
          year now, and I'm currently focused on learning Spring Boot/Hibernate,
          NextJS 14, and Data Structures/Algorithms. Once I feel I've become
          fairly proficient in my preferred stack, I plan to expand my horizons
          to Svelte, Kafka and eventually I'll probably end up giving into the
          Kubernetees craze.
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt
          directory="/skillsAndTools/Proficient"
          branch={true}
          content="ls"
        />
        <div className="flex justify-start flex-wrap md:justify-between">
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList
              title="LibrariesAndFrameworks"
              items={skills.librariesFrameworks}
            />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory="/HobbiesAndInterests" branch={true} content="ls" />
        <ul>
          <li>📚 reading</li>
          <li>💪🏻 gym</li>
          <li>🎥 movies</li>
          <li>🚗 traveling</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
