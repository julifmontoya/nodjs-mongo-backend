const Hotel = require("../models/hotel");

let controller = {

  create: async (req, res) => {
    try {
      const newHotel = new Hotel({
        name: req.body.name,
        description: req.body.description,
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
    Hotel.findById(req.params.id, function (err, hotel) {
      hotel.name = req.body.name;
      hotel.description = req.body.description;
      hotel.check_in = req.body.check_in;
      hotel.check_out = req.body.check_out;
      hotel.num_rooms = req.body.num_rooms;
      hotel.stars = req.body.stars;
      hotel.address = req.body.address;
      hotel.latitude = req.body.latitude;
      hotel.longitude = req.body.longitude;

      hotel.save(function (err) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(hotel);
      });
    });




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