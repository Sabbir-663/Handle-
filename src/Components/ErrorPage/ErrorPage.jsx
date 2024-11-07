import React from 'react';

const ErrorPage = () => {
    return (
        <div className="text-center space-y-2 mt-24 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-red-800 font-bold">Oops !!!!</h2>
        <h2 className="text-4xl text-red-800 font-bold">Page not found..</h2>
        <img className="w-16" src="https://img.icons8.com/?size=100&id=2f261ZqepWyQ&format=png&color=000000" alt="" />
    </div>
    );
};

export default ErrorPage;