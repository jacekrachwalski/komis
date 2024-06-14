import "./scheduler.scss";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import {
  L10n,
  loadCldr,
  setCulture,
  setCurrencyCode,
} from "@syncfusion/ej2-base";

loadCldr(
  require("../../../node_modules/cldr-data/supplemental/numberingSystems.json"),
  require("../../pl/ca-gregorian.json"),
  require("../../pl/numbers.json"),
  require("../../pl/currencies.json"),
  require("../../pl/timeZoneNames.json")
);

setCulture("pl");
setCurrencyCode("PLN");

L10n.load(require("@syncfusion/ej2-locale/src/pl.json"));

const Scheduler = () => {
  const data = [
    {
      Id: 1,
      Subject: "Podsumowanie tygodnia",
      StartTime: new Date(2024, 5, 14, 10, 0),
      EndTime: new Date(2024, 5, 14, 12, 30),
    },
    {
      Id: 2,
      Subject: "Spotkanie z pracownikami",
      StartTime: new Date(2024, 5, 10, 8, 0),
      EndTime: new Date(2024, 5, 10, 8, 30),
    },
    {
      Id: 3,
      Subject: "Wyjazd po samochód do Warszawy",
      StartTime: new Date(2024, 5, 11, 8, 0),
      EndTime: new Date(2024, 5, 11, 12, 30),
    },
    {
      Id: 4,
      Subject: "Spotkanie z klientem - Adam Nowak",
      StartTime: new Date(2024, 5, 10, 10, 30),
      EndTime: new Date(2024, 5, 10, 11, 30),
    },
    {
      Id: 5,
      Subject: "Rejestracja samochodu w urzędzie",
      StartTime: new Date(2024, 5, 12, 14, 0),
      EndTime: new Date(2024, 5, 12, 15, 0),
    },
    {
      Id: 6,
      Subject: "Szkolenie z wyceny pojazdu",
      StartTime: new Date(2024, 5, 13, 9, 0),
      EndTime: new Date(2024, 5, 13, 14, 0),
    },
  ];

  const workHours = {
    highlight: true,
    start: "08:00",
    end: "18:00",
  };

  const eventSettings = { dataSource: data };

  return (
    <div className="scheduler">
      {/* <div className="schedulerTitle">Terminarz</div> */}
      <ScheduleComponent
        currentView="Week"
        startHour="08:00"
        endHour="18:00"
        workHours={workHours}
        eventSettings={eventSettings}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
