import { NextResponse } from "next/server";

export async function POST(req, res) {
    let {name, age, email,} = await req.json();
    console.log(name, age, email);

    if(!name || !email || !email) {
        return NextResponse.json(
            {error:"Required field is not found", ok: false },
            {status:400}
        )
    }


    return NextResponse.json(
        {res: "User Successfully Logged in",
            ok: true,
        }, { status:201}

        )
}