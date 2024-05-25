export const carColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "brand",
    headerName: "Marka",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.brand}
        </div>
      );
    },
  },
  {
    field: "model",
    headerName: "Model",
    width: 130,
  },

  {
    field: "engine",
    headerName: "Silnik",
    width: 90,
  },

  {
    field: "power",
    headerName: "Moc [KM}",
    width: 100,
  },

  {
    field: "fuel",
    headerName: "Paliwo",
    width: 90,
  },

  {
    field: "age",
    headerName: "Rocznik",
    width: 90,
  },

  {
    field: "mileage",
    headerName: "Przebieg [km]",
    width: 120,
  },

  {
    field: "color",
    headerName: "Kolor",
    width: 100,
  },

  {
    field: "country",
    headerName: "Pochodzenie",
    width: 130,
  },

  {
    field: "price",
    headerName: "Cena zakupu",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const carRows = [
  {
    id: 1,
    brand: "BMW",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/9951/QrmYA9qXLQ2Ih2jy.jpg",
    model: "318",
    engine: "2.0",
    power: "150",
    fuel: "diesel",
    age: "2019",
    mileage: "113250",
    color: "biały",
    country: "Niemcy",
    price: "87450",
    status: "wolny",
  },
  {
    id: 2,
    brand: "Mercede-Benz",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/7678/T03GTdkqD3QyCBc7.jpg",
    model: "E220",
    engine: "2.2",
    power: "170",
    fuel: "diesel",
    age: "2015",
    mileage: "293397",
    color: "czarny",
    country: "Polska",
    price: "65000",
    status: "serwis",
  },
  {
    id: 3,
    brand: "Jeep",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10744/dH4fpyXJTPvx9ZMG.jpg",
    model: "Grand Cherokee",
    engine: "3.0",
    power: "250",
    fuel: "diesel",
    age: "2019",
    mileage: "47277",
    color: "czarny",
    country: "Polska",
    price: "175000",
    status: "rezerwacja",
  },
  {
    id: 4,
    brand: "Honda",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/6424/mt0jDOH02p5JG5yh.jpg",
    model: "CR-V",
    engine: "2.0",
    power: "184",
    fuel: "eHEV",
    age: "2019",
    mileage: "75416",
    color: "biały",
    country: "Polska",
    price: "151500",
    status: "wolny",
  },
  {
    id: 5,
    brand: "Peugeot",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10814/gMdxWOz4FThwK70X.jpg",
    model: "2008",
    engine: "1.2",
    power: "130",
    fuel: "benzyna",
    age: "2021",
    mileage: "75807",
    color: "niebieski",
    country: "Polska",
    price: "82400",
    status: "wolny",
  },
  {
    id: 6,
    brand: "Citroen",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10811/ap7hwjb4MqRnaNWI.jpg",
    model: "C5 Aircross",
    engine: "1.6",
    power: "180",
    fuel: "HEV",
    age: "2022",
    mileage: "50791",
    color: "szary",
    country: "Polska",
    price: "128900",
    status: "wolny",
  },
  {
    id: 7,
    brand: "Audi",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10660/sbXvWDIHQZWyL814.jpg",
    model: "A6 Avant",
    engine: "2.0",
    power: "177",
    fuel: "diesel",
    age: "2014",
    mileage: "288831",
    color: "szary",
    country: "Niemcy",
    price: "54500",
    status: "serwis",
  },
  {
    id: 8,
    brand: "Toyota",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10663/r0cIV8oal6GfGfFe.jpg",
    model: "Proace Verso",
    engine: "2.0",
    power: "177",
    fuel: "diesel",
    age: "2020",
    mileage: "79944",
    color: "brązowy",
    country: "Polska",
    price: "175000",
    status: "wolny",
  },
  {
    id: 9,
    brand: "Volkswagen",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10651/UwL2w6K8wzXYfe42.jpg",
    model: "Tiguan",
    engine: "2.0",
    power: "150",
    fuel: "diesel",
    age: "2018",
    mileage: "163156",
    color: "czarny",
    country: "Niemcy",
    price: "83900",
    status: "rezerwacja",
  },
  {
    id: 10,
    brand: "Seat",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10991/u3otAgCcHIdzHjxZ.jpg",
    model: "Arona",
    engine: "1.0",
    power: "95",
    fuel: "benzyna",
    age: "2019",
    mileage: "34222",
    color: "srebrny",
    country: "Polska",
    price: "54500",
    status: "wolny",
  },
  {
    id: 11,
    brand: "Mercedes-Benz",
    img: "https://webapi.mojsiuk.csflow.pl/car-photo/10991/u3otAgCcHIdzHjxZ.jpg",
    model: "A 45 AMG",
    engine: "2.0",
    power: "381",
    fuel: "benzyna",
    age: "2016",
    mileage: "122631",
    color: "biały",
    country: "Niemcy",
    price: "117800",
    status: "wolny",
  },
];
