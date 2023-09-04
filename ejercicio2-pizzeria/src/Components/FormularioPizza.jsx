import React, {useState} from "react";
import '../App.css';


  const CalcularCostoPizza = () => {
    
    //declaramos constantes
   
  return (
//este primero es el ingreso de datos
    <div className="pagina-container">
    <div className="pagina-section">
      <h1 className="Titulo-Pizza">Pizzería "La Italiana"</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre del Cliente:</label>
          <input
            type="text"
            id="nombre"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipoPizza">Tamaño de la Pizza:</label>
          <select
            id="tipoPizza"
            value={tipoPizza}
            onChange={(e) => setTipoPizza(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Mediana">Mediana</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div>
          <label htmlFor="ingredientes">Total de Ingredientes Adicionales:</label>
          <input
            type="number"
            id="ingredientes"
            min = "0"
            value={ingredientes}
            onChange={(e) => setIngredientes(parseInt(e.target.value))}
          />
        </div>
       
      </form>
      </div>
      
      <div className="factura-section">
      
      <h2>Factura de Pizza</h2>
      <p>Nombre del Cliente: {cliente}</p>
      <p>Tipo de Pizza Seleccionada: {tipoPizza}</p>
      <p>Total de Ingredientes Adicionales: {ingredientes}</p>
      <p>Costo de la Pizza Seleccionada: ${costoPizza}</p>
      <p>Costo de los Ingredientes Adicionales: ${costoIngredientes}</p>
      <p>Total a Pagar: ${total}</p>
      </div>

    </div>
    
    
  );
}


export default CalcularCostoPizza;
