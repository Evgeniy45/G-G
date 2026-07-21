import { useState, useEffect, type FormEvent, type MouseEvent } from 'react';
import './BookingModal.scss';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({ name: '', phone: '' });

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

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '' });
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={handleContentClick}>
                <button className="modal-close" onClick={handleClose} aria-label="Закрити">
                    &times;
                </button>

                {!isSubmitted ? (
                    <>
                        <h3 className="modal-title">Замовлення квитка</h3>
                        <p className="modal-subtitle">Заповніть дані, і ми зв'яжемося з вами для підтвердження</p>

                        <form onSubmit={handleSubmit} className="modal-form">
                            <input
                                type="text"
                                placeholder="Ваше ім'я"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="modal-input"
                            />
                            <input
                                type="tel"
                                placeholder="Номер телефону"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="modal-input"
                            />
                            <button type="submit" className="modal-submit-btn">
                                Підтвердити замовлення
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="modal-success">
                        <h3 className="modal-title">Дякуємо!</h3>
                        <p className="modal-subtitle">Ваш запит успішно надіслано. Очікуйте на дзвінок!</p>
                        <button onClick={handleClose} className="modal-submit-btn">
                            Закрити
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};