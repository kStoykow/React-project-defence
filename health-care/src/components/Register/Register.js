import { useState } from 'react';

export const Register = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    const onChangeRepeatPass = (e) => {
        setRepeatPass(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Register');
    }

    return (
        <section className="register_section layout_padding container">
            <form onSubmit={onSubmitHandler}>
                <h4>Register</h4>
                <div className="form-group col-lg-4">
                    <label htmlFor="email">Email </label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="John@health.com" value={email} onChange={onChangeEmail} />

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={pass} onChange={onChangePass} />

                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input type="password" className="form-control" id="repeatPassword" name="repeatPassword" value={repeatPass} onChange={onChangeRepeatPass} />

                    <button className="btn-box btn">Register</button>
                </div>
            </form>
        </section >
    );
}