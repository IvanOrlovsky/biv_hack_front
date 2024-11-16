import { NextResponse } from "next/server";
import axios from "axios";

// Мок-обработка API-запроса
export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params;

	try {
		// Мок-запрос к несуществующему бекенду
		const response = await axios.get(
			`http://mock-backend.local/api/product/${id}`
		);
		return NextResponse.json(response.data);
	} catch (error) {
		// Возвращаем мок-данные, пока бекенд не готов
		return NextResponse.json({
			root: {
				id,
				name: `Продукт ${id}`,
				description: `Описание продукта ${id}`,
			},
			children: [
				{
					id: `${id}.obj1`,
					name: "Объект страхования 1",
					description: "Описание объекта 1",
					path: `${id}.obj1`,
				},
				{
					id: `${id}.obj2`,
					name: "Объект страхования 2",
					description: "Описание объекта 2",
					path: `${id}.obj2`,
				},
				{
					id: `${id}.obj2.type1`,
					name: "Вид страхования 1",
					description: "Описание вида 1",
					path: `${id}.obj2.type1`,
				},
				{
					id: `${id}.obj2.type1.risk1`,
					name: "Риск 1",
					description: "Описание риска 1",
					path: `${id}.obj2.type1.risk1`,
				},
			],
		});
	}
}
