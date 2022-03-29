import React from 'react'
import { DatePicker } from 'datepicker-library-oc'
import  'datepicker-library-oc/dist/index.css'

export default function App() {
  const getValue = (value) => { return value } 
  return (
      <div className='componentExamplesWrapper'>
          <h1>Datepicker plugin examples</h1>

          <div>
              <h2>Basic datepicker</h2>
              <DatePicker inputValue={getValue} />
          </div>

          <div>
              <h2>Datepicker with icon</h2>
              <DatePicker inputValue={getValue} inputIcon={true} />
          </div>

          <div>
              <h2>Hiding the close button</h2>
              <DatePicker inputValue={getValue}closeButton={false} />
          </div>

          <div>
              <h2>Ignoring today's date (no highlight)</h2>
              <DatePicker inputValue={getValue} hightlightToday={false} />
          </div>

          <div>
              <h2>Personnalized starting month</h2>
              <DatePicker inputValue={getValue} startMonth={0} />
          </div>

          <div>
              <h2>Personnalized starting year</h2>
              <DatePicker inputValue={getValue} startYear={2000} />
          </div>

          <div>
              <h2>Switching the language to french</h2>
              <DatePicker inputValue={getValue} lang="fr" /> 
          </div>
      </div>
  )
}
