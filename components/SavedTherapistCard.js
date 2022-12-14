/* eslint-disable import/order */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { MdOutlineEmail, MdOutlineStarPurple500 } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { useAuth } from '../utils/context/authContext';
import { removeSavedTherapist } from '../api/savedTherapistData';
import Link from 'next/link';

function SavedTherapistCard({ therapistObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisTherapist = () => {
    if (window.confirm(`Remove ${therapistObj.name} from your saved therapists?`)) {
      removeSavedTherapist(therapistObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <section className="light">
      <div className="container py-2">
        <article className="postcard light blue">
          <Link className="postcard__img_link" href={`/savedTherapists/${therapistObj.firebaseKey}`} passHref>
            <img className="postcard__img" src={therapistObj.photo} alt={therapistObj.name} />
          </Link>
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">
              <a href={`/user/${therapistObj.therapistId}`}>{therapistObj.name}</a>
            </h2>
            <div className="postcard__subtitle small">
              <h5>{therapistObj.pronouns}</h5>
              <h6>
                <MdOutlineEmail /> <a href={`mailto:${therapistObj.email}`}>{therapistObj.email}</a>
              </h6>
              <h6>
                <HiOutlinePhone /> <a href={`tel:${therapistObj.phone}`}>{therapistObj.phone}</a>
              </h6>
              <MdOutlineStarPurple500 />
            </div>
            <div className="postcard__bar" />
            <div className="contentPreview">{therapistObj.bio}</div>
            <ul className="postcard__tagbox">
              <li className={therapistObj.uid !== user.uid ? 'noShow' : 'tag__item'}>
                <Button variant="link" onClick={deleteThisTherapist}>
                  REMOVE
                </Button>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

SavedTherapistCard.propTypes = {
  therapistObj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    photo: PropTypes.string,
    firebaseKey: PropTypes.string,
    pronouns: PropTypes.string,
    isTherapist: PropTypes.bool,
    uid: PropTypes.string,
    sexualOrientation: PropTypes.string,
    bio: PropTypes.string,
    therapistId: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default SavedTherapistCard;
