import { useEffect, useState } from 'react';
import './Header.scss'

const menuItems = [
    { id: 1, label: 'Про гурт', href: '#about' },
    { id: 2, label: 'Концерти', href: '#concerts' },
    { id: 3, label: 'Галерея', href: '#members' },
    { id: 4, label: 'Контакти', href: '#contacts' },
];

export const Header = () => {
    const [isOpen, setisOpen] = useState(false);

    const handleLinkClick = () => {
        setisOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <header className="header">
            <div className="header__container container">
                <a className='header__logo' href="/">G&G</a>

                <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__menu">
                        {menuItems.map((item) => (
                            <li className="header__menu-item" key={item.id}>
                                <a className="header__link" href={item.href} onClick={handleLinkClick}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`header__burger ${isOpen ? 'header__burger--open' : ''}`}
                    onClick={() => setisOpen(!isOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}