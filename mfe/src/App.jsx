import './App.css';
import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = new CustomEvent('form-submitted', { detail: formData });
        window.dispatchEvent(event);
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    return (
        <div className="mfe__container">
            <h1>MY REACT MF1 WORKS!!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Data:
                    <input type="text" value={formData} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
