/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import { getBlogPosts } from '../api/blogData';
// import BlogPostCard from '../components/BlogPostCard';
// import Search from '../components/Search';

export default function Test() {
  // const [blogPosts, setBlogPosts] = useState([]);
  // const [filteredBlogs, setFilteredBlogs] = useState([]);
  // const getAllBlogs = () => {
  //   getBlogPosts().then(setBlogPosts);
  // };

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);
  return (
    <>
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            My Cards Light
          </div>

          <article className="postcard light blue">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2" />Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2" />55 mins.
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2" />Play Episode
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light red">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2" />Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2" />55 mins.
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2" />Play Episode
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light green">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2" />Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2" />55 mins.
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2" />Play Episode
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light yellow">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2" />Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2" />55 mins.
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2" />Play Episode
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
