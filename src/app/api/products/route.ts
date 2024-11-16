import { NextResponse } from "next/server";

export async function GET() {
	const products = [
		{ id: "1", name: "Продукт 1", description: "Описание продукта 1" },
		{ id: "2", name: "Продукт 2", description: "Описание продукта 2" },
		{ id: "3", name: "Продукт 3", description: "Описание продукта 3" },
	];
	return NextResponse.json(products);
}
