export type InfoPageProps = {
	params: {
		id: string;
	};
};

export default function Info({ params: { id } }: InfoPageProps) {
	return <main>{id}</main>;
}
