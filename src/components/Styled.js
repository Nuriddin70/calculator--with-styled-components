import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 30px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;
export const btn = styled.button`
  outline: none;
  padding: 16px 32px;
  background: rgb(0, 1, 59);
  color: #fff;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18;
  border-radius: 8px 0 9px 0;
  border-bottom: 3px solid orange;
  position: relative;
  left: 40%;
  margin-top: 5px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;
export const Current = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset #fff;
  outline: none;
  background: rgba(255, 255, 255, 0.75);
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan}`;
    }
  }}

  ${({ opration }) => opration && "background-color: #555"}
${({ control }) => control && "background-color: skyblue"}
${({ period }) =>
    period && `border-bottom-left-radius: 10px; background-color: skyblue`}
${({ equals }) =>
    equals &&
    `border-bottom-righ-radius: 10px; background-color: #555; grid-column: span ${equals}`}
`;
