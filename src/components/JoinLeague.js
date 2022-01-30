import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Confirmation from './Confirmation'
import ValidationMessage from './ValidationMessage';

function JoinLeague() {
    const { register, handleSubmit } = useForm();
    const [leagueCode, setLeagueCode] = useState('');
    const [errorObject, setErrorObject] = useState({});

    const createLeague = data => {
        fetch('http://localhost:8000/create-league', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw Error(response.statusText);
        })
        .then(code => {
            if (code) {
                console.log(code + ' code');
                setLeagueCode(code);
            }
        })
        .catch(err => {
            setErrorObject({
                errorForm: 'create-league',
                errorMessage: err.message,
            });  
        });
    };

    return (
        <div class="columns">
            <div className="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <ValidationMessage {...errorObject} source='create-league'/>
                    <Confirmation trigger={leagueCode} setTrigger={setLeagueCode} label="League" misc={`Please save this code: ${leagueCode}`}/>
                    <form onSubmit={handleSubmit(createLeague)}>
                        <div className="field">
                            <label className="label">Enter league name</label>
                            <div className="control">
                                <input {...register("name")} className="input" style={{ width: "50%" }} type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success">
                                    Create league
                                </button>
                            </p>
                        </div>
                    </form>
                    <br/>
                    <form>
                        <div className="field">
                            <label className="label">Search league code/name</label>
                            <div className="control">
                                <input className="input" style={{ width: "50%" }} type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-danger">
                                    Search
                                </button>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
            <div className="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <p>List of members here</p>
                </section>
            </div>
        </div>
    )
}

export default JoinLeague;