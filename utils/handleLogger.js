const { IncomingWebhook } = require('@slack/webhook');

// const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
const webHook = new IncomingWebhook('https://hooks.slack.com/services/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');

const loggerStream = {
    write: (message) => {
        webHook.send({
            text: message
        });
    }
}

module.exports = loggerStream;