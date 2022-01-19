import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Confirmation from './Confirmation'
import ValidationMessage from './ValidationMessage';

function Login({setAuth: setAuth}) {
    const { register, handleSubmit } = useForm();
    const [saveConfirm, setSaveConfirm] = useState(false);
    const [errorObject, setErrorObject] = useState({});

    const createUser = data => {
        if (data.password !== data.password2) {
            setErrorObject({
                errorForm: 'register',
                errorMessage: 'Password inputted must match!'
            });
        } else {
            fetch('http://localhost:8000/create-user', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then((response) => {
                if (!response.ok) {
                    setErrorObject({
                        errorForm: 'create',
                        errorMessage: response.statusText
                    });
                } else {
                    setSaveConfirm(true);
                }
            });
        }
    }

    const loginUser = data => {
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((response) => {
            if (!response.ok) {
                setErrorObject({
                    errorForm: 'login',
                    errorMessage: response.statusText
                });
            } else {
                setAuth(true);
            }
        })
    }

    return (
        <div class="columns">
            <div class="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <ValidationMessage {...errorObject} source='login'/>
                    <form onSubmit={handleSubmit(loginUser)}>
                        <h2 className="login">Login</h2><br />
                        <div className="field">
                            <p class="control has-icons-left has-icons-right">
                                <input {...register("login_email")} className="input" type="email" placeholder="Email" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p class="control has-icons-left">
                                <input {...register("login_password")} className="input" type="password" placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-black">Login</button>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
            <div className="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <Confirmation trigger={saveConfirm} setTrigger={setSaveConfirm} label="User" />
                    <ValidationMessage {...errorObject} source='create' />
                    <form onSubmit={handleSubmit(createUser)}>
                        <h2 className="login">Create an account</h2><br />
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input {...register("email")} className="input" type="email" placeholder="Email" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input {...register("password")} className="input" type="password" placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input {...register("password2")} className="input" type="password" placeholder="Re-enter password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-black">Register</button>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login;