import React from 'react';

interface IngredientProps {
    name: string;
    image: string;
    count: number;
    onAdd: () => void;
    onRemove: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({ name, image, count, onAdd, onRemove }) => {
    return (
        <div className="ingredient">
            <img src={image} alt={name} />
            <div className="ingredient-info">
                <span>{name}</span>
                <span>Count: {count}</span>
                <button onClick={onAdd}>Add</button>
                <button onClick={onRemove}>Remove</button>
            </div>
        </div>
    );
};

export default Ingredient;
