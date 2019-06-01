import React from 'react';

const TodoItem = ({todoItem, removeItemProp, toggleItemProp}) => {
    return(
        <li
            onClick={(e) => {
                toggleItemProp(todoItem);
                e.stopPropagation();
            }
            }
        >
            <span
                style={{textDecoration: todoItem.isComplete ? 'line-through' : 'none'}}
            >
                {/* Title text */}
                {todoItem.title}
            </span>
            <button
                onClick={(e) => {
                    // Call remove item function
                    removeItemProp(todoItem.id);
                    e.stopPropagation();
                }}
            >
                {/* Add x text for delete symbol */}
                x
            </button>
        </li>
    )
}

export default TodoItem;