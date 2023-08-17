"use client";
import './globals.css'
import { useState, useEffect } from 'react';

import CollectingAddressSelector from '@/app/form/CollectingAddressSelector';
import StateSelector from '@/app/form/StateSelector';
import CitySelector from '@/app/form/CitySelector';
import { CityType, StateType } from '@/app/types';
import DatePicker from '@/app/form/DatePicker';
import NamesInput from '@/app/form/NamesInput';
import AddressInformation from '@/app/form/AddressInformation';
import IndicationsInput from '@/app/form/IndicationsInput';
import PhoneAndAddress from '@/app/form/PhoneAndAddress';


export default function Home() {
  const [states, setStates] = useState([] as StateType[]);
  const [cities, setCities] = useState([] as CityType[]);
  
  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await fetch('http://localhost:3000/states/');
        const jsonResponse: StateType[] = await response.json();
        console.log('JSON', jsonResponse[0])
        setStates(jsonResponse);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchStates();
  }, [])
  
  const updateCities = (state: string) => {
    console.log('STATES', states);
    const selectedState = states.find(iterator => iterator.name === state);
    const cities = selectedState?.cities as CityType[];
    setCities(cities);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main-elements">

        <CollectingAddressSelector
          states={states}
        />
        <DatePicker />
        <NamesInput />
        <PhoneAndAddress />
        <AddressInformation
          states={states}
          onUpdateCities={updateCities}
          cities={cities}
        />
        <IndicationsInput />
      </div>
    </main>
  )
}
