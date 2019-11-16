import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';


function SearchForm() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

    const onFormSubmit = e => {
        e.preventDefault();
        if (input.trim()) {
            console.log(`Form was submited with input: ${input}`);
            dispatch({ type: 'GET_STRINGS', terms: input })
        }
    };

    const onFormClick = (flag) => {
        // When form clicked, set state of baropened to true and focus the input
        setBarOpened(flag);
        if (flag) {
            inputFocus.current.focus();
        }
    }

    return (
        <>
            <Form
                barOpened={barOpened}
                // on click open search bar
                onClick={() => onFormClick(true)}
                // on blur close search bar
                onBlur={() => onFormClick(false)}
                // On submit, call the onFormSubmit function
                onSubmit={onFormSubmit}
                ref={formRef}
            >
                <Button type="submit" barOpened={barOpened}>
                    <FaSearch />
                </Button>
                <Input
                    onChange={e => setInput(e.target.value)}
                    ref={inputFocus}
                    value={input}
                    barOpened={barOpened}
                    placeholder="Search for a term..."
                />
            </Form>
        </>
    );
}

export default SearchForm;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;