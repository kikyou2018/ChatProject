const nodemailer = require('nodemailer');
const config_module = require("./config")

/**
 * ���������ʼ��Ĵ���
 */
let transport = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
        user: config_module.email_user, // ���ͷ������ַ
        pass: config_module.email_pass // ������Ȩ���������
    }
});

/**
 * �����ʼ��ĺ���
 * @param {*} mailOptions_ �����ʼ��Ĳ���
 * @returns 
 */
function SendMail(mailOptions_) {
    return new Promise(function (resolve, reject) {
        transport.sendMail(mailOptions_, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('send success: ' + info.response);
                resolve(info.response)
            }
        });
    })

}

module.exports.SendMail = SendMail