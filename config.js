const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347085751492";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiME5TaVVkSDh0UUQ3ODg0REtSMUNuSmppVlVpMlRaU1hhYWdkem1ZU1d1MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVlRNnh6NVpSV3FhX09uZUYxMUV5d1wiLFxuICBcInBob25lSWRcIjogXCI0MTYxZmQ3Ni0yMmVlLTQ0NjYtYjg5Ni00ZjYwMDcyNjAzZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICA2LFxuICAgICAgMjI3LFxuICAgICAgODksXG4gICAgICAyMjEsXG4gICAgICAxNzMsXG4gICAgICA1NyxcbiAgICAgIDIxNyxcbiAgICAgIDEyNSxcbiAgICAgIDc3LFxuICAgICAgNjUsXG4gICAgICAxMjgsXG4gICAgICAzMyxcbiAgICAgIDIxNCxcbiAgICAgIDczLFxuICAgICAgMTkyLFxuICAgICAgMjQ3LFxuICAgICAgNjksXG4gICAgICA3NyxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE5MCxcbiAgICAgIDE2MixcbiAgICAgIDE2MSxcbiAgICAgIDYsXG4gICAgICAyOSxcbiAgICAgIDE2NSxcbiAgICAgIDEwMCxcbiAgICAgIDIzMixcbiAgICAgIDIyOSxcbiAgICAgIDE0OSxcbiAgICAgIDI1MSxcbiAgICAgIDE4MCxcbiAgICAgIDE0NyxcbiAgICAgIDc1LFxuICAgICAgNTIsXG4gICAgICA0LFxuICAgICAgMTcyLFxuICAgICAgMTg1LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkcxRkxHMzdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg1NzUxNDkyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTE2NTM4ODg0MjUzOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGIra2RRR0VMSDIwTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEUzFrdndkdWFUSmpROEw1RTZWb0xnT0ZCSmVQQnQ4UGU2VW5IVVBsU1NrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhiSUE1Z0VHQVR0UkdBM2pCa3Z5eUJFcnRDNDdWWkYwZ3d4bEZJR3ViT3FzdFhSZzBSdHhpdW50Z0dLU0dvRTEwWmdJY3BTZEd2K0k0b1JBaE1jOUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIituZDlUTXhJRkI4NFhBZ2lYMk1GSnlNU3N0bzBiN3BsYWpTOXJrSGN2dEJHVFVoQkRWK3ExQzBjSVc5aDY5eUpldTR4RXNkOTd5WWI1eStJWjUyVUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODU3NTE0OTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODg5MzM2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
