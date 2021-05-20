if (message.content.startsWith("$kick")) {

    if (!message.member.roles.find("name", "Admin"))
        return;
    // Easy way to get member object though mentions.
    var member = message.mentions.members.first();
    // Kick
    member.kick().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
        // Failmessage
        message.channel.send("Access Denied");
    });
}
});
client.on("message", (message) => {
    if (message.content.startsWith("$ban")) {

        if (!message.member.roles.find("name", "Admin"))
            return;

        // Easy way to get member object though mentions.
        var member = message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
        }).catch(() => {
            // Failmessage
            message.channel.send("Access Denied");
        });
    }
});