import { NextResponse } from "next/server";

const petsData = [
  {
    name: "Benjamin",
    ownerName: "John Doe",
    imageUrl: "https://bytegrad.com/course-assets/images/rn-image-4.png",
    age: 2,
    notes:
      "Doesn't like to be touched on the belly. Plays well with other dogs.",
  },
  {
    name: "Richard",
    ownerName: "Josephine Dane",
    imageUrl: "https://bytegrad.com/course-assets/images/rn-image-5.png",
    age: 5,
    notes: "Needs medication twice a day.",
  },
  {
    name: "Anna",
    ownerName: "Frank Doe",
    imageUrl: "https://bytegrad.com/course-assets/images/rn-image-6.png",
    age: 4,
    notes: "Allergic to chicken.",
  },
];

export async function GET() {
  return NextResponse.json(petsData);
}
