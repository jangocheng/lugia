import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import RATE from '@lugia/lugia-web/dist/rate/lugia.rate.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseRate =  require('./BaseRate').default;  const ReadOnlyDemo =  require('./ReadOnlyDemo').default;  const HalfRateDemo =  require('./HalfRateDemo').default;  const CustomRateDemo =  require('./CustomRateDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'评分'} subTitle={'Rate'} desc={'评分组件'} />
                              <Demo title={'评分基本用法'} titleID={'rate-0'} code={<code>{ `import React from \'react\';\nimport { Rate, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {\n      defaultPropsConfig : {\n        count: 10,\n        max: 10,\n        value: 3,\n        disabled: false,\n        allowHalf: false,\n        classify: false,\n        onClick: (e: Object, x: any) => {\n          this.setStateValue(\'defaultPropsConfig\', \'value\',x.newValue);\n        },\n        onChange: (e: Object, x: any) => {}\n      },\n      defaultProps7Config : {\n        count: 5,\n        value: 0,\n        allowHalf: true,\n        onClick: (e: Object, x: any) => {\n          this.setStateValue(\'defaultProps7Config\',\'value\', x.newValue);\n        },\n        onChange: (e: Object, x: any) => {\n          // this.setStateValue(\'defaultProps7Config\',\'value\', x.newValue);\n        }\n      }\n    };\n  }\n  render() {\n    const config = {\n      [Widget.Rate]: { fontSize: \'18px\' }\n    };\n    return (\n      <div>\n        <div>\n          <div>\n            <Rate />\n          </div>\n          <Rate {...this.state.defaultProps7Config}  />\n          <TextBox>{this.state.defaultProps7Config.value} 颗星</TextBox>\n        </div>\n        <Theme config={config}>\n          <Rate {...this.state.defaultPropsConfig}  />\n          <TextBox>{this.state.defaultPropsConfig.value} 颗星</TextBox>\n        </Theme>\n      </div>\n    );\n  }\n  setStateValue = (target: string, props: string, val: number) => {\n    const data = Object.assign(this.state[target], { value: val });\n    this.setState({\n      [target]: data,\n    });\n  };\n}\n`}</code>} desc={'评分基本用法'}  demo={<BaseRate />}></Demo><Demo title={'只读'} titleID={'rate-1'} code={<code>{ `import React from \'react\';\nimport { Rate, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {config:3.5};\n  }\n  render() {\n    const rate = {\n      [Widget.Rate]: { fontSize: \'18px\' }\n    };\n    const config = {\n      count: 5,\n      max: 5,\n      value: 3.6,\n      disabled: true,\n      allowHalf: true,\n      className: \'cccc\',\n      onClick: (e: Object, x: any) => {},\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'config\', x.currentValue);\n      }\n    };\n    return (\n      <div>\n        <Theme config={rate}>\n          <Rate {...config} character=\"好\" />\n          <TextBox>{this.state.config} 颗星</TextBox>\n        </Theme>\n      </div>\n    );\n  }\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>} desc={'只读，无法进行鼠标交互'}  demo={<ReadOnlyDemo />}></Demo><Demo title={'半星'} titleID={'rate-2'} code={<code>{ `import React from \'react\';\nimport { Rate, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class HalfRateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {\n      config:7\n    };\n  }\n  render() {\n    const rate = {\n      [Widget.Rate]: { fontSize: \'18px\' }\n    };\n    const config = {\n      count: 5,\n      max: 10,\n      disabled: false,\n      allowHalf: true,\n      classify: false,\n      onClick: (e: Object, x: any) => {\n        this.setStateValue(\'config\', x.newValue);\n      },\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'config\', x.newValue);\n      }\n    };\n    return (\n      <div>\n        <Theme config={rate}>\n          <Rate {...config} value={this.state.config}/>\n          <TextBox>{this.state.config} 分</TextBox>\n        </Theme>\n      </div>\n    );\n  }\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>} desc={'支持选中半星'}  demo={<HalfRateDemo />}></Demo><Demo title={'自定义其他形状'} titleID={'rate-3'} code={<code>{ `import React from \'react\';\nimport { Rate, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \"styled-components\";\nconst TitleBox = styled.div\`\n  font-size: 14px;\n  margin: 10px  0;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {};\n  }\n  render() {\n    const config = {\n      [Widget.Rate]: { fontSize: \'18px\' }\n    };\n    const defaultProps2 = {\n      count: 5,\n      max: 5,\n      value: 3.5,\n      disabled: false,\n      allowHalf: true,\n      classify: false,\n      onClick: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps2\', x.currentValue);\n      },\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps2\', x.currentValue);\n      }\n    };\n    const defaultProps4 = {\n      count: 5,\n      max: 5,\n      value: 2,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      className: \'cccc\',\n      onClick: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps4\', x.currentValue);\n      },\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps4\', x.currentValue);\n      }\n    };\n    const defaultProps5 = {\n      count: 5,\n      max: 5,\n      value: 3,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      onClick: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps5\', x.currentValue);\n      },\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps5\', x.currentValue);\n      }\n    };\n    const defaultProps6 = {\n      count: 5,\n      max: 5,\n      value: 4,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      onClick: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps6\', x.currentValue);\n      },\n      onChange: (e: Object, x: any) => {\n        this.setStateValue(\'defaultProps6\', x.currentValue);\n      }\n    };\n    return (\n      <div>\n        <Theme config={config}>\n          <TitleBox>文字评分</TitleBox>\n          <Rate {...defaultProps2} character=\"好\" />\n          <TitleBox>分级评分 低分值样式</TitleBox>\n          <Rate {...defaultProps4} />\n          <TitleBox>分级评分 正常样式</TitleBox>\n          <Rate {...defaultProps5} />\n          <TitleBox>分级评分  高分值样式</TitleBox>\n          <Rate {...defaultProps6} />\n        </Theme>\n      </div>\n\n    );\n  }\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>} desc={'可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文'}  demo={<CustomRateDemo />}></Demo>
                              <EditTables dataSource={RATE} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'评分基本用法'} href={'#rate-0'} /><Link title={'只读'} href={'#rate-1'} /><Link title={'半星'} href={'#rate-2'} /><Link title={'自定义其他形状'} href={'#rate-3'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        