// components/AddManagerForm.js
'use client';

import { useState } from 'react';

const AddManagerForm = () => {
    const [uid, setUid] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            uid: uid,
            password: password,
        };

        try {
            const response = await fetch('https://clockwise-storage.onrender.com/managers/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                throw new Error(errorData.message);
            }

            const result = await response.json();
            setMessage('Manager added successfully!');
            setUid('');
            setPassword('');
            console.log(result);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to add manager.');
        }
    };

    return (
        <div>
            <h2>Add Manager</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uid">UID:</label>
                    <input
                        type="text"
                        id="uid"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Manager</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AddManagerForm;
