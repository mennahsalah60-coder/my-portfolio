import { NextResponse } from "next/server";

const projects = [
    {
        id: 1,
        img: "/portfolio.png",
        title: 'My Portfolio',
        discription: 'A modern and responsive personal portfolio website designed to showcase my projects, skills, and experience as a Front-End Developer. Built with a clean and interactive interface, focusing on smooth navigation, responsive design, and a clear presentation of my work.',
        info: 'PROJECT INFO',
        year: 2025,
        role: 'Front-end Developer',
        liveDemo: 'http/github/demo',
        github: 'gitHub',
    },

    {
        id: 2,
        img: '/eco.png',
        title: 'Eco Bazar',
        discription: 'A modern e-commerce website designed to provide a smooth and user-friendly shopping experience. The project focuses on a clean responsive interface, organized product presentation, and interactive features that make browsing and shopping easier.',
        info: 'PROJECT INFO',
        year: 2025,
        role: 'Front-end Developer',
        liveDemo: 'https://final-project-one-liart.vercel.app/',
        github: 'https://github.com/mennahsalah60-coder/Final-Project',
    },
]

export async function GET() {
    return NextResponse.json(projects);
}