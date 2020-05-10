import domain from "./domain";
import Axios from "axios";

const getTimezoneOffset = () => {
    return String(new Date().getTimezoneOffset() * -1);
};

const config = {
    baseURL: `${domain}/api`,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache",
        "X-Timezone-Offset": getTimezoneOffset()
    }
};

export const request = Axios.create(config);
