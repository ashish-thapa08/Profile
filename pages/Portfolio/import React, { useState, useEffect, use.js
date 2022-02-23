import React, { useState, useEffect, useContext } from 'react'
import { BiChevronDown, BiMap, BiHomeSmile } from "react-icons/bi";
import { IoMdOptions, IoLogoFacebook, IoIosGlobe, IoIosMail, IoLogoInstagram } from "react-icons/io";
import { Dropdown } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from './css/index.module.css'
import Image from 'next/image';
import Project from '../../public/P1.jpg'
import Project1 from '../../public/P2.jpg'
import Head from 'next/head';
import { Themee } from './Theme';
export default function Portfolio() {
    let [theme, setTheme] = useContext(Themee);
    let Default = () => {
        localStorage.setItem('theme', false);
        setTheme(localStorage.getItem('theme'));
        console.log(localStorage.getItem('theme'))
    }
    let Dark = () => {
        localStorage.setItem('theme', true);
        setTheme(localStorage.getItem('theme'));
        console.log(localStorage.getItem('theme'))
    }
    return (
        <>
            <Head>
                <title>Ashish Thapa | Profile</title>
                <meta name="keywords" content="Profile" />
            </Head>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-4 col-xl-4 col-12">
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <div className="d-flex justify-content-between ps-2 pe-2">
                                <span className="fs-5">Theme: {!theme ? 'White' : 'Black'}</span>
                                <div><span className="fs-5"><IoMdOptions /></span><span className="fs-5 d-none ms-2 d-md-inline d-lg-inline d-xl-inline">Change Theme</span><span>
                                    <Dropdown className="d-inline ms-1" >
                                        <Dropdown.Toggle variant="default" id="dropdown-basic" className={!theme ? '' : 'text-white '}>
                                            {/* <BiChevronDown className="fs-4 d-inline" /> */}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu drop='start'>
                                            <Dropdown.Item onClick={Default} >Default</Dropdown.Item>
                                            <Dropdown.Item onClick={Dark}>Dark</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span></div>
                            </div>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 text-center mb-4' : 'card shadow p-3 rounded-3 text-center mb-4 text-white bg-dark'} >
                            <div className="me-1" >
                                <Image layout='fixed' width={140} height={135} quality={10} id={styles.profile} quality={100} src='/ashish.jpg' />
                            </div>
                            <h3 className="mb-2">Ashish Thapa</h3>
                            <h6 className="fw-light">Full Stack Developer</h6>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <div className="mb-3"><span className="fs-6"><BiMap /></span><span className="ms-1 fs-6">Nepal</span></div>
                            <div className="mb-3"><span className="fs-6"><BiHomeSmile /></span><span className="ms-1 fs-6">Self-Employ || Stock Investor</span></div>
                            <div className="mb-3"><span className="fs-6"><IoLogoFacebook /></span><span className="ms-1 fs-6">Ashish Nasri Thapa</span></div>
                            <div className="mb-3"><span className="fs-6"><IoLogoInstagram /></span><span className="ms-1 fs-6">ashish_nasri_thapa</span></div>
                            <div className="mb-3"><span className="fs-6"><IoIosGlobe /></span><span className="ms-1 fs-6">https://ashish-thapa08.github.io/</span></div>
                            <div className="mb-3"><span className="fs-6"><IoIosMail /></span><span className="ms-1 fs-6">thapaashish234@gmail.com</span></div>
                        </div>
                        <div id={styles.cardd} className={!theme ? 'card shadow p-3 rounded-3 pb-4 mb-4' : 'card shadow p-3 rounded-3 pb-4 mb-4 text-white bg-dark'}>
                            <h5>Skills</h5>
                            <div className="mb-3"><span>HTML: </span><span><ProgressBar completed={90} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>CSS: </span><span><ProgressBar completed={79} transitionTimingFunction='linear' /></span></div>
                            <div className="mb-3"><span>JS: </span><span><ProgressBar completed={70} transitionTimingFunction='linear' /></span></div>
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
                                    <Image layout="" width={364.5} height={350} src={Project} alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/movies-tvShows-info/" target="_blank" ><button className="btn btn-outline-primary mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <Image layout="" width={364.5} height={350} src={Project1} alt="Project" />
                                    <a href="https://ashish-thapa08.github.io/Covid19/" target="_blank"><button className="btn btn-outline-primary mt-3 shadow w-100">Visit Site</button></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <Image layout="" width={364.5} height={350} src={Project} alt="Project" />
                                    <button className="btn btn-outline-primary mt-3 shadow">Visit Site</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xl-4 col-12 mb-3">
                                <div id={styles.cardd} className={!theme ? 'card shadow p-3 ps-3 rounded-3 mb-3' : 'card shadow p-3 ps-3 rounded-3 mb-3 text-white bg-dark'}>
                                    <Image layout="" width={364.5} height={350} src={Project} alt="Project" />
                                    <button className="btn btn-outline-primary mt-3 shadow">Visit Site</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
