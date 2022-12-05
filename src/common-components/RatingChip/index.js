import { StarBorder } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const RatingchipStyled = styled.div`
  line-height: normal;
  display: inline-flex;
  color: #fff;
  padding: 2px 4px 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  vertical-align: middle;
  background-color: #388e3c;
  align-items: center;
  gap: 2px;
  .icon {
    font-weight: 500;
    font-size: 14px;
  }
`;

const RatingChip = ({ rating }) => {
  return (
    <RatingchipStyled>
      {" "}
      {rating} <StarBorder className="icon" />
    </RatingchipStyled>
  );
};

export default RatingChip;
