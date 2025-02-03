import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

export default function Preview() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log("dataimage", data[1]["imageSource"]);
  return (
    <>
      <p>{data[1]["artist"]}</p>
      <p>{data[1]["name"]}</p>
      <Image src={data[1]["imageSource"]} height={500} width={500} alt="Alt" />
    </>
  );
}
