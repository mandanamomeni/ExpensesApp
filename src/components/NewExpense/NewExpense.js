import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    // فانکشن را در پرنت می نویسیم و در کامپوننت چاید هم به صورت پراپرتی می نویسم 
    //بعد در چایلد با پراپس /آن فانکشن را میگیریم و دیتا را توی اون فانکشن پاس میکنیم.
    const whenUserInputCreateHandler = (enteredExpenceData) => {
        const expenceData = {
            ...enteredExpenceData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenceData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onWhenUserInputCreate={whenUserInputCreateHandler} onCancel = {stopEditingHandler}/>}

        </div>
    );
};


export default NewExpense;