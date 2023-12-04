import Button from './Button';
import './ImcCalc.css';
import { useState } from 'react';

const ImcCalc = ({calcImc}) => {

    const [height, setHeight ] = useState("");
    const [weight, setWeight ] = useState("");

    const clearForm = (e) =>{
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue);
    };
    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue);
    };

  return (
    <div id="calc_container">
        <h2>Calculadora de IMC</h2>
        <form id="imc_form">
            <div className="form_inputs">
                <div className="form_control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,83" onChange={(e) => handleHeightChange(e)} value={height} />
                </div>

                <div className="form_control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 79,5" onChange={(e) => handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action_control">
                <Button id="calc_btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear_btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  );
};

export default ImcCalc