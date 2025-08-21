٩//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5ydW5lcDZKdmRwcVc5ZFZEUmFsYTlVUk9MSGxDdnBDRFJndlJzekFIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkF0a04wKzFkUkhrSVMvU25iQVViYTVSN1RRajEwWGUxRzRWR2NQSkhRbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSTkrTWtNYnZ3L0luTE5aTnZOREFmQnU2ZkhIVEFWemt4UkNwdmRRclhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUGZTVXd0bzlTdjhUNjVTN2htcGl6OGlxLzZXRWRhcU9JVlFnN2FpMjNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBV05lU0xQcXBTblFRaDc0bHVNUkhRZjVlKzdBQmtLNXVLajQzS0xzSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6NzdpV2Z2M0VIczJHenVSMi9KZHFhdUQyMDY5Tk9NVWZkOTBMOWNZVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1B3SDNJTlpRaUl6RllqMld6VHBjekFvRHljY1N6WnVGcDFhZmVpSEQyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0ZTaXNubTJQcXlXNkQ2QVdSZFhPM1pKQ2ZxSTBqL2R0bHN4NHRSQ0ZGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZTdzhxUituSSs3VzNSSkxJMEtkOEpTUGovaHp0MVBLKzRtSGlWbkVWQnpxamJTTTRyeWwwK0VjRVdqd0V1OEt6LzY5cHcvSVdCc0FoMWlraDBNU2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJBM2J5NkVjUEVoM0NwY2RWSExWUXhlWTM5OVJNMXB4VjFoY1JjQVI5Yy9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMzc5NjQ4MTE1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MTc1QzVBMkM1ODRBQzkyMzkyMUVBM0M3MzJERjQ0MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1ODEzMjI5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTM3OTY0ODExNTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkJFQjYwNTdBRkFENkE5QUZGQUE1MzA5QTYwOENFNEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTgxMzIyOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicU1waW9rX0tSRVNBcVZORXVtUG1yUSIsInBob25lSWQiOiIzZTM4ZWZkZi1mMmE2LTQxOGMtYjg3Yi0xYTdiNzNjODA2NWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1p4RnBkdXVBV2R3MmdTckxWbTRDVEFpNmdnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI0dXNuVWhuYVAzMVkyS0JWdDgzdzRjTElQND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4Qk1RN0M3RSIsIm1lIjp7ImlkIjoiMjEzNzk2NDgxMTUxOjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODQ0MzE3Njc5NjMzODo0QGxpZCIsIm5hbWUiOiLYs9mB2KfYrSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFOOXV3Q0VOeXFuc1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid08xbjBIUW5RaS9mc1JyaktHbDVIZDh0eWcxK0lnMk9tTnRweFJRTHhuWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoic24zMDNpb2ZGQTNkMklObVUwT1pvd01uSm03Smd5UEtYR2RNVTh4MWJFSStzUTlLY2lWQXJ3SExEVTZWTU1UZnVSY3VzMW0yRHBzb2ttTDQ1MGNxQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Im5MWWVGYmYzMjdIL21uMGJ1d1hjUkVKUytsOHp2a29KQnA4d1UvQTh0ZXVZcmpoVDdEekRKU2ZhaUxmK2g3ZDVYY3dESDlQL3U4QTY3YThoUThEbWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEzNzk2NDgxMTUxOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0R0WjlCMEowSXYzN0VhNHlocGVSM2ZMY29OZmlJTmpwamJhY1VVQzhaMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1ODEzMjI1LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJRQiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
