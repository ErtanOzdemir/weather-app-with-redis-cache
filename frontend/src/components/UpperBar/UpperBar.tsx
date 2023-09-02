import { GithubIcon } from "../Icons";
import LocationTag from "../LocationTag/LocationTag";
import "./upperBar.scss";

export default function UpperBar() {
  return (
    <div className='bar-container'>
      <div>
        <a
          href='https://github.com/ErtanOzdemir/weather-app-with-redis-cache'
          className='bar-container__link'
        >
          <GithubIcon />
        </a>
      </div>
      <LocationTag />
    </div>
  );
}
