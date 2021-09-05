import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [ username, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [error, setError ] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 
            'Project-ID': 'e0a99ded-6c94-45ca-8eff-196d8078cfc3',
            'User-Name': username,
            'User-Secret': password
        };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            setError('');

            window.location.reload();
        } catch(error) {
            setError('Oops, incorrect credentials!')
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handelSubmit}>
                    <input 
                        type='text' 
                        value={username} 
                        onChange = { (e) => setUserName(e.target.value) } 
                        className='input'
                        placeholder='Username'  
                        required  
                    />
                    <input 
                        type='password' 
                        value={password} 
                        onChange = { (e) => setPassword(e.target.value) } 
                        className='input'
                        placeholder='Password'  
                        required  
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;