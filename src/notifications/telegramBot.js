const { Telegraf } = require('telegraf');
const logger = require('../services/logger');

class TelegramBot {
    constructor() {
        this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
        this.chatId = process.env.TELEGRAM_CHAT_ID;
    }

    sendUpdate(message) {
        this.bot.telegram.sendMessage(this.chatId, `🤖 **Charli Update:**\n${message}`, { parse_mode: 'Markdown' })
            .catch(err => logger.error("Telegram Failed:", err));
    }

    sendTradeAlert(trade) {
        const msg = `✅ **Trade Executed!**\n*Symbol:* ${trade.symbol}\n*Action:* ${trade.side}\n*Price:* ${trade.price}\n*Reason:* ${trade.reason}`;
        this.sendUpdate(msg);
    }
}

module.exports = new TelegramBot();
