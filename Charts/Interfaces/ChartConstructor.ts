export interface ChartConstructor { 
  type: string,
  width: number | string,
  height: number | string,
  dataFormat: string,
  dataSource: object,
}