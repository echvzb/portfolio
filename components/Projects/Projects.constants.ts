import { Project, categoriesKeys } from "./Projects.types";

export const categories = {
  [categoriesKeys.responsiveWebDesign]: { text: "Responsive Web Design", badgeColor: "info" },
  [categoriesKeys.dataVisualization]: { text: "Data Visualization", badgeColor: "info" },
  [categoriesKeys.frontEndLibraries]: { text: "Front End Libraries", badgeColor: "info" },
  [categoriesKeys.apisAndMicroservices]: { text: "APIs and Microservices", badgeColor: "warning" },
};

export const projects: Project[] = [
  {
    name: "Bar Chart",
    imgName: "bar-chart",
    url: "https://echvzb.github.io/barChartGDP/",
    category: "dataVisualization",
  },
  {
    name: "Drum Machine",
    imgName: "drum-machine",
    url: "https://drummachine-chvz.netlify.app/",
    category: "frontEndLibraries",
  },
  {
    name: "Weather App",
    imgName: "weather-app",
    url: "https://echvzb.github.io/weatherApp/",
    category: "responsiveWebDesign",
  },
  {
    name: "URL Shortener Microservice",
    imgName: "url-shortener",
    url: "https://url-shortener-microservice-chvz.glitch.me/",
    category: "apisAndMicroservices",
  },
  {
    name: "Tribute Page",
    imgName: "tribute-page",
    url: "https://echvzb.github.io/alfredoJalife/",
    category: "responsiveWebDesign",
  },
  {
    name: "Javascript Calculator",
    imgName: "javascript-calculator",
    url: "https://calculadorajs-chvz.netlify.app/",
    category: "frontEndLibraries",
  },
  {
    name: "Markdown Previewer",
    imgName: "markdown-previewer",
    url: "https://markapp-chvz.netlify.app",
    category: "frontEndLibraries",
  },
  {
    name: "Request Header Parser Microservice",
    imgName: "request-header-parser",
    url: "https://request-header-parser-microservice-chvz.glitch.me/",
    category: "apisAndMicroservices",
  },
  {
    name: "Scatter Plot",
    imgName: "scatter-plot",
    url: "https://echvzb.github.io/scatterPlotDoping/",
    category: "dataVisualization",
  },
  {
    name: "Pomodoro Clock",
    imgName: "pomodoro-clock",
    url: "https://pomodoroclock-chvz.netlify.app/",
    category: "frontEndLibraries",
  },
  {
    name: "Product Landing Page",
    imgName: "product-landing-page",
    url: "https://echvzb.github.io/ProductPage/",
    category: "responsiveWebDesign",
  },
  {
    name: "Timestamp Microservice",
    imgName: "timestamp",
    url: "https://timestamp-microservice-chvz.glitch.me/",
    category: "apisAndMicroservices",
  },
  {
    name: "To Do App",
    imgName: "to-do-app",
    url: "https://todo-chvz.netlify.app/",
    category: "frontEndLibraries",
  },
  {
    name: "Heat Map",
    imgName: "heat-map",
    url: "https://echvzb.github.io/heatMap/",
    category: "dataVisualization",
  },
  {
    name: "Random Quote Machine",
    imgName: "random-quote-machine",
    url: "https://quotemachine-chvz.netlify.app/",
    category: "responsiveWebDesign",
  },
  {
    name: "File Metadata",
    imgName: "file-metadata",
    url: "https://file-metadata-chvz.glitch.me/",
    category: "apisAndMicroservices",
  },
  {
    name: "Exercise Tracker",
    imgName: "exercise-tracker",
    url: "https://exercise-tracker-chvz.glitch.me/",
    category: "apisAndMicroservices",
  },
  {
    name: "Choropleth Map",
    imgName: "choropleth-map",
    url: "https://echvzb.github.io/us-education-ChroplethMap/",
    category: "dataVisualization",
  },
  {
    name: "Survey Form",
    imgName: "survey-form",
    url: "https://echvzb.github.io/SurveyForm/",
    category: "responsiveWebDesign",
  },
];
