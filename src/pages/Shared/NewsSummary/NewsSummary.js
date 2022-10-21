import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummary = ({ news }) => {
    const { _id, total_view, rating, title, details, image_url, author } = news;
    return (
        <Card>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className='d-flex'>
                    <FaStar className='me-2 text-warning'></FaStar>
                    <p>{rating.number}</p>
                </div>
                <div className='d-flex gap-2'>
                    <FaEye></FaEye>
                    <small>{total_view}</small>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;