import styled from "styled-components";

// ! margin-right because of the box-shadow

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap");

  font-family: "Fira Code", monospace;
  display: flex;
  flex-flow: column wrap;
  margin-right: 3px;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }

  @media (min-width: 1280px) {
    width: 72rem;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;
