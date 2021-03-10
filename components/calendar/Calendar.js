import { useState, useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { BaseApiUrlContext, API_DEV_URL } from '../../context/BaseApiUrl';
import { getMonth, getMonthFromNum, getYear } from '../../helpers/dateUtils';
import CalendarHeader from '../calendar-header';
import { getFullData } from '../../helpers/requestHandler';
import { mapLaunchEvents } from '../../helpers/dataMapper';
import { OPERATORS } from '../../helpers/general';
import Month from '../month';
import Loader from '../Loader';
import ErrorWithFallback from '../error-with-fallback';
import styles from '../../styles/Calendar.module.css';

function Calendar({ selectedAgencies }) {
  const { baseApiUrl, changeBaseApiUrl } = useContext(BaseApiUrlContext);
  const [errorText, setErrorText] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYear, setCurrentYear] = useState(getYear());
  const [month, setMonth] = useState(currentMonth.number);
  const [relevantEvents, setRelevantEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvents = useCallback(async () => {
    setIsLoading(true);
    const response = await getFullData(
      `${baseApiUrl}/event/?limit=100&offset=0`
    );

    /* otherwise remap events data and take only what is used */
    const eventsData = response?.results?.length
      ? mapLaunchEvents(response.results)
      : [];

    setEvents(eventsData);
    setErrorText('');
    setIsLoading(false);
  }, [baseApiUrl]);

  /* fetch data in componentDidMount lifecycle only */
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  /* update relevant events on each events, month or year change */
  useEffect(() => {
    !!events?.length &&
      setRelevantEvents(
        events.filter((event) => {
          const relevantForCurrentMonth =
            event.month === month && event.year === currentYear;
          /* if events occurring in current month, skip checks and do not take them*/
          if (relevantForCurrentMonth) {
            /* if no agency selected - show events for all agencies */
            if (!selectedAgencies.length) {
              return event;
            }
            const filteredAgencies = event.agencies.filter((agency) =>
              selectedAgencies.includes(agency.id)
            );

            if (filteredAgencies.length) {
              return { ...event, agencies: filteredAgencies };
            }
          }

          return false;
        })
      );
  }, [month, currentYear, events, selectedAgencies]);

  const handleYearUpdate = (operation) => {
    const operator = OPERATORS[operation];
    setCurrentYear((currentYear) => {
      return operator ? currentYear + operator : currentYear;
    });
  };

  const handleMonthUpdate = (operation) => {
    const operator = OPERATORS[operation];

    setMonth((month) => {
      let newMonth = operator ? month + operator : month;
      if (newMonth > 12) {
        newMonth = newMonth - 12;
        setCurrentYear((currentYear) => currentYear + 1);
      }

      if (newMonth < 1) {
        newMonth = newMonth + 12;
        setCurrentYear((currentYear) => currentYear - 1);
      }

      setCurrentMonth(getMonthFromNum(newMonth));
      return newMonth;
    });
  };

  const handleEventsFallback = () => {
    changeBaseApiUrl(API_DEV_URL);
    getEvents();
  };

  if (errorText) {
    return (
      <ErrorWithFallback
        error={errorText}
        handleFallback={handleEventsFallback}
      />
    );
  }

  if (isLoading)
    return (
      <div className={styles.container} data-testid="test-month">
        <p>Almost there! Please wait a bit more for launching!</p>
        <Loader />
      </div>
    );

  return (
    <div className={styles.container}>
      <CalendarHeader
        header={{ name: currentYear.toString() }}
        handleChange={handleYearUpdate}
        type="year"
      />
      <CalendarHeader
        header={currentMonth}
        handleChange={handleMonthUpdate}
        type="month"
      />

      <Month
        month={month}
        year={currentYear}
        events={relevantEvents}
        isLoading={isLoading}
      />
    </div>
  );
}

Calendar.propTypes = {
  events: PropTypes.array,
  selectedAgencies: PropTypes.array,
  testId: PropTypes.string,
};

export default Calendar;
