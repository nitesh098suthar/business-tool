import { NextRequest, NextResponse } from "next/server";
import Tops from "@/model/Tops";
import connectdb from "@/lib/database";



export const POST = async (req: NextRequest, res: NextResponse) => {
    await connectdb();

    try {
        // Parse the form data from the request
        const formData = await req.formData();

        // Extract form fields
        const name = formData.get('name') as string;
        const price = Number(formData.get('price'));
        const strikePrice = formData.get('strikePrice') ? Number(formData.get('strikePrice')) : undefined;
        const fabric = {
            cotton: formData.has('fabric.cotton'),
            linen: formData.has('fabric.linen'),
            polyester: formData.has('fabric.polyester'),
            wool: formData.has('fabric.wool'),
            silk: formData.has('fabric.silk'),
            denim: formData.has('fabric.denim'),
            velvet: formData.has('fabric.velvet'),
            fleece: formData.has('fabric.fleece'),
            nylon: formData.has('fabric.nylon'),
            hemp: formData.has('fabric.hemp'),
        };
        const design = {
            solidColor: formData.has('design.solidColor'),
            striped: formData.has('design.striped'),
            checked: formData.has('design.checked'),
            printed: formData.has('design.printed'),
            graphic: formData.has('design.graphic'),
            embroidered: formData.has('design.embroidered'),
            floralPatterned: formData.has('design.floralPatterned'),
        };
        const style = {
            tShirt: formData.has('style.tShirt'),
            basicTShirt: formData.has('style.basicTShirt'),
            poloTShirt: formData.has('style.poloTShirt'),
            henleyTShirt: formData.has('style.henleyTShirt'),
            vNeckTShirt: formData.has('style.vNeckTShirt'),
            shirt: formData.has('style.shirt'),
            casualShirt: formData.has('style.casualShirt'),
            formalShirt: formData.has('style.formalShirt'),
            denimShirt: formData.has('style.denimShirt'),
            linenShirt: formData.has('style.linenShirt'),
            buttonDownShirt: formData.has('style.buttonDownShirt'),
            sweatshirt: formData.has('style.sweatshirt'),
            hoodie: formData.has('style.hoodie'),
            jacket: formData.has('style.jacket'),
            denimJacket: formData.has('style.denimJacket'),
            leatherJacket: formData.has('style.leatherJacket'),
            sweater: formData.has('style.sweater'),
            longSleeveTop: formData.has('style.longSleeveTop'),
        };
        const occasion = {
            casual: formData.has('occasion.casual'),
            sportswear: formData.has('occasion.sportswear'),
            loungewear: formData.has('occasion.loungewear'),
            vacation: formData.has('occasion.vacation'),
        };
        const season = {
            summer: formData.has('season.summer'),
            winter: formData.has('season.winter'),
            allSeason: formData.has('season.allSeason'),
            monsoonFriendly: formData.has('season.monsoonFriendly'),
        };
        const fit = {
            regularFit: formData.has('fit.regularFit'),
            slimFit: formData.has('fit.slimFit'),
            relaxedFit: formData.has('fit.relaxedFit'),
            oversized: formData.has('fit.oversized'),
        };
        const sleeveType = {
            shortSleeve: formData.has('sleeveType.shortSleeve'),
            longSleeve: formData.has('sleeveType.longSleeve'),
            sleeveless: formData.has('sleeveType.sleeveless'),
            halfSleeve: formData.has('sleeveType.halfSleeve'),
            fiveSleeve: formData.has('sleeveType.fiveSleeve'),
        };
        const color = formData.get('color') as string;
        const size = {
            s: formData.has('size.s'),
            m: formData.has('size.m'),
            l: formData.has('size.l'),
            xl: formData.has('size.xl'),
            xxl: formData.has('size.xxl'),
            xxxl: formData.has('size.xxxl'),
        };
        const quantity = Number(formData.get('quantity')) || 0;
        const description = formData.get('description') as string;

        // Handle mainImage and additionalImage if necessary, assuming they are file uploads
        const mainImage = {
            public_id: formData.get('mainImagePublicId') as string || '',
            secure_url: formData.get('mainImageSecureUrl') as string || '',
        };
        const additionalImage = formData.getAll('additionalImage').map((file: any) => ({
            public_id: file.public_id || '',
            secure_url: file.secure_url || '',
        }));

        // Create a new Tops instance
        const top = new Tops({
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
            mainImage,
            additionalImage,
        });

        // Save the Tops instance to the database
        const savedTop = await top.save();

        // Return a success response
        return NextResponse.json({ message: 'Top created successfully', top: savedTop }, { status: 201 });
    } catch (error) {
        console.error('Error creating top:', error);

        // Return an error response
        return NextResponse.json({ error: 'Failed to create top' }, { status: 500 });
    }
};




export const GET = async (req: NextRequest, res: NextResponse) => {
    await connectdb();

    try {

        const tops = await Tops.find({});

       
        return NextResponse.json({ tops }, { status: 200 });
    } catch (error) {
        console.error('Error fetching tops:', error);

        return NextResponse.json({ error: 'Failed to fetch tops' }, { status: 500 });
    }
};
