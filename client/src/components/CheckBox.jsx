import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 23px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 5px;
    top: 2px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const CheckBox = ({ checked, label, onClick }) => {
    return (
        <Wrapper className="container">
            {label}
            <input type="checkbox" checked={checked} onChange={onClick} />
            <span className="checkmark"/>
        </Wrapper>
    );
};

CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CheckBox;
