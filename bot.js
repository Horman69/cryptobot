require("dotenv").config();
const Telegraf = require("telegraf");
const axois = require("axios");
const bot = new Telegraf(process.env.BOT_TOK);

bot.command("test", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Привяу", {
    reply_markup: {
      inline_keyboard: [[{ text: "Жмякни", callback_data: "One" }]],
    },
  });
});

bot.action("One", (ctx) => {
  ctx.answerCbQuery("Доволен жмякальщик?!)");
  ctx.reply("Жмякни");
});
bot.launch();
