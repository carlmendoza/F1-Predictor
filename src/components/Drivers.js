function Drivers(props) {
    // console.log('selected driver ' + props.selectedDriver)
    let opts = {};

    opts['disabled'] = 'disabled';
    
    console.log(props.selectedDriver)

    return (
        <>
        <option>Select driver</option>
        <option value="LH" id="LH" disabled={props.selectedDriver === 'LH' ? true : false}>44. Lewis Hamilton 🇬🇧</option>
        <option value="MV" id="MV">33. Max Verstappen 🇳🇱</option>
        <option value="VB" id="VB">77. Valterri Bottas 🇫🇮</option>
        <option value="SP" id="SP">5. Sergio Perez 🇲🇽</option>
        <option value="LN" id="LN">4. Lando Norris 🇬🇧</option>
        <option value="DR" id="DR">3. Daniel Ricciardo 🇦🇺</option>
        <option value="CS" id="CS">55. Carlos Sainz 🇪🇸</option>
        <option value="CL" id="CL">16. Charles Leclerc 🇲🇨</option>
        <option value="FA" id="FA">14. Fernando Alonso 🇪🇸</option>
        <option value="EO" id="EO">31. Esteban Ocon 🇫🇷</option>
        <option value="SV" id="SV">5. Sebastian Vettel 🇩🇪</option>
        <option value="LS" id="LS">18. Lance Stroll 🇨🇦</option>
        <option value="YS" id="YS">22. Yuki Tsunoda 🇯🇵</option>
        <option value="PG" id="PG">10. Pierre Gasly 🇫🇷</option>
        <option value="KR" id="KR">7. Kimi Raikkonen 🇫🇮</option>
        <option value="AG" id="AG">99. Antonio Giovanazzi 🇮🇹</option>
        <option value="GR" id="GR">63. George Russell 🇬🇧</option>
        <option value="NL" id="NL">6. Nicolas Latifi 🇨🇦</option>
        <option value="MS" id="MS">47. Mick Schumacher 🇩🇪</option>
        <option value="NM" id="NM" disabled>9. Nikita Mazepin 🇷🇺</option>
        </>
    );
}

export default Drivers;