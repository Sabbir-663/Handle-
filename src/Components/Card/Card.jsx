

const Card = ({gadget}) => {
    const {product_title,product_image,price}= gadget
    return (
        <div>
              <div className="border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs text-center">
                 <img src={product_image} alt="Product" className="w-full h-auto rounded-lg mb-4" /> 
                 <h2 className="text-xl font-semibold mb-2">{product_title}</h2> 
                 <p className="text-gray-700 mb-4">{price}</p>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">View Details</button>
                </div>
        </div>
    );
};

export default Card;