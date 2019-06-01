import React, {useState} from 'react';
import './App.css';
// Import local components
import Title from './title.js';
import InputField from './inputField.js';
import TodoItem from './todoItem.js';

const App = () => {

  const firstItem = {
    title: "test item title",
    id: Date.now(),
    completed: false,
  }

  const secondItem = {
    title: "my second item",
    id: Date.now() + 1,
    completed: false,
  }

  const initialItems = [firstItem, secondItem]
  // Start with initial state, and create hook
  const [items, setItems] = useState(initialItems);

  const addItemFunction = (title) => {
    // Create a new item
    const newItem = {
      title: title,
      id: Date.now(),
      isComplete: false,
    }

    // Update state with new item
    setItems([...items, newItem]);
  }

  const removeItemFunction = (itemId) => {
    // Remove item from state item array
    // Return values in array which do not
    // match id to search for
    var newItems = items.filter(i => {
      return i.id !== itemId
    })
    // Update state
    setItems(newItems);
  }

  const toggleItemFunction = (item) => {
    // Go through all items in array, if id found
    // then toggle isComplete for that item
    const newItems = [...items]
    newItems.forEach(i => {
      (i.id === item.id) ?
      i.isComplete = !i.isComplete
      : i = i
    })
    // Update state
    setItems(newItems);
  }

  return (
    <div className="App">
      <Title
        numberOfItems={items.length}
      />
      <InputField
        addItemProp={addItemFunction}
      />
      <ul>
      {/* Pass in each element from array */}
      {items.map((Item) => (
        <TodoItem
          key={Item.id}
          todoItem={Item}
          removeItemProp={removeItemFunction}
          toggleItemProp={toggleItemFunction}
        />
      ))}
      </ul>
    </div>
  );
}

export default App;
