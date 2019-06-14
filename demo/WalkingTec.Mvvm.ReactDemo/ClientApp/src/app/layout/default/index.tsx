
import { Layout } from 'antd';
import globalConfig from 'global.config';
import lodash from 'lodash';
import { action, computed, observable } from 'mobx';
import Animate from 'rc-animate';
import * as React from 'react';
import ContentComponent from './content';
import HeaderComponent from './header';
import SiderComponent from './sider';
import './style.less';
class LayoutStoreCLass {
  /**
   * 菜单 展开收起
   */
  @observable collapsed = lodash.get(globalConfig, 'collapsed', true);
  @action
  onCollapsed(collapsed = !this.collapsed) {
    this.collapsed = collapsed;
    // 主动触发 浏览器 resize 事件
    dispatchEvent(new CustomEvent('resize'));
  }
  @computed
  get collapsedWidth() {
    return this.collapsed ? 80 : 250;
  }
}
const LayoutStore = new LayoutStoreCLass()
/**
 * 默认布局
 */
export default class DefaultLayout extends React.Component<any, any> {
  render() {
    return (
      <Animate transitionName='fade'
        transitionAppear={true} component=""  >
        <Layout className="app-layout-root">
          <SiderComponent {...this.props} LayoutStore={LayoutStore} />
          <HeaderComponent {...this.props} LayoutStore={LayoutStore} />
          <ContentComponent {...this.props} LayoutStore={LayoutStore} />
        </Layout>
      </Animate  >
    );
  }
}

