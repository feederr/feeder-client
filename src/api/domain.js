let domain = "";
let localHost = "http://localhost:8080";

if (process.env.NODE_ENV === "production") {
    domain = "/";
} else {
    domain = localHost;
}

export default domain;
