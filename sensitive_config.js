if(process.env.VERSION === "LOCAL")
{
    exports.database_pw = "the-database-elephant";
}
else if(process.env.VERSION === "DEV")
{
    exports.database_pw = "whoop-whoop-devdb";
}
else    //PRODUCTION
{
    exports.database_pw = "...";
}

