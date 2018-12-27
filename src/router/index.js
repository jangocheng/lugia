import NotAccess from "../access/NotAccess";
import Affix from "../widgets/affix";
import Alert from "../widgets/alert";
import Align from "../widgets/align";
import Amountinput from "../widgets/amountinput";
import Autocomplete from "../widgets/autocomplete";
import BackTop from "../widgets/back-top";
import Avatar from "../widgets/avatar";
// import Badge from "../widgets/badge";
import Breadcrumb from "../widgets/breadcrumb";
import Button from "../widgets/button";
import Checkbox from "../widgets/checkbox";
// import Collapse from "../widgets/collapse";
import Divider from "../widgets/divider";
// import Grid from "./widgets/grid";
import Icon from "../widgets/icon";
import Input from "../widgets/input";
import Layouts from "../widgets/layout";
import Loading from "../widgets/loading";
import Message from "../widgets/message";
import Modal from "../widgets/modal";
import Notifications from "../widgets/notification";
import Numberinput from "../widgets/numberinput";
import Progress from "../widgets/progress";
import Radio from "../widgets/radio";
// import Scroller from "../widgets/scroller";
import Select from "../widgets/select";
import Slider from "../widgets/slider";
import Switch from "../widgets/switch";
// import Tabs from "../widgets/tabs";
import Tag from "../widgets/tag";
import Tooltip from "../widgets/tooltip";
import Tree from "../widgets/tree";
import Trigger from "../widgets/trigger";
import EditTable from "../edit-table"


const routerConfig = {
  "design":{
    value:'/design',
    text:'Lugia Design of React'
  },
  "/edittable": {
    // exact: true,
    component: EditTable,
    value:'/edittable',
    text: 'EditTable',
  },
  "/affix": {
    component: Affix,
    value:'/affix',
    text: 'Affix',
    icon: 'lugia-icon-financial_add_pic',
  },
  "/alert": {
    component: Alert,
    value:'/alert',
    text: 'Alert',
  },
  "/align": {
    component: Align,
    value:'/align',
    text: 'Align',
    icon: 'lugia-icon-financial_add_pic',
  },
  "/amountinput": {
    component: Amountinput,
    value:'/amountinput',
    text: 'Align',
  },
  "/autocomplete": {
    component: Autocomplete,
    value:'AutoComplete',
    text: 'Align',
  },
  "/avatar": {
    component: Avatar,
    value:'Avatar',
    text: 'Align',
  },
  "/backtop": {
    component: BackTop,
    value:'BackTop',
    text: 'Align',
  },
  // "/badge": {
  //   component: Badge,
  // value:'Badge'
  // },
  "/breadcrumb": {
    component: Breadcrumb,
    value:'Breadcrumb',
    text: 'Align',
  },
  "/button": {
    component: Button,
    value:'Button',
    text: 'Align',
  },
  "/checkbox": {
    component: Checkbox,
    value:'Checkbox',
    text: 'Align',
  },
  // "/collapse": {
  //   component: Collapse,
  //     value:'Collapse'
  // },
  "/divider": {
    component: Divider,
    value:'Divider',
    text: 'Align',
  },
  // "/grid": {
  //   component: Grid,
  //     name:'Grid'
  // },
  "/icon": {
    component: Icon,
    value:'Icon',
    text: 'Align',
  },
  "/input": {
    component: Input,
    value:'Input',
    text: 'Align',
  },
  "/layout": {
    component: Layouts,
    value:'Layouts',
    text: 'Align',
  },
  "/loading": {
    component: Loading,
    value:'Loading',
    text: 'Align',
  },
  "/message": {
    component: Message,
    value:'Message',
    text: 'Align',
  },
  "/modal": {
    component: Modal,
    value:'Modal',
    text: 'Align',
  },
  "/notification": {
    component: Notifications,
    value:'Notifications',
    text: 'Align',
  },
  "/numberinput": {
    component: Numberinput,
    value:'NumberInput',
    text: 'Align',
  },
  "/progress": {
    component: Progress,
    value:'Progress',
    text: 'Align',
  },
  "/radio": {
    component: Radio,
    value:'Radio',
    text: 'Align',
  },
  // "/scroller": {
  //   component: Scroller
  // },
  "/select": {
    component: Select,
    value:'Select',
    text: 'Align',
  },
  "/slider": {
    component: Slider,
    value:'Slider',
    text: 'Align',
  },
  "/switch": {
    component: Switch,
    value:'Switch',
    text: 'Align',
  },
  // "/tabs": {
  //   component: Tabs
  // },
  "/tag": {
    component: Tag,
    value:'Tag',
    text: 'Align',
  },
  "/tooltip": {
    component: Tooltip,
    value:'Tooltip',
    text: 'Align',
  },
  "/tree": {
    component: Tree,
    value:'Tree',
    text: 'Align',
  },
  "/trigger": {
    component: Trigger,
    value:'Trigger',
    text: 'Align',
  },
  "/404": {
    component: NotAccess,
    exact: true,
    value:'NotAccess',
    text: 'Align',
  }
};

export default routerConfig;
