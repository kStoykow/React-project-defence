import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('login');
    }

    return (
        <section className="login_section layout_padding container">
            <form onSubmit={onSubmitHandler}>
                <h4>LOGIN</h4>
                <div className="form-group col-lg-4">
                    <label htmlFor="email">Email </label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="John@health.com" value={email} onChange={onChangeEmail} />

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={pass} onChange={onChangePass} />

                    <button className="btn-box btn">Login</button>
                </div>
            </form>
        </section >
    );
}