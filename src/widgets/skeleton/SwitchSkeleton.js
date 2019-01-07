import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@lugia/lugia-web';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background: cornflowerblue;
  margin: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
`;

const Box = styled.div`
  height: 136px;
  width: 732px;
  display: inline-block;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 900;
  line-height: 30px;
`;

export default class SwitchSkeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handleClickButton}>点击切换</Button>
        </div>
        <Skeleton avatar={true} animation={true} loading={this.state.loading}>
          <Box>
            <h2>标题</h2>
            <P>如今，在各大互联网公司，他们都有属于自己的开源设计规范。</P>
            <P>
              页面的重点应该在形式上的有没和科学上的简洁,在解决用户需求行为时要大胆,用于创新。
            </P>
            <P>敢于解决当今金融市场软件上的刚性需求点。</P>
          </Box>
        </Skeleton>
      </div>
    );
  }

  handleClickButton = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };
}