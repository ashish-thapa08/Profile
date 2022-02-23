import React, { useState, useEffect, useContext } from 'react'
import { BiChevronDown, BiMap, BiHomeSmile } from "react-icons/bi";
import { IoMdOptions, IoLogoFacebook, IoIosGlobe, IoIosMail, IoLogoInstagram, IoIosPeople } from "react-icons/io";
import { Dropdown } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from './css/index.module.css'
import Image from 'next/image';
import Head from 'next/head';
import { Themee } from './Theme';
export default function Portfolio() {
    let [theme, setTheme] = useContext(Themee);
    let [date, setDate] = useState('');
    let Datee = () => {
        var d = new Date();
        var n = d.getFullYear();
        setDate(n)
    }
    let changeTheme = () => {
        if (theme) {
            setTheme(false);
        }
        else {
            setTheme(true);
        }
    }
    useEffect(() => {
        //setTheme(localStorage.getItem('theme'));
        Datee();
        console.log(theme)
    }, [theme])
    return (
        <>
            <Head>
                <title>Ashish Thapa | Profile</title>
                <link rel="icon" href="/logo.png" />
                <meta name="keywords" content="Profile" />
            </Head>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-4 col-xl-4 col-12">
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <div className="d-flex justify-content-between ps-2 pe-2">
                                <span className="fs-5">Theme: {!theme ? 'Day' : 'Night'}</span>
                                <div><span className="fs-5"><IoMdOptions /></span><span className="fs-5 d-none d-md-none d-lg-none ms-2 d-md-inline d-lg-inline d-xl-inline">Change Theme</span><span>
                                    <button className='btn btn-warning ms-2' onClick={changeTheme}>{!theme ? 'Day' : 'Night'}</button>
                                </span></div>
                            </div>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 text-center mb-4' : 'card shadow p-3 rounded-3 text-center mb-4 text-white bg-dark'} >
                            <div className="me-1" >
                                <Image layout='fixed' width={140} height={135} quality={10} id={styles.profile} quality={100} src='/ashish.jpg' />
                            </div>
                            <h3 className="mb-2">Ashish Thapa</h3>
                            <h6 className="fw-light">Full Stack Web Developer</h6>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <div className="mb-3"><span className="fs-6"><BiMap /></span><span className="ms-1 fs-6">Nepal</span></div>
                            <div className="mb-3"><span className="fs-6"><BiHomeSmile /></span><span className="ms-1 fs-6">Self-Employ || Stock Investor</span></div>
                            <div className="mb-3"><span className="fs-6"><IoLogoFacebook /></span><a href='https://www.facebook.com/ashish.thapa.1213/' className={`ms-1 fs-6 text-decoration-none ${!theme ? 'text-dark' : 'text-light'}`} target="_blank">Ashish Nasri Thapa</a></div>
                            <div className="mb-3"><span className="fs-6"><IoLogoInstagram /></span><a href='https://www.instagram.com/ashish_nasri_thapa/' className={`ms-1 fs-6 text-decoration-none ${!theme ? 'text-dark' : 'text-light'}`} target="_blank">ashish_nasri_thapa</a></div>
                            <div className="mb-3"><span className="fs-6"><IoIosPeople /></span><a href='https://www.linkedin.com/in/ashish-thapa-3a22a4190/' className={`ms-1 fs-6 text-decoration-none ${!theme ? 'text-dark' : 'text-light'}`} target="_blank">Ashish Thapa</a></div>
                            <div className="mb-3"><span className="fs-6"><IoIosMail /></span><span className="ms-1 fs-6">thapaashish234@gmail.com</span></div>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <h5>Skills</h5>
                            <div className="mb-3"><span>HTML: </span><span><ProgressBar className='bg-warning' completed={90} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>CSS: </span><span><ProgressBar completed={68} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>JS: </span><span><ProgressBar completed={65} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>Bootstrap: </span><span><ProgressBar completed={95} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>React: </span><span><ProgressBar completed={75} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>NextJs: </span><span><ProgressBar completed={63} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>My SQL: </span><span><ProgressBar completed={88} transitionTimingFunction='linear' /></span></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-xl-8 col-12">
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'} >
                            <h4>My Projects</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'} >
                                    <h4 className='text-capitalize'>Movies and tv-Series web-App</h4>
                                    <Image layout="" width={364.5} height={350} src='/p1.jpg' alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/movies-tvShows-info/" target="_blank" >
                                        <button className="btn btn-warning mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <h4 className='text-capitalize'>covid tracker web-App</h4>
                                    <Image layout="" width={364.5} height={350} src='/p2.jpg' alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/Covid19/" target="_blank">
                                        <button className="btn btn-warning mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <h4 className='text-capitalize'>band profile web-App</h4>
                                    <Image layout="" width={364.5} height={350} src='/p3.jpg' alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/Brave-Girls-Profile/" target="_blank">
                                        <button className="btn btn-warning mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <h4 className='text-capitalize'>budget management web-App</h4>
                                    <Image layout="" width={364.5} height={350} src='/p4.jpg' alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/Manage-Budget/" target="_blank">
                                        <button className="btn btn-warning mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={`text-center p-2 pb-3 shadow-sm ${!theme ? 'bg-light text-dark' : 'bg-dark text-white'}`}>
                ©<span className='fs-6 fw-bold'> {date} Developed by: </span><span className='pb-2'><Image width={55} height={33} className='mb-2 mt-2' layout='' src='/logo.png' /></span><span className='text-normal fs-6'>Ashish Thapa</span>
            </footer>
        </>
    )
}
