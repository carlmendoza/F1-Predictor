function Drivers(props) {
    // console.log('selected driver ' + props.selectedDriver)
    let opts = {};

    opts['disabled'] = 'disabled';

    return (
        <>
        <option>Select driver</option>
        <option value="LH" id="LH" disabled={props.podium.some(d => d['name'] === 'LH') ? true : false}>44. Lewis Hamilton 🇬🇧</option>
        <option value="MV" id="MV" disabled={props.podium.some(d => d['name'] === 'MV')  ? true : false}>33. Max Verstappen 🇳🇱</option>
        <option value="VB" id="VB" disabled={props.podium.some(d => d['name'] === 'VB')  ? true : false}>77. Valterri Bottas 🇫🇮</option>
        <option value="SP" id="SP" disabled={props.podium.some(d => d['name'] === 'SP')  ? true : false}>5. Sergio Perez 🇲🇽</option>
        <option value="LN" id="LN" disabled={props.podium.some(d => d['name'] === 'LN')  ? true : false}>4. Lando Norris 🇬🇧</option>
        <option value="DR" id="DR" disabled={props.podium.some(d => d['name'] === 'DR')  ? true : false}>3. Daniel Ricciardo 🇦🇺</option>
        <option value="CS" id="CS" disabled={props.podium.some(d => d['name'] === 'CS')  ? true : false}>55. Carlos Sainz 🇪🇸</option>
        <option value="CL" id="CL" disabled={props.podium.some(d => d['name'] === 'CL')  ? true : false}>16. Charles Leclerc 🇲🇨</option>
        <option value="FA" id="FA" disabled={props.podium.some(d => d['name'] === 'FA')  ? true : false}>14. Fernando Alonso 🇪🇸</option>
        <option value="EO" id="EO" disabled={props.podium.some(d => d['name'] === 'EO')  ? true : false}>31. Esteban Ocon 🇫🇷</option>
        <option value="SV" id="SV" disabled={props.podium.some(d => d['name'] === 'SV')  ? true : false}>5. Sebastian Vettel 🇩🇪</option>
        <option value="LS" id="LS" disabled={props.podium.some(d => d['name'] === 'LS')  ? true : false}>18. Lance Stroll 🇨🇦</option>
        <option value="YS" id="YS" disabled={props.podium.some(d => d['name'] === 'YT')  ? true : false}>22. Yuki Tsunoda 🇯🇵</option>
        <option value="PG" id="PG" disabled={props.podium.some(d => d['name'] === 'PG')  ? true : false}>10. Pierre Gasly 🇫🇷</option>
        <option value="KR" id="KR" disabled={props.podium.some(d => d['name'] === 'KR')  ? true : false}>7. Kimi Raikkonen 🇫🇮</option>
        <option value="AG" id="AG" disabled={props.podium.some(d => d['name'] === 'AG')  ? true : false}>99. Antonio Giovanazzi 🇮🇹</option>
        <option value="GR" id="GR" disabled={props.podium.some(d => d['name'] === 'GR')  ? true : false}>63. George Russell 🇬🇧</option>
        <option value="NL" id="NL" disabled={props.podium.some(d => d['name'] === 'NT')  ? true : false}>6. Nicolas Latifi 🇨🇦</option>
        <option value="MS" id="MS" disabled={props.podium.some(d => d['name'] === 'MS')  ? true : false}>47. Mick Schumacher 🇩🇪</option>
        <option value="NM" id="NM" disabled={props.podium.some(d => d['name'] === 'NZ')  ? true : false}>9. Nikita Mazepin 🇷🇺</option>
        </>
    );
}

export default Drivers;