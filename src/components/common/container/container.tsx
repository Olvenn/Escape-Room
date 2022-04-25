import * as S from './container.styled';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps): JSX.Element => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
