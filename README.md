# datepicker-library-oc

> A simple datepicker made with React

[![NPM](https://img.shields.io/npm/v/datepicker-library-oc.svg)](https://www.npmjs.com/package/datepicker-library-oc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save datepicker-library-oc
```

## Usage

All available props are shown in the next section. To get a selected date's value, you need a function that will return it, or put it in your state. You can then call that function in the onChange prop.

```jsx
import React, { Component } from "react";

import DatePicker from "datepicker-library-oc";
import "datepicker-library-oc/dist/index.css";

function Example() {
  const [date, setDate] = useState("");
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return <DatePicker onChange={handleChange} />;
}
```

## Props

| Prop           | Type     | Default value                                                                          |
| -------------- | -------- | -------------------------------------------------------------------------------------- |
| onChange       | Function | Return nuln                                                                            |
| inputIcon      | Boolean  | false                                                                                  |
| closeButton    | Boolean  | true                                                                                   |
| highlightToday | Boolean  | true                                                                                   |
| lang           | String   | "en" (also available for now : "fr")                                                   |
| startYear      | Number   | null (or current year)                                                                 |
| startMonth     | Number   | null (or current month index). The month index goes from 0 (january) to 11 (december). |

## Examples

All examples can be found on https://
The basic use of the datepicker can be as such :

## License

MIT © [louannem](https://github.com/louannem)
