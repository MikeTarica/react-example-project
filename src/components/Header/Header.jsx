import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential', 'Main'];
const reactComponents = ['Dynamic', 'none-dynamic', 'Upwards', 'downwards'];
const reactOutcomes = ['Novice', 'Intermediate', 'Advance', 'Expert'];
const reactAttempts = ['learning', 'frustrations', 'Crys', 'Disagreements'];
const reactAttemptsNum = [1,  2,  3, 4];
const reactFails = ['Failed', 'Not working', 'not close', 'far'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(4)];
  const components = reactComponents[getRandomInt(3)];
  const outcomes = reactOutcomes[getRandomInt(3)];
  const attempts = reactAttempts[getRandomInt(3)];
  const atemptNum = reactAttemptsNum[getRandomInt(3)];
  const fails = reactFails[getRandomInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description }React concepts you will need for almost any app you are
        going to build!
      </p>
      <p>
        with { components } added to the mix!
      </p>
      <p>
        and you be come a {outcomes}, you would have to have many attempts {attempts} ""{atemptNum}""  and many fails  "{fails}"  to happen.
      </p>
    </header>
  );
}