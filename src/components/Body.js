import { useState } from 'react'
import Drivers from './Drivers'

function Body() {
    const [winner, setWinner] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');

    const onChange = (e) => {
        setWinner(e.target.value);
        console.log(winner);
    };

    const foo = () => { return false };

    return (
   
    <section className="section" id="s-fullheight-100vh">      <p>Winner: {winner} Second: {second} Third: {third}</p>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Username</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <input className="input is-normal" style={{width: "40%"}} type="text" placeholder="Enter your user name"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Race winner</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select" onChange={ (e) => setWinner(e.target.value) }>
                            <select>
                                <Drivers selectedDriver={ winner }/>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">2nd place</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select" onChange={ (e) => setSecond(e.target.value) }>
                            <select>
                                <Drivers/>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">3rd place</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select" onChange={ (e) => setThird(e.target.value) }>
                            <select>
                                <Drivers/>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        {/* <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Driver of the day</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select" onChange={ (e) => setThird(e.target.value) }>
                            <select>
                                <Drivers/>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="field is-horizontal">
            <div className="field-label"></div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <button className="button is-info">
                            Submit predictions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default Body;