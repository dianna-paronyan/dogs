import {useState, useEffect} from 'react';
import React from 'react';

import './DataFetching.css'

const DataFetching = () => {
    const [selectedValue, setSelectedValue] = useState('akita');
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${selectedValue}/images/random`)
            .then((res)=>{
                return res.json();
             }).then((res)=>{
                console.log(res.message)
                setImageSrc(res.message)
             }) 
    },[selectedValue]);


    function handleSelectChange(e){
        setSelectedValue(e.target.value)
    }
 

    return (
        <>
            <div className='selectDiv'>
                <select value={selectedValue} onChange={handleSelectChange}> 
                    <option value='akita'>Akita</option>
                    <option value='beagle'>Beagle</option>
                    <option value='dalmatian'>Dalmatian</option>
                    <option value='germanshepherd'>Germanshepherd</option>
                    <option value='Husky'>Husky</option>
                    <option value='labrador'>Labrador</option>
                    <option value='lug'>Lug</option>
                    <option value='Retriever'>Retriever</option>
                    <option value='spaniel'>Spaniel</option>
                </select>
            </div>
            <div className='image'>
                {console.log(imageSrc)}
                <img src={imageSrc} className='img' />
            </div>
        </> 
       
    )
}
export default DataFetching;