import { NextRequest, NextResponse } from "next/server";
import Tops from "@/model/Tops";
import connectdb from "@/lib/database";
import cloudinary from "@/lib/cloudinary-Setup";
import { Imageupload } from "@/lib/uploadImageToCloudinary";



export const DELETE =  async(req:NextRequest,res:NextResponse)=>{

}