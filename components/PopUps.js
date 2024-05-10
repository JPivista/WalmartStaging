import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import configData from '../config.json';
import Image from 'next/image';
import Link from 'next/link';

const Example = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    let url = `${configData.SERVER_URL}modal_popup?_embed&production[]=${configData.SERVER}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
	if (data.length != 0)
      {
        setMovies(data);
        setShow(true);
      }
      else {
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if the modal has been shown in this session
    const modalShownInSession = Cookies.get('modalShown');

    // If the modal has not been shown in this session, fetch and display it
    if (!modalShownInSession) {
      fetchMovies();
    }
  }, []); // Dependency array is empty to ensure it runs only once on mount

  const closeModal = () => {
    // Set the cookie to mark that the modal has been shown in this session
    //Cookies.set('modalShown', 'true', { expires: 1 }); // Set the cookie to expire after 1 day (adjust as needed)
    Cookies.set('modalShown', 'true', { expires: 1 / 24 }); // Set the cookie to expire after 3 hours (1 hour is 1/24 of a day)
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={closeModal} animation={false} size="lg" centered>
        {movies.slice(0, 1).map((post) => (
          <div key={post.id}>
            <Modal.Header closeButton className="wbg-main pop-modal">
              <Modal.Title>{post.title.rendered}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button type="button" className="btn-close pop-close" aria-label="Close" onClick={closeModal}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>
              </button>
              <Link href={post.acf.pop_url}><Image src={post.acf.modal_popup.url} width={600} height={600} className="img-fluid w-100" /></Link>
            </Modal.Body>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Example;
