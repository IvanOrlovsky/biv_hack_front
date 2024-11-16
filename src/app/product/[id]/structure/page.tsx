"use client";

import React, { useEffect, useState } from "react";
import { ReactFlow, Background, Controls, MiniMap, Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import NodeElement, { NodeElementProps } from "@/components/NodeElement";
import axios from "axios";

export type StructurePageProps = {
	params: Promise<{
		id: string;
	}>;
};

type CustomNode = Node<NodeElementProps["data"]>;

const nodeTypes = { nodeElement: NodeElement };
export default function Structure(props: StructurePageProps) {
	const params = React.use(props.params);
	const { id } = params;

	const [nodes, setNodes] = useState<CustomNode[]>([]);
	const [edges, setEdges] = useState([]);

	useEffect(() => {
		async function fetchRoot() {
			const { data } = await axios.get(`/api/products/${id}`);

			console.log(data);

			setNodes((prev) => [
				...prev,
				{
					id: data.id,
					position: { x: 0, y: 0 },
					type: "nodeElement",
					data: {
						entity: "Страховой продукт",
						name: data.name,
						discription: data.discription,
					},
				},
			]);
		}

		fetchRoot();
	}, []);

	return (
		<div style={{ width: "100%", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				fitView
			>
				<Background />
				<Controls />
				<MiniMap />
			</ReactFlow>
		</div>
	);
}
