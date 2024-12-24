import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

interface WebhookBody {
    _type: string;
    slug?: string;
}

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<WebhookBody>(
            req,
            process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
        );

        if (!isValidSignature) {
            return new Response("Invalid Signature", { status: 401 });
        }

        if (!body?._type) {
            return new Response("Bad Request", { status: 400 });
        }

        revalidateTag(body._type);
        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            body,
        });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

