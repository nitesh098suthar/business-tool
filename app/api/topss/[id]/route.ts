import { NextRequest, NextResponse } from "next/server";
import Tops from "@/model/Tops";
import { deleteImage, Imageupload } from "@/lib/uploadImageToCloudinary";
import connectdb from "@/lib/database";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectdb();

  try {
    const formData = await req.formData();
    const { id } = params;

    if (!id) {
      throw new Error("Top ID is required");
    }
    const existingTop = await Tops.findById(id);
    if (!existingTop) {
      return NextResponse.json("Top Not Found");
    }
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const strikePrice = formData.has("strikePrice")
      ? Number(formData.get("strikePrice"))
      : undefined;

    const fabric = {
      cotton: formData.has("fabric.cotton"),
      linen: formData.has("fabric.linen"),
      polyester: formData.has("fabric.polyester"),
      wool: formData.has("fabric.wool"),
      silk: formData.has("fabric.silk"),
      denim: formData.has("fabric.denim"),
      velvet: formData.has("fabric.velvet"),
      fleece: formData.has("fabric.fleece"),
      nylon: formData.has("fabric.nylon"),
      hemp: formData.has("fabric.hemp"),
    };

    const design = {
      solidColor: formData.has("design.solidColor"),
      striped: formData.has("design.striped"),
      checked: formData.has("design.checked"),
      printed: formData.has("design.printed"),
      graphic: formData.has("design.graphic"),
      embroidered: formData.has("design.embroidered"),
      floralPatterned: formData.has("design.floralPatterned"),
    };

    const style = {
      tShirt: formData.has("style.tShirt"),
      basicTShirt: formData.has("style.basicTShirt"),
      poloTShirt: formData.has("style.poloTShirt"),
      henleyTShirt: formData.has("style.henleyTShirt"),
      vNeckTShirt: formData.has("style.vNeckTShirt"),
      shirt: formData.has("style.shirt"),
      casualShirt: formData.has("style.casualShirt"),
      formalShirt: formData.has("style.formalShirt"),
      denimShirt: formData.has("style.denimShirt"),
      linenShirt: formData.has("style.linenShirt"),
      buttonDownShirt: formData.has("style.buttonDownShirt"),
      sweatshirt: formData.has("style.sweatshirt"),
      hoodie: formData.has("style.hoodie"),
      jacket: formData.has("style.jacket"),
      denimJacket: formData.has("style.denimJacket"),
      leatherJacket: formData.has("style.leatherJacket"),
      sweater: formData.has("style.sweater"),
      longSleeveTop: formData.has("style.longSleeveTop"),
    };

    const occasion = {
      casual: formData.has("occasion.casual"),
      sportswear: formData.has("occasion.sportswear"),
      loungewear: formData.has("occasion.loungewear"),
      vacation: formData.has("occasion.vacation"),
    };

    const season = {
      summer: formData.has("season.summer"),
      winter: formData.has("season.winter"),
      allSeason: formData.has("season.allSeason"),
      monsoonFriendly: formData.has("season.monsoonFriendly"),
    };

    const fit = {
      regularFit: formData.has("fit.regularFit"),
      slimFit: formData.has("fit.slimFit"),
      relaxedFit: formData.has("fit.relaxedFit"),
      oversized: formData.has("fit.oversized"),
    };

    const sleeveType = {
      shortSleeve: formData.has("sleeveType.shortSleeve"),
      longSleeve: formData.has("sleeveType.longSleeve"),
      sleeveless: formData.has("sleeveType.sleeveless"),
      halfSleeve: formData.has("sleeveType.halfSleeve"),
      fiveSleeve: formData.has("sleeveType.fiveSleeve"),
    };

    const color = formData.get("color") as string;
    const size = {
      s: formData.has("size.s"),
      m: formData.has("size.m"),
      l: formData.has("size.l"),
      xl: formData.has("size.xl"),
      xxl: formData.has("size.xxl"),
      xxxl: formData.has("size.xxxl"),
    };

    const quantity = Number(formData.get("quantity")) || 0;
    const description = formData.get("description") as string;

    const mainImageFile = formData.get("mainImage") as File;
    let mainImage = null;
    if (mainImageFile) {
      if (existingTop.mainImage) {
        // Delete existing main image from Cloudinary
        await deleteImage(existingTop.mainImage.public_id);
      }
      const mainImageResult = await Imageupload(mainImageFile, "tops");
      mainImage = {
        public_id: mainImageResult.public_id,
        secure_url: mainImageResult.secure_url,
      };
    }

    const additionalImageFiles = formData.getAll("additionalImage") as File[];
    let additionalImages: string | any[] = [];
    if (additionalImageFiles.length > 0) {
      if (
        existingTop.additionalImage &&
        existingTop.additionalImage.length > 0
      ) {
        // Delete existing additional images from Cloudinary
        await Promise.all(
          existingTop.additionalImage.map(async (img: any) => {
            await deleteImage(img.public_id);
          })
        );
      }
      additionalImages = await Promise.all(
        additionalImageFiles.map(async (file) => {
          const result = await Imageupload(file, "tops");
          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        })
      );
    }

    const updatedTop = await Tops.findByIdAndUpdate(
      id,
      {
        name,
        price,
        strikePrice,
        fabric,
        design,
        style,
        occasion,
        season,
        fit,
        sleeveType,
        color,
        size,
        quantity,
        description,
        ...(mainImage && { mainImage }),
        ...(additionalImages.length > 0 && {
          additionalImage: additionalImages,
        }),
      },
      { new: true }
    );

    if (!updatedTop) {
      throw new Error("Top not found");
    }

    return NextResponse.json(
      { message: "Top updated successfully", top: updatedTop },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating top:", error);
    return NextResponse.json(
      { error: "Failed to update top" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectdb();

  try {
    const { id } = params;

    if (!id) {
      throw new Error("Top ID is required");
    }

    // Find the top by ID
    const existingTop = await Tops.findById(id);

    if (!existingTop) {
      return NextResponse.json({ message: "Top not found" }, { status: 404 });
    }

    // Delete the main image from Cloudinary if it exists
    if (existingTop.mainImage) {
      await deleteImage(existingTop.mainImage.public_id);
    }

    // Delete all additional images from Cloudinary if they exist
    if (existingTop.additionalImage && existingTop.additionalImage.length > 0) {
      await Promise.all(
        existingTop.additionalImage.map(async (img: any) => {
          await deleteImage(img.public_id);
        })
      );
    }

    // Delete the top from the database
    await Tops.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Top deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting top:", error);
    return NextResponse.json(
      { error: "Failed to delete top" },
      { status: 500 }
    );
  }
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectdb();

  try {
    const { id } = params;

    if (!id) {
      throw new Error("Top ID is required");
    }

    const existingTop = await Tops.findById(id);

    if (!existingTop) {
      return NextResponse.json({ message: "Top not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Top fetch successfully", existingTop },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching top:", error);
    return NextResponse.json(
      { error: "Failed to delete top" },
      { status: 500 }
    );
  }
};
