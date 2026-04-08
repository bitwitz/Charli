const telegram = require('./telegramBot');
class NotificationService {
    async notify(type, data) {
        if (type === 'TRADE') telegram.sendTradeAlert(data);
        else telegram.sendUpdate(data);
    }
}
module.exports = new NotificationService();
