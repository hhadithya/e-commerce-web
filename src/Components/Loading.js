import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/Loading.css';

function Loading() {
    const [text, setText] = useState('');
    const [showImg, setShowImg] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false);
            setText('Loading.');
            navigate('/home');
        }, 3000);
    }, [navigate]);


    return (
        <>
            <div className='loaderBack'>
                {
                    showImg? (
                        <div className="loading">
                            <img src="/Images/loading.gif" alt="Loading" />
                        </div>
                    ) : (
                        <h1>{text}</h1>
                    )
                }
            </div>
        </>
    );
}

export default Loading;