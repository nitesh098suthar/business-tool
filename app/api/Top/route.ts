import { NextRequest, NextResponse } from "next/server";
import Tops from "@/model/Tops";
import connectdb from "@/lib/database";


export const POST = async(req:NextRequest,res:NextResponse)=>{
    await connectdb();

    try {
    
      const body = await req.json();
  
      
      const top = new Tops(body);
      const savedTop = await top.save();
  
   
      return NextResponse.json({ message: 'Top created successfully', top: savedTop }, { status: 201 });
    } catch (error) {
      console.error('Error creating top:', error);
  

      return NextResponse.json({ error: 'Failed to create top' }, { status: 500 });
    }
}