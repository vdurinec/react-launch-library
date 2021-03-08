## React Launcher

## Description

An application that will allow visitors to discover orbital launches in a neat calendar along with a countdown.

## Info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the app locally, run the development server:

```bash
npm run dev
# or
yarn dev
```

And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests, run command:

```bash
npm run test
# or
yarn test
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Expected behavior

The app will load with prefilled space-agencies select with the obtained data. It will load the calendar component but will display a loading message if events are still loading.

By default, all the launch events for all the space-agencies will be displayed on the calendar. If a space agency is selected, it will update the calendar preview and mark only days with launch events for the selected agencies.

The launch event will be marked on the calendar day, and if a user clicks on the day with the launch event - a window will scroll to the opened event details with a countdown (T-time before the launch or T+time after the launch), and some details about the event and launchers (space agency).

The "year" calendar header will display/change year on the left or right arrow click and change the calendar displayed data for the correct year-month preview.

The "month" calendar header will display/change month on the left or right arrow click and change the calendar displayed data for the correct month preview.

If the API had overload/error, it will display the error screen with a possibility to load the data for the dev API to still be able to preview the app.

Theme toggle (in the upper right corner) will change the text and background colors when toggled.

The app will resize to fit the screen.

## Application structure

Project looks like this:

```
react-launch-library
 ├── __mocks__
 ├── __tests__
 ├── components
 │ ├── calendar
 │ ├── calendar-header
 │ ├── client-only
 │ ├── counter
 │ ├── day
 │ ├── details-card
 │ ├── error-boundary
 │ ├── error-with-fallback
 │ ├── launcher
 │ ├── month
 │ ├── portal
 │ ├── select
 │ ├── theme-switch
 │ ├── week
 │ └── week-day-names
 ├── context
 │ ├── BaseApiUrl.js
 │ └── Theme.js
 ├── helpers
 │ ├── dataMapper.js
 │ ├── dateUtils.js
 │ ├── general.js
 │ └── requestHandler.js
 ├── hooks
 │ ├── useClickOutside.js
 │ └──  useWindowWidth.js
 ├── pages
 │ ├── 404
 │ └── error
 ├── public
 ├── styles
 ├── _app.js
 └── index.js
```

The application currently consumes TheSpaceDevs API (https://ll.thespacedevs.com/2.0.0), but due to often throttling of requests for unauthorized users - the app offers a redirect to use DEV API instead (https://lldev.thespacedevs.com/2.0.0). Since the task is time-limited, and a lot of things to do and achieve, a workaround with switching base URLs is used.

TODO:
Notification system and better error handling to give user feedback and ensure a better user experience. Loading should be extracted to the loading layer and the ideal solution would be to use a loader with a small rocket that flies around.

The select component needs a search "field/possibility" (so it's easier to obtain desirable options), add X to the right of "select input" to clean up the selected options.

Years and months preview layers for the calendar, to get easier to the desirable date, and as for days - different mark for the days with several launches. Mark "today's" date/day on the calendar.

Better handling of toggling the event preview.

Better docs and tests for components and utils.
