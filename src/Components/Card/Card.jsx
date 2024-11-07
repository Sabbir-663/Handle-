

const Card = ({gadget}) => {
    const {product_title,product_image,price}= gadget;
    return (
        <div >
              <div className="border border-gray-300 rounded-lg p-4 shadow-lg   bg-gray-200 mt-4 flex flex-col items-start gap-6">
                 <img src={product_image} alt="Product" className="w-full h-[300px] rounded-xl  " /> 
                 <h2 className="text-xl text-left font-bold ">{product_title}</h2> 
                 <p className="text-gray-700 text-left text-lg font-medium">Price: ${price}</p>
                  <button className="border-purple-700 border font-semibold  text-purple-800 px-4 py-2 rounded-3xl  text-left transition-transform duration-300 hover:scale-105 hover:bg-gray-300">View Details</button>
                </div>
        </div>
    );
};

export default Card;