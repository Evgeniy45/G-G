import './HeroSection.scss';

export const HeroSection = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__container container">
                <h1 className="hero__title">Гурт «Грим та Грім»</h1>

                <div className="hero__description">
                    <p className="hero__subtitle">Справжній український рок, який гуркоче в серці.</p>
                    <p className="hero__text">
                        «Грим та Грім» — це поєднання <a className="hero__accent" href="#about">потужних</a> гітарних рифів, чесних текстів і
                        вибухової енергії сцени. Ми граємо для тих, хто цінує живий звук, свободу та силу музики.
                    </p>
                    <p className="hero__text">
                        <a className="hero__accent" href="#concerts">Наші концерти</a> — це завжди контакт з залом, драйв і емоції. Приєднуйся до нас на найближчих виступах і відчуй цей саунд наживо!
                    </p>
                </div>

                <button className="hero__button">ЗАМОВИТИ КВИТОК</button>
            </div>
        </section>
    );
};