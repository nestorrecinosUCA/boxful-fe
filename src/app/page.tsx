"use client";
import './globals.css'
import { useState, useEffect } from 'react';

import { CityType, OrderType, StateType } from '@/app/types';
import { apiUrl, defaultOrder } from '@/app/constants';

import NamesInput from '@/app/form/NamesInput';
import AddressInformation from '@/app/form/AddressInformation';
import IndicationsInput from '@/app/form/IndicationsInput';
import PhoneAndAddress from '@/app/form/PhoneAndAddress';
import CollectingAndDate from '@/app/form/CollectingAndAddress';
import NextButton from '@/app/form/NextButton';


export default function Home() {
  const [states, setStates] = useState([] as StateType[]);
  const [cities, setCities] = useState([] as CityType[]);
  const [newOrder, setNewOrder] = useState(defaultOrder);
  
  const updateOrder = (orderProperty: Partial<OrderType>) => {
    console.log({...orderProperty});
    const updatedOrder = {...newOrder, ...orderProperty};
    setNewOrder(updatedOrder);
    console.log(updatedOrder);
  };

  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await fetch(`${apiUrl}/states/`);
        const jsonResponse: StateType[] = await response.json();
        setStates(jsonResponse);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchStates();
  }, [])
  
  const updateCities = (state: string) => {
    const selectedState = states.find(iterator => iterator.name === state);
    const cities = selectedState?.cities ? selectedState?.cities : [];
    setCities(cities);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="main-elements">

        <CollectingAndDate
          address={states}
          onUpdate={updateOrder}
        />
        <NamesInput onUpdate={updateOrder}
        />
        <PhoneAndAddress
          onUpdate={updateOrder} 
        />
        <AddressInformation
          states={states}
          cities={cities}
          onUpdateCities={updateCities}
          onUpdateOrder={updateOrder}
        />
        <IndicationsInput
          onUpdateOrder={updateOrder}
        />
        <NextButton />
      </div>
    </main>
  )
}
