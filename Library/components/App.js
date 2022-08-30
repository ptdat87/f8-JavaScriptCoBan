import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();
const isSuccess = true;

function App({ cars }) {
    return html`
        <h3>${isSuccess && "Successfully"}</h3>
        <ul>
            ${cars.map((car) => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
    `;
}

export default connector(App);
