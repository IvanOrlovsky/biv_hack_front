import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params;

	// Мокированные дочерние узлы
	return NextResponse.json([
		{
			id: "obj1",
			name: "Объект страхования 1",
			description: "Описание объекта 1",
			path: `${id}.obj1`,
		},
		{
			id: "obj2",
			name: "Объект страхования 2",
			description: "Описание объекта 2",
			path: `${id}.obj2`,
		},
		{
			id: "type1",
			name: "Вид страхования 1",
			description: "Описание вида 1",
			path: `${id}.obj2.type1`,
		},
		{
			id: "risk1",
			name: "Риск страхования 1",
			description: "Описание риска 1",
			path: `${id}.obj2.type1.risk1`,
		},
	]);
}
