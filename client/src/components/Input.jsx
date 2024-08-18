import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Input = ({ value, onChange, error, disabled, className, placeholder, ...inputProps }) => {
    const inputRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
        const { width = 0 } = spanRef?.current?.getBoundingClientRect?.() || {};
        inputRef.current.style.width = `${Math.ceil(width)}px`;
    }, [value, placeholder]);

    return (
        <>
            <StyledInput
                ref={inputRef}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`${className} ${error && 'error'} ${!value && 'empty'}`}
                disabled={disabled}
                {...inputProps}
            />

            <ShadowSpan ref={spanRef} className={className}>
                {value || placeholder}
            </ShadowSpan>
        </>
    );
};
const StyledInput = styled.input`
    outline: none;
    min-width: 0;
    border: none;
    padding: 0;
    background-color: transparent;
`;

const ShadowSpan = styled.span`
    position: fixed;
    visibility: hidden;
    pointer-events: none;
    white-space: pre;
`;

export default Input;
