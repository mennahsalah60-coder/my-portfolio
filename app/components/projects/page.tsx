"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import './project.css'

export default function Project() {

    type Project = {
        id: number,
        img: string,
        title: string,
        info: string,
        discription: string,
        year: number,
        role: string,
        liveDemo: string,
        github: string
    }

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch("/api/projects");
            const data = await res.json();

            setProjects(data);
        };

        getProjects();
    }, []);
    return (
        <>
            <section>
                <div className="countainer features">
                    <h1>Featured Projects</h1>
                    <p className="pone">
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </p>

                    <div className="feature">
                        {projects.map((project) => (
                            <div key={project.id} className="theFeature">
                                <div className="imgBox">
                                    <Image src={project.img} width={500} height={100} alt='error'/>
                                </div>
                                <div>
                                    <h2>{project.title}</h2>
                                    <p>{project.discription}</p>

                                    <div className="info">
                                            <h3>{project.info}</h3>
                                        <div className="when">
                                            <h4>Year</h4>
                                            <p>{project.year}</p>
                                        </div>
                                        <div className="when">
                                            <h4>Role</h4>
                                            <p>{project.role}</p>
                                        </div>
                                    </div>

                                    <div className="links">
                                        <Link href={project.liveDemo}>LIVE DEMO
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_7_108)">
                                                    <path d="M5.9897 19.2176L16.3036 8.90369V16.3891L18.3033 16.3891L18.3033 5.48978L7.40391 5.48978L7.40391 7.48948L14.8893 7.48948L4.57549 17.8033L5.9897 19.2176Z" fill="#D3E97A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7_108">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>

                                        <Link href={project.github}> SEE ON GITHUB
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0282 2.16675C7.06011 2.16675 2.22302 7.00383 2.22302 12.9719C2.22302 17.7451 5.31811 21.7957 9.61244 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3394 21.7675 10.3361 20.8673C7.32986 21.5194 6.69502 19.4178 6.69502 19.4178C6.20536 18.1698 5.49577 17.8372 5.49577 17.8372C4.51536 17.1666 5.57052 17.1818 5.57052 17.1818C6.65602 17.2576 7.22477 18.2954 7.22477 18.2954C8.18894 19.9464 9.75544 19.4698 10.3686 19.1935C10.4672 18.4948 10.7489 18.0181 11.0565 17.7483C8.65802 17.4764 6.13602 16.5491 6.13602 12.4075C6.13602 11.2299 6.55744 10.2636 7.24536 9.50958C7.13594 9.2355 6.76219 8.13592 7.35261 6.64958C7.35261 6.64958 8.25936 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9406 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8089 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9869 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4494 23.2235C20.7415 21.7913 23.8334 17.744 23.8334 12.9719C23.8334 7.00383 18.9963 2.16675 13.0282 2.16675Z" fill="#D3E97A" />
                                            </svg>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
