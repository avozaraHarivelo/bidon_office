import { NextRequest, NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./utils";
import axios from "@/utils/axios";


export function middleware(request:NextRequest){


const token  =  request.cookies.get("token")?.value;

if( protectedRoutes.includes(request.nextUrl.pathname) &&  !token){
    request.cookies.delete("token");
    const response = NextResponse.redirect(new URL("/sign-in",request.url));
    response.cookies.delete("token");
    return response
}

if(authRoutes.includes(request.nextUrl.pathname) && token){
    return NextResponse.redirect(new URL("/",request.url));
}
}