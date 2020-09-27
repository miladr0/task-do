import React from 'react';
import moment from 'moment';

export default class CustomCalender extends React.Component {
  weekdayshort = moment.weekdaysShort();

  state = {
    showCalendarTable: true,
    showMonthTable: false,
    dateObject: moment(),
    allmonths: moment.months(),
    showYearNav: false,
    selectedDay: null,
  };
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format('Y');
  };
  currentDay = () => {
    return parseInt(this.state.dateObject.format('D'));
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf('month')
      .format('d');
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format('MMMM');
  };
  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable,
    });
  };
  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable,
    });
  };
  MonthList = props => {
    let months = [];
    props.data.map(data =>
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setMonth(data);
          }}
        >
          <span>{data}</span>
        </td>,
      ),
    );
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };
  showYearEditor = () => {
    this.setState({
      showYearNav: true,
      showCalendarTable: !this.state.showCalendarTable,
    });
  };

  onPrev = () => {
    let curr = '';
    if (this.state.showMonthTable === true) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
    });
  };
  onNext = () => {
    let curr = '';
    if (this.state.showMonthTable === true) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
    });
  };
  setYear = year => {
    // alert(year)
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('year', year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearNav: !this.state.showYearNav,
    });
  };
  onYearChange = e => {
    this.setYear(e.target.value);
  };
  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDateMoment = moment(stopDate);
    while (currentDate <= stopDateMoment) {
      dateArray.push(moment(currentDate).format('YYYY'));
      currentDate = moment(currentDate).add(1, 'year');
    }
    return dateArray;
  }
  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set('year', props)
      .add('year', 12)
      .format('Y');

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data =>
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setYear(data);
          }}
        >
          <span>{data}</span>
        </td>,
      ),
    );
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Yeah</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };
  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d,
      },
      () => {
        console.log('day: ', this.state.selectedDay);
      },
    );
  };
  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return (
        <div
          key={day}
          className="text-sm tracking-wide text-center m-1 p-1 w-7 h-7 text-gray-500"
        >
          {day}
        </div>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <div
          key={-i}
          className="text-sm tracking-wide text-center w-8 h-8 m-1 p-1"
        >
          {'   '}
        </div>,
      );
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay =
        d === this.currentDay()
          ? 'bg-indigo-500 rounded-full text-white'
          : 'text-gray-900';
      // let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
      daysInMonth.push(
        <div
          key={d}
          className={`text-sm tracking-wide text-center w-8 h-8 m-1 p-1 cursor-pointer ${currentDay}`}
        >
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </div>,
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        // let insertRow = cells.slice();
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return (
        <div key={i} className="flex items-center">
          {d}
        </div>
      );
    });

    return (
      <div className="tail-datetime-calendar">
        <div className="flex items-center justify-between py-2 px-6">
          <div>
            <span className="text-lg font-medium text-gray-600">
              {this.month()}
            </span>
            <span className="ml-1 text-lg font-medium text-gray-600 font-normal">
              {this.year()}
            </span>
          </div>
          <div className="px-1">
            <button
              onClick={e => {
                this.onPrev();
              }}
              type="button"
              className="leading-none inline-flex cursor-pointer p-1 items-center hover:bg-gray-200"
            >
              <svg
                className="h-6 w-6 text-indigo-500 inline-flex leading-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={e => {
                this.onNext();
              }}
              className="leading-none inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
            >
              <svg
                className="h-6 w-6 text-indigo-500 inline-flex leading-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="calendar-date">
          {this.state.showYearNav && <this.YearTable props={this.year()} />}
          {this.state.showMonthTable && (
            <this.MonthList data={moment.months()} />
          )}
        </div>

        {this.state.showCalendarTable && (
          <div className="flex flex-col">
            <div className="flex flex-wrap">{weekdayshortname}</div>

            <div className="flex flex-col">{daysinmonth}</div>
          </div>
        )}
      </div>
    );
  }
}
