import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request) {
    if (request.nextUrl.pathname.includes("/reservaciones")) {
        try {
            const token = (request.cookies.get("token"))||'';
            console.log(token);
            
            if(token.value==''){
                return NextResponse.redirect(new URL("/login", request.url));
            }
            
        } catch (error) {
            console.log('error');

            return NextResponse.redirect(new URL("/login", request.url));
            
        }
    }

    return NextResponse.next();
}
