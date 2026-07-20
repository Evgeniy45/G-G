import { useState } from 'react';
import './Contacts.scss';

export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError('Будь ласка, заповніть усі поля!');
            return;
        }

        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            setError('Введіть коректну електронну адресу!');
            return;
        }

        console.log('Дані форми:', formData);
        setSuccess(true);
        setError('');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setSuccess(false);
        }, 4000);
    };

    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container container">
                <h2 className="contacts__title">Зв'яжись з нами</h2>
                <p className="contacts__subtitle">Хочеш замовити виступ або маєш питання? Пиши!</p>

                <div className="contacts__content">
                    <form className="contacts__form" onSubmit={handleSubmit} noValidate>
                        <div className="contacts__row">
                            <div className="contacts__field">
                                <label className="contacts__label" htmlFor="name">Ім'я</label>
                                <input
                                    className="contacts__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Твоє ім'я"
                                />
                            </div>

                            <div className="contacts__field">
                                <label className="contacts__label" htmlFor="email">Email</label>
                                <input
                                    className="contacts__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        <div className="contacts__field">
                            <label className="contacts__label" htmlFor="message">Повідомлення</label>
                            <textarea
                                className="contacts__textarea"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Розкажи про свої ідеї..."
                            />
                        </div>

                        {error && <p className="contacts__error">{error}</p>}
                        {success && <p className="contacts__success">Повідомлення успішно надіслано!</p>}

                        <button className="contacts__button" type="submit">
                            Відправити
                        </button>
                    </form>

                    <div className="contacts__map-card">
                        <h3 className="contacts__map-title">Наше місцезнаходження</h3>
                        <div className="contacts__map-wrapper">
                            <iframe
                                title="Google Map Kyiv"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.631899178553!2d30.522455!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c3%3A0xab737d8d67285ff5!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1620000000000!5m2!1sen!2sua"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};