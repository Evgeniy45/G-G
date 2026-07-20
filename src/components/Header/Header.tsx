import './Header.scss'

const menuItems = [
    { id: 1, label: 'Про гурт', href: '#about' },
    { id: 2, label: 'Концерти', href: '#concerts' },
    { id: 3, label: 'Галерея', href: '#members' },
    { id: 4, label: 'Контакти', href: '#contacts' },
];

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a className='header__logo' href="/">G&G</a>

                <ul className="header__menu">
                    {menuItems.map((item) => (
                        <li className="header__menu-item" key={item.id}>
                            <a className="header__link" href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    )
}
