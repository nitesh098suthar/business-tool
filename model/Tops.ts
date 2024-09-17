import mongoose from "mongoose";

const topSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  strikePrice: {
    type: Number,
  },
  fabric: {
    cotton: Boolean,
    linen: Boolean,
    polyester: Boolean,
    wool: Boolean,
    silk: Boolean,
    denim: Boolean,
    velvet: Boolean,
    fleece: Boolean,
    nylon: Boolean,
    hemp: Boolean,
  },
  design: {
    solidColor: Boolean,
    striped: Boolean,
    checked: Boolean,
    printed: Boolean,
    graphic: Boolean,
    embroidered: Boolean,
    tieDye: Boolean,
    colorBlocked: Boolean,
    camouflage: Boolean,
    floralPatterned: Boolean,
  },
  style: {
    tShirt: Boolean,
    basicTShirt: Boolean,
    poloTShirt: Boolean,
    henleyTShirt: Boolean,
    vNeckTShirt: Boolean,
    shirt: Boolean,
    casualShirt: Boolean,
    formalShirt: Boolean,
    denimShirt: Boolean,
    linenShirt: Boolean,
    buttonDownShirt: Boolean,
    sweatshirt: Boolean,
    hoodie: Boolean,
    jacket: Boolean,
    denimJacket: Boolean,
    leatherJacket: Boolean,
    windbreaker: Boolean,
    sweater: Boolean,
    tankTop: Boolean,
    longSleeveTop: Boolean,
    cardigan: Boolean,
  },
  occasion: {
    casual: Boolean,
    sportswear: Boolean,
    loungewear: Boolean,
    vacation: Boolean,
  },
  season: {
    summer: Boolean,
    winter: Boolean,
    allSeason: Boolean,
    monsoonFriendly: Boolean,
  },
  fit: {
    regularFit: Boolean,
    slimFit: Boolean,
    relaxedFit: Boolean,
    oversized: Boolean,
  },
  sleeveType: {
    shortSleeve: Boolean,
    longSleeve: Boolean,
    sleeveless: Boolean,
    halfSleeve: Boolean,
    fiveSleeve:Boolean,
  },
  color: String,
  size: {
    s: Boolean,
    m: Boolean,
    l: Boolean,
    xl: Boolean,
    xxl: Boolean,
    xxxl : Boolean,
  },
  quantity: Number,
  description: String,
  mainImage: {
    public_id: String,
    secure_url: String,
  },
  additionalImage: [
    {
      public_id: String,
      secure_url: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Tops = mongoose.model("Tops", topSchema);

export default Tops;
