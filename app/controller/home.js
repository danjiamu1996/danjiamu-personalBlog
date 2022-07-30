'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好欢迎来到但加木的个人博客';
  }
}

module.exports = HomeController;
