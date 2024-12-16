exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJs Notes app.",
  };
  res.render("index", {
    locals,
    layout: '../views/layout/font-page'
  });
};

exports.about = async(req, res) => {
  const locals = {
    title: "About",
    description: "Free NodeJs Notes app.",
  }
  res.render("about", locals);
}