import styled from "styled-components";
const Input = (props) => {
  return (
    <FormControl {...props}>
      {props.helperText && <p className="helper-text">{props.helperText}</p>}

      {props.startIcon && props.startIcon !== "none" && (
        <span className="material-icons start-icon">{props.startIcon}</span>
      )}
      <input value={props.text} tabIndex={0} {...props} />
      {props.endIcon && props.endIcon !== "none" && (
        <span className="material-icons end-icon">{props.endIcon}</span>
      )}

      <label htmlFor={props.id}>{props.label}</label>
    </FormControl>
  );
};

const FormControl = styled.div`
  *:focus {
    outline: none;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  min-width: 200px;
  max-width: 100%;
  /* ${(props) => props.fullWidth && `width: 100%;`} */
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  position: relative;

  label {
    color: #333333;
    margin-bottom: 0.25rem;

    font-family: "Noto Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.0625rem;
    letter-spacing: 0em;
    text-align: left;
  }

  input {
    /* width: 100%; */
    border: 0.0625rem solid #828282;
    border-radius: 0.5rem;
    padding: 1.125rem;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: ${(props) => {
      switch (props.size) {
        case "sm":
          return `.625rem .75rem`;

        case "md":
          return `1.125rem .75rem`;
        default:
          return `1.125rem .75rem`;
      }
    }};

    ${(props) => {
      if (props.startIcon && props.startIcon !== "none") {
        const newPaddingLeft = 1.125 + 1.75;
        return `
          padding-left: ${newPaddingLeft}rem;
          padding-right: ${newPaddingLeft}rem;
        `;
      }
    }}
    :hover {
      border: 1px solid #333333;
    }
    :focus {
      border: 1px solid #2962ff;
      ~ label {
        color: #2962ff;
      }
    }
    ::placeholder {
      font-family: "Noto Sans", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }

  ${(props) => {
    if (!props.disabled && props.error) {
      return `
        label {
          color: #d32f2f;
        }

        input {
          border: 0.0625rem solid #d32f2f;
          :hover {
            + label {
              color: #333333;
            }
          }
          :focus {
            border: 1px solid #d32f2f;
            + label {
              color: #d32f2f;
            }
          }
        }
      `;
    } else if (props.disabled) {
      return `
        input,
        input:focus,
        input:hover {
          background: #f2f2f2;
          border: 1px solid #e0e0e0;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.helperText) {
      return `
        .helper-text {
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 14px;
          color: ${props.error ? "#d32f2f" : "#828282"};
        }
      `;
    }
  }}
  ${(props) => {
    if (props.startIcon && props.startIcon !== "none") {
      return `
        .start-icon {
          font-size: 24px;  
          position: absolute;
          top: 38px;
          left: 12px;        
          color: #828282;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.startIcon && props.endIcon !== "none") {
      return `
        .end-icon {
          font-size: 24px;  
          position: absolute;
          top: 38px;
          right: 12px;
          color: #828282
        }
      `;
    }
  }}
`;

export default Input;
