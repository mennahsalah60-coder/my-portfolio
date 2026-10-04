import './nav.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <section className='all'>
                <section className='nav-sec'>
                    <div className='countainer'>
                        <nav>
                            <h1 className='name'>Menna Hamdy</h1>
                            <div className='navRight'>
                                <Link href="#work">Work</Link>
                                <Link href="#about">About</Link>
                                <Link href="#contact">Contact</Link>
                            </div>
                        </nav>
                    </div>
                </section>
            </section>
        </>
    );
}
