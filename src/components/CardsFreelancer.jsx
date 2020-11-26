import React from "react";
import { Button, Card, DatePicker, InputNumber, Col } from 'antd';

export default () => {
  return (
    <>
      <Col xs={24} sm={12} md={8} >
        <Card className="bodyCard">
          <h3 id="tittleCard">OFERTA DE PROYECTO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"ITS202|SATAPP"</p>
          <p id="subtittle">DURACION</p>
          <p>4 Semanas</p>
          <p id="subtittle">MONTO</p>
          <p>
          "$50.000"            
          </p>
          <div>
          <Button className="buttonCard" shape="round">
            Firma Contrato
          </Button></div>
          
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card className="bodyCard">
          <h3 id="tittleCard">PROXIMO PAGO</h3>
          <p id="subtittle">PROYECTO</p>
          <p>"ITS202|SATAPP"</p>
          <p id="subtittle">FECHA DE PAGO</p>
          <input type="date" id="start" name="trip-start"            
              min="2021-01-01" max="2029-12-31"></input>
          <p id="subtittle">MONTO</p>
          <p>"$50.000"       
            
          </p>
          <div>
          <Button className="buttonCard" shape="round">
            Cargar Factura
          </Button></div>
          
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card className="bodyCard">
           <h3 id="tittleCard">MI BANCO</h3>
          <p id="subtittle">CBU/Alias</p>
          <p>Banco EL pepino</p>
          <p id="subtittle">TITULAR</p>
          <p>Agustin Fregossi</p>
          <p id="subtittle">BANCO</p>
          <p>{"Santnader Rio"}</p> 
          <div>
          <Button className="buttonCard" shape="round">
            Modificar datos
          </Button></div>                 
        </Card>
      </Col>
    </>
  );
};
