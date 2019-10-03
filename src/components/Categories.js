import React from 'react';
import styled, {css} from 'styled-components';

const categories = [
   'all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    
    &:hover {
        color: blue;
    }
    
    ${props => 
        props.active && css`
            font-weight: 600;
            border-bottom: 2px solid blue;
            color: blue;
            &:hover {
            background: blue;
            color: white;
            border-bottom: 2px solid white;
            }
    `}
    
    & + & {
        margin-left: 1rem;
    }
`;
const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c}
                    active={c === category}
                    onClick={() => onSelect(c)}
                >
                    {c.slice(0, 1).toUpperCase() + c.slice(1)}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;