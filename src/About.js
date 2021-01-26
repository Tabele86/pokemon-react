import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CasinoIcon from '@material-ui/icons/Casino';


export default function About(props) {
  const { slug } = useParams();
  let a =slug;
  const next = ++a;
  let b= a;
  const prev = b-2;
  const rand = Math.floor((Math.random() * 151) + 1);
  
  
  
  
	const [ pokemon, setPokemon ] = useState();
	console.log(props);
	// console.log(slug);
	// console.log(next);
	// console.log(prev);
	
	useEffect(
		() => {
			fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`).then((res) => res.json()).then((data) => {
				setPokemon(data);
				console.log(data);
			});
		},
		[ slug ]
    );
    
	return (
        <>
      {pokemon && (
        <div className="  w-4/5  m-auto bg-blue-100 bg-cover mt-4 shadow-2xl flex justify-center flex-col items-center">
          <h3 className="text-2xl text-blue-500 uppercase">{pokemon.name}</h3>
		  
          <div className="flex justify-center">
		  
            <img className="w-48" src={pokemon.sprites["front_default"]} alt="" />
            <img className="w-48" src={pokemon.sprites["back_default"]} alt="" />
          </div>
          <h4 className="text-xl text-red-700">Original</h4>
		  
		  <div className="flex justify-center">
		  
            <img className="w-48" src={pokemon.sprites["front_shiny"]} alt="" />
            <img className="w-48" src={pokemon.sprites["back_shiny"]} alt="" />
          </div>
          <h4 className="text-xl text-red-700">Shiny</h4>
          
					
                    <div className='flex justify-center p-1 mx-15 '>
                    
                    
            <Link
  to={`/about/${prev}`}
   >
          <ChevronLeftIcon />
						</Link>
            <Link
  to={`/about/${next}`}
   >
   <Link
  to={`/about/${rand}`}
   >
          <CasinoIcon />
						</Link>
            <Link
  to={`/about/${next}`}
   ></Link>
          <ChevronRightIcon />
						</Link>
                    
                    </div>
        </div>
      )}
    </>
    );
}
