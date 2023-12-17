type Props = {
  searchParams: SearchParams;
};

type SearchParams = {
  url: URL;
  checkin: string;
  checkout: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
};

import { notFound } from "next/navigation";
import React from "react";

async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div>No results ...</div>;

  return <div>SearchPage</div>;
}
