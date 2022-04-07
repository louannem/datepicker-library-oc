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

            <div className='examples-grid'>
                <div>
                    <h2>Basic datepicker</h2>
                    <DatePicker onChange={handleChange} labelID="basic-datepicker" />
                </div>

                <div>
                    <h2>Datepicker with icon</h2>
                    <DatePicker inputIcon={true} labelID="datepicker-without-icon" />
                </div>

                <div>
                    <h2>Hiding the close button</h2>
                    <DatePicker  closeButton={false} labelID="datepicker-no-close-btn" />
                </div>

                <div>
                    <h2>Ignoring today's date (no highlight)</h2>
                    <DatePicker  hightlightToday={false} labelID="no-today-highlight" />
                </div>

                <div>
                    <h2>Personnalized starting month</h2>
                    <DatePicker  startMonth={0} labelID="personnalized-sarting-month" />
                </div>

                <div>
                    <h2>Personnalized starting year</h2>
                    <DatePicker  startYear={2000} labelID="personnalized-starting-year" />
                </div>

                <div>
                    <h2>Switching the language to french</h2>
                    <DatePicker  lang="fr" labelID="datepicker-french" /> 
                </div>
            </div>
      </div>
  )
}
