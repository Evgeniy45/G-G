import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">

                <div className="footer__policy-contacts">
                    <p className="footer__copyright">© 2025 «Грим та Грім». Всі права захищені.</p>

                    <div className="footer__contacts">
                        <p className="footer__contacts-text">
                            <a href="mailto:booking@lotoplay" className="footer__link">booking@lotoplay</a>
                            <span className="footer__separator"> · </span>
                            <a href="tel:+380991234567" className="footer__link">+38 (099) 123-45-67</a>
                        </p>
                    </div>
                </div>


                <div className="footer__media">
                    <a href="#" className="footer__link">Instagram</a>
                    <span className="footer__separator"> · </span>
                    <a href="#" className="footer__link">YouTube</a>
                    <span className="footer__separator"> · </span>
                    <a href="#" className="footer__link">Facebook</a>
                </div>

            </div>
        </footer>
    );
};