import { useRef, useState } from "react";
import styled from "styled-components";
import GetIcon from "./GetIcon";
const Input = (props) => {
  const [text, setText] = useState(props.value);
  const input = useRef();
  const InputFocus = () => {
    input.current.focus();
  };
  const inputElement = (
    <input
      className="input"
      tabIndex={0}
      ref={input}
      value={text}
      {...props}
      onChange={(e) => setText(e.target.value)}
    />
  );
  const textareaElement = (
    <textarea
      className="input textarea"
      rows={props.row}
      tabIndex={0}
      ref={input}
      value={text}
      {...props}
      onChange={(e) => setText(e.target.value)}
    />
  );
  return (
    <FormControl
      helperText={props.helperText}
      error={props.error}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.helperText && <p className="helper-text">{props.helperText}</p>}

      <InputContainer
        fullWidth={props.fullWidth}
        size={props.size}
        disabled={props.disabled}
        error={props.error}
        tabIndex={0}
        onClick={InputFocus}
      >
        {props.startIcon && props.startIcon !== "none" && (
          <span>
            <GetIcon name={props.startIcon} />
          </span>
        )}

        {/* <input
          className="input"
          tabIndex={0}
          ref={input}
          value={text}
          {...props}
          onChange={(e) => setText(e.target.value)}
        /> */}
        {props.multiline ? textareaElement : inputElement}
        {props.endIcon && props.endIcon !== "none" && (
          <span>
            <GetIcon name={props.endIcon} />
          </span>
        )}
      </InputContainer>

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

  .input {
    width: 100%;
    /* border: 0.0625rem solid #828282; */
    border: none;
    /* border-radius: 0.5rem; */
    /* padding: 1.125rem; */
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* padding: ${(props) => {
      switch (props.size) {
        case "sm":
          return `.625rem .75rem`;

        case "md":
          return `1.125rem .75rem`;
        default:
          return `1.125rem .75rem`;
      }
    }}; */

    ${(props) => {
      if (props.startIcon && props.startIcon !== "none") {
        const newPaddingLeft = 1.125;
        return `
          padding-left: ${newPaddingLeft}rem;
          
        `;
      }
    }}
    /* :hover {
      border: 1px solid #333333;
    }
    :focus {
      border: 1px solid #2962ff;
      ~ label {
        color: #2962ff;
      }
    } */
    ::placeholder {
      font-family: "Noto Sans", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }

  /* ${(props) => {
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
  }} */

  ${(props) => {
    if (props.error) {
      return `
        label {
          color: #d32f2f;
        }`;
    }
  }}

  ${(props) => {
    if (props.helperText) {
      return `
        .helper-text {
          font-family: "Noto Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: ${props.error ? "#d32f2f" : "#828282"};
        }
      `;
    }
  }}
`;

const InputContainer = styled.div`
  ${(props) => {
    if (props.fullWidth) {
      return `
        width: 100%;
      `;
    }
  }}
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid #828282;
  border-radius: 0.5rem;
  padding: 1.125rem;
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
  :hover {
    border: 1px solid #333333;
  }

  :focus-within {
    border: 1px solid #2962ff;
    ~ label {
      color: #2962ff;
    }
  }

  ${(props) => {
    if (!props.disabled && props.error) {
      return `
        /* label {
           color: #d32f2f;
         }
         .input {
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
*/
        border: 0.0625rem solid #d32f2f;
        :hover {
          + label {
            color: #333333;
          }
        }
        :focus-within {
          border: 1px solid #d32f2f;
          + label {
            color: #d32f2f;
          }
        }
      `;
    } else if (props.disabled) {
      return `
        background: #f2f2f2;
        border: 1px solid #e0e0e0;
        .input {
          background: #f2f2f2;
        }
        :focus-within,
        :hover {
          background: #f2f2f2;
          border: 1px solid #e0e0e0;
          ~ label {
            color: #333333;
          }
        }
      `;
    }
  }}
  .textarea {
    resize: none;
  }
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => {
      if (props.disabled) {
        return `
          color: #333333;
        `;
      }
    }}
  }
`;

export default Input;
