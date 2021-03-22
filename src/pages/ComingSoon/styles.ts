import { Platform } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-family: roboto_500;
  font-size: 30px;
  color: ${colors.purple};
`;
