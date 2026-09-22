const router = require("express").Router();
const Entry = require("../models/Entry.js");
const isSignedIn = require("../middleware/is-signed-in.js");

router.get("/", async (req, res) => {
    const publicEntries = await Entry.find({ isPublic: true })
    res.render("all-entries.ejs", { entries: publicEntries })
})
router.get("/new", isSignedIn, (req, res) => {
    res.render('new-entry.ejs')
})
router.post("/", isSignedIn, async (req, res) => {
    try {
        req.body.owner = req.session.user._id;
        req.body.isPublic = req.body.isPublic === "on";
        await Entry.create(req.body);
        res.redirect("/entries");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
})




module.exports = router;