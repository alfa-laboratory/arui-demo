/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */

const getConfig = require('arui-presets/postcss');
const MQ = require('arui-feather/mq/mq.json');

module.exports = getConfig(MQ);
