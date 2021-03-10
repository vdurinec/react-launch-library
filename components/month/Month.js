import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import {
  getDayIndex,
  getDaysInMonth,
  getWeeksWithDays,
  formatDate,
  fixDateFormatToFitAllBrowsers,
} from '../../helpers/dateUtils';

import Portal from '../portal';
import WeekDayNames from '../week-day-names';
import Week from '../week';
import Day from '../day';
import { default as Details } from '../details-card';
import ClientOnly from '../client-only';
import Counter from '../counter';
import styles from '../../styles/Month.module.css';

export default function Month({ month, year, events }) {
  const [portal, setPortal] = useState('');
  const firstDayIndex = getDayIndex(`${year}-${month}-01T00:00:00Z`);
  const totalMonthDays = getDaysInMonth(month, year) + firstDayIndex;
  const weeks = getWeeksWithDays(firstDayIndex, totalMonthDays, events);

  const handleDayClick = (id, hasEvents) => () => {
    if (!hasEvents) {
      return;
    }
    setPortal((portal) => (portal === id ? '' : id));
  };

  const renderEventDetails = ({
    day,
    month,
    year,
    name,
    agencies,
    description,
    location,
    newsUrl,
    videoUrl,
  }) => {
    const agenciesNameString = agencies
      ? agencies.map((item) => item['name'])
      : '';

    return (
      <Details.ItemContainer>
        <Details.Item item={name} type="title" />
        <Details.Item item={agenciesNameString.join(', ')} type="subtitle" />
        <Details.Item item={description} />
        <Details.Item item={`Location: ${location}`} />
        <Details.Item item={newsUrl || ''} type="link" />
        <Details.Item item={videoUrl || ''} type="link" />
        <Details.Item item={formatDate({ day, month, year })} type="subtitle" />
      </Details.ItemContainer>
    );
  };

  const renderPortalWithCounter = (currentPortalId, dayEvents) => {
    if (!portal || portal !== currentPortalId) return null;
    return (
      <ClientOnly>
        <Portal scrollTo>
          {dayEvents.map((dayEvent) => (
            <Details.Card key={dayEvent.id}>
              {renderEventDetails(dayEvent)}
              <Details.ItemContainer>
                <ClientOnly>
                  <Counter
                    date={
                      new Date(fixDateFormatToFitAllBrowsers(dayEvent.date))
                    }
                  />
                </ClientOnly>
              </Details.ItemContainer>
            </Details.Card>
          ))}
        </Portal>
      </ClientOnly>
    );
  };

  const renderDays = (week) =>
    week.map(({ day, events: dayEvents }, index) => (
      <Fragment key={`${day}${index}`}>
        {renderPortalWithCounter(`${year}-${month}-${day}`, dayEvents)}
        <Day
          id={`${year}-${month}-${day}`}
          day={day}
          hasEvents={!!dayEvents.length}
          handleDayClick={handleDayClick}
        />
      </Fragment>
    ));

  return (
    <div className={styles.container} data-testid="test-month">
      <WeekDayNames />
      <div className={styles.month}>
        {weeks.map((week, index) => (
          <Week className={index === 0 ? 'first' : ''} key={index}>
            {renderDays(week)}
          </Week>
        ))}
      </div>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      date: PropTypes.string,
      day: PropTypes.number,
      month: PropTypes.number,
      year: PropTypes.number,
    })
  ),
};
