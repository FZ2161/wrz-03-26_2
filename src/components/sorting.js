import { useState } from "react";

export default function Sorting() {

    const [array, setArray] = useState([]);

    const saveData = (e) => {
        e.preventDefault();
        const inputData = e.target.elements.dane.value;
        const finaldata = inputData.split(",").map(Number);
        setArray(finaldata);
    }

    const handleBubbleSort = () => {
        
    }

    return (
        <div>
            <h2>Sorting</h2>
            <form class="row" onSubmit={(e) => saveData(e)}>
                <div class="col">
                      <label for="inputPassword" class="col-sm-2 col-form-label">Dane</label>
                </div>
                <div class="col">
                    <label for="dane" class="visually-hidden">Dane</label>
                    <input class="form-control" name="dane" id="dane" placeholder="Dane"/>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary mb-3">Sortuj</button>
                </div>
            </form>

            <div>
                <h3>Przed sortowaniem</h3>
                <div class="">
                    {
                    array.length > 0 
                        ? array.map((num, idx) => {
                            return(
                                 <span key={idx} class="badge text-bg-secondary">{num}</span>
                            )
                        }) 
                        : "Brak danych do posortowania"}
                </div>
                <button onClick={() => handleBubbleSort} class="btn btn-primary mb-3">Sortuj</button>
            </div>
        </div>
    )
}