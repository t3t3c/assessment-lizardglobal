import { GiRobotAntennas } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <GiRobotAntennas className="logo" />
      <Link className="link" to="/">
        <h1>Robots Forum</h1>
      </Link>
    </header>
  );
}
