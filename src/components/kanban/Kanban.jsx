import "./kanban.scss";
import "../../../node_modules/@syncfusion/ej2-react-kanban/styles/material.css";

import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData } from "../../kanbandatasource";
import { extend } from "@syncfusion/ej2-base";

import { L10n } from "@syncfusion/ej2-base";

L10n.load({
  pl: {
    kanban: {
      items: "zadania",
      min: "min",
      max: "max",
      noCard: "Brak zadań do wyświetlenia",
      cardsSelected: "Wybrane karty",
      addTitle: "Dodaj zadanie",
      editTitle: "Edytuj zadanie",
      deleteTitle: "Usuń zadanie",
      save: "Zapisz",
      delete: "Usuń",
      deleteContent: "Czy na pewno chcesz usunąć to zadanie?",
      deleteMultipleContent: "Czy na pewno chcesz usunąć te zadania?",
      open: "Otwórz",
      close: "Zamknij",
      openColumn: "Otwórz kolumnę",
      closeColumn: "Zamknij kolumnę",
      openDetail: "Otwórz szczegóły",
      closeDetail: "Zamknij szczegóły",
      switchColumn: "Przełącz kolumnę",
      workFlow: "Przepływ pracy",
      priority: "Priorytet",
      progress: "Postęp",
      moveTo: "Przenieś do",
      current: "Aktualny",
      yes: "Tak",
      no: "Nie",
      cancel: "Anuluj",
    },
  },
});

const Kanban = () => {
  const data = extend([], kanbanData, null, true);

  return (
    <div className="kanban">
      <KanbanComponent
        id="kanban"
        keyField="Status"
        locale="pl"
        dataSource={data}
        cardSettings={{ contentField: "Opis", headerField: "Id" }}
        swimlaneSettings={{ keyField: "Przypisz" }}
        height="800px"
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText="Do podjęcia"
            keyField="Do podjęcia"
          ></ColumnDirective>
          <ColumnDirective
            headerText="Wykonywane"
            keyField="Wykonywane"
          ></ColumnDirective>
          <ColumnDirective
            headerText="Do sprawdzenia"
            keyField="Do sprawdzenia"
          ></ColumnDirective>
          <ColumnDirective
            headerText="Sprawdzane"
            keyField="Sprawdzane"
          ></ColumnDirective>
          <ColumnDirective
            headerText="Zakończone"
            keyField="Zakończone"
          ></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
