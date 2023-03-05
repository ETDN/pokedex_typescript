import React from "react";
import styled from 'styled-components';

function Sidebar() {
  return <Container>
    <div className="top_Links">
      <ul>
        <li>
          <span>Bonjour</span>
        </li>
      </ul>
    </div>
  </Container>;
}

export default Sidebar;

const Container = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: red;
  border-right: 1px solid #ddd;
  padding: 20px;
  flex-direction: column;

  ul li {
  list-style: none;
}

.top_links{
    display: flex;
    flex-direction: column;
    .logo{
        text-align:center;
        margin: 1rem 0;
        img{
            max-inline-size: 80%;
            block-size: auto;
        }
    }
        ul{
            text-decoration:none;
            display:flex;
            flex-direction:column;
            gap: 1rem;
            padding: 1rem;
        li {
            text-decoration:none;
            display:flex;
            gap: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover{
                color:white;

                }
            }
        }
}

`
