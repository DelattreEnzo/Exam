const Blague = require("../models/Blague");

const controllerBlague = {
  find: async (req, res) => {
    if (req.query.search) {
      const query = req.query.search;
      const result = data.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase())
      );
      if (result.length === 0) {
        return res.status(404).json({ error: "No matching joke found." });
      }
      res.status(200).json({ result });
      console.log(result);
    } else {
      const data = await Blague.findAll();
      res.status(200).json({ result: data });
    }
  },

  findById: (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({ error: "Don't use text for id" });
    }
    if (id > data.length) {
      return res.status(404).json({ error: "ID not found ..." });
    }

    return res.status(200).json({ result: data[id - 1] });
  },

  random: (req, res) => {},
};

module.exports = controllerBlague;
