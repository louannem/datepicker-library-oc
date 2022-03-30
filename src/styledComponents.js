import styled from 'styled-components'


export const ReactDatepicker = styled.div`
  width: 150px;
`

export const DatepickerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &>input {
    width: 100%;
    padding: 2px;
  }

  &>img{
    position: relative;
    left: 90%;
    height: 15px;
    z-index: 3;
  }
`


export const DatePickerWrapper = styled.div`
    float: left;
    position: absolute;
    width: 220px;
    height: auto;
    background: #ffff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 15px 15px;
    margin-top: 0px;
    z-index: 4;
`


export const DatePickerHeader = styled.div`
    float: left;
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-around;
`


export const DatePickerHeadButton = styled.div`
    display: flex;
    float: left;
    width: 30px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: center;

    &>img {
        height: 15px;
        cursor: pointer;
    }
`

export const DatePickerHeadButtonInner = styled.div`
    float: left;
    height: 18px;
    width: 18px;
    background: #f4f4f4;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -10px;
`

export const DatepickerHeadDates = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    &span {
        font-size: 16px;
        color: #666;
        font-weight: 200px;
        text-align: center;
        margin: 0px 1px;
        cursor: pointer; 
      }
` 


export const DatepickerHeadMonth = styled.div`
    min-width: 40px;
    font-size: 16px;
    color: #666;
    font-weight: 200px;
    text-align: center;
    margin: 0px 1px;
    cursor: pointer;
`

export const DatepickerHeadYear = styled.div`
    min-width: 40px;
    font-size: 16px;
    color: #666;
    font-weight: 200px;
    text-align: center;
    margin: 0px 1px;
    cursor: pointer;
`

export const DatepickerBody = styled.div`
    float: left;
    width: 100%;
    margin-top: 5px;
`

export const DatepickerWeekdaysMarkup = styled.div`
    position: relative;
    display: flex;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #666;
    font-size: 13.5px;
    text-align: center;

    &>div { 
        width: 14.285%;
    }
`


export const DatepickerCalendar = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 150px;
    width: 100%;
`
export const CalendarDay = styled.div`
    width: 14%;
    height: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    &:hover {
        background-color: lightgrey;
      }
`

export const DatepickerMonthsYearsArray = styled.ul`
    position: absolute;
    top: 5px;
    min-height: 0px;
    max-height: 100px;
    width: 80px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #ffff;
    z-index: 3;
    padding: 0;

    &>li {
        text-align: left;
        list-style-type: none;
        padding: 2px;
        box-sizing: border-box;
        cursor: pointer;
    }
`

export const CloseButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &>button {
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        background-color: #f4f4f4;
    }
`