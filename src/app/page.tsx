"use client";
import Image from 'next/image'
import StateSelector from '@/app/form/state'
import CitySelector from '@/app/form/city';
import { useState, useEffect } from 'react';
import { State } from '@/app/types';
import { City } from '@/app/types/city';


export default function Home() {
  const [states, setStates] = useState([] as State[]);
  const [cities, setCities] = useState([] as City[]);
  
  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await fetch('http://localhost:3000/states/');
        const jsonResponse = await response.json();
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
    const cities = selectedState?.cities as City[];
    setCities(cities);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StateSelector
        states={states}
        onUpdateCities={updateCities}
      />
      <CitySelector cities={cities} />
    </main>
  )
}
