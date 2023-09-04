import { LocationIcon } from "../Icons";
import "./locationTag.scss";

interface LocationTagProps {
  location?: string | null;
}
export default function LocationTag({ location }: LocationTagProps) {
  return (
    <>
      {location && (
        <div className='tag-container'>
          <LocationIcon />
          <div className='text-container'>
            <div className='text-container__title'>Current location,</div>
            <div className='text-container__place'>{location}</div>
          </div>
        </div>
      )}
    </>
  );
}
