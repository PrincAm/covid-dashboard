export type CovidDataRecord = {
    date: string;
    newCasesByPublishDate: number;
    newDeaths28DaysByPublishDate: number | null;
    [key: string]: string | number | null;
}

export type CovidData = CovidDataRecord[];