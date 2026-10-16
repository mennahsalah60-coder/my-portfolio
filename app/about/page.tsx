"use client";
import './about.css'
import Link from 'next/link'
import Image from 'next/image';
import photo from '../../public/Telegram Desktop/image_2026-10-17_01-16-54.png'
import ScrollAnimation from '../components/ScrollAnimation/Page';
export default function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub",
        "Responsive Design",
    ];

    const certificates = [
        {
            title: "Front-End Development Diploma",
            issuer: "EraaSoft Academy",
            date: "oct 2025 - July 2026",
            image: '/Telegram Desktop/eraasoft.png',
        },
        {
            title: "Web Development Bootcamp",
            issuer: "GDG On Campus Hurghada",
            date: "2025 – 2026",
            image: "/Telegram Desktop/gdg.jpg",
        },
    ];
    return (
        <>
            <ScrollAnimation>
                <section className='about'>
                    <div className="countainer aboutBox">
                        <div>
                            <h2>ABOUT ME</h2>
                        </div>
                        <div>
                            <h3>I`m a Junior Front-End Developer based in Qena, Egypt.</h3>
                            <p>
                                I`m a front-end developer who enjoys turning ideas into clean, responsive, and interactive websites. I work with HTML, CSS, JavaScript, React, and Next.js, and I enjoy learning new things and finding better ways to build user-friendly experiences. I`ve worked on different projects that helped me put my skills into practice, and I`m always looking for opportunities to grow, take on new challenges, and create things I`m proud of.
                            </p>

                            <div className='cv'>

                                <button>
                                    <Link href="https://drive.google.com/file/d/1jPvfa7J_EoNF8XtdJWzm1w4163BD_qnh/view?usp=drive_link">
                                        Resume
                                    </Link>
                                </button>

                                <Link
                                    className='svg'
                                    href='https://www.linkedin.com/in/mennahamdy1/'
                                    target='_blank'
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                                            fill="#D3E97A"
                                        />

                                        <path
                                            d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                                            fill="#D3E97A"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    className='svg'
                                    href='https://github.com/mennahsalah60-coder'
                                    target='_blank'
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7481 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8497 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                                            fill="#D3E97A"
                                        />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='countainer mee'>
                        <Image src={photo} alt='menna' />
                    </div>
                </section>

                <section>
                    <div className='countainer skills'>
                        <div>
                            <h2>MY CAPABILITIES</h2>
                        </div>
                        <div>
                            <p>
                                I work with modern front-end technologies to build responsive, user-friendly websites. I`m always learning, improving my skills, and bringing new ideas to life through code.
                            </p>

                            <div className="skills-container">
                                {skills.map((skill) => (
                                    <span className="skill" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <div className='borderMe'></div>

                <section className="certificates">
                    <div className="countainer certificatesBox">
                        <div>
                            <h2>MY CERTIFICATES</h2>
                        </div>

                        <div className="certificatesContent">
                            {certificates.map((certificate) => (
                                <div
                                    className="certificateCard"
                                    key={certificate.title}
                                >
                                    <a
                                        href={certificate.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={certificate.image}
                                            alt={certificate.title}
                                            width={700}
                                            height={500}
                                            className="certificateImage"
                                        />
                                    </a>

                                    <div className="certificateInfo">
                                        <h3>{certificate.title}</h3>

                                        <p className="certificateIssuer">
                                            {certificate.issuer}
                                        </p>

                                        <p className="certificateDate">
                                            {certificate.date}
                                        </p>

                                        <a
                                            className="certificateLink"
                                            href={certificate.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            VIEW CERTIFICATE ↗
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className='borderMe'></div>

            </ScrollAnimation>
        </>
    )
}