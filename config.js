var sensitive = require("./sensitive_config.js");

if(process.env.VERSION === "LOCAL")
{
    exports.database_host   = "POSTGRES_IP";
    exports.version         = "LOCAL";
}
else if(process.env.VERSION === "DEV")
{
    exports.database_host   = "46.101.112.71";
    exports.version         = "DEV";
}
else    
{
    exports.database_host   = "wisdota.com";
    exports.version         = "PRODUCTION";
}

exports.database_pw   = sensitive.database_pw;

exports.files           = "/files";
exports.shared          = "/shared";
exports.storage          = "/storage";

exports.steam_api_key   = "F1C8B59D43BAC59F6B648FD0D217B974";//"738D637E98D73D27B9802CA833784D7F";