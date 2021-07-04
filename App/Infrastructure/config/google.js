const env = require("common-env")();
module.exports = env.getOrElseAll({
    googleClientId: {
        $default:
            "340756268715-a16qmdnosmchs2vthgjiadqi58v6257r.apps.googleusercontent.com",
        $aliases: ["GOOGLECLIENTID"]
    },

    googleClientSecret: {
        $default: "fEJoznmvUzoamqz8yfnwVqQr",
        $aliases: ["GOOGLECLIENTSECRET"]
    },
    redirect: {
        $default: "http://localhost:5000/api/session/googleAuth",
        $aliases: ["REDIRECT"]
    }
});