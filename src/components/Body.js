import { useState } from 'react'
import Drivers from './Drivers'
import Confirmation from './Confirmation'
import { useForm } from 'react-hook-form'

function Body() {
    const { register, handleSubmit, errors } = useForm();
    const [podium, setPodium] = useState([]);
    const [saveConfirm, setSaveConfirm] = useState(false);

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:8000/save-prediction', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('prediction saved!');
            setSaveConfirm(true);
            console.log(saveConfirm);
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const addToPodium = (pos, name) => {
        let newPodium = podium.slice();

        if (newPodium.some(i => i.pos === pos)) {
            newPodium.splice(newPodium.findIndex(d => d.pos === pos), 1);
        }

        newPodium.push({pos, name});
        setPodium(newPodium);
    };

    return (
   
    <section className="section" id="s-fullheight-100vh">
        <Confirmation trigger={saveConfirm} setTrigger={setSaveConfirm} label="Prediction"/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Username</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input {...register("user")} className="input is-normal" style={{width: "40%"}} type="text" placeholder="Enter your user name"/>
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
                            <div className="select" onChange={ (e) => addToPodium(1, e.target.value) }>
                                <select {...register("first")}>
                                    <Drivers podium={ podium }/>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">2nd place</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="select" onChange={ (e) => addToPodium(2, e.target.value) }>
                                <select {...register("second")}>
                                    <Drivers podium={ podium }/>
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
                            <div className="select" onChange={ (e) => addToPodium(3, e.target.value) }>
                                <select {...register("third")}>
                                    <Drivers podium={ podium }/>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
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
        </form>
    </section>
    );
  }
  
  export default Body;