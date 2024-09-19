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
    cotton: {
      type: Boolean,
      default: false,
    },
    linen: {
      type: Boolean,
      default: false,
    },
    polyester: {
      type: Boolean,
      default: false,
    },
    wool: {
      type: Boolean,
      default: false,
    },
    silk: {
      type: Boolean,
      default: false,
    },
    denim: {
      type: Boolean,
      default: false,
    },
    velvet: {
      type: Boolean,
      default: false,
    },
    fleece: {
      type: Boolean,
      default: false,
    },
    nylon: {
      type: Boolean,
      default: false,
    },
    hemp: {
      type: Boolean,
      default: false,
    },
  },
  design: {
    solidColor: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    printed: {
      type: Boolean,
      default: false,
    },
    graphic: {
      type: Boolean,
      default: false,
    },
    embroidered: {
      type: Boolean,
      default: false,
    },
    floralPatterned: {
      type: Boolean,
      default: false,
    },
  },
  style: {
    tShirt: {
      type: Boolean,
      default: false,
    },
    basicTShirt: {
      type: Boolean,
      default: false,
    },
    poloTShirt: {
      type: Boolean,
      default: false,
    },
    henleyTShirt: {
      type: Boolean,
      default: false,
    },
    vNeckTShirt: {
      type: Boolean,
      default: false,
    },
    shirt: {
      type: Boolean,
      default: false,
    },
    casualShirt: {
      type: Boolean,
      default: false,
    },
    formalShirt: {
      type: Boolean,
      default: false,
    },
    denimShirt: {
      type: Boolean,
      default: false,
    },
    linenShirt: {
      type: Boolean,
      default: false,
    },
    buttonDownShirt: {
      type: Boolean,
      default: false,
    },
    sweatshirt: {
      type: Boolean,
      default: false,
    },
    hoodie: {
      type: Boolean,
      default: false,
    },
    jacket: {
      type: Boolean,
      default: false,
    },
    denimJacket: {
      type: Boolean,
      default: false,
    },
    leatherJacket: {
      type: Boolean,
      default: false,
    },
    sweater: {
      type: Boolean,
      default: false,
    },
    longSleeveTop: {
      type: Boolean,
      default: false,
    },
  },
  occasion: {
    casual: {
      type: Boolean,
      default: false,
    },
    sportswear: {
      type: Boolean,
      default: false,
    },
    loungewear: {
      type: Boolean,
      default: false,
    },
    vacation: {
      type: Boolean,
      default: false,
    },
  },
  season: {
    summer: {
      type: Boolean,
      default: false,
    },
    winter: {
      type: Boolean,
      default: false,
    },
    allSeason: {
      type: Boolean,
      default: false,
    },
    monsoonFriendly: {
      type: Boolean,
      default: false,
    },
  },
  fit: {
    regularFit: {
      type: Boolean,
      default: false,
    },
    slimFit: {
      type: Boolean,
      default: false,
    },
    relaxedFit: {
      type: Boolean,
      default: false,
    },
    oversized: {
      type: Boolean,
      default: false,
    },
  },
  sleeveType: {
    shortSleeve: {
      type: Boolean,
      default: false,
    },
    longSleeve: {
      type: Boolean,
      default: false,
    },
    sleeveless: {
      type: Boolean,
      default: false,
    },
    halfSleeve: {
      type: Boolean,
      default: false,
    },
    fiveSleeve: {
      type: Boolean,
      default: false,
    },
  },
  color: {
    type: String,
    default: '', // Optionally set a default value
  },
  size: {
    s: {
      type: Boolean,
      default: false,
    },
    m: {
      type: Boolean,
      default: false,
    },
    l: {
      type: Boolean,
      default: false,
    },
    xl: {
      type: Boolean,
      default: false,
    },
    xxl: {
      type: Boolean,
      default: false,
    },
    xxxl: {
      type: Boolean,
      default: false,
    },
  },
  quantity: {
    type: Number,
    default: 0, // Optionally set a default value
  },
  description: {
    type: String,
    default: '', // Optionally set a default value
  },
  mainImage: {
    public_id: {
      type: String,
      default: '', // Optionally set a default value
    },
    secure_url: {
      type: String,
      default: '', // Optionally set a default value
    },
  },
  additionalImage: [
    {
      public_id: {
        type: String,
        default: '', // Optionally set a default value
      },
      secure_url: {
        type: String,
        default: '', // Optionally set a default value
      },
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

const Tops = mongoose.models.Tops || mongoose.model('Tops', topSchema);

export default Tops;
