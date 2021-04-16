/*
 * @Author: Quinn
 * @Date: 2021-03-19 16:33:38
 * @LastEditTime: 2021-04-16 17:40:32
 * @LastEditors: quinn
 * @Description:  
 */
#!/usr/bin/env node

const {
    Command
} = require('commander');
const program = new Command();

// 设置指令版本
program.version('0.0.1')
/**
 * option 方法：添加全局参数
 * 1.指令上的参数符号 {string} -参数缩写,--参数全称 例：'-d, --debug' or '--debug'
 * 2.指令描述 {string}
 * 3.默认值
 */
// 第一个参数可以忽略
program
    /**
     * {Boolean}
     * 用法：
     * 1.-s 返回true；
     * 2.不使用 返回undefined
     */
    .option('-s, --small', 'small pizza size')
    /**
     * {Boolean} 使用'no-'前缀.
     * 用法：
     * 1.不使用 返回true；
     * 2.-t 返回false
     */
    .option('-t, --no-test', '测试一下')
    /**
     * {String} 使用<type>后缀
     * 用法：
     * 1.-p test 返回'test';
     * 3.不使用 返回undefined
     * 注意：仅使用 -p 会异常，报参数丢失
     */
    .option('-p, --pizza-type <type>', 'flavour of pizza')
    /**
     * [String,Boolean] 使用[type]后缀
     * 用法：
     * 1.-m 返回true；
     * 2.-m test 返回'test'；
     * 3.不使用 返回undefined
     */
    .option('-m, --more [type]', '可以是string或boolean')
    /**
     * {Array} 使用 <value...> 或 [value...]后缀
     * 用法
     * 1.-n 1 2 3 返回['1','2','3']
     */
    .option('-n, --number <numnber...>', '数组')
    .option('-nn, --numbers [numnbers...]', '数组')
    /**
     * 设置参数必填：使用requiredOption方法
     * 注意：该参数必须有值，否则异常。所以该参数最好设一个默认值，否则输入指令时必须带上该参数。
     */
    .requiredOption('-r, --require', '必填参数', false)

program
    // 增加指令
    .command('init')
    // 设置指令参数
    .arguments('<filderName>')
    // 指令的描述
    .description('初始化 quinn-cli 脚手架')
    // 执行指令的回调
    .action((filderName) => {
        console.log(filderName)
    })

// 该行放置末尾，解析option方法所构建的参数
program.parse(process.argv)