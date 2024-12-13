const User = require("./../models/user");

exports.getAllUsers = async (req, res) => {
  try {
    // execute query
    const users = await User.find();

    // Send Response
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  const { name, profilePictureURL } = req.body;
  try {
    const user = new User({ name, profilePictureURL });
    await user.save();
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
