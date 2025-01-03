import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

export default function FeaturedItem(props) {

    /* I used some of the lecture examples and this source to setup the button component: https://selftaughttxg.com/2023/04-23/creating-a-true-false-toggle-in-react-with-usestate-hook-for-beginners/ */
    /* I also used the same source and this one to figure out how to do conditional expresseions: https://www.geeksforgeeks.org/what-are-inline-conditional-expressions-in-reactjs/ */
    
    /* State varibale for the button display */
    const [nutrition, setNutrition] = useState(false);

    /* Function that will be run when the button is pressed */
    /* Initially starts off as false, so the button will display "Show", but when pressed the variable will be changed and will display "True" */
    function nutrition_info() {
        if (nutrition === true) {
            setNutrition(false);
        }
        else if (nutrition === false) {
            setNutrition(true);
        }
    }

    /* Set variable here to hold appropriate value */
    const calories = props.nutrition.calories;
    let fat = props.nutrition.fat;
    let carbohydrates = props.nutrition.carbohydrates;
    let protein = props.nutrition.protein;

    /* Check if each var is defined, or has an entry in the nutrition array*/
    if (fat === undefined) {
        fat = "0g";
    }
    if (carbohydrates === undefined) {
        carbohydrates = "0g";
    }
    if (protein === undefined) {
        protein = "0g";
    }

    /* I used the formating from the solution code for the in class assignments */
    /* I also used this source to freshen up on the HTML table element: https://www.w3schools.com/html/html_tables.asp */
    
    /* The "Nutrition Facts" header and the table element will only appear on the page when the variable is set to true */

    return <Card style={{margin: "auto", marginTop: "1rem", maxWidth: "40rem"}}> 

        <img src = {props.img} alt = {props.description}></img>
        <h2>{props.name}</h2>
        <h5>${props.price} per unit</h5>
        <p>{props.description}</p>

        {nutrition && <h5>Nutrion Facts</h5>}
        {nutrition && (
            <Table>
                <thead>
                    <tr>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{calories}</td>
                        <td>{fat}</td>
                        <td>{carbohydrates}</td>
                        <td>{protein}</td>
                    </tr>
                </tbody>
            </Table>
        )}

        <Button onClick={nutrition_info}>{nutrition ? "Hide" : "Show"} Nutrition Facts</Button>

    </Card>
}