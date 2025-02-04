import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='p-3 m-0 text-center'>copyright &copy; made by <Link to='https://www.linkedin.com/in/hussain-wali' style={{textDecoration: 'none', color: '#000000'}} target="_blank">Hussain Wali</Link>, 2024-{newDate}</p>
    </footer>
  )
}

export default Footer;