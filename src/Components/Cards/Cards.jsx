import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';



const Cards = () => {
    const cards = useLoaderData();
    const {category} = useParams();
    const [gadgets, setGadgets ] = useState([])
    useEffect(()=>{
        const gadgetsCategoryWise =[...cards].filter(
            gadget => gadget.category === category
        )
        setGadgets(gadgetsCategoryWise)

    },[category,cards])
    
    return (
        <div className='grid grid-cols-3'>
           {
            gadgets.map(gadget => <Card key={gadget.id} gadget={gadget}></Card>

            )
           }
        </div>
    );
};

export default Cards;