import styled from 'styled-components';

// import fonts from '../../utils/fonts';
import spacing from '../../utils/spacing';
// import { Body12, Body4 } from '../../utils/texts';
// import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

export const CellContainer = styled.View`
    paddingHorizontal: ${spacing.medium};
    paddingVertical: ${spacing.medium};
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    padding-vertical: ${spacing.small};
`;
