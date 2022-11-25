const Hotel = require("../models/hotel");

let controller = {

  create: async (req, res) => {
    try {
      const newHotel = new Hotel({
        name: req.body.name,
        description:req.body.description,
        check_in: req.body.check_in,
        check_out: req.body.check_out,
        num_rooms: req.body.num_rooms,
        stars: req.body.stars,
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      })
      const hotelSaved = await newHotel.save()
      res.json(hotelSaved)
    }
    catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong"
      })
    }
  },

  findAll: async (req, res) => {
    try {
      const hotels = await Hotel.find()
      res.json(hotels);
    }
    catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong"
      })
    }
  },

  findOne: async (req, res) => {
    const { id } = req.params
    try {
      const hotel = await Hotel.findById(id)
      if (!hotel) return res
        .status(404)
        .json({ message: `id does not exist` })

      res.json(hotel);
    }
    catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong"
      })
    }
  },

  findOneUpate: async (req, res) => {
    try {
      Hotel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          description:req.body.description,
          check_in: req.body.check_in,
          check_out: req.body.check_out,
          num_rooms: req.body.num_rooms,
          stars: req.body.stars,
          address: req.body.address,
          latitude: req.body.latitude,
          longitude: req.body.longitude
        })
      res.json({
        name: req.body.name,
        description:req.body.description,
        check_in: req.body.check_in,
        check_out: req.body.check_out,
        num_rooms: req.body.num_rooms,
        stars: req.body.stars,
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      })
    }
    catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong"
      })
    }
  },

  delete: async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id)
      res.json({ message: "Deleted successfully" });
    }
    catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong"
      })
    }
  }
};

module.exports = controller 