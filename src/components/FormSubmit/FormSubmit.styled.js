import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { HiUser, HiPhone } from 'react-icons/hi2';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 4px;
`;

export const FormField = styled(Field)`
  padding: 8px 12px 8px 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #111;

  &:hover {
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    outline: 1px solid rgba(143, 152, 212, 0.658);
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    overflow: hidden;
    color: #777;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const FormInputWrapper = styled.div`
  position: relative;

  &:focus-within {
    color: ${p => p.theme.colors.contactBtn};
  }
`;

export const FormHiUser = styled(HiUser)`
  position: absolute;
  top: 50%;
  left: 0.6rem;

  transform: translateY(-50%);
`;
export const FormHiPhone = styled(HiPhone)`
  position: absolute;
  top: 50%;
  left: 0.6rem;
  transform: translateY(-50%);
`;

export const FormError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.deleteBtn};
`;

export const FormLabel = styled.label`
  color: #050505;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const FormContactBtn = styled.button`
  margin-top: 12px;
  border: none;
  outline: none;
  padding: 8px 20px;
  border-radius: 24px;
  cursor: pointer;
  color: #fff;
  background-color: ${p => p.theme.colors.contactBtn};
  transition: 0.3s;

  color: #f8f8f8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: #5199fe;
  }

  &:active {
    transform: translateY(2px);
  }
`;
