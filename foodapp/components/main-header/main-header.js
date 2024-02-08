import NavLink from './nav-link';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logoImg.jpeg';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader(){

    return (
        <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="a plate of food" priority/>
            NextLevel food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                <NavLink href="/meals">Browse Meals</NavLink>
                </li>

                <li>
                <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    );
}
