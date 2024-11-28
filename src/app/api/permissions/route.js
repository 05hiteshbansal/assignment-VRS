import connection from "@/dbconfig/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";

connection();

export async function POST(req) {
    const { permission,user } = await req.json();
  try {
    const updatedPermission= await Permission.update({ title: user }, { permissions: permission });
    return NextResponse.json({ permission:updatedPermission, success:true , message:"Permissions updated Successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 , success:false , });
  }
}
