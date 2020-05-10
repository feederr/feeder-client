let domain: string;

if (process.env.NODE_ENV === 'production') {
    domain = '/';
} else {
    domain = 'https://localhost:8080';
}

export default domain;
