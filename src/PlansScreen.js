import React, { useEffect , useState} from 'react';
import './PlansScreen.css';
import {db} from './firebase';
import { QuerySnapshot } from 'firebase/firestore';

function PlansScreen() {

  const [products , setProducts] = useState([]);
  
    useEffect(() => {
       db.collection('products')
       .where('active' , '==' , true)
       .get()
       .then((querySnapshot) =>{
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
              products[productDoc.id] = productDoc.data();
              const priceSnap = await productDoc.ref.collection
              ("prices").get();
              priceSnap.docs.forEach((price) => {
                products[productDoc.id].prices = {
                    priceId: price.id,
                    priceData: price.data(),
                };
              }) ;
            });

            setProducts(products);

        });

    } , []);
    
    console.log(products);

  return (
    <div className='plansScreen'>
        {Object.entries(products).map(([productsId , productsData]) => {
          //

          return(
            <div className='plansScreen__plan'>
                <div className='plansScreen__info'>
                    <h5>{productsData.name}</h5>
                    <h6>{productsData.description}</h6>
                </div>

                <button>Subscribe</button>

            </div>
          )

        })}

    
    </div>
  )
}

export default PlansScreen