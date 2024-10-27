import Image from "next/image";

const pics = [
  "/images/activities/IMG-1e0a5b3a66c9bc0baad34fab479bb7f3-V.jpg",
  "/images/activities/IMG-2e6c7bfb771fb00a958a85f18ea8ae25-V.jpg",
  "/images/activities/IMG-2700bf3773c4331ffe971cbbb1bb60bf-V.jpg",
  "/images/activities/IMG-a0e850e7cf7221f6e71db4ec05a6f9c6-V.jpg",
  "/images/activities/IMG-b47c3fbea7b021eb8f7d24187562a422-V.jpg",
  "/images/activities/IMG-a6fbe291253d167d8b3cf440c4990ab2-V.jpg",
  "/images/activities/IMG-8e2eb8647602581c0977675121c6e25d-V.jpg",
  "/images/activities/IMG-7fa04e30f8598cd7f9e6f74f6d33e75f-V.jpg",
  "/images/activities/IMG-9ab32b624e8634bb6168756970c02b68-V.jpg",
  "/images/activities/IMG-d75701a7b55be147c76229a60a9f7015-V.jpg",
  "/images/activities/IMG-6594e5cd566dfc79ec8329caafadca6a-V.jpg",
  "/images/activities/IMG-ac5be12b4db524f68ef249fd97d15eaa-V.jpg",
];

export default function Page() {
  return (
    <div className="container-sm mx-auto px-4">
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pics.map((pic, index) => (
          <Image key={index} src={pic} alt="pic" width={600} height={200} />
        ))}
      </div>
    </div>
  );
}
