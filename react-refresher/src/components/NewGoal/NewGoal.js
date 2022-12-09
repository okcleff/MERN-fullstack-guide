import React from 'react';

import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal!',
    };

    onAddGoal(newGoal);
  };

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' />
      <button type='submit'>Add Goal</button>
    </form>
  );
};

export default NewGoal;
