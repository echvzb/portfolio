export const categoriesKeys = {
  responsiveWebDesign: "responsiveWebDesign",
  dataVisualization: "dataVisualization",
  frontEndLibraries: "frontEndLibraries",
  apisAndMicroservices: "apisAndMicroservices",
} as const;

export interface Project {
  name: string;
  url: string;
  imgName: string;
  category: keyof typeof categoriesKeys;
}
