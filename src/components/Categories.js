import React from 'react';
import styled from 'styled-components';

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
        color: lightblue;
    }
    
    & + & {
        margin-left: 1rem;
    }
`;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(category => (
                <Category key={category}>{category.slice(0, 1).toUpperCase() + category.slice(1)}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;