import { getDayOfMonth, getMonth, getYear } from './dateUtils';

export const mapEventAgencies = (agencies) =>
  agencies.reduce(
    (allAgencies, agency) => [
      ...allAgencies,
      {
        id: agency?.launch_service_provider?.id,
        name: agency?.launch_service_provider?.name,
      },
    ],
    []
  );

/* remap events and take only necessary data */
export const mapLaunchEvents = (events) =>
  events.reduce(
    (
      allEvents,
      { id, date, name, description, location, newsUrl, videoUrl, launches }
    ) => [
      ...allEvents,
      {
        id,
        date,
        name,
        description,
        location,
        newsUrl,
        videoUrl,
        day: getDayOfMonth(date),
        month: getMonth(date)?.number,
        year: getYear(date),
        agencies: launches?.length ? mapEventAgencies(launches) : [],
      },
    ],
    []
  );
