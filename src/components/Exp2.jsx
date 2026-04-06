import React from 'react';

const Header = ({ title }) => {
    return (
        <header style={{ backgroundColor: '#6cb3c7', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <h1>{title}</h1>
        </header>
    );
};

const Footer = ({ tagline, copyright }) => {
    return (
        <footer style={{ backgroundColor: '#78d6e2', color: '#fff', padding: '20px', textAlign: 'center', marginTop: '20px' }}>
            <p>{tagline}</p>
            <p>&copy; {copyright}</p>
        </footer>
    );
};

const App = () => {
    const appTitle = 'Welcome to My First Page';
    const tagline = 'Building amazing React applications';
    const copyrightInfo = '2024 My Company. All rights reserved.';

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header title={appTitle} />
            <main style={{ flex: 1, padding: '40px', textAlign: 'center' }}>
                <p>This is the main content area of the application.</p>
            </main>
            <Footer tagline={tagline} copyright={copyrightInfo} />
        </div>
    );
};

export default App;