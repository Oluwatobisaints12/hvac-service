import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db/mongodb';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        // Basic validation
        if (!data.customer_name || !data.customer_email || !data.service_type) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await db.collection('bookings').insertOne({
            ...data,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            id: result.insertedId
        });
    } catch (error: any) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { error: 'Failed to create booking' },
            { status: 500 }
        );
    }
}
