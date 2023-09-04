import React, {useState} from "react";
import '../App.css';


  const CalcularCostoPizza = () => {
    
    //declaramos constantes
    const [cliente, setCliente] = useState('');
    const [tipoPizza, setTipoPizza] = useState('Personal');
    const [ingredientes, setIngredientes] = useState(0);
    //monton de ifs
    let costoPizza = 0;
    if (tipoPizza === 'Personal') {
      costoPizza = 7; // Costo base para pizza personal
    } else if (tipoPizza === 'Mediana') {
      costoPizza = 10; // Costo base para pizza mediana
    } else if (tipoPizza === 'Grande') {
      costoPizza = 12; // Costo base para pizza grande
    }

    let costoIngredientes = 0;

    if (ingredientes === 1) {
      if (tipoPizza === '<b>Personal</b>') {
        costoIngredientes = 1.0;
      } else if (tipoPizza === 'Mediana') {
        costoIngredientes = 2.0;
      } else if (tipoPizza === 'Grande') {
        costoIngredientes = 2.5;
      }
    } else if (ingredientes === 2) {
      if (tipoPizza === '<b>Personal</b>') {
        costoIngredientes = 0.75 * 2;
      } else if (tipoPizza === 'Mediana') {
        costoIngredientes = 1.0 * 2;
      } else if (tipoPizza === 'Grande') {
        costoIngredientes = 2.0 * 2;
      }
    } else if (ingredientes === 3) {
      if (tipoPizza === '<b>Personal</b>') {
        costoIngredientes = 0.5 * 3;
      } else if (tipoPizza === 'Mediana') {
        costoIngredientes = 0.75 * 3;
      } else if (tipoPizza === 'Grande') {
        costoIngredientes = 1.0 * 3;
      }
    } else if (ingredientes > 3) {
      if (tipoPizza === '<b>Personal</b>') {
        costoIngredientes = 0.25 * ingredientes;
      } else if (tipoPizza === 'Mediana') {
        costoIngredientes = 0.5 * ingredientes;
      } else if (tipoPizza === 'Grande') {
        costoIngredientes = 0.75 * ingredientes;
      }
    }
    
    // El total
    let total = costoPizza + costoIngredientes;
   
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
