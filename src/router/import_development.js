// file: hmmm/pages/questions
// require: commonjs的模块化导入动作

module.exports = file => require('@/module-' + file + '.vue').default // vue-loader at least v13.0.0+
