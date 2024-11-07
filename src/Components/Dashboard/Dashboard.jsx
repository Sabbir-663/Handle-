import React from 'react';
import bannerImg from '../../assets/images/banner.jpg'
const Dashboard = () => {
    return (
        <div>
            <div className="border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs text-center">
                 <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-auto rounded-lg mb-4" /> 
                 <h2 className="text-xl font-semibold mb-2">Dell XPS 13</h2> 
                 <p className="text-gray-700 mb-4">Price:99.99k</p>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">View Details</button>
                </div>
        </div>
    );
};

export default Dashboard;