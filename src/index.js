import React from 'react'
import datepicker from './datepicker.module.css'
import { useEffect, useState, useRef, createRef, useImperativeHandle } from 'react'
import CalendarIcon from 'assets/calendar-icon.svg'
import NextMonth from 'assets/right-chevron.svg'
import NextYear from 'assets/right-double-chevron.svg'
import PreviousMonth from 'assets/left-chevron.svg'
import PreviousYear from 'assets/left-double-chevron.svg'

/**
 * Datepicker plugin developped for React, from Jquery plugin
 * @param {function} inputValue takes a parent function to access a selected date fromthe datepicker 
 * @param {boolean} inputIcon option to display an icon in the input (false by default) 
 * @param {boolean} saveButton optionn to display the save button at the bottom of the datepicker
 * @param {string} lang language in which to display the weekdays and months
 * @param {number} startMonth personnalized starting month. By default, the current month is used.
 * @param {number} startYear personnalized starting year. By default, the current year is used.
 * @returns Datepicker React component
 */
export const DatePicker = ({ onChange, inputIcon, closeButton, hightlightToday, hightlightColor, lang, startMonth, startYear}) => {
    //Constants
    const date = new Date()
    let days, months, monthsObj
    let yearStart = 1950
    let yearEnd = 2050

    //Sets days & months languages
    if(lang === "en") {
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]   
        
        monthsObj = [
            {
                index: 0,
                month: "January"
            },
            {
                index: 1,
                month: "February"
            },
            {
                index: 2,
                month: "March"
            },
            {
                index: 3,
                month: "April"
            },
            {
                index: 4,
                month: "May"
            },
            {
                index: 5,
                month: "June"
            },
            {
                index: 6,
                month: "July"
            },
            {
                index: 7,
                month: "August"
            },
            {
                index: 8,
                month: "September"
            },
            {
                index: 9,
                month: "October"
            },
            {
                index: 10,
                month: "November"
            },
            {
                index: 11,
                month: "December"
            }
        ]
    } else if(lang === "fr") {
        days = ["D", "L", "M", "M", "J", "V", "S"]
        months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

        monthsObj = [
            {
                index: 0,
                month: "Janvier"
            },
            {
                index: 1,
                month: "Février"
            },
            {
                index: 2,
                month: "Mars"
            },
            {
                index: 3,
                month: "Avril"
            },
            {
                index: 4,
                month: "Mai"
            },
            {
                index: 5,
                month: "Juin"
            },
            {
                index: 6,
                month: "Juillet"
            },
            {
                index: 7,
                month: "Août"
            },
            {
                index: 8,
                month: "Septembre"
            },
            {
                index: 9,
                month: "Octobre"
            },
            {
                index: 10,
                month: "Novembre"
            },
            {
                index: 11,
                month: "Décembre"
            }
        ]
    }

    const dayOfWeekStart = 0

    //Current time
    const [year, setYear] = useState(startYear !== null ? startYear : date.getFullYear())
    const [month, setMonth] = useState(startMonth !== null ? startMonth : date.getMonth())

  
    //Initial state
    const el = useRef(null)
    const inputRef = createRef()
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showMonthsArray, setShowMonthsArray] = useState(false)
    const [showYearsArray, setShowYearsArray] = useState(false)
    
    //Consts for years/month/days list in components 
    const [yearsList, setYearsList] = useState()
    const [monthDaysDetails, setDaysDetails] = useState()
    let dayDetails = []
    
    const [selectedDay, setSelectedDay] = useState('')
   
    //Timestamps
    const [timestamp, setTimestamp] = useState('')


    /**
     * Gets the number of days in a month
     * @param {number} year month's year
     * @param {number} month month in which the number of days is to be determined 
     * @returns number of days in given month & year
     */
    const getNumberOfDays = (year, month)=> { return 40 - new Date(year, month, 40).getDate() }

  
    /**
     * Get the specifics of each days in a month to build the datepicker
     * @returns array of objects containing a day, its index, its timestamp, its month & its year
     */
    const getCalendar = () => {
        let start = new Date(year, month, 1, 12)
        let i = 0
        let d, day, m, y, currentday, timestamp
        let numberOfDays = getNumberOfDays(year, month) + 5
       
        while (start.getDay() !== dayOfWeekStart) { start.setDate(start.getDate() - 1) }
        
        while( i < numberOfDays) {
            i++
            day = start.getDay()
            d = start.getDate()
            m = start.getMonth()
            y = start.getFullYear()
            timestamp= new Date(y, m, d).getTime()
            
            currentday = {
                dayIndex: day,
                day: d,
                month: m,
                year: y,
                timestamp: timestamp,
                dayString: new Date(timestamp).toLocaleDateString('en-US', { weekday: 'long' })
            }
           
            dayDetails.push(currentday)   
            start.setDate(d + 1)           
        }  
        return dayDetails
    }

    /**
     * Gets each years from yearStart (1950) to yearEnd (2050)
     * @returns array of years (numbers) 
     */
    const yearsArray = () => {
        let yearsArray = []
        for(let i = parseInt(yearStart, 10); i <= parseInt(yearEnd, 10); i++) {
            yearsArray.push(i)
        }
        return yearsArray
    }
   


    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = event => {
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }      
              handler(event);
            };
      
            document.addEventListener('mousedown', listener);
           
            return () => {
              document.removeEventListener('mousedown', listener);
            };
          },
          [ref, handler]
        );
      }
    useOnClickOutside(el, () => setShowDatePicker(false))


    const changeYear = (x) => { setYear(year + x) }

    /**
     * Change the month on the datepicker & the year when month = -1 or 12 
     * @param {number} x increments/decrements current month's index
     */
    const changeMonth = (x) => {
        let calendarMonth = month + x
        setMonth(month + x)
        
        if(calendarMonth === -1) {
            setMonth(11)
            changeYear(-1)   
        } else if(calendarMonth === 12) {
            setMonth(0)
            changeYear(1)
        }
    }

    /**
     * Sets the newly selected date on the datepicker 
     * @param {object} dayObj Object in the dayDetails array
     * @returns New selected date in string format
     */
    const onDateClick = (dayObj) => {
        const date = new Date(dayObj.year, dayObj.month, dayObj.day)
        setSelectedDay(new Intl.DateTimeFormat().format(date))
        setTimestamp(dayObj.day)
        onChange(new Intl.DateTimeFormat().format(date))

        return (new Intl.DateTimeFormat().format(date))
    }

    const addDateInInput = (selectedDay) => { inputRef.current.value = selectedDay }

    /**
     * Highlight the date if selected by user
     */
    const isSelectedDay = (index, selectedMonth) =>  {
        if(selectedMonth === month && timestamp === index) { return true}
        return false
    }

    /**
     * Highlight current date if found on the datepicker open month
     * @param {object} day Any date generated on the datepicker
     * @returns Boolean
     */
    const isTodayDay = (day, month) => {
        if(date.getDate() === day && date.getMonth() === month && date.getFullYear() === year && hightlightToday) {  return true  }
        return false
    }   

    useEffect(() => {       
        setYearsList(yearsArray())
        setDaysDetails(getCalendar())      
        addDateInInput(selectedDay)
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[month, year, selectedDay])


    //Weekdays component
    const daysMarkup = (
        days.map((day, index) =>(
          <div key={index}>{day}</div>
      ))
    )

    //Calendar component
    const calendar = (
        monthDaysDetails && monthDaysDetails.map((day, index) => (
            <div data-month={day.month} 
            className={(day.month !== month ? datepicker.datepickerOtherMonth : '') 
            + ' ' + datepicker.calendarDay + (isTodayDay(day.day, day.month) ? ' ' + datepicker.highlightToday : '') 
            + (isSelectedDay(day.day, day.month) ? ' ' + datepicker.highlighted : '') } 
            key={index}  
            onClick={() => { 
                onDateClick(day)
             }}>{day.day}</div>
        ))
    )
 
    return(
        <div ref={el} className={datepicker.reactDatepicker} id="react-datepicker-plugin">   
            <div   onClick={()=> setShowDatePicker(true)} className={datepicker.datepickerInput} id="datepicker-input-wrapper">
                <label className={datepicker.datepickerLabel}  htmlFor="date-input">
                {inputIcon && <img src={CalendarIcon} alt="Calendar icon"  />}
                <input type='text'  ref={inputRef} id="date-input" />
                </label>
            </div>

            {showDatePicker ? (
                <div className={datepicker.datepickerWrapper} id="datepicker-wrapper">
                    <div className={datepicker.datepickerHead}>
                        <div className={datepicker.datepickerHeadButton} onClick={() => changeYear(-1)}>
                            <img src={PreviousYear} alt="Previous year button" />
                        </div>
                        <div className={datepicker.datepickerHeadButton} onClick={() => changeMonth(-1)}>
                            <img src={PreviousMonth} alt="Previous month button" />
                        </div>

                        <div className={datepicker.datepickerHeadDates}>
                            <div className={datepicker.datepickerHeadMonth} id="datepicker-month">
                                <span onClick={() => setShowMonthsArray(true)}>{!showMonthsArray && months[month]}</span>
                                <ul className={datepicker.datepickerArray} id="datepicker-months-array">
                                    {showMonthsArray && monthsObj.map((monthObj, index) => (
                                        <li key={index} onClick={() => {setMonth(index); setShowMonthsArray(false)}}>{monthObj.month}</li>
                                    ))}
                                </ul> 
                            </div>

                            <span> - </span>

                            <div className={datepicker.datepickerHeadYear} id="datepicker-year">
                                <span onClick={() => setShowYearsArray(true) }>{!showYearsArray && year}</span>
                                <ul className={datepicker.datepickerArray} id="datepicker-years-array">
                                    {showYearsArray && yearsList.map((year, index) => (
                                        <li key={index} onClick={() => {setYear(year); setShowYearsArray(false)}}>{year}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={datepicker.datepickerHeadButton}onClick={() => changeMonth(1)}>
                            <img src={NextMonth} alt="Next month button" />
                        </div>
                        <div className={datepicker.datepickerHeadButton}  onClick={() => changeYear(1)}>
                            <img src={NextYear} alt="Next year button" />
                        </div>                   
                    </div>

                    <div className={datepicker.datepickerBody} id="datepicker-body">
                        <div className={datepicker.datepickerWeekdaysMarkup} id="datepicker-weekdays-wrapper">
                            {daysMarkup}
                        </div>
                        <div className={datepicker.datepickerCalendar} id="datepicker-calendar">
                            {calendar}
                        </div>
                    </div>
                    {closeButton && 
                        <div className={datepicker.datepickerCloseButton} id="datepicker-close-button">
                            <button onClick={() => {
                                setShowDatePicker(false)
                                setShowMonthsArray(false)
                                setShowYearsArray(false)
                            }}>{lang === "eng" ? "Close" : "Fermer"}</button>
                        </div>
                    }
                </div>
            ) : ''}
        </div>
    )
}


DatePicker.defaultProps = {
    onChange: () => {},
    inputIcon: false,
    closeButton: true,
    hightlightToday: true,
    hightlightColor: null,
    lang: "en",
    startYear: null,
    startMonth: null
}
