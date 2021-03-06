import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  margin-bottom: 24px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background: #fff;
  color: #222;
  font-size: 18px;
  width: 90%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #35aaff;
  width: 90%;
  height: 45px;
  border-radius: 5px;
  margin: 10px 0;
`;
export const BtnText = styled.Text`
  color: white;
  font-size: 18px;
`;
export const SignUpLink = styled.TouchableOpacity``;
export const SignUpText = styled.Text`
  color: white;
`;

