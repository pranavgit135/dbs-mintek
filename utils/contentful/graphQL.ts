export default async function fetchGraphQL(query: string): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/3iacs7izb5ma`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer YHoprnmLTn1fYI1cCiwdQDb8QNCwP-pFxG923-a79vc`,
			},
			body: JSON.stringify({ query }),
		}
	).then((response) => response.json());
}
