import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.label`
    display: block;
    cursor: pointer;
    font-size: 14px;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        padding: 2px 10px;
        background: #f4f4f6;
        border: 1px solid #f4f4f6;
        color: #7f829d;
        border-radius: 24px;
    }

    &:hover input ~ .checkmark {
        background: #dfdfdf;
        border-color: #dfdfdf;
    }

    input:checked ~ .checkmark {
        background-color: #21b5ea;
        border-color: #21b5ea;
        color: #ffffff;
    }
`;

const Chip = ({ checked = false, children, onClick }) => {
    return (
        <Wrapper className="container">
            <input type="checkbox" checked={checked} onChange={onClick} />
            <span className="checkmark">{children}</span>
        </Wrapper>
    );
};

Chip.propTypes = {
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Chip;
