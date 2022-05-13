import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import moment from "moment";

const url =
  "https://private-anon-8825e7f1ea-inventurestest.apiary-mock.com/products";

const data = [
  {
    id: 1,
    name: "Eutirox",
    description: null,
    price: 9160,
    concentration: "75 mcg",
    package: null,
    composition:
      "Eutirox® 25 mcg: Cada comprimido contiene: Levotiroxina Sódica 25 mcg. Eutirox® 50 mcg: Cada comprimido contiene: Levotiroxina Sódica 50 mcg. Eutirox® 75 mcg: Cada comprimido contiene: Levotiroxina Sódica 75 mcg. Eutirox® 88 mcg: Cada comprimido contiene: Levotiroxina Sódica 88 mcg. Eutirox® 100 mcg: Cada comprimido contiene: Levotiroxina Sódica 100 mcg. Eutirox® 112 mcg: Cada comprimido contiene: Levotiroxina Sódica 112 mcg. Eutirox® 125 mcg: Cada comprimido contiene: Levotiroxina Sódica 125 mcg. Eutirox® 137 mcg: Cada comprimido contiene: Levotiroxina Sódica 137 mcg. Eutirox® 150 mcg: Cada comprimido contiene: Levotiroxina Sódica 150 mcg. Eutirox® 175 mcg: Cada comprimido contiene: Levotiroxina Sódica 175 mcg. Eutirox® 200 mcg: Cada comprimido contiene: Levotiroxina Sódica 200 mcg. Excipientes: Lactosa Monohidrato, Almidón de Maíz, Gelatina, Croscarmelosa Sódica, Estearato de Magnesio.",
    posology:
      "Para el tratamiento individual existen comprimidos con contenidos graduados de 50, 75, 88, 100, 112, 125, 137, 150, 175 y 200 mcg de levotiroxina sódica, de manera que generalmente sólo es necesaria una tableta diaria. La dosis diaria individual se comprueba mediante estudios clínicos y de laboratorio. En el caso de pacientes de edad avanzada, aquellos con enfermedades cardíacas coronarias y en pacientes con hipofunción tiroidea grave o de mucho tiempo, el tratamiento con hormonas tiroideas debe comenzarse en forma cuidadosa, es decir, elegir una dosis inicial baja y aumentarla luego de seguidos controles hormonales tiroideos frecuentes y a intervalos de tiempo más amplios. Por experiencias se sabe que una dosis baja es suficiente en el caso de personas de bajo peso y cuando existe un gran bocio nodular. A menos que se prescriba algo diferente, rigen las siguientes pautas de dosificación: Indicación: Dosis recomendada (µg de levotiroxina sódica/día). Tratamiento de bocio eutiroideo: 25-200. Profilaxis de recidiva luego de cirugía por bocio eutiroideo: 75-200. Terapia de sustitución en caso de hipotiroidismo en adultos: Dosis inicial: 25-50. Dosis de mantención: 100-250. Suplementación concomitante durante tratamiento con droga antitiroidea del hipertiroidismo: 50-100. Después de extirpación quirúrgica total de las tiroides: 150-300. Modo y duración del tratamiento: La dosis diaria total se ingiere sin masticar y con algo de líquido, por las mañanas en ayunas, al menos media hora antes del desayuno. Duración del tratamiento: Generalmente durante toda Ia vida en los casos de hipofunción tiroidea (hipotiroidismo) y luego de extracción quirúrgica parcial o total de Ia tiroides; desde algunos meses hasta de por vida para el tratamiento del bocio (bocio eutiroideo) y para Ia profilaxis contra Ia nueva formación de bocio. Además, durante Ia terapia concomitante en el tratamiento de Ia hiperfunción tiroidea luego de alcanzar el estado de función normal. Si olvida tomar Eutirox®: No tome doble dosis para compensar el comprimido olvidado, sino que tome la dosis normal al día siguiente.",
    display:
      "Eutirox® 100: Envases conteniendo 50 y 100 comprimidos. Eutirox® 25, 50, 75, 88, 100, 112, 125, 137, 150, 175 y 200: Envases conteniendo 50 comprimidos.",
    contraindications:
      "Hipersensibilidad a cualquier excipiente del producto. Tirotoxicosis no tratada, infarto agudo del miocardio. Algunos síndromes anginosos. Miocarditis aguda o pancarditis aguda. lnsuficiencia suprarrenal sin corregir, ya que Ia demanda aumentada de hormonas adrenocorticales puede causar una crisis adrenal. Insuficiencia pituitaria no tratada. Hiperfunción tiroídea de cualquier etiología. Excepción: Terapia adicional en los casos de hiperfunción tiroidea tratada luego de alcanzar el estado de función normal. Este tipo de terapia adicional no está indicada durante el embarazo.",
    indications:
      "Terapia de reemplazo o sustitución de Ia función tiroidea ausente o deprimida. Supresión de Ia secreción de tirotrofina. Usos: Bocio simple (bocio eutiroídeo). Prevención de nuevo desarrollo de bocio tras operación de bocio (profilaxis de recidiva de bocio). Medicación adicional en el tratamiento de Ia hiperfunción tiroidea (hipertiroidismo), luego de alcanzar el estado funcional normal. Hipofunción tiroidea (hipotiroidismo). Terapia de substitución en tiroidectomía total por tumor en Ia tiroides.",
    containerQuantity: "1",
    container: "caja",
    availability: {
      status: "AVAILABLE",
    },
    imagesUrl:
      "https://d131ml7m6yr3wl.cloudfront.net/images/8632a5f3-546e-4a60-a4a0-55d7aaa8d8c6/large.jpeg",
    format: "Comprimidos",
    activePrinciple: "Levotiroxina Sodica",
    laboratory: "Merck Sharp & Dohme (msd)",
  },
  {
    id: 2,
    name: "T4-Bago",
    description: null,
    price: 7750,
    concentration: "75 mcg",
    package: null,
    composition:
      "Cada comprimido contiene: Levotiroxina sódica 50 y 75 mcg. Excipientes: Lactosa, Polvo de Celulosa, Croscarmelosa Sódica, Estearato de Magnesio, Colorante Rojo Ponceau 4R Laca Alumínica, Celulosa Microcristalina c.s.",
    posology: null,
    display:
      "T4 - BAGO 50: contiene 50 comprimidos tri-ranurados de 50 mcg. T4 - BAGO 75: contiene 50 comprimidos tri-ranurados de 75 mcg.",
    contraindications: null,
    indications: null,
    containerQuantity: "1",
    container: "caja",
    availability: {
      status: "AVAILABLE_24_HRS",
    },
    imagesUrl:
      "https://d131ml7m6yr3wl.cloudfront.net/images/ab992d00-f87e-415d-aa63-dc1b3ce6de4d/large.jpeg",
    format: "Comprimidos",
    activePrinciple: "Levotiroxina Sodica",
    laboratory: "Bago",
  },
  {
    id: 3,
    name: "Sertralina",
    description: null,
    price: 4280,
    concentration: "100 mg",
    prescriptionType: "NOT_REQUIRED",
    package: null,
    composition:
      "Comprimidos 50 mg: cada comprimido recubierto contiene: Sertralina Clorhidrato 50 mg. Comprimidos 100 mg: cada comprimido tetrasectado contiene: Sertralina Clorhidrato 100 mg.",
    posology:
      "La dosis terapéutica diaria es de 50 mg junto a alimentos. En caso de falta de respuesta , ésta puede aumentarse en incrementos de 50 mg hasta un máximo de 200 mg por día por algunas semanas. La dosificación durante la terapia de mantención prolongada deberá ser al nivel efectivo más bajo posible, ajustándose de acuerdo a la respuesta. No hay estudios sobre uso en niños. Dosis geriátrica usual: 12.5 mg a 25 mg (base) al día, como dosis única en la mañana o en la noche; la dosis puede ser aumentada gradualmente, según respuesta y tolerancia.",
    display:
      "Comprimidos 50 mg: envases conteniendo 30 y 60 comprimidos recubiertos. Comprimidos 100 mg: envase conteniendo 30 comprimidos tetrasectados.",
    contraindications: "Sensibilidad conocida a la sertralina.",
    indications: "Tratamiento de desórdenes depresivos mayores.",
    containerQuantity: "1",
    container: "caja",
    availability: {
      status: "AVAILABLE",
    },
    imagesUrl:
      "https://d131ml7m6yr3wl.cloudfront.net/images/1ad8abbe-66f5-42b4-820f-751aedc4b9af/large.jpeg",
    format: "Comprimidos",
    activePrinciple: "Sertralina",
    laboratory: "Laboratorio Chile",
  },
  {
    id: 4,
    name: "Sertralina",
    description: null,
    price: 3990,
    concentration: "100 mg",
    package: null,
    composition:
      "Cada comprimido recubierto contiene: sertralina (como clorhidrato) 50 o 100mg.",
    posology: null,
    display: "Envase con 30 comprimidos recubiertos.",
    contraindications: null,
    indications: null,
    containerQuantity: "1",
    container: "caja",
    availability: {
      status: "AVAILABLE_24_HRS",
    },
    imagesUrl:
      "https://d131ml7m6yr3wl.cloudfront.net/images/2bf1aba7-95b2-4123-9aff-ab9f19e638d7/large.jpeg",
    format: "Comprimidos recubiertos",
    activePrinciple: "Sertralina",
    laboratory: "Mintlab",
  },
  {
    id: 5,
    name: "Magnesio",
    description: null,
    price: 11490,
    concentration: "400 mg",
    prescriptionType: null,
    package: null,
    composition: null,
    posology: null,
    display: null,
    contraindications: null,
    indications: null,
    containerQuantity: "1",
    container: "caja",
    availability: {
      status: "TO_CONFIRM",
    },
    imagesUrl:
      "https://d131ml7m6yr3wl.cloudfront.net/images/51dd37a4-7445-40aa-a018-f5377d3f7235/large.jpeg",
    format: "Comprimidos",
    activePrinciple: "Magnesio",
    laboratory: "Gea",
  },
];

const purchases = [
  {
    purchase_id: 10242,
    details: [
      {
        product_id: 1,
        quantity: 30,
      },
      {
        product_id: 3,
        quantity: 28,
      },
      {
        product_id: 5,
        quantity: 15,
      },
    ],
    received_date: "2022-02-01T15:00:00Z",
  },
  {
    purchase_id: 12039,
    details: [
      {
        product_id: 1,
        quantity: 30,
      },
      {
        product_id: 3,
        quantity: 56,
      },
      {
        product_id: 5,
        quantity: 15,
      },
    ],
    received_date: "2022-02-15T15:00:00Z",
  },
  {
    purchase_id: 20781,
    details: [
      {
        product_id: 1,
        quantity: 30,
      },
      {
        product_id: 5,
        quantity: 15,
      },
    ],
    received_date: "2022-03-15T15:00:00Z",
  },
];

var current = moment().startOf("day");

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item pt={2}>
          <img
            width={40}
            height={40}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/pill_1f48a.png"
            alt="new"
          />
        </Grid>
        <Grid item pt={2}>
          <Typography variant="h6"> Revisa tus compras </Typography>
          <Typography variant="subtitle1">
            Agrega al carro si necesitas reponer
          </Typography>
        </Grid>
        <Grid item pt={2}>
          <Paper
            elevation={0}
            square
            style={{
              backgroundColor: "#f5f5f5",
              width: 414,
              height: 35,
            }}
          >
            <Typography
              variant="h6"
              style={{ display: "flex", paddingLeft: 10 }}
            >
              Te queda
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {purchases[1].details.map((item) => {
            return (
              <Card sx={{ display: "flex", width: 414 }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: 80,
                    height: 60,
                    paddingTop: 3,
                    paddingLeft: 1,
                    paddingTop: 4,
                  }}
                  image={data[item.product_id - 1].imagesUrl}
                  alt="new"
                />
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography component="div" variant="h6">
                      {data[item.product_id - 1].name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      {item.concentration}
                    </Typography>
                    <Typography
                      variant="body"
                      color="text.secondary"
                      component="div"
                      sx={{ textDecoration: "underline" }}
                    >
                      Quedan{" "}
                      {item.quantity +
                        Math.floor(
                          moment
                            .duration(
                              moment(
                                purchases[0].received_date.substring(0, 10),
                                "YYYY-MM-DD"
                              ).diff(current)
                            )
                            .asDays()
                        ) >=
                      0
                        ? item.quantity +
                          Math.floor(
                            moment
                              .duration(
                                moment(
                                  purchases[0].received_date.substring(0, 10),
                                  "YYYY-MM-DD"
                                ).diff(current)
                              )
                              .asDays()
                          )
                        : 0}{" "}
                      comprimidos
                    </Typography>
                    <Typography
                      variant="body"
                      color="text.secondary"
                      component="div"
                      sx={{ textDecoration: "underline" }}
                    >
                      Para{" "}
                      {item.quantity +
                        Math.floor(
                          moment
                            .duration(
                              moment(
                                purchases[0].received_date.substring(0, 10),
                                "YYYY-MM-DD"
                              ).diff(current)
                            )
                            .asDays()
                        ) >=
                      0
                        ? item.quantity +
                          Math.floor(
                            moment
                              .duration(
                                moment(
                                  purchases[0].received_date.substring(0, 10),
                                  "YYYY-MM-DD"
                                ).diff(current)
                              )
                              .asDays()
                          )
                        : 0}{" "}
                      dias
                    </Typography>
                  </CardContent>
                  <IconButton sx={{ padddingLeft: 450 }}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                  </IconButton>
                </Box>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
