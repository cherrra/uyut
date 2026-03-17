import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYQbyvCjNynCjyNLx2fzbdnI9lL8cVPoqePC3Q1PwwRzgoyHF5Lf62nU2N5V0n_BrB2Q/exec';

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name || !formData.phone || !formData.email) {
            setFormStatus({ type: "error", message: "Заполните обязательные поля" });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({ type: "error", message: "Введите корректный Email" });
            return false;
        }
        if (formData.phone.replace(/\D/g, '').length < 10) {
            setFormStatus({ type: "error", message: "Введите корректный номер" });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setFormStatus({ type: "", message: "" });

        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('phone', formData.phone);
        payload.append('email', formData.email);
        payload.append('message', formData.message);

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: payload,
            mode: 'no-cors'
        })
        .then(() => {
            setFormStatus({ type: "success", message: "Спасибо! Мы скоро свяжемся с вами." });
            setFormData({ name: "", phone: "", email: "", message: "" });
            // Закрываем окно через 2 секунды после успеха (опционально)
            setTimeout(onClose, 2500);
        })
        .catch(error => {
            console.error('Error:', error);
            setFormStatus({ type: "error", message: "Ошибка отправки. Попробуйте позже." });
        })
        .finally(() => {
            setIsSubmitting(false);
            setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
        });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <div className="modal-header">
                    <span className="modal-tag">ОБРАТНАЯ СВЯЗЬ</span>
                    <h2 className="modal-title">Оставьте заявку</h2>
                    <p className="modal-subtitle">
                        Наш менеджер свяжется с вами в течение 2 часов.
                    </p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Ваше имя" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="+7 (___) ___-__-__" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Ваша электронная почта" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <textarea 
                            name="message" 
                            placeholder="О каком изделии вы мечтаете?" 
                            rows="4" 
                            value={formData.message} 
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
                        <span>{isSubmitting ? 'Отправка...' : 'Отправить запрос'}</span>
                    </button>

                    {formStatus.message && (
                        <div className={`form-status-message ${formStatus.type}`} style={{
                            marginTop: '15px', 
                            fontSize: '13px', 
                            textAlign: 'center',
                            color: formStatus.type === 'success' ? '#7ec4ae' : '#e07a5f'
                        }}>
                            {formStatus.message}
                        </div>
                    )}
                </form>
                    <p className="modal-footer-text">
                      Нажимая на кнопку, вы соглашаетесь с <a href="/privacy" className="privacy-link">политикой конфиденциальности</a>
                    </p>
            </div>
        </div>
    );
};

export default Modal;