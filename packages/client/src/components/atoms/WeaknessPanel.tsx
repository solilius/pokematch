import { Type, TypeEffectiveness } from "@pokematch/common";
import styled from "styled-components";
import {
  getTypeColor,
  getEffectivnessColor,
} from "../../utils/actions/get-color";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasePanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  font-weight: 500;
  background-color: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const TypePanel = styled(BasePanel)`
  color: white;
  font-size: 14px;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
`;

const ValuePanel = styled(BasePanel)`
  color: ${(props) => (props.color !== "#fff" ? "#ffdd57" : "#424242")};
  font-size: 16px;
`;

const typeEffectivessToTextValue = (effectives: TypeEffectiveness): string => {
  const effectivesMap = {
    [TypeEffectiveness.DoubleSuperEffective]: "4",
    [TypeEffectiveness.SuperEffective]: "2",
    [TypeEffectiveness.Effective]: "1",
    [TypeEffectiveness.NotEffective]: "½",
    [TypeEffectiveness.DoubleNotEffective]: "¼",
    [TypeEffectiveness.Immune]: "0",
  };

  return effectivesMap[effectives];
};

interface Props {
  type: Type;
  value: TypeEffectiveness;
}

export const WeaknessPanel = ({ type, value }: Props) => {
  return (
    <Container>
      <TypePanel color={getTypeColor(type)}>
        {type.substring(0, 3).toUpperCase()}
      </TypePanel>
      <ValuePanel color={getEffectivnessColor(value)}>
        {typeEffectivessToTextValue(value) || "?"}
      </ValuePanel>
    </Container>
  );
};
