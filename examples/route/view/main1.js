import Woowahan from '../../../index';
import Template from './main1.hbs';

export default Woowahan.View.create('MainView1', {
  template: Template,

  initialize() {
    this.setModel({ src: 'efeeefe' });

    this.super();
  }
});