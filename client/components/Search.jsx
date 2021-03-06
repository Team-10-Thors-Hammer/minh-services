import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  height: 27px;
  width: 56em;
  padding-left: 25px;
  margin-left: 10px;
  padding-right: 25px;
  border: 1px solid rgb(32, 32, 32, 0.5);
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(15,17,17,.15) inset;
  &:focus {
    border: 1px solid rgb(95, 95, 95);
    box-shadow: 0 2px 2px 1px rgba(107, 224, 224, 0.4);
    outline: none;
    background-color: rgb(163, 210, 248, 0.1);
  }
`;

const Magnifying = styled.img`
  position: absolute;
  left: 25px;
  padding-top: 7px;
  height: 13px;
  width: 13px;
  object-fit: cover;
`;

const Exit = styled.img`
  position: relative;
  display: inline-block;
  right: 1em;
  padding-top: 12px;
  height: 8px;
  width: 8px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  visibility: ${props => props.query.length > 0 ? 'visible' : 'hidden'};
`;

const SearchBar = styled.div`
  margin-bottom: 12px;
`;

const Search = ({handleSearch, searchQuery, emptySearch}) => (
  <SearchBar>
    <Magnifying src='https://static.thenounproject.com/png/9509-200.png' />
    <SearchInput type='text' placeholder='Have a question? Search for answers' onChange={e => handleSearch(e.target.value)} />
    <Exit query={searchQuery} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir57AKqjH6VYMg11KEt1LpSvYJubL7CVI_A&usqp=CAU' onClick={e => emptySearch(e.target.previousSibling)} />
  </SearchBar>
);

export default Search;