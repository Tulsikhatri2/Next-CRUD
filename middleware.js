import { NextResponse, NextRequest } from 'next/server';

export function middleware(request) {
    // const {pathname} = request.nextUrl.colne()

    // console.log(pathname,"pathname")
    const response = NextResponse.next();
    response.headers.set('Custom-Header', 'Value');
    console.log(response)
    return response
}