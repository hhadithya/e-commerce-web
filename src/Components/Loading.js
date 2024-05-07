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
        }, 4000);
    }, [navigate]);

    return (
        <>
            <div className='loaderBack'>
                {
                    showImg? (
                        <div className="loading d-flex">
                            <img src="/Images/loading.gif" alt="Loading" />
                            <h2 style={{letterSpacing:'1.1rem', fontWeight: '600', color: '#151515', padding: '5.5% 0 0 2%',}}>KONIK CLOTHINGS</h2>
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