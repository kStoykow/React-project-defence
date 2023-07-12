export const Login = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('login');
    }
    return (
        <section className="login_section layout_padding container">
            <form onSubmit={onSubmitHandler}>
                <h4>LOGIN</h4>
                <div className="form-group col-lg-4">
                    <label htmlFor="inputPatientName">Email </label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="John@health.com" />

                    <label htmlFor="inputPhone">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />

                    <label htmlFor="inputSymptoms">Repeat Password</label>
                    <input type="password" className="form-control" id="repeatPassword" name="repeatPassword" />

                    <button className="btn-box btn">Login</button>
                </div>
            </form>
        </section >
    );
}