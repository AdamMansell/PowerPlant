// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import Plant from './js/plant.js';

// This function stores our state.

const initialState = {light: 1, soil: 4, water: 10};
const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};



const plant1 = storeState(initialState);
// { plantName: "fern" }
// const newPlantState = plant1(blueFood);
// { plantName: "fern", soil: 5 }
const sunflower = storeState();
const rose = storeState();
const cactus = storeState();

// {name: "bob", light: 1, soil: 4, water: 10}
// {name: "cactus", light: 3, soil: 0, water: 1}
// {name: "fern", light: 10, soil: 40, water: 100}

// {
//   "bob": {light: 1, soil: 4, water: 10},
//   "cactus": {light: 3, soil: 0, water: 1},
//   "fern": {light: 10, soil: 40, water: 100}
// }
const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value   
    });
  };
};


// const createNewPlant = (name) => {
//   let plantName = {
//     name,
//   }
//   return { ...plantName, ...changeState(plantName) }
// }

// const fern = createNewPlant("Bob");
// console.log(fern);

const hasName = (plant) => {
  const obj = {
    plant
  }
  return obj;
}
const blueFood = changeState("soil")(5);
const plantWithName = (plant) => {
  let state = {
    plant
  }
  return { ...state, ...hasName(plant) }
}

const test = plantWithName(sunflower);

console.log(test);
//{ plant: 'snake plant', name: [Function: name] }

// We create four functions using our function factory. We could easily create many more.
const name1 = changeState("Fern")("Bob"); 
// const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

// $(document).ready(function() {

//   // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

//   $('#feed').click(function() {
//     const newState = stateControl(blueFood);
//     $('#soil-value').text(`Soil: ${newState.soil}`);
//   });

//   $('#water').click(function() {
//     const newState = stateControl(superWater);
//     $('#water-value').text(`Water: ${newState.water}`);
//   });
//   // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

//   $('#show-state').click(function() {
//     // We just need to call stateControl() without arguments to see our current state.
//     const currentState = stateControl();
//     $('#soil-value').text(`Soil: ${currentState.soil}. Are you happy?`);
//   });
// });