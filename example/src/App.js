import React from 'react'
import { DatePicker } from 'datepicker-library-oc'
import  'datepicker-library-oc/dist/index.css'
import { useState, useEffect } from 'react'

export default function App() {
    const [date, setDate] = useState()

    const handleChange = (selectedDate) => {
        setDate(selectedDate)
    }

    
    useEffect(() => {
        console.log(date)
    }, [date])

  return (
      <div className='componentExamplesWrapper'>
          <h1>Datepicker plugin examples</h1>

          <div>
              <h2>Basic datepicker</h2>
              <DatePicker onChange={handleChange} />
          </div>

          <div>
              <h2>Datepicker with icon</h2>
              <DatePicker inputIcon={true} />
          </div>

          <div>
              <h2>Hiding the close button</h2>
              <DatePicker  closeButton={false} />
          </div>

          <div>
              <h2>Ignoring today's date (no highlight)</h2>
              <DatePicker  hightlightToday={false} />
          </div>

          <div>
              <h2>Personnalized starting month</h2>
              <DatePicker  startMonth={0} />
          </div>

          <div>
              <h2>Personnalized starting year</h2>
              <DatePicker  startYear={2000} />
          </div>

          <div>
              <h2>Switching the language to french</h2>
              <DatePicker  lang="fr" /> 
          </div>
      </div>
  )
}
