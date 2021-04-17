export interface Project {
  id: string;
  name: string;
  repository: string;
  deployment: string;
  stack: string[];
  screenshot: string;
  description: string;
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Phonebook',
    description: `
      Simple phonebook that allows you to store contacts with name and phone number.
    `,
    challenges: [
      `State management using hooks.`,
      `Site responsiveness.`,
      `User input validation and displaying response.`,
      `REST design and interaction with a backend server.`,
    ],
    solutions: [
      `Use as little state hooks as necessary per resource required.`,
      `Apply breakpoints at different viewports and flexbox to 
      minimize css rule change at each break point.`,
      `Apply validation with mongoose's (mongodb library) built-in 
      validation feature and send errors (if any) in JSON to client.`,
      `Use mongoose to define models and interact with database.`,
    ],
    deployment: `https://desolate-savannah-44614.herokuapp.com/`,
    repository: 'https://github.com/nagaremono/fullstackopen-part3-exercise',
    stack: ['React.js', 'Express.js', 'MongoDB', 'mongoose'],
    screenshot: '/phonebook-app.png',
  },
  {
    id: '2',
    name: 'SupperTime',
    description: `
      Displays a catalog of informations about restaurants. Features accessibility when offline,
      installable, and storing user specific information in IndexedDB in the browser.
    `,
    challenges: [
      `Providing offline capability`,
      `Optimizing performance for slower networks and smaller devices`,
      `Writing automated tests`,
      `Improving accessibility`,
    ],
    solutions: [
      `Apply service worker with the help of workbox.`,
      `Split code in chunks, images are lazy loaded and responsive to
      device width.`,
      `Write integrated tests with Jasmine and End to end tests 
      with codecept.`,
      `Use semantic HTML tags, skip to content anchor, apply proper size and
      focus to buttons and anchor along with labels and description.`,
    ],
    deployment: `https://restaurant-catalog-6f9c3.web.app/`,
    repository: 'https://github.com/nagaremono/restaurant-apps',
    screenshot: '/suppertime-app.png',
    stack: [
      'Service workers',
      'IndexedDB',
      'Workbox',
      'Jasmine',
      'Webpack',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    id: '3',
    name: 'Karnival',
    challenges: [
      `Setting up relational databases with an orm`,
      `Cookie forwarding and CORS policy especially in production`,
      `Updating cache after every AJAX request in Apollo GraphQL`,
      `Error handling and displaying them to the user`,
      `Set up types with TypeScript`,
    ],
    solutions: [
      `Representing tables as entities with TypeOrm`,
      `Specify origin on backend and explicit credential inclusion in NextJS`,
      `Store persistent session in database`,
      `Read and write cache after every GraphQL queries and mutations`,
      `Structure backend response in a consumable format in front-end`,
      `Utilize the generated type from graphql code generator package`,
    ],
    deployment: `https://karnival.guruhedi.com/`,
    repository: `https://github.com/nagaremono/karnival-app`,
    screenshot: '/karnival-app.png',

    stack: [
      'Typescript',
      'PostgreSQL',
      'TypeORM',
      'GraphQL',
      'Next.js',
      'Express.js',
    ],
    description: `
      A place for users to check out ongoing events and gatherings around them.
      Users can post their own, as well as participate on events posted by other users.
      Features common things like login, as well as dynamic rendering between static and server-side.
    `,
  },
  {
    id: '4',
    name: 'Football PWA',
    description: `
      A progressive web application that fetches football competition data from football-data.org. 
      It is still viewable when offline thanks to service workers and cache API running in the background. 
      Also has save feature to view certain matches even when offline thanks to IndexedDB
    `,
    challenges: [
      `Understanding the lifecycle of service workers`,
      `Making use of Cache API and service workers to make an offline-viewable 
      site`,
      `Interacting with an API to render a section of a page dynamically`,
      `Using Webpack to manage project assets and bundles`,
    ],
    solutions: [
      `Make use the Workbox package to precache static assets when the user 
      visit the site for the first time`,
      `Make use of the Workbox package to route request from network or cache 
      depending on whether or not the user is online.`,
      `Make use of of Fetch API and promise-based functions`,
      `Splitting Webpack configurations for development and production 
      process.`,
    ],
    deployment: `http://football-pwa-b7a0a.web.app/`,
    repository: 'https://github.com/nagaremono/football-data-pwa',
    screenshot: '/football-app.png',
    stack: [
      'Service workers',
      'Workbox',
      'IndexedDB',
      'Webpack',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    id: '5',
    name: 'Laptop Inventory',
    description: `
      A web app that lets you view, store, and delete 
      laptops that are in the inventory. It uses ExpressJS as a backend 
      framework to render and serve its pages. Uses mongoDB as database and pug 
      for templating the views.
    `,
    challenges: [
      `Designing models to represent the items stored with mongoDB`,
      `Routing and representing data as close to RESTful API as possible`,
      `Serving pages based on the data passed in to the views template.`,
      `Making sure user input does not contain security risks`,
    ],
    solutions: [
      `Making use of Models and Schema provided by mongoose library to define 
      objects in the database`,
      `Route the requests based on object and model names with its request 
      methods in the express router`,
      `Make use of pug to template the views with its capability to render 
      pages based on the values passed in to it`,
      `Use sanitation and validation middleware libraries to make sure input 
      are not harmful to thee backend`,
    ],
    deployment: `https://frozen-wildwood-27287.herokuapp.com/laptops`,
    repository: 'https://github.com/nagaremono/laptop-inventory-application',
    screenshot: '/laptop-app.png',
    stack: ['Express.js', 'MongoDB', 'Pug', 'Bootstrap', 'mongoose'],
  },
  {
    id: '6',
    name: 'Cat Browser',
    description: `
      A web page that retrieve cat pictures randomly or by their 
      breed from thecatapi.com . Serves as practice and demo for understanding 
      interactions with REST API. Uses Web Component to make common html 
      elements reusable
    `,
    challenges: [
      `Defining reusable web components for the page`,
      `Render a portion of the page dynamically based on user interaction.`,
      `Flow control of Promise-based functions`,
    ],
    solutions: [
      `Bottom-up approach of making web components. Starting from the smallest 
      building block to the whole page`,
      `Making a single page application and using Fetch API to render a 
      portion of the page using data retrieved from the API`,
      `Make use of async function and regenerator-runtime library to control
      data retrieval`,
    ],
    deployment: `https://cat-browser-92bef.web.app/`,
    repository: 'https://github.com/nagaremono/cat-browser',
    screenshot: '/cat-app.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Components'],
  },
];
