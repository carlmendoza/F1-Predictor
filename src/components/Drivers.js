function Drivers(props) {
    // console.log('selected driver ' + props.selectedDriver)
    return (
        <>
        <option>Select driver</option>
        <option value="44" id="LH" disabled={props.podium.some(d => d['name'] === '44') ? true : false}>44. Lewis Hamilton 🇬🇧</option>
        <option value="33" id="MV" disabled={props.podium.some(d => d['name'] === '33')  ? true : false}>33. Max Verstappen 🇳🇱</option>
        <option value="77" id="VB" disabled={props.podium.some(d => d['name'] === '77')  ? true : false}>77. Valterri Bottas 🇫🇮</option>
        <option value="5" id="SP" disabled={props.podium.some(d => d['name'] === '5')  ? true : false}>5. Sergio Perez 🇲🇽</option>
        <option value="4" id="LN" disabled={props.podium.some(d => d['name'] === '4')  ? true : false}>4. Lando Norris 🇬🇧</option>
        <option value="3" id="DR" disabled={props.podium.some(d => d['name'] === '3')  ? true : false}>3. Daniel Ricciardo 🇦🇺</option>
        <option value="55" id="CS" disabled={props.podium.some(d => d['name'] === '55')  ? true : false}>55. Carlos Sainz 🇪🇸</option>
        <option value="16" id="CL" disabled={props.podium.some(d => d['name'] === '16')  ? true : false}>16. Charles Leclerc 🇲🇨</option>
        <option value="14" id="FA" disabled={props.podium.some(d => d['name'] === '14')  ? true : false}>14. Fernando Alonso 🇪🇸</option>
        <option value="31" id="EO" disabled={props.podium.some(d => d['name'] === '31')  ? true : false}>31. Esteban Ocon 🇫🇷</option>
        <option value="5" id="SV" disabled={props.podium.some(d => d['name'] === '5')  ? true : false}>5. Sebastian Vettel 🇩🇪</option>
        <option value="18" id="LS" disabled={props.podium.some(d => d['name'] === '18')  ? true : false}>18. Lance Stroll 🇨🇦</option>
        <option value="22" id="YS" disabled={props.podium.some(d => d['name'] === '22')  ? true : false}>22. Yuki Tsunoda 🇯🇵</option>
        <option value="10" id="PG" disabled={props.podium.some(d => d['name'] === '10')  ? true : false}>10. Pierre Gasly 🇫🇷</option>
        <option value="7" id="KR" disabled={props.podium.some(d => d['name'] === '7')  ? true : false}>7. Kimi Raikkonen 🇫🇮</option>
        <option value="99" id="AG" disabled={props.podium.some(d => d['name'] === '99')  ? true : false}>99. Antonio Giovanazzi 🇮🇹</option>
        <option value="63" id="GR" disabled={props.podium.some(d => d['name'] === '63')  ? true : false}>63. George Russell 🇬🇧</option>
        <option value="6" id="NL" disabled={props.podium.some(d => d['name'] === '6')  ? true : false}>6. Nicolas Latifi 🇨🇦</option>
        <option value="47" id="MS" disabled={props.podium.some(d => d['name'] === '47')  ? true : false}>47. Mick Schumacher 🇩🇪</option>
        <option value="9" id="NM" disabled={props.podium.some(d => d['name'] === '9')  ? true : false}>9. Nikita Mazepin 🇷🇺</option>
        </>
    );
}

export default Drivers;