import React from 'react';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    
    &:hover {
        color: blue;
    }
    
    &.active {
        font-weight: 600;
        border-bottom: 2px solid blue;
        color: blue;
        &:hover {
            background: blue;
            color: white;
            border-bottom: 2px solid white;
        }
    }
    
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
                    activeClassName="active"
                    exact={c === 'all'}
                    to={c === 'all' ? '/' : `/${c}`}
                >
                    {c.slice(0, 1).toUpperCase() + c.slice(1)}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;