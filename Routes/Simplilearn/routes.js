const CourseBought = require("../../Models/Simplilearn/course");

module.exports = function (app) {
  app.post("/coursesBought", async function (req, res) {
    try {
      let userDetails = req.body;
      let courses = await CourseBought.find({ user: userDetails.user });
      res
        .status(200)
        .send({ message: "Fetch Successfullys", courses: courses });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Error Getting posts" });
    }
  });

  app.post("/buyCourse", async function (req, res) {
    try {
      let courseDetails = req.body;
      if (courseDetails) {
        let course = new CourseBought(courseDetails);
        await course.save();
        res.status(200).send({ message: "Inserted Successfully" });
      }
    } catch (e) {
      res.status(500).send({ message: e });
    }
  });

  app.post("/verifyLogin", function (req, res) {
    res.status(200);
  });
};
