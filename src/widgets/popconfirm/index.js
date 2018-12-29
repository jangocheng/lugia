import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import POPCONFIRM from '@lugia/lugia-web/dist/popconfirm/lugia.popconfirm.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasePopconfirm =  require('./BasePopconfirm').default;  const TypePopconfirm =  require('./TypePopconfirm').default;  const ActionPopconfirm =  require('./ActionPopconfirm').default;  const CoditionPopconfirm =  require('./CoditionPopconfirm').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'气泡确认框'} subTitle={'Popconfirm'} desc={'气泡式的确认框'} />
                            <Demo title={'气泡确认框基本用法'} titleID={'popconfirm-0'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Popconfirm, Theme, Button } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Direction = styled(Button)``;\nconst Wrapper = styled.div`\n  margin: 100px;\n`;\nexport default class BasePopconfirm extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const text = \'确定删除这个选项吗?\';\n    return (\n      <Wrapper>\n        <div style={{ marginLeft: 50, whiteSpace: \'nowrap\' }}>\n          <Popconfirm placement=\"topLeft\" title={text} action={\'click\'}>\n            <Direction type=\"primary\">TL</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"top\" title={text}>\n            <Direction type=\"primary\">Top</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"topRight\" title={text}>\n            <Direction type=\"primary\">TR</Direction>\n          </Popconfirm>\n        </div>\n        <div style={{ width: 70, float: \'left\' }}>\n          <Popconfirm placement=\"leftTop\" title={text}>\n            <Direction type=\"primary\">LT</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"left\" title={text}>\n            <Direction type=\"primary\">Left</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"leftBottom\" title={text}>\n            <Direction type=\"primary\">LB</Direction>\n          </Popconfirm>\n        </div>\n        <div style={{ width: 70, marginLeft: 200 }}>\n          <Popconfirm placement=\"rightTop\" title={text}>\n            <Direction type=\"primary\">RT</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"right\" title={text}>\n            <Direction type=\"primary\">Right</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"rightBottom\" title={text}>\n            <Direction type=\"primary\">RB</Direction>\n          </Popconfirm>\n        </div>\n        <div style={{ marginLeft: 50, clear: \'both\', whiteSpace: \'nowrap\' }}>\n          <Popconfirm placement=\"bottomLeft\" title={text}>\n            <Direction type=\"primary\">BL</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"bottom\" title={text}>\n            <Direction type=\"primary\">Bottom</Direction>\n          </Popconfirm>\n          <Popconfirm placement=\"bottomRight\" title={text}>\n            <Direction type=\"primary\">BR</Direction>\n          </Popconfirm>\n        </div>\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'气泡确认框基本用法'}  demo={<BasePopconfirm />}></Demo><Demo title={'风格'} titleID={'popconfirm-1'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Popconfirm, Theme, Button, Input, Icon } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nconst Direction = styled(Button)``;\nconst Wrapper = styled.div`\n  margin: 100px;\n`;\nconst IconWrapper = styled.div`\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n`;\nconst HintIcon: Object = styled(Icon)`\n  color: white;\n`;\nexport default class TypePopconfirm extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const text = \'确定删除这个选项吗?\';\n    return (\n      <Wrapper>\n        <Popconfirm\n          title={text}\n          action={\'click\'}\n          cancelText=\"No\"\n          okText=\"yes\"\n          okType=\"danger\"\n          icon={\n            <IconWrapper style={{ background: \'orange\' }}>\n              <HintIcon\n                style={{ color: \'white\' }}\n                iconClass={\'lugia-icon-reminder_exclamation\'}\n              />\n            </IconWrapper>\n          }\n        >\n          <Direction type=\"primary\">提示</Direction>\n        </Popconfirm>\n\n        <Popconfirm\n          title={text}\n          action={\'click\'}\n          cancelText=\"No\"\n          okText=\"yes\"\n          okType=\"danger\"\n          icon={\n            <IconWrapper style={{ background: \'red\' }}>\n              <HintIcon\n                style={{ color: \'white\' }}\n                iconClass={\'lugia-icon-reminder_question\'}\n              />\n            </IconWrapper>\n          }\n        >\n          <Direction type=\"primary\">危险操作</Direction>\n        </Popconfirm>\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'气泡确认框多种风格,可选择添加不同颜色图标'}  demo={<TypePopconfirm />}></Demo><Demo title={'三种触发条件'} titleID={'popconfirm-2'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Popconfirm, Theme, Button, Input } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Direction = styled(Button)``;\nconst Wrapper = styled.div`\n  margin: 100px;\n`;\nexport default class ActionPopconfirm extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const text = \'确定删除这个选项吗?\';\n    return (\n      <Wrapper>\n        <Popconfirm title={text} action={\'focus\'}>\n          <Input placeholder={\'聚焦弹出\'} />\n        </Popconfirm>\n        <Popconfirm title={text} action={\'hover\'}>\n          <Direction type=\"primary\"> 悬停</Direction>\n        </Popconfirm>\n        <Popconfirm\n          title={text}\n          action={\'click\'}\n          cancelText=\"No\"\n          okText=\"yes\"\n          okType=\"danger\"\n        >\n          <Direction type=\"primary\">点击</Direction>\n        </Popconfirm>\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'三种触发条件,click,hover,focus'}  demo={<ActionPopconfirm />}></Demo><Demo title={'控制是否弹出'} titleID={'popconfirm-3'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport {\n  Popconfirm,\n  Theme,\n  Button,\n  notification,\n  Switch\n} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Direction = styled(Button)``;\nexport default class CoditionPopconfirm extends React.Component<any, any> {\n  state = {\n    visible: false,\n    condition: true\n  };\n\n  changeCondition = (value: Object) => {\n    const condition = value.oldValue === true;\n    this.setState({ condition });\n  };\n\n  confirm = () => {\n    this.setState({ visible: false });\n    notification.success({ title: \'操作成功 \' });\n  };\n\n  cancel = () => {\n    this.setState({ visible: false });\n    notification.error({ title: \'取消操作\' });\n  };\n\n  handleVisibleChange = (visible: Object) => {\n    if (!visible) {\n      this.setState({ visible });\n      return;\n    }\n    if (this.state.condition === true) {\n      this.confirm();\n    } else {\n      this.setState({ visible });\n    }\n  };\n\n  render() {\n    return (\n      <div style={{ margin: 20 }}>\n        <p> 触发弹出框</p>\n        <Switch defaultChecked onChange={this.changeCondition} />\n        <Popconfirm\n          title=\"确定要删除吗?\"\n          visible={this.state.visible}\n          onVisibleChange={this.handleVisibleChange}\n          onConfirm={this.confirm}\n          onCancel={this.cancel}\n          okText=\"确定\"\n          cancelText=\"取消\"\n        >\n          <Direction type=\"primary\">删除任务</Direction>\n        </Popconfirm>\n      </div>\n    );\n  }\n}\n`}</code>} desc={'可根据情况选择 控制是否弹出'}  demo={<CoditionPopconfirm />}></Demo>
                            <EditTables dataSource={POPCONFIRM} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'气泡确认框基本用法'} href={'#popconfirm-0'} /><Link title={'风格'} href={'#popconfirm-1'} /><Link title={'三种触发条件'} href={'#popconfirm-2'} /><Link title={'控制是否弹出'} href={'#popconfirm-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        