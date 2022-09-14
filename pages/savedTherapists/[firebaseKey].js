/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSingleSavedTherapist } from '../../api/savedTherapistData';

export default function ViewSavedTherapist() {
  const router = useRouter();
  const [therapistDetails, setTherapistDetails] = useState();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSavedTherapist(firebaseKey).then(setTherapistDetails);
  }, [firebaseKey]);

  return (
    <section className="light">
      <div className="container py-2">
        <article className="postcard light blue">
          <a className="postcard__img_link" href={`/savedTherapists/${therapistDetails?.firebaseKey}`} passhref="true">
            <img className="postcard__img" src={therapistDetails?.photo} alt={therapistDetails?.name} />
          </a>
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">
              <a href={`/savedTherapists/${therapistDetails?.firebaseKey}`}>{therapistDetails?.name}</a>
            </h2>
            <div className="postcard__subtitle small">
              <h5>{therapistDetails?.pronouns}</h5>
              <h6>{therapistDetails?.email}</h6>
            </div>
            <div className="postcard__bar" />
            <div>{therapistDetails?.bio}</div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <Button variant="link">MESSAGE</Button>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
